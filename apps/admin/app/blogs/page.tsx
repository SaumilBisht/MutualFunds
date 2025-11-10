'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
      const url = filter === 'all'
        ? `http://localhost:3002/api/admin/blogs?page=${page}`
        : `http://localhost:3002/api/admin/blogs?status=${filter}&page=${page}`;

      const response = await fetch(url, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch blogs');

      const data = await response.json();
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
      const response = await fetch(`http://localhost:3002/api/admin/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to delete blog');

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

  return (
    <div className="min-h-screen bg-black text-white">
      
      <header className="border-b-2 border-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-400 hover:text-white">
              ← Back
            </Link>
            <h1 className="text-2xl font-bold">Manage Blogs</h1>
          </div>
          <Link
            href="/blogs/new"
            className="px-6 py-2 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
          >
            + New Blog
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => { setFilter('all'); setPage(1); }}
            className={`px-4 py-2 font-bold border-2 transition-colors ${
              filter === 'all'
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            All
          </button>
          <button
            onClick={() => { setFilter('PUBLISHED'); setPage(1); }}
            className={`px-4 py-2 font-bold border-2 transition-colors ${
              filter === 'PUBLISHED'
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            Published
          </button>
          <button
            onClick={() => { setFilter('DRAFT'); setPage(1); }}
            className={`px-4 py-2 font-bold border-2 transition-colors ${
              filter === 'DRAFT'
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            Drafts
          </button>
        </div>

        {loading && <div className="text-center py-8">Loading blogs...</div>}

        {!loading && blogs.length === 0 && (
          <div className="text-center py-12 border-2 border-white">
            <p className="text-xl mb-4">No blogs found</p>
            <Link
              href="/blogs/new"
              className="inline-block px-6 py-3 bg-white text-black font-bold hover:bg-gray-200"
            >
              Create Your First Blog
            </Link>
          </div>
        )}

        {!loading && blogs.length > 0 && (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="border-2 border-white p-6 hover:bg-white hover:text-black transition-colors group">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-bold">{blog.title}</h2>
                      <span className={`px-2 py-1 text-xs font-bold border ${
                        blog.status === 'PUBLISHED'
                          ? 'bg-white text-black border-black'
                          : 'bg-black text-white border-white group-hover:bg-white group-hover:text-black group-hover:border-black'
                      }`}>
                        {blog.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-600 mb-2">
                      /{blog.slug}
                    </p>
                    <div className="flex gap-4 text-sm text-gray-400 group-hover:text-gray-600">
                      <span>By {blog.author.name}</span>
                      <span>•</span>
                      <span>{formatDate(blog.publishedAt)}</span>
                      <span>•</span>
                      <span>{blog.views} views</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/blogs/${blog.id}/edit`}
                      className="px-4 py-2 border-2 border-black group-hover:border-white bg-white text-black group-hover:bg-black group-hover:text-white font-bold hover:opacity-80 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="px-4 py-2 border-2 border-black group-hover:border-white bg-black text-white group-hover:bg-white group-hover:text-black font-bold hover:opacity-80 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-4 py-2 border-2 border-white font-bold disabled:opacity-30 hover:bg-white hover:text-black transition-colors"
            >
              Previous
            </button>
            <span className="px-4 py-2 border-2 border-white">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 border-2 border-white font-bold disabled:opacity-30 hover:bg-white hover:text-black transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
