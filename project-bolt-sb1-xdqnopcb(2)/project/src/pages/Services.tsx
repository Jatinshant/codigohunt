import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  Database,
  Settings,
  Users,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Services: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      id: 'devops-consulting',
      name: 'DevOps Consulting',
      icon: Settings,
      shortDescription: 'Streamline your development workflow with advanced CI/CD pipelines, infrastructure automation, and monitoring solutions.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'CI/CD Pipeline Setup & Optimization',
        'Infrastructure as Code (IaC)',
        'Container Orchestration with Kubernetes',
        'Cloud Infrastructure Management',
        'Monitoring & Logging Solutions',
        'Security Integration (DevSecOps)',
        'Performance Optimization',
        'Team Training & Best Practices'
      ],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'Azure', 'GCP', 'Prometheus', 'Grafana'],
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Faster time-to-market',
        'Improved code quality',
        'Reduced deployment risks',
        'Enhanced team collaboration'
      ]
    },
    {
      id: 'app-development',
      name: 'Mobile App Development',
      icon: Smartphone,
      shortDescription: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Native iOS App Development',
        'Native Android App Development',
        'Cross-Platform Development (React Native, Flutter)',
        'UI/UX Design & Prototyping',
        'App Store Optimization',
        'Backend API Integration',
        'Push Notifications & Analytics',
        'Maintenance & Support'
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'Node.js', 'MongoDB', 'Redux'],
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Reach mobile-first customers',
        'Increase user engagement',
        'Generate new revenue streams',
        'Improve customer experience'
      ]
    },
    {
      id: 'web-development',
      name: 'Web Development',
      icon: Globe,
      shortDescription: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Responsive Web Design',
        'Single Page Applications (SPAs)',
        'Progressive Web Apps (PWAs)',
        'E-commerce Development',
        'Content Management Systems',
        'API Development & Integration',
        'Performance Optimization',
        'SEO & Analytics Setup'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'Django', 'Laravel', 'WordPress', 'Shopify', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Professional online presence',
        'Improved search rankings',
        'Better user engagement',
        'Mobile-responsive design'
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      icon: Shield,
      shortDescription: 'Comprehensive security solutions to protect your digital assets from evolving cyber threats.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Security Assessment & Auditing',
        'Vulnerability Testing & Remediation',
        'Network Security Implementation',
        'Data Encryption & Protection',
        'Identity & Access Management',
        'Security Monitoring & Incident Response',
        'Compliance Management',
        'Security Training & Awareness'
      ],
      technologies: ['Palo Alto Networks', 'CrowdStrike', 'Splunk', 'Okta', 'Qualys', 'Microsoft Defender'],
      color: 'from-red-500 to-orange-500',
      benefits: [
        'Protect sensitive data',
        'Prevent cyber attacks',
        'Ensure compliance',
        'Maintain business continuity'
      ]
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      icon: TrendingUp,
      shortDescription: 'Data-driven marketing strategies to grow your online presence and drive conversions.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Social Media Marketing',
        'Content Marketing & Strategy',
        'Email Marketing Campaigns',
        'Analytics & Performance Tracking',
        'Brand Strategy & Development',
        'Conversion Rate Optimization'
      ],
      technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEMrush', 'HubSpot', 'Mailchimp'],
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Increase online visibility',
        'Generate qualified leads',
        'Improve brand awareness',
        'Higher conversion rates'
      ]
    },
    {
      id: 'hosting-deployment',
      name: 'Cloud Hosting & Deployment',
      icon: Cloud,
      shortDescription: 'Scalable cloud infrastructure and deployment solutions for optimal performance.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Cloud Infrastructure Setup',
        'Auto-scaling Configuration',
        'Load Balancing & CDN',
        'Database Management',
        'Backup & Disaster Recovery',
        'Security & Compliance',
        'Performance Monitoring',
        '24/7 Technical Support'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Nginx', 'CloudFlare'],
      color: 'from-indigo-500 to-blue-500',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability',
        'Enhanced reliability',
        'Global reach and performance'
      ]
    },
    {
      id: 'erp-cms',
      name: 'ERP & CMS Solutions',
      icon: Database,
      shortDescription: 'Complete enterprise resource planning and content management systems.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom ERP Development',
        'CRM System Implementation',
        'Inventory Management Systems',
        'HR Management Solutions',
        'Financial Management Modules',
        'Content Management Systems',
        'Workflow Automation',
        'Reporting & Analytics'
      ],
      technologies: ['Odoo', 'SAP', 'Salesforce', 'WordPress', 'Drupal', 'Custom Solutions'],
      color: 'from-teal-500 to-green-500',
      benefits: [
        'Streamlined operations',
        'Improved data accuracy',
        'Better resource management',
        'Enhanced productivity'
      ]
    },
    {
      id: 'custom-software',
      name: 'Custom Software Development',
      icon: Code,
      shortDescription: 'Tailored software solutions built to meet your specific business needs.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Requirements Analysis & Planning',
        'Custom Application Development',
        'Database Design & Implementation',
        'Third-party Integration',
        'API Development',
        'Testing & Quality Assurance',
        'Deployment & Maintenance',
        'Documentation & Training'
      ],
      technologies: ['Python', 'Java', 'C#', '.NET', 'Node.js', 'React', 'Angular', 'Vue.js'],
      color: 'from-purple-500 to-indigo-500',
      benefits: [
        'Perfect fit for your needs',
        'Competitive advantage',
        'Scalable architecture',
        'Full ownership and control'
      ]
    },
    {
      id: 'it-support',
      name: 'IT Support & Managed Services',
      icon: Users,
      shortDescription: 'Comprehensive IT support and managed services for your business infrastructure.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        '24/7 System Monitoring',
        'Help Desk Support',
        'Network Management',
        'Server Administration',
        'Data Backup & Recovery',
        'Software Updates & Patching',
        'Hardware Procurement & Setup',
        'IT Strategy & Planning'
      ],
      technologies: ['Microsoft 365', 'Windows Server', 'VMware', 'Cisco', 'Fortinet', 'Veeam'],
      color: 'from-gray-500 to-slate-500',
      benefits: [
        'Reduced IT costs',
        'Improved system reliability',
        'Proactive problem resolution',
        'Focus on core business'
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="IT Services - DevOps, Web Development, Mobile Apps | Codigohunt Solutions"
        description="Comprehensive IT services including DevOps consulting, web development, mobile app development, cybersecurity, digital marketing, and cloud hosting solutions."
        keywords="DevOps consulting, web development, mobile app development, cybersecurity, digital marketing, cloud hosting, ERP solutions, custom software development, IT support"
        url="https://silly-otter-2e6a50.netlify.app/services"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-electric-pink/10 via-azure/10 to-powder-blue/10 dark:from-electric-pink/5 dark:via-azure/5 dark:to-powder-blue/5">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Comprehensive IT solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="tel:+919461232921"
                className="bg-gradient-to-r from-electric-pink to-azure text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/919461232921?text=${encodeURIComponent("I'm interested in your services. Could you provide more information?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-electric-pink text-electric-pink hover:bg-electric-pink hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={servicesRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Always show services, remove animation dependency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-700"
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
                      <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Service Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-electric-pink transition-colors">
                        {service.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                        {service.shortDescription}
                      </p>

                      {/* Key Features Preview */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-xs text-gray-500 dark:text-gray-500 italic">
                              +{service.features.length - 3} more features...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {service.technologies.slice(0, 4).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-electric-pink/10 text-electric-pink rounded text-xs font-medium">
                              +{service.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                          Benefits:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-medium"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col gap-3 mt-auto">
                        <Link
                          to={`/services/${service.id}`}
                          className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                        >
                          <span>Learn More</span>
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        
                        <a
                          href={`https://wa.me/919461232921?text=${encodeURIComponent(`I'm interested in ${service.name}. Could you provide more details?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center space-x-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Get Quote</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-electric-pink via-azure to-powder-blue">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how our services can help transform your business and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919461232921"
                  className="bg-white text-electric-pink px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Call +91 9461232921
                </a>
                <a
                  href={`https://wa.me/919461232921?text=${encodeURIComponent("I'd like to discuss your services. When can we schedule a consultation?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-pink px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;