'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Search, Calendar, Eye, Newspaper, Loader2 } from 'lucide-react';

interface Story {
  id: string;
  label: string;
  heading: string;
  teaser: string;
  imageUrl: string;
  status: string;
  views: number;
  publishedAt: string;
  createdAt: string;
}

export default function StoriesPage() {
  const router = useRouter();
  const [stories, setStories] = useState<Story[]>([]);
  const [filteredStories, setFilteredStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [allLabels, setAllLabels] = useState<string[]>([]);

  useEffect(() => {
    fetchStories();
  }, []);

  useEffect(() => {
    filterStories();
  }, [searchQuery, selectedLabel, stories]);

  const fetchStories = async () => {
    try {
      const { data } = await axios.get('http://localhost:3002/api/admin/stories?status=PUBLISHED');
      setStories(data.data);
      
      // Extract all unique labels
      const labels = new Set<string>();
      data.data.forEach((story: Story) => {
        labels.add(story.label);
      });
      setAllLabels(Array.from(labels));
    } catch (error) {
      console.error('Failed to fetch stories:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterStories = () => {
    let filtered = stories;

    // Filter by search query
    if (searchQuery) {
      const searchTerms = searchQuery.toLowerCase().trim().split(/\s+/);
      
      filtered = filtered.filter(story => {
        const searchableText = [
          story.heading,
          story.teaser,
          story.label,
        ].join(' ').toLowerCase();
        
        return searchTerms.every(term => searchableText.includes(term));
      });
    }

    // Filter by selected label
    if (selectedLabel) {
      filtered = filtered.filter(story => story.label === selectedLabel);
    }

    setFilteredStories(filtered);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleStoryClick = (id: string) => {
    router.push(`/stories/${id}`);
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading stories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-16 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#fffbea,#fef3c7,#fde68a_90%)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6 leading-tight">
              Market Stories & News
            </h1>
            <p className="text-xl text-black/80 mb-8 leading-relaxed">
              Stay updated with the latest financial news, market trends, and expert analysis from the world of investing.
            </p>

            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 shadow-lg text-base"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Labels Filter */}
        {allLabels.length > 0 && (
          <div className="mb-10">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedLabel(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedLabel === null
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Stories
              </button>
              {allLabels.map((label) => (
                <button
                  key={label}
                  onClick={() => setSelectedLabel(label === selectedLabel ? null : label)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedLabel === label
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            {filteredStories.length === 0 ? (
              'No stories found'
            ) : (
              <>
                <span className="font-semibold text-gray-900">{filteredStories.length}</span>{' '}
                {filteredStories.length === 1 ? 'story' : 'stories'}
                {searchQuery && ` matching "${searchQuery}"`}
                {selectedLabel && ` in "${selectedLabel}"`}
              </>
            )}
          </p>
        </div>

        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                onClick={() => handleStoryClick(story.id)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-4">
                  {/* Label Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLabelColor(story.label)}`}>
                      {story.label}
                    </span>
                  </div>

                  {/* Cover Image */}
                  {story.imageUrl ? (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={story.imageUrl}
                        alt={story.heading}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = '';
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] flex items-center justify-center">
                      <Newspaper className="h-12 w-12 text-gray-300" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {story.heading}
                  </h3>
                  
                  {story.teaser && (
                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                      {story.teaser}
                    </p>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 pt-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(story.publishedAt || story.createdAt)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5" />
                      {story.views || 0}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Newspaper className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No stories found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery || selectedLabel
                ? 'Try adjusting your search or filter criteria'
                : 'Check back soon for new content!'}
            </p>
            {(searchQuery || selectedLabel) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLabel(null);
                }}
                className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
