'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, FileText, Eye, PlusCircle, LogOut, Loader2, UserPlus, Newspaper } from 'lucide-react';

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

interface StoryStats {
  total: number;
  published: number;
  draft: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [stats, setStats] = useState<BlogStats>({ total: 0, published: 0, draft: 0 });
  const [storyStats, setStoryStats] = useState<StoryStats>({ total: 0, published: 0, draft: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/login');
      return;
    }

    fetchAdminData(token);
    fetchStats(token);
    fetchStoryStats(token);
  }, []);

  const fetchAdminData = async (token: string) => {
    try {
      const { data } = await axios.get('http://localhost:3002/api/admin/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmin(data.admin);
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

  const fetchStoryStats = async (token: string) => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const [allData, publishedData, draftData] = await Promise.all([
        axios.get('http://localhost:3002/api/admin/stories?limit=1', { headers }),
        axios.get('http://localhost:3002/api/admin/stories?status=PUBLISHED&limit=1', { headers }),
        axios.get('http://localhost:3002/api/admin/stories?status=DRAFT&limit=1', { headers }),
      ]);

      setStoryStats({
        total: allData.data.meta?.total || 0,
        published: publishedData.data.meta?.total || 0,
        draft: draftData.data.meta?.total || 0,
      });
    } catch (error) {
      console.error('Failed to fetch story stats:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{admin?.name}</p>
              <p className="text-xs text-muted-foreground">{admin?.role}</p>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {admin?.name}!</h2>
          <p className="text-muted-foreground">Manage your content from here.</p>
        </div>

        {/* Blogs Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-600" />
              Blog Posts
            </h3>
          </div>

          {/* Blog Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
                <FileText className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
                <p className="text-xs text-muted-foreground mt-1">All blog posts</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Published</CardTitle>
                <Eye className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">{stats.published}</div>
                <p className="text-xs text-muted-foreground mt-1">Live on website</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Drafts</CardTitle>
                <FileText className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">{stats.draft}</div>
                <p className="text-xs text-muted-foreground mt-1">Work in progress</p>
              </CardContent>
            </Card>
          </div>

          {/* Blog Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="/blogs/new">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        Create New Blog
                      </CardTitle>
                      <CardDescription>Write and publish a new blog post</CardDescription>
                    </div>
                    <PlusCircle className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="/blogs">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        Manage Blogs
                      </CardTitle>
                      <CardDescription>View, edit, and delete existing blogs</CardDescription>
                    </div>
                    <FileText className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </CardHeader>
              </Link>
            </Card>
          </div>
        </div>

        {/* Stories Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-purple-600" />
              News Stories
            </h3>
          </div>

          {/* Story Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Stories</CardTitle>
                <Newspaper className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">{storyStats.total}</div>
                <p className="text-xs text-muted-foreground mt-1">All stories</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Published Stories</CardTitle>
                <Eye className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">{storyStats.published}</div>
                <p className="text-xs text-muted-foreground mt-1">Live stories</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Draft Stories</CardTitle>
                <FileText className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">{storyStats.draft}</div>
                <p className="text-xs text-muted-foreground mt-1">In progress</p>
              </CardContent>
            </Card>
          </div>

          {/* Story Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="/stories/new">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        Create New Story
                      </CardTitle>
                      <CardDescription>Write and publish a new news story</CardDescription>
                    </div>
                    <PlusCircle className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="/stories">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        Manage Stories
                      </CardTitle>
                      <CardDescription>View, edit, and delete existing stories</CardDescription>
                    </div>
                    <Newspaper className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </CardHeader>
              </Link>
            </Card>
          </div>
        </div>

        {/* SUPER_ADMIN Only: Add Admin Button */}
        {admin?.role === 'SUPER_ADMIN' && (
          <div className="mt-8">
            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-blue-600" />
                  Super Admin Controls
                </CardTitle>
                <CardDescription>Manage admin users and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => router.push('/admins/create')}
                  className="w-full md:w-auto"
                  size="lg"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Add New Admin
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
