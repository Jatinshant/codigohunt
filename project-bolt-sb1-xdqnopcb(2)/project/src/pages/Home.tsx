import React, { useRef, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award, 
  TrendingUp,
  Code,
  Cloud,
  Shield,
  Smartphone,
  Database,
  Settings,
  BarChart3,
  Lock,
  MessageCircle,
  Phone,
  ChevronRight,
  Star,
  Zap,
  Target,
  Layers,
  Monitor,
  Server,
  Cpu,
  HardDrive,
  Network,
  GitBranch,
  Workflow,
  Eye,
  Clock,
  DollarSign,
  Briefcase,
  Building,
  Factory,
  GraduationCap,
  Heart,
  ShoppingCart,
  Truck,
  Banknote,
  FileText,
  Headphones,
  Lightbulb,
  Rocket,
  Gauge
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

// Lazy load heavy components
const BackgroundElements = lazy(() => import('../components/BackgroundElements'));

// Loading fallback component
const ComponentLoader = () => (
  <div className="flex items-center justify-center p-4">
    <div className="w-6 h-6 border-2 border-electric-pink border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Home: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello! I'd like to book a free consultation with Codigohunt Solutions."
  );

  // Animation variants
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

  // Intersection Observer hooks with lower thresholds for mobile
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyRef, whyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesInViewRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [consultancyRef, consultancyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [techStackRef, techStackInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    { 
      id: 'devops-consulting', 
      name: 'DevOps Consulting', 
      icon: Settings, 
      description: 'Streamline your development workflow with CI/CD, monitoring, and cloud solutions.',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Cloud Migration']
    },
    { 
      id: 'app-development', 
      name: 'App Development', 
      icon: Smartphone, 
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Native iOS/Android', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization']
    },
    { 
      id: 'web-development', 
      name: 'Web Development', 
      icon: Code, 
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce', 'CMS Development']
    },
    { 
      id: 'cybersecurity', 
      name: 'Cybersecurity', 
      icon: Shield, 
      description: 'Comprehensive security solutions to protect your digital assets.',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Security Auditing', 'Vulnerability Testing', 'Network Security', 'Compliance']
    },
    { 
      id: 'hosting-deployment', 
      name: 'Cloud Hosting', 
      icon: Cloud, 
      description: 'Scalable cloud infrastructure and deployment solutions.',
      color: 'from-indigo-500 to-blue-500',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Auto-scaling', 'Load Balancing', 'CDN Setup', 'Disaster Recovery']
    },
    { 
      id: 'erp-cms', 
      name: 'ERP & CMS', 
      icon: Database, 
      description: 'Complete enterprise resource planning and content management systems.',
      color: 'from-yellow-500 to-amber-500',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Custom ERP', 'CRM Integration', 'Workflow Automation', 'Analytics']
    }
  ];

  const consultancies = [
    { 
      id: 'aws-cloud', 
      name: 'AWS Cloud Consultancy', 
      icon: Cloud, 
      description: 'Expert guidance for AWS cloud migration and optimization.',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 'devsecops', 
      name: 'DevSecOps Advisory', 
      icon: Lock, 
      description: 'Integrate security seamlessly into your development pipeline.',
      color: 'from-teal-500 to-green-500',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 'cybersecurity-risk', 
      name: 'Security & Compliance', 
      icon: Shield, 
      description: 'Comprehensive risk assessment and compliance frameworks.',
      color: 'from-red-500 to-pink-500',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 'business-strategy', 
      name: 'Business Strategy', 
      icon: BarChart3, 
      description: 'Strategic technology consulting for business growth.',
      color: 'from-blue-500 to-purple-500',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered', icon: Award, description: 'Successfully completed projects across various industries' },
    { number: '10+', label: 'Global Clients', icon: Globe, description: 'Trusted by clients from different countries and regions' },
    { number: '20+', label: 'Industry Domains', icon: Users, description: 'Experience across diverse business sectors' },
    { number: '98%', label: 'Client Retention', icon: TrendingUp, description: 'High client satisfaction and long-term partnerships' }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Engineers with Enterprise Experience',
      description: 'Our team brings 5+ years of experience from leading technology companies, ensuring enterprise-grade solutions that scale with your business needs.',
      icon: Users,
      features: ['Certified professionals', 'Enterprise-grade solutions', 'Proven methodologies', 'Industry best practices']
    },
    {
      title: 'End-to-End Product Ownership',
      description: 'We take complete responsibility for your project from conception to deployment and ongoing maintenance, ensuring seamless delivery.',
      icon: CheckCircle,
      features: ['Full project lifecycle', 'Quality assurance', 'Post-deployment support', 'Continuous optimization']
    },
    {
      title: 'Agile & Scalable Deployment',
      description: 'Using modern DevOps practices and cloud-native architectures for rapid, scalable deployments that grow with your business.',
      icon: TrendingUp,
      features: ['CI/CD pipelines', 'Auto-scaling infrastructure', 'Microservices architecture', 'Cloud-native solutions']
    },
    {
      title: '24/7 Dedicated Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly with minimal downtime.',
      icon: Shield,
      features: ['24/7 monitoring', 'Proactive maintenance', 'Emergency response', 'Performance optimization']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'HIPAA-compliant solutions for healthcare providers' },
    { name: 'E-commerce', icon: ShoppingCart, description: 'Scalable platforms for online retail businesses' },
    { name: 'Finance', icon: Banknote, description: 'Secure financial applications and trading platforms' },
    { name: 'Education', icon: GraduationCap, description: 'Learning management systems and educational tools' },
    { name: 'Manufacturing', icon: Factory, description: 'Industrial IoT and automation solutions' },
    { name: 'Logistics', icon: Truck, description: 'Supply chain and fleet management systems' },
    { name: 'Real Estate', icon: Building, description: 'Property management and CRM solutions' },
    { name: 'Legal', icon: FileText, description: 'Case management and document automation' }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, understand your business goals, and create a comprehensive project roadmap.',
      icon: Lightbulb,
      deliverables: ['Requirements analysis', 'Technical specification', 'Project timeline', 'Resource allocation']
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design scalable architecture and create intuitive user interfaces that align with your brand.',
      icon: Layers,
      deliverables: ['System architecture', 'UI/UX designs', 'Database design', 'Security framework']
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing ensures high-quality code and rapid iteration cycles.',
      icon: Code,
      deliverables: ['Clean code', 'Unit testing', 'Integration testing', 'Performance optimization']
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'Seamless deployment to production with monitoring, backup, and rollback strategies in place.',
      icon: Rocket,
      deliverables: ['Production deployment', 'Monitoring setup', 'Backup systems', 'Documentation']
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and optimization to ensure your solution continues to perform at its best.',
      icon: Headphones,
      deliverables: ['24/7 support', 'Regular updates', 'Performance monitoring', 'Security patches']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CTO',
      content: 'Codigohunt Solutions transformed our infrastructure with their DevOps expertise. Our deployment time reduced from hours to minutes, and system reliability improved dramatically.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      company: 'Global Retail Corp',
      role: 'IT Director',
      content: 'The team delivered an exceptional e-commerce platform that handles our peak traffic seamlessly. Their attention to security and performance is outstanding.',
      rating: 5,
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      company: 'HealthCare Plus',
      role: 'Operations Manager',
      content: 'Their cybersecurity solutions gave us peace of mind. The comprehensive security audit and implementation exceeded our compliance requirements.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const techStack = [
    {
      category: 'Frontend',
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
      icon: Monitor
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'Java', 'C#', '.NET'],
      icon: Server
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      icon: Cloud
    },
    {
      category: 'Databases',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB'],
      icon: Database
    },
    {
      category: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      icon: Smartphone
    },
    {
      category: 'AI & Analytics',
      technologies: ['TensorFlow', 'PyTorch', 'Tableau', 'Power BI'],
      icon: Cpu
    }
  ];

  return (
    <>
      <SEOHead 
        title="Codigohunt Solutions - Premier IT Consultancy & Services"
        description="Premier IT consultancy and services firm delivering high-performance, scalable, and secure digital solutions globally. Expert DevOps, Cloud, and Development Solutions."
        keywords="IT Consultancy, DevOps, Cloud Services, Web Development, Cybersecurity, ERP Solutions, Digital Marketing, App Development, Custom Software, IT Support, Jaipur IT Company"
        url="https://silly-otter-2e6a50.netlify.app"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="hero-section relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Lazy load background elements */}
          <Suspense fallback={null}>
            <BackgroundElements />
          </Suspense>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-electric-pink via-azure to-powder-blue bg-clip-text text-transparent leading-tight block">
                    Empowering Digital
                  </span>
                  <span className="text-gray-900 dark:text-white block">
                    Innovation
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                  Driven by DevOps, Cloud, and Development Expertise. 
                  <br className="hidden sm:block" />
                  We build what your business needs to thrive in the digital age.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4"
              >
                <motion.button
                  onClick={scrollToServices}
                  className="group bg-gradient-to-r from-electric-pink to-azure text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center transform-gpu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <motion.a
                  href={`https://wa.me/919461232921?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-electric-pink text-electric-pink hover:bg-electric-pink hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center transform-gpu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </motion.a>
              </motion.div>

              {/* Hero Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 px-4 transform-gpu"
              >
                {[
                  { icon: Zap, text: 'Fast Delivery' },
                  { icon: Shield, text: 'Secure Solutions' },
                  { icon: Target, text: 'Goal-Oriented' },
                  { icon: Gauge, text: 'High Performance' }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center p-3 sm:p-4 bg-white/10 dark:bg-gray-800/30 rounded-lg backdrop-blur-sm transform-gpu">
                      <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-electric-pink mx-auto mb-2" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{feature.text}</span>
                    </div>
                  );
                })}
              </motion.div>

              {/* Floating Elements */}
              <div className="relative transform-gpu">
                <motion.div
                  className="absolute top-0 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-electric-pink to-azure rounded-full opacity-20 transform-gpu"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute top-10 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-azure to-powder-blue rounded-full opacity-20 transform-gpu"
                  animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-electric-pink to-azure rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm sm:text-base text-gray-900 dark:text-white font-medium mb-2">
                        {stat.label}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                        {stat.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section ref={whyRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Codigohunt</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results and sustainable growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-electric-pink to-azure rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                          {item.description}
                        </p>
                        <ul className="space-y-2">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesInViewRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div ref={servicesRef} className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions tailored to accelerate your digital transformation and drive sustainable business growth.
              </p>
            </motion.div>

            {/* Always show services, remove animation dependency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className={`absolute top-4 left-4 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-electric-pink transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center space-x-2 text-electric-pink hover:text-azure transition-colors group-hover:translate-x-1 transform transition-transform font-medium text-sm sm:text-base"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section ref={techStackRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={techStackInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Technology Stack</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to build robust, scalable, and future-ready solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {techStack.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={techStackInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-electric-pink to-azure rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        {category.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-electric-pink hover:text-white transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section ref={processRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Development Process</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery from concept to deployment.
              </p>
            </motion.div>

            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-pink to-azure rounded-full"></div>
              
              <div className="space-y-8 sm:space-y-12">
                {developmentProcess.map((step, index) => {
                  const IconComponent = step.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={processInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    >
                      <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg">
                          <div className="flex items-center space-x-3 mb-4">
                            <span className="text-xl sm:text-2xl font-bold text-electric-pink">{step.step}</span>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                            {step.description}
                          </p>
                          <div className="space-y-2">
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Deliverables:</h4>
                            <ul className="space-y-1">
                              {step.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500 flex-shrink-0" />
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-electric-pink to-azure rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 lg:block hidden"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section ref={industriesRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Industries We <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Serve</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our expertise spans across diverse industries, delivering tailored solutions for unique business challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={industriesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-electric-pink to-azure rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                      {industry.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What Our <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultancy Section */}
        <section ref={consultancyRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={consultancyInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Expert <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Consultancy</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Strategic technology consulting to accelerate your digital transformation journey and drive sustainable business growth.
              </p>
            </motion.div>

            {/* Always show consultancies, remove animation dependency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {consultancies.map((consultancy, index) => {
                const IconComponent = consultancy.icon;
                return (
                  <motion.div
                    key={consultancy.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Consultancy Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={consultancy.image} 
                        alt={consultancy.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className={`absolute top-4 left-4 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r ${consultancy.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {consultancy.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                        {consultancy.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to={`/consultancies/${consultancy.id}`}
                          className="inline-flex items-center justify-center space-x-2 text-electric-pink hover:text-azure transition-colors font-medium text-sm sm:text-base"
                        >
                          <span>Learn More</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                        <a
                          href={`https://wa.me/919461232921?text=${encodeURIComponent(`I'm interested in ${consultancy.name} services. Could you provide more details?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm sm:text-base"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Talk to Consultant</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={consultancyInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                to="/consultancies"
                className="inline-flex items-center space-x-2 border-2 border-electric-pink text-electric-pink hover:bg-electric-pink hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300"
              >
                <span>View All Consultancies</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-electric-pink via-azure to-powder-blue">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                Let's discuss how our expertise can accelerate your digital transformation journey and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+919461232921"
                  className="bg-white text-electric-pink px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </motion.a>
                <motion.a
                  href={`https://wa.me/919461232921?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-pink px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;