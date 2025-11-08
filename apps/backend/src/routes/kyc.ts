import express, { Router, Request, Response } from 'express';
import { prisma } from 'db/client';
import { verifyAuth } from '../middlewares/auth.js';
import {
  generatePKCE,
  generateState,
  buildAuthUrl,
  exchangeCodeForToken,
  getAadhaarDetails,
  getUserDetails,
  checkPanInDigiLocker,
  revokeToken,
  encrypt,
  decrypt,
  convertDigilockerDateToDate,
} from '../services/digilockerService.js';
import {
  checkPanStatus,
  registerKra,
  formatDateForDigio,
} from '../services/digioKraService.js';

//Request extend kri and type bhi add for req.user from verify auth middleware
interface AuthRequest extends Request {
  user?: {
    userId: string;
    email: string;
  };
}

const router: Router = express.Router();

router.post('/redirect', verifyAuth, async (req: AuthRequest, res: Response) => {
  try 
  {
    const userId = req.user!.userId;
    const { pan } = req.body;

    if (!pan || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
      return res.status(400).json({ error: 'Valid PAN is required' });
    }

    await prisma.user.update({
      where: { id: userId },
      data: { encryptedPan: encrypt(pan) },
    });

    const { codeVerifier, codeChallenge } = generatePKCE();
    const state = generateState();

    // KYC session which expires in 10 mins
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); 
    await prisma.kycSession.create({
      data: {
        userId,
        state,
        codeVerifier,
        status: 'INITIATED',
        expiresAt,
      },
    });

    const authUrl = buildAuthUrl(state, codeChallenge);

    res.json({ authUrl });
  } 
  catch (error: any) 
  {
    console.error('DigiLocker redirect error:', error);
    res.status(500).json({ error: 'Failed to initiate KYC' });
  }
});

