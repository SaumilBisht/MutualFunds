import express, { Router, Request, Response } from 'express';
import { prisma } from 'db/client';
import { verifyAuth } from '../middlewares/auth.js';
import axios from 'axios';
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

async function imageUrlToBase64(imageUrl: string): Promise<string> {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');
    return buffer.toString('base64');
  } catch (error: any) {
    console.error('Failed to fetch and convert image:', error.message);
    throw new Error('Failed to convert image to base64');
  }
}

//Request extend kri and type bhi add for req.user from verify auth middleware
interface AuthRequest extends Request {
  user?: {
    userId: string;
    email: string;
  };
}

const router: Router = express.Router();

/**
 * POST /kyc/redirect
 * 
 * Initiates DigiLocker-based KYC verification flow using OAuth 2.0 with PKCE.
 * 
 * WORKFLOW:
 * 1. Validates and encrypts user's PAN number
 * 2. Generates PKCE challenge (Code Verifier + Code Challenge) for secure OAuth
 * 3. Creates a time-limited KYC session (10 min expiry) with unique state
 * 4. Returns DigiLocker authorization URL for user to authenticate with Aadhaar
 * 
 * SECURITY:
 * - Uses PKCE (Proof Key for Code Exchange) to prevent authorization code interception
 * - State parameter prevents CSRF attacks
 * - PAN stored encrypted in database
 * - Session expires in 10 minutes
 * 
 * @param {string} req.body.pan - 10-character PAN (format: AAAAA9999A)
 * @returns {Object} { authUrl: string } - DigiLocker OAuth URL to redirect user
 * 
 * @example
 * Request:  { "pan": "ABCDE1234F" }
 * Response: { "authUrl": "https://digilocker.gov.in/oauth2/authorize?..." }
 */
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

/**
 * GET /kyc/callback
 * 
 * DigiLocker OAuth callback endpoint - completes KYC verification after user authenticates.
 * 
 * FULL WORKFLOW (executed in sequence):
 * 1. **Session Validation**: Verify state parameter matches active KYC session
 * 2. **Token Exchange**: Exchange OAuth code for access + refresh tokens using PKCE verifier
 * 3. **Aadhaar Fetch**: Retrieve user's Aadhaar details (name, DOB, address, photo) from DigiLocker
 * 4. **PAN-Aadhaar Linkage**: Verify user's PAN is linked to their Aadhaar (govt requirement)
 * 5. **KRA Validation**: Check if user is registered in KRA/CKYC database
 * 6. **Auto KRA Registration**: If not in KRA, attempt registration with Aadhaar XML + photo + signature
 * 7. **Database Update**: Save all KYC data (encrypted tokens, Aadhaar info, KRA status)
 * 
 * ERROR HANDLING:
 * - Invalid/expired session → redirect to frontend with error
 * - PAN-Aadhaar not linked → reject KYC (regulatory requirement)
 * - PAN mismatch → reject and show correct PAN linked to Aadhaar
 * - KRA registration failure → non-blocking (user can trade with pending status)
 * 
 * SECURITY:
 * - Tokens encrypted before storage (AES-256)
 * - Raw Aadhaar XML sent to KRA for validation
 * - Session marked as COMPLETED/FAILED to prevent replay
 * 
 * @param {string} req.query.code - OAuth authorization code from DigiLocker
 * @param {string} req.query.state - CSRF protection token (matches session state)
 * @redirects Frontend with success=true or error parameter
 */
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
        
        // Extract photo from DigiLocker data (remove data:image/jpeg;base64, prefix)
        const photoBase64 = aadhaarData.photoBase64?.replace(/^data:image\/\w+;base64,/, '') || '';
        
        // Encode raw Aadhaar XML to base64
        const aadhaarXmlBase64 = aadhaarData.rawXml 
          ? Buffer.from(aadhaarData.rawXml).toString('base64') 
          : '';
        
        // Fetch signature from S3 if available
        let signatureBase64 = '';
        if (user.signatureUrl) {
          try {
            signatureBase64 = await imageUrlToBase64(user.signatureUrl);
            console.log('Signature fetched and converted to base64');
          } catch (signError) {
            console.warn('Failed to fetch signature from S3:', signError);
            // Continue without signature - Digio may accept registration without it
          }
        } else {
          console.warn('No signature URL found for user - KRA registration may fail');
        }
        
        const regResult = await registerKra({
          panNo: pan,
          dob: dobFormatted,
          gender: aadhaarData.gender === 'M' ? 'M' : aadhaarData.gender === 'F' ? 'F' : 'O',
          mobile: user.phone!,
          email: user.email!,
          applicantName: aadhaarData.name,
          aadhaarLastFour: aadhaarData.aadhaarLastFour,
          aadhaarXmlBase64: aadhaarXmlBase64, // Base64-encoded Aadhaar XML
          photoBase64: photoBase64, // Base64-encoded photo from DigiLocker
          signatureBase64: signatureBase64, // Base64-encoded signature from S3
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
