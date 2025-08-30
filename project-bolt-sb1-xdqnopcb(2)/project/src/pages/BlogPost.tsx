import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  Tag,
  ChevronRight,
  MessageCircle,
  Heart,
  Eye
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

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Load posts from localStorage
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

    // Only show published posts
    const publishedPosts = allPosts.filter(post => post.status === 'published');
    
    // Find the post by slug
    const foundPost = publishedPosts.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (same category, excluding current post)
      const related = publishedPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3);
      setRelatedPosts(related);

      // Update view count
      const updatedPosts = allPosts.map(p => 
        p.id === foundPost.id 
          ? { ...p, views: (p.views || 0) + 1 }
          : p
      );
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    }
  }, [slug]);

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('URL copied to clipboard!');
    }
  };

  const handleLike = () => {
    if (!post) return;
    
    setIsLiked(!isLiked);
    
    // Update like count in localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      try {
        const parsedPosts = JSON.parse(savedPosts);
        const updatedPosts = parsedPosts.map((p: BlogPost) => 
          p.id === post.id 
            ? { ...p, likes: (p.likes || 0) + (isLiked ? -1 : 1) }
            : p
        );
        localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      } catch (error) {
        console.error('Error updating likes:', error);
      }
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${post.title} | Codigohunt Solutions Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        url={`https://silly-otter-2e6a50.netlify.app/blog/${post.slug}`}
        image={post.image}
        type="article"
        author={post.author}
        publishedTime={post.publishDate}
        modifiedTime={post.updatedAt}
        section={post.category}
        tags={post.tags}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-electric-pink/10 via-azure/10 to-powder-blue/10 dark:from-electric-pink/5 dark:via-azure/5 dark:to-powder-blue/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                <Link to="/" className="hover:text-electric-pink transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blog" className="hover:text-electric-pink transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-electric-pink">{post.title}</span>
              </div>

              {/* Category and Meta */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-azure text-white px-4 py-2 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views?.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes} likes</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author and Meta Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-pink to-azure rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{post.author}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
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
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                      isLiked
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span>Like</span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-electric-pink hover:text-white px-4 py-2 rounded-full transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <div 
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.article>

            {/* Article Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 dark:text-gray-400">Share this article:</span>
                  <button
                    onClick={handleShare}
                    className="flex items-center space-x-2 text-electric-pink hover:text-azure transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
                
                <Link
                  to="/blog"
                  className="inline-flex items-center space-x-2 text-electric-pink hover:text-azure transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Related <span className="text-electric-pink">Articles</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  More insights from the same category
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-azure text-white px-3 py-1 rounded-full text-sm font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-electric-pink transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                        {relatedPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime} min read</span>
                      </div>

                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center space-x-2 text-electric-pink hover:text-azure transition-colors font-medium text-sm"
                      >
                        <span>Read Article</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Comments Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <MessageCircle className="w-12 h-12 text-electric-pink mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Join the Discussion
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have thoughts on this article? We'd love to hear from you!
              </p>
              <a
                href={`https://wa.me/919461232921?text=${encodeURIComponent(`I read your article "${post.title}" and would like to discuss it further.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Discussion</span>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;