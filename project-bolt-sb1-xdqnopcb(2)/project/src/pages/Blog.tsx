import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  TrendingUp,
  BookOpen,
  Filter,
  ChevronRight,
  Settings
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  status: 'draft' | 'published' | 'archived';
  views?: number;
  likes?: number;
  createdAt: string;
  updatedAt: string;
}

const Blog: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [postsRef, postsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    // Load posts from localStorage and filter only published posts
    const savedPosts = localStorage.getItem('blogPosts');
    let allPosts: BlogPost[] = [];
    
    if (savedPosts) {
      try {
        allPosts = JSON.parse(savedPosts);
      } catch (error) {
        console.error('Error parsing saved posts:', error);
        allPosts = [];
      }
    }

    // Only show published posts on the blog
    const publishedPosts = allPosts.filter(post => post.status === 'published');
    
    // Sort by publish date (newest first)
    publishedPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    
    setPosts(publishedPosts);
  }, []);

  // Get all unique categories and tags from published posts
  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory, selectedTag]);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Tech Blog - Latest Insights & Tutorials | Codigohunt Solutions"
        description="Stay updated with the latest trends, insights, and best practices in technology, DevOps, cloud computing, and software development from our expert team."
        keywords="tech blog, DevOps tutorials, cloud computing, cybersecurity, web development, software engineering, IT insights"
        url="https://silly-otter-2e6a50.netlify.app/blog"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-electric-pink/10 via-azure/10 to-powder-blue/10 dark:from-electric-pink/5 dark:via-azure/5 dark:to-powder-blue/5">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <BookOpen className="w-8 h-8 text-electric-pink" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Tech <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Blog</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest trends, insights, and best practices in technology, DevOps, cloud computing, and software development.
              </p>
              
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white appearance-none"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Tags */}
                {allTags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Popular Tags:</span>
                    {allTags.slice(0, 8).map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          selectedTag === tag
                            ? 'bg-electric-pink text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-electric-pink hover:text-white'
                        }`}
                      >
                        <Tag className="w-3 h-3 inline mr-1" />
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured <span className="text-electric-pink">Articles</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Our most popular and trending tech insights
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-electric-pink text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-azure text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-electric-pink transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center space-x-2 text-electric-pink hover:text-azure transition-colors font-medium"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section ref={postsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={postsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Latest <span className="text-azure">Articles</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Fresh insights and tutorials from our tech experts
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate={postsInView ? "animate" : "initial"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-azure text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-electric-pink transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-electric-pink hover:text-azure transition-colors font-medium text-sm"
                    >
                      <span>Read Article</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search criteria or browse all categories.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-electric-pink via-azure to-powder-blue">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <TrendingUp className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated with Tech Trends
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to our newsletter and get the latest tech insights delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-electric-pink px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;