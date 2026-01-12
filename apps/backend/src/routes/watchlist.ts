import express, { Router, Request, Response } from 'express';
import { prisma } from 'db/client';
import { verifyAuth } from '../middlewares/auth.js';

interface AuthRequest extends Request {
  user?: {
    userId: string;
  };
}

const router: Router = express.Router();

// Get user's watchlist
router.get('/', verifyAuth, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const watchlist = await prisma.watchlist.findMany({
      where: { userId },
      orderBy: { addedAt: 'desc' },
    });

    res.json({ watchlist });
  } catch (error: any) {
    console.error('Error fetching watchlist:', error);
    res.status(500).json({ error: 'Failed to fetch watchlist' });
  }
});

// Add fund to watchlist
router.post('/add', verifyAuth, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { schemeCode, amcCode, fundName, category, currentNav } = req.body;

    if (!schemeCode || !amcCode || !fundName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if already in watchlist
    const existing = await prisma.watchlist.findUnique({
      where: {
        userId_schemeCode: {
          userId,
          schemeCode,
        },
      },
    });

    if (existing) {
      return res.status(400).json({ error: 'Fund already in watchlist' });
    }

    const watchlistItem = await prisma.watchlist.create({
      data: {
        userId,
        schemeCode,
        amcCode,
        fundName,
        category,
        currentNav,
      },
    });

    res.json({ success: true, watchlistItem });
  } catch (error: any) {
    console.error('Error adding to watchlist:', error);
    res.status(500).json({ error: 'Failed to add to watchlist' });
  }
});

// Remove fund from watchlist
router.delete('/:id', verifyAuth, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { id } = req.params;
    
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Ensure user owns this watchlist item
    const watchlistItem = await prisma.watchlist.findUnique({
      where: { id },
    });

    if (!watchlistItem) {
      return res.status(404).json({ error: 'Watchlist item not found' });
    }

    if (watchlistItem.userId !== userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    await prisma.watchlist.delete({
      where: { id },
    });

    res.json({ success: true, message: 'Removed from watchlist' });
  } catch (error: any) {
    console.error('Error removing from watchlist:', error);
    res.status(500).json({ error: 'Failed to remove from watchlist' });
  }
});

// Check if fund is in user's watchlist
router.get('/check/:schemeCode', verifyAuth, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { schemeCode } = req.params;
    
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!schemeCode) {
      return res.status(400).json({ error: 'Scheme code is required' });
    }

    const watchlistItem = await prisma.watchlist.findUnique({
      where: {
        userId_schemeCode: {
          userId,
          schemeCode,
        },
      },
    });

    res.json({ isWatchlisted: !!watchlistItem, watchlistItem });
  } catch (error: any) {
    console.error('Error checking watchlist:', error);
    res.status(500).json({ error: 'Failed to check watchlist' });
  }
});

export default router;
