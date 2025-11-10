import express, { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from 'db/client';

const router: Router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your-admin-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d';

interface AdminAuthRequest extends Request {
  admin?: {
    adminId: string;
    email: string;
    role: string;
  };
}

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email and password are required' 
      });
    }

    const admin = await prisma.admin.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!admin) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid credentials' 
      });
    }

    const isValidPassword = await bcrypt.compare(password, admin.password);

    if (!isValidPassword) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid credentials' 
      });
    }
    const token = jwt.sign(
      { 
        adminId: admin.id, 
        email: admin.email,
        role: admin.role 
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    });
  } catch (error: any) {
    console.error('Admin login error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Login failed' 
    });
  }
});

// Only SUPER_ADMIN can create new admins
router.post('/create-admin', verifyAdminToken, async (req: AdminAuthRequest, res: Response) => {
  try {
    
    if (req.admin!.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ 
        success: false, 
        error: 'Only SUPER_ADMIN can create new admins' 
      });
    }

    const { email, password, name, role = 'ADMIN' } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email, password, and name are required' 
      });
    }

    // Validate role
    if (!['ADMIN', 'EDITOR'].includes(role)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid role. Only ADMIN or EDITOR allowed' 
      });
    }

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingAdmin) {
      return res.status(409).json({ 
        success: false, 
        error: 'Admin with this email already exists' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        email: email.toLowerCase(),
        password: hashedPassword,
        name,
        role,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    });
  } catch (error: any) {
    console.error('Create admin error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to create admin' 
    });
  }
});

router.get('/me', verifyAdminToken, async (req: AdminAuthRequest, res: Response) => {
  try {
    const adminId = req.admin!.adminId;

    const admin = await prisma.admin.findUnique({
      where: { id: adminId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });

    if (!admin) {
      return res.status(404).json({ 
        success: false, 
        error: 'Admin not found' 
      });
    }

    res.json({
      success: true,
      admin,
    });
  } catch (error: any) {
    console.error('Get admin info error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch admin info' 
    });
  }
});

// Middleware to verify admin JWT token
 
export function verifyAdminToken(
  req: AdminAuthRequest,
  res: Response,
  next: any
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false, 
        error: 'No token provided' 
      });
    }

    const token = authHeader.substring(7);

    const decoded = jwt.verify(token, JWT_SECRET) as {
      adminId: string;
      email: string;
      role: string;
    };

    req.admin = decoded;
    next();
  } catch (error: any) {
    console.error('Token verification error:', error);
    return res.status(401).json({ 
      success: false, 
      error: 'Invalid or expired token' 
    });
  }
}

export { router as adminAuthRouter };