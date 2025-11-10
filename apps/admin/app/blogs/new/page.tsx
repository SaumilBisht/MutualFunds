'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Save, Send, Eye, EyeOff, Loader2, X, Tag, Image, FileText } from 'lucide-react';

interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: string;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED';
}

export default function BlogEditorPage() {
  const router = useRouter();
  const params = useParams();

  const blogId = params?.id as string | undefined;
  const isEdit = !!blogId;

  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    excerpt: '',
    coverImage: '',
    content: '',
    tags: [],
    status: 'DRAFT',
  });
  const [tagInput, setTagInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [autoSlug, setAutoSlug] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/login');
      return;
    }

    if (isEdit) {
      fetchBlog(token, blogId);
    }
  }, [isEdit, blogId]);

  const fetchBlog = async (token: string, id: string) => {
    try {
      const { data } = await axios.get(`http://localhost:3002/api/admin/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setFormData(data.data);
      setAutoSlug(false);
    } catch (error) {
      alert('Failed to load blog');
      router.push('/blogs');
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleTitleChange = (title: string) => {
    setFormData({ ...formData, title });
    if (autoSlug && !isEdit) {
      setFormData((prev) => ({ ...prev, title, slug: generateSlug(title) }));
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()],
      });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };

  const handleSubmit = async (status: 'DRAFT' | 'PUBLISHED') => {
    const token = localStorage.getItem('adminToken');
    if (!token) return;

    if (!formData.title || !formData.content) {
      alert('Title and content are required');
      return;
    }

    setLoading(true);

    try {
      const url = isEdit
        ? `http://localhost:3002/api/admin/blogs/${blogId}`
        : 'http://localhost:3002/api/admin/blogs';

      const method = isEdit ? 'put' : 'post';

      await axios[method](url, { ...formData, status }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      router.push('/blogs');
    } catch (error: any) {
      alert(error.response?.data?.error || error.message || 'Failed to save blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <Link href="/blogs">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blogs
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold text-gray-900">
                {isEdit ? 'Edit Blog Post' : 'Create New Blog'}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={previewMode ? "default" : "outline"}
                size="sm"
                onClick={() => setPreviewMode(!previewMode)}
              >
                {previewMode ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
                {previewMode ? 'Edit Mode' : 'Preview'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSubmit('DRAFT')}
                disabled={loading}
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                Save Draft
              </Button>
              <Button
                size="sm"
                onClick={() => handleSubmit('PUBLISHED')}
                disabled={loading}
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                {formData.status === 'PUBLISHED' && isEdit ? 'Update' : 'Publish'}
              </Button>
            </div>
          </div>
          {formData.status === 'PUBLISHED' && (
            <div className="text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-md inline-flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Published
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-6xl">
        {!previewMode ? (
          <div className="space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Basic Information
                </CardTitle>
                <CardDescription>
                  Enter the title, slug, and excerpt for your blog post
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="text-xl font-semibold"
                    placeholder="Enter an engaging blog title..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    URL Slug <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => {
                        setFormData({ ...formData, slug: e.target.value });
                        setAutoSlug(false);
                      }}
                      className="flex-1 font-mono text-sm"
                      placeholder="blog-url-slug"
                    />
                    {!isEdit && (
                      <Button
                        variant="outline"
                        onClick={() => {
                          setAutoSlug(true);
                          setFormData({ ...formData, slug: generateSlug(formData.title) });
                        }}
                      >
                        Auto Generate
                      </Button>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5">
                    URL: <span className="font-mono">/blog/{formData.slug || 'your-slug'}</span>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Excerpt
                  </label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                    placeholder="Write a short description to appear in blog previews..."
                  />
                  <p className="text-xs text-gray-500 mt-1.5">
                    {formData.excerpt.length} / 200 characters recommended
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cover Image */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5 text-purple-600" />
                  Cover Image
                </CardTitle>
                <CardDescription>
                  Add a cover image to make your blog more engaging
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Image URL
                  </label>
                  <Input
                    type="text"
                    value={formData.coverImage}
                    onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                {formData.coverImage && (
                  <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={formData.coverImage} 
                      alt="Cover preview" 
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '';
                        e.currentTarget.alt = 'Invalid image URL';
                        e.currentTarget.className = 'w-full h-64 flex items-center justify-center bg-gray-100 text-gray-400';
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  Content
                </CardTitle>
                <CardDescription>
                  Write your blog content using Markdown formatting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm resize-none"
                  rows={20}
                  placeholder="Write your blog content here...

# Heading 1
## Heading 2

**Bold text** and *italic text*

- List item 1
- List item 2

[Link text](https://example.com)
![Image alt](https://example.com/image.jpg)"
                />
                <div className="mt-2 flex items-start gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-md">
                  <FileText className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Markdown Supported:</p>
                    <p>
                      <span className="font-mono bg-white px-1 py-0.5 rounded">**bold**</span>,{' '}
                      <span className="font-mono bg-white px-1 py-0.5 rounded">*italic*</span>,{' '}
                      <span className="font-mono bg-white px-1 py-0.5 rounded"># headings</span>,{' '}
                      <span className="font-mono bg-white px-1 py-0.5 rounded">[links](url)</span>,{' '}
                      <span className="font-mono bg-white px-1 py-0.5 rounded">![images](url)</span>, and more
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metadata */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-orange-600" />
                  Tags & Categories
                </CardTitle>
                <CardDescription>
                  Add tags to help readers find your content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Add Tags
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                      placeholder="Type a tag and press Enter..."
                      className="flex-1"
                    />
                    <Button onClick={handleAddTag} variant="outline">
                      <Tag className="mr-2 h-4 w-4" />
                      Add
                    </Button>
                  </div>
                </div>
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-200 transition-colors"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                        <button
                          onClick={() => handleRemoveTag(tag)}
                          className="hover:text-blue-900 ml-1"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          // Preview Mode
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto">
                {/* Preview Header */}
                <div className="mb-8 pb-6 border-b">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {formData.title || 'Untitled Blog Post'}
                  </h1>
                  {formData.excerpt && (
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {formData.excerpt}
                    </p>
                  )}
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {formData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded-full"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Cover Image */}
                {formData.coverImage && (
                  <div className="mb-8 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={formData.coverImage}
                      alt="Cover"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-gray-800 leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ 
                      __html: formData.content.replace(/\n/g, '<br />') 
                    }} 
                  />
                </div>

                {!formData.content && (
                  <div className="text-center py-12 text-gray-400">
                    <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>No content to preview yet. Start writing to see your blog post.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
