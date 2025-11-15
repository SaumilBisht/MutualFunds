'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Save, Send, Loader2, FileText, Tag, Image } from 'lucide-react';

interface StoryFormData {
  label: string;
  heading: string;
  teaser: string;
  imageUrl: string;
  content: string;
  status: 'DRAFT' | 'PUBLISHED';
}

const LABEL_OPTIONS = [
  'Trending',
  'StockWire',
  'Market News',
  'Analysis',
  'Breaking',
  'Opinion',
  'Interview',
  'Report',
];

export default function CreateStoryPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<StoryFormData>({
    label: '',
    heading: '',
    teaser: '',
    imageUrl: '',
    content: '',
    status: 'DRAFT',
  });
  const [loading, setLoading] = useState(false);
  const [showCustomLabel, setShowCustomLabel] = useState(false);
  const [customLabel, setCustomLabel] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/login');
    }
  }, []);

  const handleSubmit = async (status: 'DRAFT' | 'PUBLISHED') => {
    const token = localStorage.getItem('adminToken');
    if (!token) return;

    if (!formData.label || !formData.heading || !formData.teaser || !formData.content) {
      alert('Label, heading, teaser, and content are required');
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        'http://localhost:3002/api/admin/stories',
        { ...formData, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      router.push('/stories');
    } catch (error: any) {
      alert(error.response?.data?.error || error.message || 'Failed to save story');
    } finally {
      setLoading(false);
    }
  };

  const handleLabelSelect = (label: string) => {
    if (label === 'custom') {
      setShowCustomLabel(true);
    } else {
      setFormData({ ...formData, label });
      setShowCustomLabel(false);
    }
  };

  const handleCustomLabelSubmit = () => {
    if (customLabel.trim()) {
      setFormData({ ...formData, label: customLabel.trim() });
      setShowCustomLabel(false);
      setCustomLabel('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/stories">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Stories
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold text-gray-900">Create New Story</h1>
            </div>
            <div className="flex items-center gap-2">
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
                Publish
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Label Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-blue-600" />
                Story Label
              </CardTitle>
              <CardDescription>
                Choose a label to categorize this story
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {LABEL_OPTIONS.map((label) => (
                    <button
                      key={label}
                      onClick={() => handleLabelSelect(label)}
                      className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        formData.label === label
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300 text-gray-700'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                  <button
                    onClick={() => handleLabelSelect('custom')}
                    className="px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-300 text-sm font-medium text-gray-600 transition-all"
                  >
                    + Custom
                  </button>
                </div>

                {showCustomLabel && (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter custom label"
                      value={customLabel}
                      onChange={(e) => setCustomLabel(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleCustomLabelSubmit()}
                    />
                    <Button onClick={handleCustomLabelSubmit}>Add</Button>
                  </div>
                )}

                {formData.label && !LABEL_OPTIONS.includes(formData.label) && (
                  <div className="text-sm text-gray-600">
                    Selected: <span className="font-medium text-blue-600">{formData.label}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Heading */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Heading
              </CardTitle>
              <CardDescription>
                Main title that will be searchable by users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Enter story heading..."
                value={formData.heading}
                onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
                className="text-lg"
              />
            </CardContent>
          </Card>

          {/* Teaser */}
          <Card>
            <CardHeader>
              <CardTitle>Teaser / Short Description</CardTitle>
              <CardDescription>
                2-3 lines that summarize the story (shown in listings)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                placeholder="Write a brief teaser..."
                value={formData.teaser}
                onChange={(e) => setFormData({ ...formData, teaser: e.target.value })}
                className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                maxLength={250}
              />
              <div className="text-sm text-gray-500 mt-2 text-right">
                {formData.teaser.length}/250 characters
              </div>
            </CardContent>
          </Card>

          {/* Cover Image */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5 text-blue-600" />
                Cover Image
              </CardTitle>
              <CardDescription>
                URL of the cover image for this story
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="https://example.com/image.jpg"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              />
              {formData.imageUrl && (
                <div className="mt-4 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={formData.imageUrl}
                    alt="Cover preview"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '';
                      e.currentTarget.alt = 'Invalid image URL';
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader>
              <CardTitle>Full Story Content</CardTitle>
              <CardDescription>
                Write the complete story content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                placeholder="Write your story here..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full min-h-[400px] p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y font-mono text-sm"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
