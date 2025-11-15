import express, { Router, Request, Response } from 'express';
import { prisma } from 'db/client';
import { verifyAdminToken } from './auth.js';

const router: Router = express.Router();

interface AdminAuthRequest extends Request {
  admin?: {
    adminId: string;
    email: string;
    role: string;
  };
}

// Get all stories (with pagination) - ALLOWS PUBLIC ACCESS for published stories
router.get('/', async (req: AdminAuthRequest, res: Response) => {
  try {
    const page = Math.max(1, Number(req.query.page || 1));
    const limit = Math.min(50, Math.max(10, Number(req.query.limit || 20)));
    const statusQuery = req.query.status as string | undefined;
    const labelQuery = req.query.label as string | undefined;
    const searchQuery = req.query.search as string | undefined;

    // Check if user is authenticated
    const isAuthenticated = req.headers.authorization?.startsWith('Bearer ');
    
    // Build where clause
    let where: any = {};
    if (statusQuery === 'DRAFT' || statusQuery === 'PUBLISHED' || statusQuery === 'ARCHIVED') {
      where.status = statusQuery;
    } else if (!isAuthenticated) {
      // If not authenticated, only show published stories
      where.status = 'PUBLISHED';
    }

    // Filter by label if provided
    if (labelQuery) {
      where.label = labelQuery;
    }

    // Search by heading if provided
    if (searchQuery) {
      where.heading = {
        contains: searchQuery,
        mode: 'insensitive',
      };
    }

    const [stories, total] = await Promise.all([
      prisma.story.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.story.count({ where }),
    ]);

    res.json({
      success: true,
      data: stories,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error('Get stories error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch stories' 
    });
  }
});

// Get story by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const story = await prisma.story.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!story) {
      return res.status(404).json({ 
        success: false, 
        error: 'Story not found' 
      });
    }

    // Increment views
    await prisma.story.update({
      where: { id },
      data: { views: { increment: 1 } },
    });

    res.json({ success: true, data: story });
  } catch (error: any) {
    console.error('Get story error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch story' 
    });
  }
});

// Get unique labels
router.get('/meta/labels', async (req: Request, res: Response) => {
  try {
    const labels = await prisma.story.findMany({
      where: { status: 'PUBLISHED' },
      select: { label: true },
      distinct: ['label'],
    });

    const uniqueLabels = labels.map(l => l.label);

    res.json({
      success: true,
      data: uniqueLabels,
    });
  } catch (error: any) {
    console.error('Get labels error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch labels' 
    });
  }
});

// Create story (Admin only)
router.post('/', verifyAdminToken, async (req: AdminAuthRequest, res: Response) => {
  try {
    const { label, heading, teaser, imageUrl, content, status } = req.body;

    if (!label || !heading || !teaser || !imageUrl || !content) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    const adminId = req.admin!.adminId;

    const story = await prisma.story.create({
      data: {
        label,
        heading,
        teaser,
        imageUrl,
        content,
        status: status || 'DRAFT',
        authorId: adminId,
        publishedAt: status === 'PUBLISHED' ? new Date() : null,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    res.status(201).json({ 
      success: true, 
      data: story 
    });
  } catch (error: any) {
    console.error('Create story error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to create story' 
    });
  }
});

// Update story (Admin only)
router.put('/:id', verifyAdminToken, async (req: AdminAuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { label, heading, teaser, imageUrl, content, status } = req.body;

    const existingStory = await prisma.story.findUnique({
      where: { id },
    });

    if (!existingStory) {
      return res.status(404).json({ 
        success: false, 
        error: 'Story not found' 
      });
    }

    const updateData: any = {};
    if (label !== undefined) updateData.label = label;
    if (heading !== undefined) updateData.heading = heading;
    if (teaser !== undefined) updateData.teaser = teaser;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (content !== undefined) updateData.content = content;
    if (status !== undefined) {
      updateData.status = status;
      if (status === 'PUBLISHED' && !existingStory.publishedAt) {
        updateData.publishedAt = new Date();
      }
    }

    const story = await prisma.story.update({
      where: { id },
      data: updateData,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    res.json({ 
      success: true, 
      data: story 
    });
  } catch (error: any) {
    console.error('Update story error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to update story' 
    });
  }
});

// Delete story (Admin only)
router.delete('/:id', verifyAdminToken, async (req: AdminAuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const story = await prisma.story.findUnique({
      where: { id },
    });

    if (!story) {
      return res.status(404).json({ 
        success: false, 
        error: 'Story not found' 
      });
    }

    await prisma.story.delete({
      where: { id },
    });

    res.json({ 
      success: true, 
      message: 'Story deleted successfully' 
    });
  } catch (error: any) {
    console.error('Delete story error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to delete story' 
    });
  }
});

export default router;
