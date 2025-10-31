import axios from 'axios';
import crypto from 'crypto';
import { parseString } from 'xml2js';
import { promisify } from 'util';
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const parseXml = promisify(parseString);

const DIGILOCKER_BASE_URL = process.env.DIGILOCKER_BASE_URL || 'https://dev-meripehchaan.dl6.in/public';
const CLIENT_ID = process.env.DIGILOCKER_CLIENT_ID || '';
const CLIENT_SECRET = process.env.DIGILOCKER_CLIENT_SECRET || '';
const REDIRECT_URI = process.env.DIGILOCKER_REDIRECT_URI || 'http://localhost:3000/kyc/callback';
// Generate PKCE code verifier and challenge
export function generatePKCE() {
  const codeVerifier = crypto.randomBytes(32).toString('base64url');
  const codeChallenge = crypto
    .createHash('sha256')
    .update(codeVerifier)
    .digest('base64url');
  
  return { codeVerifier, codeChallenge };
}

// Generate state for CSRF protection
export function generateState() {
  return crypto.randomBytes(32).toString('hex');
}

// Build DigiLocker authorization URL
export function buildAuthUrl(state: string, codeChallenge: string) {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    state: state,
    Code_challenge: codeChallenge,
    Code_challenge_method: 'S256',
  });
  
  const authUrl = `${DIGILOCKER_BASE_URL}/oauth2/1/authorize?${params.toString()}`;
  
  // 🔍 Debug logging
  console.log('📍 [DigiLocker] Generated Auth URL:');
  console.log('   Full URL:', authUrl);
  console.log('   Client ID:', CLIENT_ID);
  console.log('   Redirect URI:', REDIRECT_URI);
  console.log('   State:', state);
  console.log('   Code Challenge:', codeChallenge);
  
  return authUrl;
}