router.get('/callback', async (req: Request, res: Response) => {
  try 
  {
    const { code, state, error: oauthError } = req.query;
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3001';

    if (oauthError) {
      return res.redirect(`${frontendUrl}/kyc?error=${oauthError}`);
    }

    if (!code || !state) {
      return res.redirect(`${frontendUrl}/kyc?error=missing_params`);
    }

    const session = await prisma.kycSession.findUnique({
      where: { state: state as string },
      include: { user: true },
    });

    if (!session) 
    {
      return res.redirect(`${frontendUrl}/kyc?error=invalid_session`);
    }

    if (session.status !== 'INITIATED') 
    {
      return res.redirect(`${frontendUrl}/kyc?error=session_already_used`);
    }

    if (new Date() > session.expiresAt) 
    {
      await prisma.kycSession.update({
        where: { id: session.id },
        data: { status: 'EXPIRED' },
      });
      return res.redirect(`${frontendUrl}/kyc?error=session_expired`);
    }

    await prisma.kycSession.update({
      where: { id: session.id },
      data: { status: 'REDIRECTED' },
    });

    console.log('Exchanging code for token...');

    const tokenData = await exchangeCodeForToken(
      code as string,
      session.codeVerifier
    );

    console.log('Token received, fetching user details...');

    // Fetch user details to get digilockerid
    const userDetails = await getUserDetails(tokenData.accessToken);

    console.log('DigiLocker ID:', userDetails.digilockerid);

    await prisma.kycSession.update({
      where: { id: session.id },
      data: { status: 'AUTHENTICATED' },
    });

    console.log('Fetching Aadhaar details...');

    const aadhaarData = await getAadhaarDetails(tokenData.accessToken);

    console.log('Aadhaar data received for:', aadhaarData.name);

    // Check PAN-Aadhaar linkage
    const user = session.user;
    const encryptedPan = user.encryptedPan;
    
    if (!encryptedPan) 
    {
      throw new Error('PAN not found');
    }
    
    const pan = decrypt(encryptedPan);
    
    console.log('Checking PAN in DigiLocker...');
    
    const linkageStatus = await checkPanInDigiLocker(
      tokenData.accessToken,
      pan
    );

    console.log('Linkage status:', linkageStatus.message);

    if (!linkageStatus.linked)
    {
      console.error('PAN-Aadhaar NOT linked');
      
      await prisma.kycSession.update({
        where: { id: session.id },
        data: {
          status: 'FAILED',
          errorCode: 'PAN_AADHAAR_NOT_LINKED',
          errorMessage: linkageStatus.message,
        },
      });

      await prisma.user.update({
        where: { id: user.id },
        data: { kycStatus: 'REJECTED' },
      });

      return res.redirect(`${frontendUrl}/kyc?error=pan_aadhaar_not_linked`);
    }

    if (linkageStatus.linked && linkageStatus.panNumber !== pan.toUpperCase())
    {
      // Different PAN linked to Aadhaar
      console.error('PAN mismatch - Expected:', pan, 'Got:', linkageStatus.panNumber);
      
      await prisma.kycSession.update({
        where: { id: session.id },
        data: {
          status: 'FAILED',
          errorCode: 'PAN_MISMATCH',
          errorMessage: `Your Aadhaar is linked to ${linkageStatus.panNumber}, but you entered ${pan.toUpperCase()}`,
        },
      });

      return res.redirect(`${frontendUrl}/kyc?error=pan_mismatch&expected=${linkageStatus.panNumber}`);
    }

    console.log('PAN-Aadhaar linkage confirmed!');

    let kraValidated = false;
    let kraRefId = null;
    let kraStatusCode = null;
    let kraStatusDate = null;

    try 
    {
      console.log('Starting KRA validation for PAN:', pan);
      
      const dobFormatted = formatDateForDigio(new Date(user.dob!));
      const kraStatus = await checkPanStatus(pan, dobFormatted, user.phone!);

      kraValidated = kraStatus.validated;
      kraRefId = kraStatus.refId;
      kraStatusCode = kraStatus.statusCode;
      kraStatusDate = kraStatus.statusDate ? new Date(kraStatus.statusDate) : new Date();

      console.log('KRA Status:', kraStatus.statusCode, '-', kraStatus.status);

      // If not validated, attempt registration
      if (!kraValidated) {
        console.log('PAN not KRA validated. Attempting registration...');
        
        const regResult = await registerKra({
          panNo: pan,
          dob: dobFormatted,
          gender: aadhaarData.gender === 'M' ? 'M' : aadhaarData.gender === 'F' ? 'F' : 'O',
          mobile: user.phone!,
          email: user.email!,
          applicantName: aadhaarData.name,
          aadhaarLastFour: aadhaarData.aadhaarLastFour,
          permanentAddress: {
            line1: aadhaarData.address.house || aadhaarData.address.care_of || 'Address Line 1',
            line2: aadhaarData.address.landmark || aadhaarData.address.locality,
            city: aadhaarData.address.village_town_city || aadhaarData.address.district || 'City',
            state: aadhaarData.address.state || 'State',
            pincode: aadhaarData.address.pincode || '000000',
            country: '101', // India
          },
          correspondenceAddress: {
            line1: aadhaarData.address.house || aadhaarData.address.care_of || 'Address Line 1',
            line2: aadhaarData.address.landmark || aadhaarData.address.locality,
            city: aadhaarData.address.village_town_city || aadhaarData.address.district || 'City',
            state: aadhaarData.address.state || 'State',
            pincode: aadhaarData.address.pincode || '000000',
            country: '101',
          },
          kycDate: new Date().toLocaleDateString('en-GB').replace(/\//g, '/'),
        });

        if (regResult.success) {
          kraValidated = true;
          kraRefId = regResult.refId;
          kraStatusCode = regResult.kraStatusCode;
          kraStatusDate = new Date();
          console.log('KRA registration successful:', regResult.refId);
        } else {
          console.warn('KRA registration failed:', regResult.errorMessage);
          // Continue anyway - user can trade with pending KRA (or block if needed)
        }
      }
    } catch (kraError: any) {
      console.error('KRA validation error:', kraError.message);
      // Non-blocking: continue with KYC even if KRA fails
      // User can be prompted to complete KRA later
    }

    const tokenExpiresAt = new Date(Date.now() + tokenData.expiresIn * 1000);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        digilockerKycId: session.id,
        digilockerid: userDetails.digilockerid,
        aadhaarLinked: true,
        aadhaarLastFour: aadhaarData.aadhaarLastFour,
        kycVerifiedAt: new Date(),
        kycStatus: 'VERIFIED',
        kycType: 'VALIDATED', // Aadhaar-based KYC

        addressLine1: aadhaarData.address.house || aadhaarData.address.care_of,
        addressLine2: [
          aadhaarData.address.street,
          aadhaarData.address.landmark,
          aadhaarData.address.locality,
        ]
          .filter(Boolean)
          .join(', '),
        city: aadhaarData.address.village_town_city,
        state: aadhaarData.address.state,
        pincode: aadhaarData.address.pincode,
        country: aadhaarData.address.country,

        fullName: aadhaarData.name,
        dob: convertDigilockerDateToDate(aadhaarData.dob), // Convert DD-MM-YYYY to Date
        gender: aadhaarData.gender === 'M' ? 'MALE' : aadhaarData.gender === 'F' ? 'FEMALE' : 'OTHER',
        phone: aadhaarData.phone || user.phone,

        dlAccessToken: encrypt(tokenData.accessToken),
        dlRefreshToken: encrypt(tokenData.refreshToken),
        dlTokenExpiresAt: tokenExpiresAt,

        // KRA Validation fields
        kraVerified: kraValidated,
        kraRefId: kraRefId,
        kraStatusCode: kraStatusCode,
        kraStatusDate: kraStatusDate,

        currentStep: Math.max(user.currentStep, 3),
      },
    });

    await prisma.kycSession.update({
      where: { id: session.id },
      data: { status: 'COMPLETED' },
    });

    console.log('KYC verification completed for user:', user.id);

    res.redirect(`${frontendUrl}/kyc?success=true`);
  } 
  catch (error: any) {
    console.error('Error:', error);
    
    // Redirect to frontend error page
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3001';
    res.redirect(`${frontendUrl}/kyc?error=verification_failed&message=${encodeURIComponent(error.message)}`);
  }
});

