'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Trash2, Eye, PlusCircle, Newspaper, Loader2 } from 'lucide-react';

interface Story {
  id: string;
  label: string;
  heading: string;
  teaser: string;
  imageUrl: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  views: number;
  createdAt: string;
  publishedAt: string | null;
  author: {
    name: string;
  };
}

export default function StoriesListPage() {
  const router = useRouter();
  const [stories, setStories] = useState<Story[]>([]);
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
    fetchStories(token);
  }, [filter, page]);

  const fetchStories = async (token: string) => {
    setLoading(true);
    try {
      const params: any = { page };
      if (filter !== 'all') {
        params.status = filter;
      }

      const { data } = await axios.get('http://localhost:3002/api/admin/stories', {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });
      setStories(data.data);
      setTotalPages(data.meta.totalPages);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteStory = async (id: string) => {
    if (!confirm('Are you sure you want to delete this story?')) return;

    const token = localStorage.getItem('adminToken');
    if (!token) return;

    try {
      await axios.delete(`http://localhost:3002/api/admin/stories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchStories(token);
    } catch (error) {
      alert('Failed to delete story');
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

  const getLabelColor = (label: string) => {
    const colors: { [key: string]: string } = {
      'Trending': 'bg-red-100 text-red-700',
      'StockWire': 'bg-blue-100 text-blue-700',
      'Market News': 'bg-purple-100 text-purple-700',
      'Analysis': 'bg-indigo-100 text-indigo-700',
      'Breaking': 'bg-orange-100 text-orange-700',
    };
    return colors[label] || 'bg-gray-100 text-gray-700';
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
              <Newspaper className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">Manage Stories</h1>
            </div>
          </div>
          <Link href="/stories/new">
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              New Story
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
            All Stories
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
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : stories.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No stories yet</h3>
              <p className="text-gray-500 mb-6">Create your first story to get started</p>
              <Link href="/stories/new">
                <Button>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create Story
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image */}
                  {story.imageUrl && (
                    <div className="h-48 overflow-hidden bg-gray-100">
                      <img
                        src={story.imageUrl}
                        alt={story.heading}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '';
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getLabelColor(story.label)}`}>
                        {story.label}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full border font-medium ${getStatusVariant(story.status)}`}>
                        {story.status}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{story.heading}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">{story.teaser}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {story.views} views
                      </div>
                      <span>{formatDate(story.publishedAt || story.createdAt)}</span>
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/stories/${story.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteStory(story.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <span className="text-sm text-gray-600">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
