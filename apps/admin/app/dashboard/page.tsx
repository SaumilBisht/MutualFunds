'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

interface Admin {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface BlogStats {
  total: number;
  published: number;
  draft: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [stats, setStats] = useState<BlogStats>({ total: 0, published: 0, draft: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/login');
      return;
    }

    fetchAdminData(token);
    fetchStats(token);
  }, []);

  const fetchAdminData = async (token: string) => {
    try {
      const { data } = await axios.get('http://localhost:3002/api/admin/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmin(data.data);
    } catch (error) {
      localStorage.removeItem('adminToken');
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async (token: string) => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const [allData, publishedData, draftData] = await Promise.all([
        axios.get('http://localhost:3002/api/admin/blogs?limit=1', { headers }),
        axios.get('http://localhost:3002/api/admin/blogs?status=PUBLISHED&limit=1', { headers }),
        axios.get('http://localhost:3002/api/admin/blogs?status=DRAFT&limit=1', { headers }),
      ]);

      setStats({
        total: allData.data.meta?.total || 0,
        published: publishedData.data.meta?.total || 0,
        draft: draftData.data.meta?.total || 0,
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/login');
  };

  if (loading) 
    {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      
      <header className="border-b-2 border-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm">{admin?.name} ({admin?.role})</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
     
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {admin?.name}!</h2>
          <p className="text-gray-400">Here's what's happening with your blog today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white text-black p-6 border-2 border-white">
            <h3 className="text-sm font-bold text-gray-600 mb-2">TOTAL BLOGS</h3>
            <p className="text-4xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-white text-black p-6 border-2 border-white">
            <h3 className="text-sm font-bold text-gray-600 mb-2">PUBLISHED</h3>
            <p className="text-4xl font-bold">{stats.published}</p>
          </div>
          <div className="bg-white text-black p-6 border-2 border-white">
            <h3 className="text-sm font-bold text-gray-600 mb-2">DRAFTS</h3>
            <p className="text-4xl font-bold">{stats.draft}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/blogs/new"
            className="bg-white text-black p-8 border-2 border-white hover:bg-black hover:text-white hover:border-white transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Create New Blog</h3>
                <p className="text-gray-600 group-hover:text-gray-400">Write and publish a new blog post</p>
              </div>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </Link>

          <Link
            href="/blogs"
            className="bg-white text-black p-8 border-2 border-white hover:bg-black hover:text-white hover:border-white transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Manage Blogs</h3>
                <p className="text-gray-600 group-hover:text-gray-400">View, edit, and delete existing blogs</p>
              </div>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