router.get('/status', verifyAuth, async (req: AuthRequest, res: Response) => {
  try 
  {
    const userId = req.user!.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        kycStatus: true,
        kycType: true,
        aadhaarLinked: true,
        kycVerifiedAt: true,
        currentStep: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error: any) {
    console.error('KYC status error:', error);
    res.status(500).json({ error: 'Failed to fetch KYC status' });
  }
});

router.post('/revoke', verifyAuth, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { dlAccessToken: true, dlRefreshToken: true },
    });

    if (!user || !user.dlAccessToken) {
      return res.status(400).json({ error: 'No active DigiLocker connection' });
    }

    // Decrypt and revoke access token
    const accessToken = decrypt(user.dlAccessToken);
    await revokeToken(accessToken, 'access_token');
    
    // Also revoke refresh token if available
    if (user.dlRefreshToken) {
      const refreshToken = decrypt(user.dlRefreshToken);
      await revokeToken(refreshToken, 'refresh_token');
    }

    // Clear DigiLocker data (keep KYC status)
    await prisma.user.update({
      where: { id: userId },
      data: {
        dlAccessToken: null,
        dlRefreshToken: null,
        dlTokenExpiresAt: null,
      },
    });

    res.json({ success: true, message: 'DigiLocker access revoked' });
  } catch (error: any) {
    console.error('Token revoke error:', error);
    res.status(500).json({ error: 'Failed to revoke access' });
  }
});

export { router as kycRouter };