// Exchange authorization code for access token
export async function exchangeCodeForToken(code: string, codeVerifier: string) {
  try {
    const response = await axios.post(
      `${DIGILOCKER_BASE_URL}/oauth2/1/token`,
      new URLSearchParams({
        code: code,
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code_verifier: codeVerifier,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      expiresIn: response.data.expires_in,
    };
  } catch (error: any) {
    console.error('Token exchange error:', error.response?.data || error.message);
    throw new Error('Failed to exchange code for token');
  }
}

// Refresh access token
export async function refreshAccessToken(refreshToken: string) {
  try {
    const response = await axios.post(
      `${DIGILOCKER_BASE_URL}/oauth2/1/token`,
      new URLSearchParams({
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      expiresIn: response.data.expires_in,
    };
  } catch (error: any) {
    console.error('Token refresh error:', error.response?.data || error.message);
    throw new Error('Failed to refresh token');
  }
}

// Fetch Aadhaar details from DigiLocker (Correct endpoint)
export async function getAadhaarDetails(accessToken: string) {
  try {
    const response = await axios.get(
      `${DIGILOCKER_BASE_URL}/oauth2/3/xml/eaadhaar`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Parse XML response
    const xmlData = response.data;
    const parsedData = await parseXml(xmlData);
    const aadhaarData = extractAadhaarData(parsedData);

    return aadhaarData;
  } catch (error: any) {
    console.error('[DigiLocker] Error fetching Aadhaar details:', error.message);
    throw new Error('Failed to fetch Aadhaar details from DigiLocker');
  }
}

// Extract Aadhaar data from parsed XML (Correct structure: OfflinePaperlessKyc)
function extractAadhaarData(parsedXml: any) {
  try {
    const kyc = parsedXml.OfflinePaperlessKyc;
    
    if (!kyc) {
      throw new Error('Invalid Aadhaar XML structure - OfflinePaperlessKyc not found');
    }

    const uidData = kyc.UidData?.[0];
    
    if (!uidData) {
      throw new Error('Invalid Aadhaar XML structure - UidData not found');
    }

    const poi = uidData.Poi?.[0]?.$; // Proof of Identity
    const poa = uidData.Poa?.[0]?.$; // Proof of Address
    const photo = uidData.Pht?.[0]; // Photo

    // Get Aadhaar last 4 from root attributes
    const aadhaarLastFour = kyc.$?.uid?.slice(-4) || '';

    return {
      name: poi?.name || '',
      dob: poi?.dob || '', // Format: DD-MM-YYYY
      gender: poi?.gender || '', // M/F/T
      phone: poi?.phone || '',
      email: poi?.email || '',
      address: {
        care_of: poa?.co || '', // S/O, D/O, W/O
        house: poa?.house || '',
        street: poa?.street || '',
        landmark: poa?.lm || '',
        locality: poa?.loc || '',
        village_town_city: poa?.vtc || '',
        sub_district: poa?.subdist || '',
        district: poa?.dist || '',
        state: poa?.state || '',
        pincode: poa?.pc || '',
        country: poa?.country || 'India',
      },
      aadhaarLastFour: aadhaarLastFour,
      photoBase64: photo ? `data:image/jpeg;base64,${photo}` : '',
      referenceId: kyc.$?.referenceId || '',
      timestamp: kyc.$?.ts || '',
    };
  } catch (error: any) {
    console.error('[DigiLocker] Error extracting Aadhaar data:', error);
    throw new Error('Failed to parse Aadhaar XML: ' + error.message);
  }
}

// Get issued documents (PAN, Aadhaar, etc.) - Correct endpoint
export async function getIssuedDocuments(accessToken: string) {
  try {
    const response = await axios.get(
      `${DIGILOCKER_BASE_URL}/oauth2/2/files/issued`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.items || [];
  } catch (error: any) {
    console.error('[DigiLocker] Get issued docs error:', error.response?.data || error.message);
    throw new Error('Failed to fetch issued documents');
  }
}

// Get DigiLocker user details (for digilockerid)
export async function getUserDetails(accessToken: string) {
  try {
    const response = await axios.get(
      `${DIGILOCKER_BASE_URL}/oauth2/1/user`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
 // These are optional and may be empty in sandbox/test environments
    return {
      digilockerid: response.data.digilockerid || '',
      name: response.data.name || '', // May be empty
      dob: response.data.dob || '', // May be empty, format: DD-MM-YYYY
      gender: response.data.gender || '', // May be empty
      eaadhaar: response.data.eaadhaar || 'N', // Y/N
    };
  } catch (error: any) {
    console.error('[DigiLocker] Get user details error:', error.response?.data || error.message);
    throw new Error('Failed to fetch user details');
  }
}

// Get specific document from issued documents (e.g., PAN card already in DigiLocker)
export async function getIssuedDocument(accessToken: string, uri: string) {
  try {
    const response = await axios.post(
      `${DIGILOCKER_BASE_URL}/oauth2/2/files/pull`,
      { uri },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('[DigiLocker] Get issued document error:', error.response?.data || error.message);
    throw new Error('Failed to fetch issued document');
  }
}

// Search and pull document from issuer repository (adds to user's DigiLocker if found)
export async function pullDocumentFromIssuer(
  accessToken: string,
  orgId: string,
  docType: string,
  consent: 'Y' | 'N' = 'Y'
) {
  try {
    const response = await axios.post(
      `${DIGILOCKER_BASE_URL}/oauth2/1/pull/pulldocument`,
      {
        orgid: orgId,
        doctype: docType,
        consent: consent,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Response contains document details if found
    return response.data;
  } catch (error: any) {
    console.error('[DigiLocker] Pull from issuer error:', error.response?.data || error.message);
    throw new Error('Failed to pull document from issuer');
  }
}

// Legacy function name for backward compatibility
export async function getDocument(accessToken: string, uri: string) {
  return getIssuedDocument(accessToken, uri);
}

// Check if PAN exists in DigiLocker (Correct logic: implicit linkage check)
export async function checkPanInDigiLocker(accessToken: string, userEnteredPan: string) {
  try {
    console.log('[DigiLocker] Checking if PAN exists in issued documents...');
    
    // Step 1: Get all issued documents
    const documents = await getIssuedDocuments(accessToken);
    
    console.log(`[DigiLocker] Found ${documents.length} issued documents`);
    
    // Step 2: Find PAN document
    const panDoc = documents.find((doc: any) => 
      doc.doctype === 'PANCARD' || 
      doc.type === 'PANCARD' ||
      doc.name?.toLowerCase().includes('pan')
    );

    if (!panDoc) {
      console.log('[DigiLocker] No PAN found in issued documents - PAN-Aadhaar NOT linked');
      return { 
        linked: false, 
        hasPan: false,
        panNumber: null,
        message: 'No PAN card found in DigiLocker. Please link your PAN with Aadhaar.' 
      };
    }

    console.log('[DigiLocker] PAN document found:', panDoc.name || panDoc.doctype);

    // Step 3: Fetch PAN document to get PAN number
    try {
      const panDetails = await getDocument(accessToken, panDoc.uri);
      const panFromDoc = extractPanFromDocument(panDetails);
      
      console.log(`[DigiLocker] PAN from document: ${panFromDoc}`);
      console.log(`[DigiLocker] User entered PAN: ${userEnteredPan.toUpperCase()}`);

      // Step 4: Compare PAN numbers
      if (panFromDoc !== userEnteredPan.toUpperCase()) {
        console.log('[DigiLocker] PAN mismatch!');
        return {
          linked: true, // Different PAN IS linked, just not the one user entered
          hasPan: true,
          panNumber: panFromDoc,
          message: `PAN mismatch. Your Aadhaar is linked to ${panFromDoc}, but you entered ${userEnteredPan.toUpperCase()}`
        };
      }

      // Step 5: PAN matches!
      console.log('[DigiLocker] ✅ PAN matches! PAN-Aadhaar linkage confirmed');
      return {
        linked: true,
        hasPan: true,
        panNumber: panFromDoc,
        message: 'PAN-Aadhaar linked successfully'
      };
    } catch (docError: any) {
      // If we can't fetch document but it exists, assume linked
      console.warn('[DigiLocker] Could not fetch PAN document, but it exists in list');
      return {
        linked: true,
        hasPan: true,
        panNumber: null,
        message: 'PAN found in DigiLocker (document fetch failed)'
      };
    }
  } catch (error: any) {
    console.error('[DigiLocker] PAN check error:', error.message);
    throw new Error('Failed to check PAN in DigiLocker: ' + error.message);
  }
}

// Alternative: Check PAN by pulling directly from Income Tax issuer
// This method searches issuer's repository and pulls PAN to DigiLocker if found
export async function checkPanByPullingFromIssuer(accessToken: string, userEnteredPan: string) {
  try {
    console.log('[DigiLocker] Attempting to pull PAN from Income Tax issuer...');
    
    // Income Tax Department organization ID and PAN Card document type
    const INCOME_TAX_ORG_ID = '001891'; // Official Income Tax Dept org ID
    const PAN_DOCTYPE = 'PANCR'; // PAN Card document type code
    
    try {
      // Try to pull PAN document from issuer's repository
      const pulledDoc = await pullDocumentFromIssuer(
        accessToken,
        INCOME_TAX_ORG_ID,
        PAN_DOCTYPE,
        'Y'
      );
      
      console.log('[DigiLocker] PAN document pulled successfully:', pulledDoc);
      
      // If successful, PAN exists and is linked to Aadhaar
      // Extract PAN number from pulled document
      const panFromDoc = extractPanFromDocument(pulledDoc);
      
      if (panFromDoc && panFromDoc !== userEnteredPan.toUpperCase()) {
        return {
          linked: true,
          hasPan: true,
          panNumber: panFromDoc,
          message: `PAN mismatch. Your Aadhaar is linked to ${panFromDoc}, but you entered ${userEnteredPan.toUpperCase()}`
        };
      }
      
      return {
        linked: true,
        hasPan: true,
        panNumber: panFromDoc || userEnteredPan.toUpperCase(),
        message: 'PAN-Aadhaar linked successfully'
      };
      
    } catch (pullError: any) {
      // If pull fails, PAN is not linked or not found
      console.error('[DigiLocker] Could not pull PAN from issuer:', pullError.message);
      return {
        linked: false,
        hasPan: false,
        panNumber: null,
        message: 'No PAN card found in Income Tax repository. Please ensure your PAN is linked with Aadhaar.'
      };
    }
  } catch (error: any) {
    console.error('[DigiLocker] PAN issuer check error:', error.message);
    throw new Error('Failed to check PAN from issuer: ' + error.message);
  }
}

// Extract PAN from document XML/JSON
function extractPanFromDocument(docData: any) {
  try {
    // Handle different response formats
    if (typeof docData === 'string') {
      // Extract PAN from XML or text
      const panMatch = docData.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}/);
      return panMatch ? panMatch[0] : '';
    }
    
    if (docData.pan) return docData.pan;
    if (docData.PAN) return docData.PAN;
    
    return '';
  } catch (error) {
    console.error('Error extracting PAN:', error);
    return '';
  }
}

// Revoke DigiLocker token
export async function revokeToken(token: string, tokenType: 'access_token' | 'refresh_token' = 'access_token') {
  try {
    await axios.post(
      `${DIGILOCKER_BASE_URL}/oauth2/1/revoke`,
      {
        token: token,
        token_type_hint: tokenType === 'refresh_token' ? 'refresh_token' : 'access_token',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        },
      }
    );

    return { success: true, message: 'Token revoked successfully' };
  } catch (error: any) {
    console.error('Token revoke error:', error.response?.data || error.message);
    throw new Error('Failed to revoke token');
  }
}

// Convert DigiLocker date format (DD-MM-YYYY) to JavaScript Date object
export function convertDigilockerDateToDate(dobString: string): Date | null {
  if (!dobString) return null;
  
  try {
    // DigiLocker format: DD-MM-YYYY (e.g., "15-08-1990")
    const [day, month, year] = dobString.split('-').map(Number);
    
    if (!day || !month || !year) {
      console.error('[DigiLocker] Invalid date format:', dobString);
      return null;
    }
    
    // JavaScript Date months are 0-indexed (0 = January, 11 = December)
    const date = new Date(year, month - 1, day);
    
    // Validate the date
    if (isNaN(date.getTime())) {
      console.error('[DigiLocker] Invalid date:', dobString);
      return null;
    }
    
    return date;
  } catch (error) {
    console.error('[DigiLocker] Date conversion error:', error);
    return null;
  }
}

// Encryption helpers for storing sensitive data
const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY || crypto.randomBytes(32).toString('hex'), 'hex').slice(0, 32);
const IV_LENGTH = 16;

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}

export function decrypt(text: string): string {
  const parts = text.split(':');
  const iv = Buffer.from(parts.shift()!, 'hex');
  const encryptedText = parts.join(':');
  const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
