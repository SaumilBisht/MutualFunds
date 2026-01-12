'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { Calendar, Eye, ArrowLeft, Loader2, Newspaper } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Story {
  id: string;
  label: string;
  heading: string;
  teaser: string;
  imageUrl: string;
  content: string;
  status: string;
  views: number;
  publishedAt: string;
  createdAt: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
}

export default function StoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Track if view has already been counted to prevent double-counting in React strict mode
  const hasViewed = useRef(false);

  useEffect(() => {
    if (params.id && !hasViewed.current) {
      fetchStory();
      hasViewed.current = true;
    }
  }, [params.id]);

  const fetchStory = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data } = await axios.get(`http://localhost:3002/api/admin/stories/${params.id}`);
      if (data.success && data.data) {
        setStory(data.data);
      } else {
        setError('Story not found');
      }
    } catch (err) {
      console.error('Failed to fetch story:', err);
      setError('Failed to load story. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getLabelColor = (label: string) => {
    const colors: { [key: string]: string } = {
      'Trending': 'bg-red-100 text-red-700 border-red-200',
      'StockWire': 'bg-blue-100 text-blue-700 border-blue-200',
      'Market News': 'bg-purple-100 text-purple-700 border-purple-200',
      'Analysis': 'bg-indigo-100 text-indigo-700 border-indigo-200',
      'Breaking': 'bg-orange-100 text-orange-700 border-orange-200',
      'Opinion': 'bg-green-100 text-green-700 border-green-200',
      'Interview': 'bg-pink-100 text-pink-700 border-pink-200',
      'Report': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    };
    return colors[label] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading story...</p>
        </div>
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20">
        <div className="text-center max-w-md px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Newspaper className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Story Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The story you are looking for does not exist.'}</p>
          <button
            onClick={() => router.push('/stories')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Stories
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Back Button */}
        <button
          onClick={() => router.push('/stories')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Stories</span>
        </button>

        {/* Label Badge */}
        <div className="mb-6">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold border ${getLabelColor(story.label)}`}>
            {story.label}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {story.heading}
        </h1>

        {/* Teaser */}
        {story.teaser && (
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {story.teaser}
          </p>
        )}

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(story.publishedAt || story.createdAt)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Eye className="h-4 w-4" />
            <span>{story.views || 0} views</span>
          </div>
          {story.author && (
            <div className="text-sm text-gray-600">
              By <span className="font-medium text-gray-900">{story.author.name}</span>
            </div>
          )}
        </div>

        {/* Cover Image */}
        {story.imageUrl && (
          <div className="mb-10 rounded-xl overflow-hidden">
            <img
              src={story.imageUrl}
              alt={story.heading}
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-4 prose-h2:text-2xl prose-h2:mb-3 prose-p:mb-4 prose-ul:mb-4 prose-li:mb-2">
          <ReactMarkdown>
            {story.content.replace(/\\n/g, '\n')}
          </ReactMarkdown>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <button
            onClick={() => router.push('/stories')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            View More Stories
          </button>
        </div>
      </article>
    </div>
  );
}
