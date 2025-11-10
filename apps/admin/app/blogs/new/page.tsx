'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

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
    <div className="min-h-screen bg-black text-white">
     
      <header className="border-b-2 border-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/blogs" className="text-gray-400 hover:text-white">
              ← Back
            </Link>
            <h1 className="text-2xl font-bold">
              {isEdit ? 'Edit Blog' : 'Create New Blog'}
            </h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className="px-4 py-2 border-2 border-white font-bold hover:bg-white hover:text-black transition-colors"
            >
              {previewMode ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={() => handleSubmit('DRAFT')}
              disabled={loading}
              className="px-6 py-2 border-2 border-white font-bold hover:bg-white hover:text-black transition-colors disabled:opacity-50"
            >
              Save Draft
            </button>
            <button
              onClick={() => handleSubmit('PUBLISHED')}
              disabled={loading}
              className="px-6 py-2 bg-white text-black font-bold hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {formData.status === 'PUBLISHED' && isEdit ? 'Update' : 'Publish'}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        {!previewMode ? (
          <div className="space-y-6">
           
            <div>
              <label className="block text-sm font-bold mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-3 bg-black border-2 border-white text-white text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter blog title..."
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-bold mb-2">Slug *</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => {
                    setFormData({ ...formData, slug: e.target.value });
                    setAutoSlug(false);
                  }}
                  className="flex-1 px-4 py-3 bg-black border-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="blog-slug-url"
                />
                {!isEdit && (
                  <button
                    onClick={() => {
                      setAutoSlug(true);
                      setFormData({ ...formData, slug: generateSlug(formData.title) });
                    }}
                    className="px-4 py-2 border-2 border-white font-bold hover:bg-white hover:text-black transition-colors"
                  >
                    Auto Generate
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-1">URL: /blog/{formData.slug || 'your-slug'}</p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Excerpt</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-4 py-3 bg-black border-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                rows={3}
                placeholder="Short description of your blog..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Cover Image URL</label>
              <input
                type="text"
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                className="w-full px-4 py-3 bg-black border-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="https://example.com/image.jpg"
              />
              {formData.coverImage && (
                <div className="mt-2 border-2 border-white p-2">
                  <img src={formData.coverImage} alt="Cover preview" className="w-full h-48 object-cover" />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Tags</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  className="flex-1 px-4 py-2 bg-black border-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Add a tag..."
                />
                <button
                  onClick={handleAddTag}
                  className="px-4 py-2 border-2 border-white font-bold hover:bg-white hover:text-black transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white text-black font-bold text-sm flex items-center gap-2"
                  >
                    {tag}
                    <button onClick={() => handleRemoveTag(tag)} className="hover:text-red-600">
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            
            <div>
              <label className="block text-sm font-bold mb-2">Content (Markdown) *</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-4 py-3 bg-black border-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-white font-mono text-sm"
                rows={20}
                placeholder="Write your blog content in markdown..."
              />
              <p className="text-xs text-gray-400 mt-1">
                Supports Markdown: **bold**, *italic*, # headings, [links](url), ![images](url), etc.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white text-black p-8 border-2 border-white">
            <h1 className="text-4xl font-bold mb-4">{formData.title || 'Untitled'}</h1>
            {formData.excerpt && <p className="text-xl text-gray-600 mb-6">{formData.excerpt}</p>}
            {formData.coverImage && (
              <img src={formData.coverImage} alt="Cover" className="w-full h-96 object-cover mb-6" />
            )}
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {formData.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-black text-white text-sm font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: formData.content.replace(/\n/g, '<br />') }} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
