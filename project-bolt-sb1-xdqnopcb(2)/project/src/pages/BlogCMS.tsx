import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Eye,
  Calendar,
  Tag,
  User,
  BookOpen,
  Settings,
  Upload,
  AlertCircle,
  CheckCircle,
  LogOut,
  Search,
  Filter,
  MoreVertical,
  Copy,
  ExternalLink,
  Archive,
  Star,
  Clock,
  Globe,
  FileText,
  Download,
  RefreshCw,
  SortAsc,
  SortDesc
} from 'lucide-react';

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

const BlogCMS: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('updatedAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Ankit Sharma',
    publishDate: new Date().toISOString().split('T')[0],
    readTime: 5,
    category: 'DevOps',
    tags: [],
    featured: false,
    image: '',
    status: 'draft'
  });

  const categories = ['DevOps', 'Cloud Computing', 'Cybersecurity', 'Web Development', 'DevSecOps', 'AI/ML', 'Mobile Development', 'Data Science'];
  const authors = ['Ankit Sharma', 'Akshay Gupta', 'Vaibhav Patidar', 'Sameer Khan', 'Ravi Naval'];
  const statuses = ['all', 'draft', 'published', 'archived'];

  // Sample blog posts data to initialize if no posts exist
  const initializeSamplePosts = () => {
    const samplePosts: BlogPost[] = [
      {
        id: '1',
        title: 'The Future of DevOps: Trends and Predictions for 2025',
        slug: 'future-of-devops-2025',
        excerpt: 'Explore the emerging trends in DevOps that will shape the software development landscape in 2025, including AI-driven automation, GitOps, and platform engineering.',
        content: `
          <h2>Introduction</h2>
          <p>DevOps has revolutionized how we build, deploy, and maintain software applications. As we look toward 2025, several emerging trends are set to reshape the DevOps landscape even further.</p>
          
          <h2>1. AI-Driven Automation</h2>
          <p>Artificial Intelligence is becoming increasingly integrated into DevOps workflows. From predictive analytics for system failures to automated code reviews and intelligent deployment strategies, AI is making DevOps more efficient and reliable.</p>
          
          <h3>Key Benefits:</h3>
          <ul>
            <li>Predictive maintenance and failure prevention</li>
            <li>Automated code quality assessment</li>
            <li>Intelligent resource allocation</li>
            <li>Enhanced security threat detection</li>
          </ul>
          
          <h2>2. GitOps and Infrastructure as Code</h2>
          <p>GitOps is gaining momentum as the preferred approach for managing infrastructure and applications. By treating infrastructure as code and using Git as the single source of truth, teams can achieve better consistency, auditability, and collaboration.</p>
          
          <h2>3. Platform Engineering</h2>
          <p>Platform engineering is emerging as a discipline that focuses on building internal developer platforms. These platforms abstract away infrastructure complexity and provide developers with self-service capabilities.</p>
          
          <h2>4. Enhanced Security Integration</h2>
          <p>Security is becoming more deeply integrated into the DevOps pipeline. DevSecOps practices are evolving to include automated security testing, compliance checking, and vulnerability management throughout the development lifecycle.</p>
          
          <h2>Conclusion</h2>
          <p>The future of DevOps is bright, with exciting developments in automation, security, and developer experience. Organizations that embrace these trends will be better positioned to deliver high-quality software faster and more reliably.</p>
        `,
        author: 'Ankit Sharma',
        publishDate: '2024-12-20',
        readTime: 8,
        category: 'DevOps',
        tags: ['DevOps', 'Automation', 'AI', 'GitOps', 'Platform Engineering'],
        featured: true,
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'published',
        views: 1250,
        likes: 89,
        createdAt: '2024-12-20T10:00:00Z',
        updatedAt: '2024-12-20T10:00:00Z'
      },
      {
        id: '2',
        title: 'AWS Cost Optimization: 10 Proven Strategies to Reduce Your Cloud Bill',
        slug: 'aws-cost-optimization-strategies',
        excerpt: 'Learn practical strategies to optimize your AWS costs without compromising performance. From right-sizing instances to leveraging spot instances and reserved capacity.',
        content: `
          <h2>Introduction</h2>
          <p>Cloud costs can quickly spiral out of control if not properly managed. This comprehensive guide covers proven strategies to optimize your AWS spending while maintaining performance and reliability.</p>
          
          <h2>1. Right-Sizing Your Instances</h2>
          <p>One of the most effective ways to reduce costs is to ensure your EC2 instances are properly sized for your workloads. Use AWS CloudWatch metrics to analyze CPU, memory, and network utilization.</p>
          
          <h2>2. Leverage Reserved Instances and Savings Plans</h2>
          <p>For predictable workloads, Reserved Instances and Savings Plans can provide significant cost savings compared to On-Demand pricing.</p>
          
          <h2>3. Implement Auto Scaling</h2>
          <p>Auto Scaling ensures you only pay for the resources you need when you need them. Configure scaling policies based on demand patterns.</p>
          
          <h2>4. Use Spot Instances for Fault-Tolerant Workloads</h2>
          <p>Spot Instances can provide up to 90% cost savings for workloads that can tolerate interruptions.</p>
          
          <h2>5. Optimize Storage Costs</h2>
          <p>Implement lifecycle policies for S3, use appropriate storage classes, and regularly clean up unused EBS volumes and snapshots.</p>
          
          <h2>Conclusion</h2>
          <p>Cost optimization is an ongoing process that requires regular monitoring and adjustment. Implement these strategies gradually and measure their impact on your AWS bill.</p>
        `,
        author: 'Akshay Gupta',
        publishDate: '2024-12-18',
        readTime: 12,
        category: 'Cloud Computing',
        tags: ['AWS', 'Cost Optimization', 'Cloud', 'FinOps'],
        featured: true,
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'published',
        views: 2100,
        likes: 156,
        createdAt: '2024-12-18T10:00:00Z',
        updatedAt: '2024-12-18T10:00:00Z'
      },
      {
        id: '3',
        title: 'Implementing Zero Trust Security in Modern Applications',
        slug: 'zero-trust-security-implementation',
        excerpt: 'A comprehensive guide to implementing Zero Trust security architecture in your applications, covering identity verification, least privilege access, and continuous monitoring.',
        content: `
          <h2>Introduction</h2>
          <p>Zero Trust security is a strategic approach to cybersecurity that secures an organization by eliminating trust from the organization's network architecture and requiring verification for every person and device trying to access resources.</p>
          
          <h2>Core Principles</h2>
          <p>The Zero Trust model is built on three core principles:</p>
          <ul>
            <li><strong>Never trust, always verify:</strong> Every user and device must be authenticated and authorized</li>
            <li><strong>Least privilege access:</strong> Users should only have access to what they absolutely need</li>
            <li><strong>Assume breach:</strong> Design systems assuming that attackers are already inside</li>
          </ul>
          
          <h2>Implementation Strategy</h2>
          <p>Implementing Zero Trust requires a comprehensive approach that includes identity management, network segmentation, and continuous monitoring.</p>
          
          <h2>Benefits</h2>
          <p>Organizations that implement Zero Trust see significant improvements in their security posture, including reduced risk of data breaches and better compliance with regulatory requirements.</p>
        `,
        author: 'Vaibhav Patidar',
        publishDate: '2024-12-15',
        readTime: 10,
        category: 'Cybersecurity',
        tags: ['Security', 'Zero Trust', 'Identity Management', 'DevSecOps'],
        featured: false,
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'published',
        views: 890,
        likes: 67,
        createdAt: '2024-12-15T10:00:00Z',
        updatedAt: '2024-12-15T10:00:00Z'
      },
      {
        id: '4',
        title: 'Kubernetes Best Practices: From Development to Production',
        slug: 'kubernetes-best-practices',
        excerpt: 'Master Kubernetes deployment with our comprehensive guide covering container orchestration, resource management, security, and monitoring best practices.',
        content: `
          <h2>Introduction</h2>
          <p>Kubernetes has become the de facto standard for container orchestration. This guide covers essential best practices for deploying and managing Kubernetes clusters in production environments.</p>
          
          <h2>Resource Management</h2>
          <p>Proper resource allocation is crucial for optimal performance. Set appropriate CPU and memory limits for all containers to prevent resource contention.</p>
          
          <h2>Security Considerations</h2>
          <p>Implement pod security policies, use network policies for traffic control, and regularly update your cluster components to maintain security.</p>
          
          <h2>Monitoring and Observability</h2>
          <p>Set up comprehensive monitoring using tools like Prometheus and Grafana to gain visibility into your cluster's health and performance.</p>
          
          <h2>Conclusion</h2>
          <p>Following these best practices will help you build robust, scalable, and secure Kubernetes deployments that can handle production workloads effectively.</p>
        `,
        author: 'Ankit Sharma',
        publishDate: '2024-12-12',
        readTime: 15,
        category: 'DevOps',
        tags: ['Kubernetes', 'Containers', 'Orchestration', 'Best Practices'],
        featured: false,
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'published',
        views: 1456,
        likes: 123,
        createdAt: '2024-12-12T10:00:00Z',
        updatedAt: '2024-12-12T10:00:00Z'
      },
      {
        id: '5',
        title: 'Building Scalable React Applications: Architecture and Performance',
        slug: 'scalable-react-applications',
        excerpt: 'Learn how to build scalable React applications with proper architecture, state management, performance optimization, and testing strategies.',
        content: `
          <h2>Introduction</h2>
          <p>Building scalable React applications requires careful consideration of architecture, state management, and performance optimization strategies.</p>
          
          <h2>Component Architecture</h2>
          <p>Design your components with reusability and maintainability in mind. Use composition over inheritance and keep components focused on a single responsibility.</p>
          
          <h2>State Management</h2>
          <p>Choose the right state management solution for your application size and complexity. Consider React Context, Redux, or Zustand based on your needs.</p>
          
          <h2>Performance Optimization</h2>
          <p>Implement code splitting, lazy loading, and memoization to ensure your application performs well as it scales.</p>
          
          <h2>Testing Strategy</h2>
          <p>Establish a comprehensive testing strategy that includes unit tests, integration tests, and end-to-end tests to maintain code quality.</p>
        `,
        author: 'Akshay Gupta',
        publishDate: '2024-12-10',
        readTime: 11,
        category: 'Web Development',
        tags: ['React', 'JavaScript', 'Performance', 'Architecture'],
        featured: false,
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'published',
        views: 1234,
        likes: 98,
        createdAt: '2024-12-10T10:00:00Z',
        updatedAt: '2024-12-10T10:00:00Z'
      },
      {
        id: '6',
        title: 'CI/CD Pipeline Security: Protecting Your Software Supply Chain',
        slug: 'cicd-pipeline-security',
        excerpt: 'Secure your CI/CD pipelines against supply chain attacks with comprehensive security measures, vulnerability scanning, and secure coding practices.',
        content: `
          <h2>Introduction</h2>
          <p>CI/CD pipelines are critical infrastructure that requires robust security measures to protect against supply chain attacks and ensure the integrity of your software delivery process.</p>
          
          <h2>Pipeline Security Fundamentals</h2>
          <p>Implement security scanning at every stage of your pipeline, from source code analysis to container image scanning and runtime protection.</p>
          
          <h2>Access Control</h2>
          <p>Use role-based access control and principle of least privilege to limit who can modify pipeline configurations and access sensitive resources.</p>
          
          <h2>Vulnerability Management</h2>
          <p>Integrate automated vulnerability scanning tools to identify and remediate security issues before they reach production.</p>
          
          <h2>Best Practices</h2>
          <p>Follow industry best practices for secure CI/CD, including secret management, artifact signing, and audit logging.</p>
        `,
        author: 'Vaibhav Patidar',
        publishDate: '2024-12-08',
        readTime: 9,
        category: 'DevSecOps',
        tags: ['CI/CD', 'Security', 'Supply Chain', 'DevSecOps'],
        featured: false,
        image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
        status: 'published',
        views: 987,
        likes: 76,
        createdAt: '2024-12-08T10:00:00Z',
        updatedAt: '2024-12-08T10:00:00Z'
      }
    ];
    
    localStorage.setItem('blogPosts', JSON.stringify(samplePosts));
    return samplePosts;
  };

  // Check authentication on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('blogAdminAuth');
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }
  }, [navigate]);

  useEffect(() => {
    // Load posts from localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      try {
        const parsedPosts = JSON.parse(savedPosts);
        setPosts(parsedPosts);
        setFilteredPosts(parsedPosts);
      } catch (error) {
        console.error('Error parsing saved posts:', error);
        const samplePosts = initializeSamplePosts();
        setPosts(samplePosts);
        setFilteredPosts(samplePosts);
      }
    } else {
      // Initialize with sample posts if no posts exist
      const samplePosts = initializeSamplePosts();
      setPosts(samplePosts);
      setFilteredPosts(samplePosts);
    }
  }, []);

  // Filter and sort posts
  useEffect(() => {
    let filtered = posts;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(post => post.status === statusFilter);
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(post => post.category === categoryFilter);
    }

    // Sort posts
    filtered.sort((a, b) => {
      let aValue = a[sortBy as keyof BlogPost];
      let bValue = b[sortBy as keyof BlogPost];

      if (sortBy === 'publishDate' || sortBy === 'createdAt' || sortBy === 'updatedAt') {
        aValue = new Date(aValue as string).getTime();
        bValue = new Date(bValue as string).getTime();
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    setFilteredPosts(filtered);
  }, [posts, searchTerm, statusFilter, categoryFilter, sortBy, sortOrder]);

  const handleLogout = () => {
    localStorage.removeItem('blogAdminAuth');
    localStorage.removeItem('blogAdminUser');
    navigate('/admin/login');
  };

  const savePosts = (updatedPosts: BlogPost[]) => {
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'tags') {
      const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
      setFormData(prev => ({ ...prev, tags }));
    } else {
      setFormData(prev => ({ 
        ...prev, 
        [name]: value,
        ...(name === 'title' && { slug: generateSlug(value) })
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.excerpt) {
      showNotification('error', 'Please fill in all required fields');
      return;
    }

    const now = new Date().toISOString();
    const postData: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      title: formData.title!,
      slug: formData.slug || generateSlug(formData.title!),
      excerpt: formData.excerpt!,
      content: formData.content!,
      author: formData.author!,
      publishDate: formData.publishDate!,
      readTime: formData.readTime || 5,
      category: formData.category!,
      tags: formData.tags || [],
      featured: formData.featured || false,
      image: formData.image || 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: formData.status as 'draft' | 'published' | 'archived',
      views: editingPost?.views || 0,
      likes: editingPost?.likes || 0,
      createdAt: editingPost?.createdAt || now,
      updatedAt: now
    };

    let updatedPosts;
    if (editingPost) {
      updatedPosts = posts.map(post => post.id === editingPost.id ? postData : post);
      showNotification('success', 'Post updated successfully!');
    } else {
      updatedPosts = [...posts, postData];
      showNotification('success', 'Post created successfully!');
    }

    savePosts(updatedPosts);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: 'Ankit Sharma',
      publishDate: new Date().toISOString().split('T')[0],
      readTime: 5,
      category: 'DevOps',
      tags: [],
      featured: false,
      image: '',
      status: 'draft'
    });
    setEditingPost(null);
    setIsEditing(false);
    setShowForm(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      ...post,
      tags: post.tags
    });
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      savePosts(updatedPosts);
      showNotification('success', 'Post deleted successfully!');
    }
  };

  const handleStatusChange = (id: string, newStatus: 'draft' | 'published' | 'archived') => {
    const updatedPosts = posts.map(post => 
      post.id === id 
        ? { ...post, status: newStatus, updatedAt: new Date().toISOString() }
        : post
    );
    savePosts(updatedPosts);
    showNotification('success', `Post ${newStatus} successfully!`);
  };

  const handleBulkAction = (action: string) => {
    if (selectedPosts.length === 0) {
      showNotification('error', 'Please select posts to perform bulk actions');
      return;
    }

    let updatedPosts = [...posts];
    const now = new Date().toISOString();

    switch (action) {
      case 'delete':
        if (window.confirm(`Are you sure you want to delete ${selectedPosts.length} posts? This action cannot be undone.`)) {
          updatedPosts = posts.filter(post => !selectedPosts.includes(post.id));
          showNotification('success', `${selectedPosts.length} posts deleted successfully!`);
        }
        break;
      case 'publish':
        updatedPosts = posts.map(post => 
          selectedPosts.includes(post.id) 
            ? { ...post, status: 'published' as const, updatedAt: now }
            : post
        );
        showNotification('success', `${selectedPosts.length} posts published successfully!`);
        break;
      case 'draft':
        updatedPosts = posts.map(post => 
          selectedPosts.includes(post.id) 
            ? { ...post, status: 'draft' as const, updatedAt: now }
            : post
        );
        showNotification('success', `${selectedPosts.length} posts moved to draft!`);
        break;
      case 'archive':
        updatedPosts = posts.map(post => 
          selectedPosts.includes(post.id) 
            ? { ...post, status: 'archived' as const, updatedAt: now }
            : post
        );
        showNotification('success', `${selectedPosts.length} posts archived successfully!`);
        break;
      case 'feature':
        updatedPosts = posts.map(post => 
          selectedPosts.includes(post.id) 
            ? { ...post, featured: true, updatedAt: now }
            : post
        );
        showNotification('success', `${selectedPosts.length} posts featured successfully!`);
        break;
    }

    if (updatedPosts !== posts) {
      savePosts(updatedPosts);
    }
    setSelectedPosts([]);
    setShowBulkActions(false);
  };

  const handleSelectAll = () => {
    if (selectedPosts.length === filteredPosts.length) {
      setSelectedPosts([]);
    } else {
      setSelectedPosts(filteredPosts.map(post => post.id));
    }
  };

  const copyPostUrl = (slug: string) => {
    const url = `${window.location.origin}/blog/${slug}`;
    navigator.clipboard.writeText(url);
    showNotification('success', 'Post URL copied to clipboard!');
  };

  const exportPosts = () => {
    const dataStr = JSON.stringify(posts, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `blog-posts-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('success', 'Posts exported successfully!');
  };

  const currentUser = localStorage.getItem('blogAdminUser');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'archived': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Blog <span className="text-electric-pink">CMS</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Welcome back, {currentUser}! Manage your blog posts and content.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={exportPosts}
              className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              <span>New Post</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Notification */}
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
              notification.type === 'success' 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            }`}
          >
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>{notification.message}</span>
          </motion.div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-electric-pink" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{posts.length}</p>
                <p className="text-gray-600 dark:text-gray-400">Total Posts</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-3">
              <Globe className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {posts.filter(p => p.status === 'published').length}
                </p>
                <p className="text-gray-600 dark:text-gray-400">Published</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {posts.filter(p => p.status === 'draft').length}
                </p>
                <p className="text-gray-600 dark:text-gray-400">Drafts</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-azure" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {posts.filter(p => p.featured).length}
                </p>
                <p className="text-gray-600 dark:text-gray-400">Featured</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
            >
              <option value="updatedAt">Last Updated</option>
              <option value="createdAt">Created Date</option>
              <option value="publishDate">Publish Date</option>
              <option value="title">Title</option>
              <option value="author">Author</option>
            </select>

            {/* Sort Order */}
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
              <span>{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</span>
            </button>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedPosts.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-blue-700 dark:text-blue-400 font-medium">
                {selectedPosts.length} post{selectedPosts.length > 1 ? 's' : ''} selected
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleBulkAction('publish')}
                  className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
                >
                  Publish
                </button>
                <button
                  onClick={() => handleBulkAction('draft')}
                  className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700 transition-colors"
                >
                  Draft
                </button>
                <button
                  onClick={() => handleBulkAction('archive')}
                  className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 transition-colors"
                >
                  Archive
                </button>
                <button
                  onClick={() => handleBulkAction('feature')}
                  className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-colors"
                >
                  Feature
                </button>
                <button
                  onClick={() => handleBulkAction('delete')}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Form Modal */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {isEditing ? 'Edit Post' : 'Create New Post'}
                </h2>
                <button
                  onClick={resetForm}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
                      placeholder="Enter post title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Slug
                    </label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
                      placeholder="Auto-generated from title"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white resize-none"
                    placeholder="Brief description of the post"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Content *
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={12}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white resize-none"
                    placeholder="Write your post content here (HTML supported)"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Author
                    </label>
                    <select
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
                    >
                      {authors.map(author => (
                        <option key={author} value={author}>{author}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Read Time (minutes)
                    </label>
                    <input
                      type="number"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tags (comma-separated)
                    </label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags?.join(', ')}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
                      placeholder="DevOps, Cloud, Security"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Publish Date
                    </label>
                    <input
                      type="date"
                      name="publishDate"
                      value={formData.publishDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-electric-pink border-gray-300 rounded focus:ring-electric-pink"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Featured Post</span>
                  </label>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Save className="w-5 h-5" />
                    <span>{isEditing ? 'Update Post' : 'Create Post'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Posts Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">All Posts</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleSelectAll}
                className="text-sm text-electric-pink hover:text-azure transition-colors"
              >
                {selectedPosts.length === filteredPosts.length ? 'Deselect All' : 'Select All'}
              </button>
              <span className="text-sm text-gray-500">({filteredPosts.length} posts)</span>
            </div>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No posts found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {posts.length === 0 ? 'Create your first blog post to get started.' : 'Try adjusting your filters or search terms.'}
              </p>
              {posts.length === 0 && (
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-electric-pink to-azure text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Create First Post
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedPosts.length === filteredPosts.length && filteredPosts.length > 0}
                        onChange={handleSelectAll}
                        className="w-4 h-4 text-electric-pink border-gray-300 rounded focus:ring-electric-pink"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Post
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedPosts.includes(post.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedPosts([...selectedPosts, post.id]);
                            } else {
                              setSelectedPosts(selectedPosts.filter(id => id !== post.id));
                            }
                          }}
                          className="w-4 h-4 text-electric-pink border-gray-300 rounded focus:ring-electric-pink"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                              {post.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              {post.featured && (
                                <span className="inline-block bg-electric-pink text-white text-xs px-2 py-1 rounded-full">
                                  Featured
                                </span>
                              )}
                              <span className="text-xs text-gray-500">
                                {post.readTime} min read
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-900 dark:text-white">{post.author}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-azure/10 text-azure">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={post.status}
                          onChange={(e) => handleStatusChange(post.id, e.target.value as 'draft' | 'published' | 'archived')}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors border-0 ${getStatusColor(post.status)}`}
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                          <option value="archived">Archived</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">Updated {new Date(post.updatedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          {post.status === 'published' && (
                            <a
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-700 transition-colors"
                              title="View Post"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          <button
                            onClick={() => copyPostUrl(post.slug)}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            title="Copy URL"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleEdit(post)}
                            className="text-electric-pink hover:text-azure transition-colors"
                            title="Edit Post"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            title="Delete Post"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCMS;