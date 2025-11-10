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

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/-+/g, '-');     // Replace multiple - with single -
}

// Get all blogs (with pagination)
router.get('/', verifyAdminToken, async (req: AdminAuthRequest, res: Response) => {
  try {
    const page = Math.max(1, Number(req.query.page || 1));
    const limit = Math.min(50, Math.max(10, Number(req.query.limit || 20)));
    const status = req.query.status as 'DRAFT' | 'PUBLISHED' | 'ARCHIVED' | undefined;

    const where = status ? { status } : {};

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
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
      prisma.blog.count({ where }),
    ]);

    res.json({
      success: true,
      data: blogs,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error('Get blogs error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch blogs' 
    });
  }
});


router.get('/:id', verifyAdminToken, async (req: AdminAuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const blog = await prisma.blog.findUnique({
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

    if (!blog) {
      return res.status(404).json({ 
        success: false, 
        error: 'Blog not found' 
      });
    }

    res.json({
      success: true,
      data: blog,
    });
  } catch (error: any) {
    console.error('Get blog error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch blog' 
    });
  }
});

// create new blog
router.post('/', verifyAdminToken, async (req: AdminAuthRequest, res: Response) => {
  try {
    const {
      title,
      slug,
      excerpt,
      coverImage,
      content,
      tags = [],
      status = 'DRAFT',
    } = req.body;

    if (!title || !content) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title and content are required' 
      });
    }

    const adminId = req.admin!.adminId;

    // Generate slug if not provided
    const finalSlug = slug || generateSlug(title);

    // Check if slug already exists
    const existingBlog = await prisma.blog.findUnique({
      where: { slug: finalSlug },
    });

    if (existingBlog) {
      return res.status(409).json({ 
        success: false, 
        error: 'Blog with this slug already exists' 
      });
    }

    // Create blog
    const blog = await prisma.blog.create({
      data: {
        title,
        slug: finalSlug,
        excerpt,
        coverImage,
        content,
        tags: tags || [],
        status,
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
      data: blog,
    });
  } catch (error: any) {
    console.error('Create blog error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to create blog' 
    });
  }
});

//Update blog
router.put('/:id', verifyAdminToken, async (req: AdminAuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const {
      title,
      slug,
      excerpt,
      coverImage,
      content,
      tags,
      status,
    } = req.body;

    // Check if blog exists
    const existingBlog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!existingBlog) {
      return res.status(404).json({ 
        success: false, 
        error: 'Blog not found' 
      });
    }

    // If slug is being changed, check if new slug is available
    if (slug && slug !== existingBlog.slug) {
      const slugTaken = await prisma.blog.findUnique({
        where: { slug },
      });

      if (slugTaken) {
        return res.status(409).json({ 
          success: false, 
          error: 'Slug already taken' 
        });
      }
    }

    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (slug !== undefined) updateData.slug = slug;
    if (excerpt !== undefined) updateData.excerpt = excerpt;
    if (coverImage !== undefined) updateData.coverImage = coverImage;
    if (content !== undefined) updateData.content = content;
    if (tags !== undefined) updateData.tags = tags;
    if (status !== undefined) {
      updateData.status = status;
      // Set publishedAt when changing from DRAFT to PUBLISHED
      if (status === 'PUBLISHED' && existingBlog.status === 'DRAFT') {
        updateData.publishedAt = new Date();
      }
    }

    const blog = await prisma.blog.update({
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
      data: blog,
    });
  } catch (error: any) {
    console.error('Update blog error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to update blog' 
    });
  }
});


router.delete('/:id', verifyAdminToken, async (req: AdminAuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    
    const existingBlog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!existingBlog) {
      return res.status(404).json({ 
        success: false, 
        error: 'Blog not found' 
      });
    }

    // Delete blog
    await prisma.blog.delete({
      where: { id },
    });

    res.json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error: any) {
    console.error('Delete blog error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to delete blog' 
    });
  }
});

// Check if slug is available
router.post('/check-slug', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const { slug, excludeId } = req.body;

    if (!slug) {
      return res.status(400).json({ 
        success: false, 
        error: 'Slug is required' 
      });
    }

    const where: any = { slug };
    if (excludeId) {
      where.id = { not: excludeId };
    }

    const existing = await prisma.blog.findUnique({
      where: { slug },
    });

    res.json({
      success: true,
      available: !existing,
    });
  } catch (error: any) {
    console.error('Check slug error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to check slug' 
    });
  }
});

export { router as adminBlogRouter };
