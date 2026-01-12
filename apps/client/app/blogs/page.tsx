'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Search, Calendar, Eye, Tag, BookOpen, Loader2 } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: string;
  tags: string[];
  status: string;
  views: number;
  publishedAt: string;
  createdAt: string;
}

export default function BlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [searchQuery, selectedTag, blogs]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get('http://localhost:3002/api/admin/blogs?status=PUBLISHED');
      setBlogs(data.data);
      
      // Extract all unique tags
      const tags = new Set<string>();
      data.data.forEach((blog: Blog) => {
        blog.tags.forEach(tag => tags.add(tag));
      });
      setAllTags(Array.from(tags));
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterBlogs = () => {
    let filtered = blogs;

    // Filter by search query with flexible matching
    if (searchQuery) {
      const searchTerms = searchQuery.toLowerCase().trim().split(/\s+/);
      
      filtered = filtered.filter(blog => {
        const searchableText = [
          blog.title,
          blog.excerpt,
          blog.content,
          ...blog.tags,
        ].join(' ').toLowerCase();
        
        // Check if ALL search terms exist anywhere in the searchable text
        return searchTerms.every(term => searchableText.includes(term));
      });
    }

    // Filter by selected tag
    if (selectedTag) {
      filtered = filtered.filter(blog => blog.tags.includes(selectedTag));
    }

    setFilteredBlogs(filtered);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleBlogClick = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-16 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f8fafc,#e2e8f0,#dbeafe_90%)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
              Financial Insights & Blog
            </h1>
            <p className="text-xl text-[#0f172a]/80 mb-8 leading-relaxed">
              Discover expert insights, investment strategies, and market analysis to help you make informed financial decisions.
            </p>

            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 shadow-lg text-base"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div className="mb-10">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTag === null
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Topics
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            {filteredBlogs.length === 0 ? (
              'No articles found'
            ) : (
              <>
                <span className="font-semibold text-gray-900">{filteredBlogs.length}</span>{' '}
                {filteredBlogs.length === 1 ? 'article' : 'articles'}
                {searchQuery && ` matching "${searchQuery}"`}
                {selectedTag && ` in "${selectedTag}"`}
              </>
            )}
          </p>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => {
              const isPopular = blog.views >= 100;
              const isTrending = blog.views >= 50;
              
              return (
                <article
                  key={blog.id}
                  onClick={() => handleBlogClick(blog.slug)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-4">
                    {/* Trending/Popular Badge */}
                    {isPopular && (
                      <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        Popular
                      </div>
                    )}
                    {!isPopular && isTrending && (
                      <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        Trending
                      </div>
                    )}

                    {/* Cover Image */}
                    {blog.coverImage ? (
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={blog.coverImage}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = '';
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-gray-300" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    {/* Tags */}
                    {blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                      {blog.title}
                    </h3>
                    
                    {blog.excerpt && (
                      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    )}

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 pt-2">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(blog.publishedAt || blog.createdAt)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5" />
                        {blog.views || 0}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery || selectedTag
                ? 'Try adjusting your search or filter criteria'
                : 'Check back soon for new content!'}
            </p>
            {(searchQuery || selectedTag) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag(null);
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
