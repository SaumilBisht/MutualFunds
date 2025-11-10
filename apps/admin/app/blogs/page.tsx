'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Trash2, Eye, PlusCircle, FileText, Loader2, Clock } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  views: number;
  createdAt: string;
  publishedAt: string | null;
  author: {
    name: string;
  };
}

export default function BlogsListPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'DRAFT' | 'PUBLISHED'>('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/login');
      return;
    }
    fetchBlogs(token);
  }, [filter, page]);

  const fetchBlogs = async (token: string) => {
    setLoading(true);
    try {
      const params: any = { page };
      if (filter !== 'all') {
        params.status = filter;
      }

      const { data } = await axios.get('http://localhost:3002/api/admin/blogs', {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(data.data);
      setTotalPages(data.meta.totalPages);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    const token = localStorage.getItem('adminToken');
    if (!token) return;

    try {
      await axios.delete(`http://localhost:3002/api/admin/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBlogs(token);
    } catch (error) {
      alert('Failed to delete blog');
    }
  };

  const formatDate = (date: string | null) => {
    if (!date) return 'Not published';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'PUBLISHED':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'DRAFT':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'ARCHIVED':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">Manage Blogs</h1>
            </div>
          </div>
          <Link href="/blogs/new">
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              New Blog
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => { setFilter('all'); setPage(1); }}
          >
            All Blogs
          </Button>
          <Button
            variant={filter === 'PUBLISHED' ? 'default' : 'outline'}
            onClick={() => { setFilter('PUBLISHED'); setPage(1); }}
          >
            Published
          </Button>
          <Button
            variant={filter === 'DRAFT' ? 'default' : 'outline'}
            onClick={() => { setFilter('DRAFT'); setPage(1); }}
          >
            Drafts
          </Button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
          <Card className="text-center py-12">
            <CardContent className="pt-6">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No blogs found</h3>
              <p className="text-muted-foreground mb-6">
                {filter === 'all' 
                  ? "Get started by creating your first blog post"
                  : `No ${filter.toLowerCase()} blogs yet`
                }
              </p>
              <Link href="/blogs/new">
                <Button>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create Your First Blog
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Blog List */}
        {!loading && blogs.length > 0 && (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <Card key={blog.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{blog.title}</CardTitle>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusVariant(blog.status)}`}>
                          {blog.status}
                        </span>
                      </div>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          /{blog.slug}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {formatDate(blog.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {blog.views} views
                        </span>
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-2">
                        By {blog.author.name}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/blogs/${blog.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteBlog(blog.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="outline"
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <span className="px-4 py-2 text-sm text-muted-foreground">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
