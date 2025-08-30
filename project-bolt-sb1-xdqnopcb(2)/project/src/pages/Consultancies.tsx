import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cloud,
  Lock,
  Shield,
  BarChart3,
  ArrowRight,
  MessageCircle,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Globe
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Consultancies: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [consultanciesRef, consultanciesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [approachRef, approachInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const consultancies = [
    {
      id: 'aws-cloud',
      name: 'AWS Cloud Consultancy',
      icon: Cloud,
      tagline: 'Optimize Your Cloud Journey',
      shortDescription: 'Expert guidance for AWS cloud migration, optimization, and cost management with proven methodologies.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      keyServices: [
        'Cloud Migration Strategy & Execution',
        'AWS Architecture Design & Review',
        'Cost Optimization & Management',
        'Security & Compliance Implementation',
        'Performance Optimization',
        'Disaster Recovery Planning',
        'DevOps Integration',
        'Training & Knowledge Transfer'
      ],
      benefits: [
        'Reduced infrastructure costs by up to 40%',
        'Improved scalability and performance',
        'Enhanced security and compliance',
        'Faster deployment and time-to-market'
      ],
      industries: ['Healthcare', 'Finance', 'E-commerce', 'Manufacturing', 'Education'],
      color: 'from-orange-500 to-red-500',
      technologies: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'AWS EKS', 'CloudFormation', 'CloudWatch'],
      stats: { projects: '100+', savings: '40%', uptime: '99.9%' }
    },
    {
      id: 'devsecops',
      name: 'DevSecOps Advisory & Implementation',
      icon: Lock,
      tagline: 'Security-First Development',
      shortDescription: 'Integrate security seamlessly into your development pipeline for robust, secure applications.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      keyServices: [
        'Security Assessment & Gap Analysis',
        'DevSecOps Pipeline Implementation',
        'Automated Security Testing Integration',
        'Container & Kubernetes Security',
        'Infrastructure Security Hardening',
        'Compliance Automation',
        'Security Training & Culture Development',
        'Incident Response Planning'
      ],
      benefits: [
        'Reduced security vulnerabilities by 80%',
        'Faster security issue resolution',
        'Improved compliance posture',
        'Enhanced team security awareness'
      ],
      industries: ['Financial Services', 'Healthcare', 'Government', 'Technology', 'Retail'],
      color: 'from-teal-500 to-green-500',
      technologies: ['SonarQube', 'OWASP ZAP', 'Snyk', 'Aqua Security', 'HashiCorp Vault', 'Open Policy Agent'],
      stats: { vulnerabilities: '80%', compliance: '100%', incidents: '90%' }
    },
    {
      id: 'cybersecurity-risk',
      name: 'Cybersecurity Risk & Compliance',
      icon: Shield,
      tagline: 'Protect Your Digital Assets',
      shortDescription: 'Comprehensive risk assessment and compliance frameworks to safeguard your business.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      keyServices: [
        'Cybersecurity Risk Assessment',
        'Compliance Framework Implementation',
        'Security Policy Development',
        'Vulnerability Management',
        'Incident Response Planning',
        'Security Awareness Training',
        'Third-party Risk Management',
        'Continuous Monitoring & Reporting'
      ],
      benefits: [
        'Comprehensive risk visibility',
        'Regulatory compliance assurance',
        'Reduced cyber attack surface',
        'Improved incident response capabilities'
      ],
      industries: ['Banking', 'Healthcare', 'Insurance', 'Legal', 'Government'],
      color: 'from-red-500 to-pink-500',
      technologies: ['Splunk', 'QRadar', 'Nessus', 'Rapid7', 'CrowdStrike', 'Palo Alto Networks'],
      stats: { risks: '95%', compliance: '100%', incidents: '85%' }
    },
    {
      id: 'business-strategy',
      name: 'Business Strategy & Growth Consultancy',
      icon: BarChart3,
      tagline: 'Technology-Driven Growth',
      shortDescription: 'Strategic technology consulting to accelerate business growth and digital transformation.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      keyServices: [
        'Digital Transformation Strategy',
        'Technology Roadmap Development',
        'Business Process Optimization',
        'Market Analysis & Competitive Intelligence',
        'ROI Analysis & Investment Planning',
        'Change Management & Training',
        'Performance Metrics & KPI Development',
        'Strategic Partnership Guidance'
      ],
      benefits: [
        'Accelerated business growth',
        'Improved operational efficiency',
        'Better technology ROI',
        'Enhanced competitive advantage'
      ],
      industries: ['Startups', 'SMEs', 'Enterprise', 'Non-profit', 'Government'],
      color: 'from-blue-500 to-purple-500',
      technologies: ['Tableau', 'Power BI', 'Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Google Analytics'],
      stats: { growth: '150%', efficiency: '60%', roi: '300%' }
    }
  ];

  const approachPoints = [
    {
      title: 'Strategic Assessment',
      description: 'Comprehensive evaluation of your current state, challenges, and opportunities to develop tailored strategies.',
      icon: BarChart3
    },
    {
      title: 'Expert Guidance',
      description: 'Leverage our team\'s extensive experience and industry best practices to navigate complex challenges.',
      icon: Users
    },
    {
      title: 'Implementation Support',
      description: 'Hands-on support throughout the implementation process to ensure successful outcomes.',
      icon: CheckCircle
    },
    {
      title: 'Continuous Optimization',
      description: 'Ongoing monitoring and optimization to maximize value and adapt to changing business needs.',
      icon: TrendingUp
    }
  ];

  return (
    <>
      <SEOHead 
        title="IT Consultancy Services - AWS Cloud, DevSecOps, Security | Codigohunt Solutions"
        description="Expert IT consultancy services including AWS cloud consulting, DevSecOps advisory, cybersecurity risk management, and business strategy consulting."
        keywords="AWS cloud consultancy, DevSecOps advisory, cybersecurity consulting, business strategy consulting, IT consulting services, cloud migration, security compliance"
        url="https://silly-otter-2e6a50.netlify.app/consultancies"
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
                Expert <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Consultancy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Strategic technology consulting to accelerate your digital transformation journey and drive sustainable business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a
                href="tel:+919461232921"
                className="bg-gradient-to-r from-electric-pink to-azure text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/919461232921?text=${encodeURIComponent("I'm interested in your consultancy services. Could you provide more information?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-electric-pink text-electric-pink hover:bg-electric-pink hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: '200+', label: 'Consultations Delivered', icon: Users },
                { number: '50+', label: 'Successful Transformations', icon: TrendingUp },
                { number: '15+', label: 'Industry Verticals', icon: Globe },
                { number: '99%', label: 'Client Satisfaction', icon: Award }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-pink to-azure rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section ref={approachRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Consultancy <span className="text-electric-pink">Approach</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We combine deep technical expertise with strategic business insight to deliver consultancy services that create lasting value.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-electric-pink to-azure rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Consultancy Services */}
        <section ref={consultanciesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={consultanciesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-azure">Consultancy Services</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Specialized consulting services designed to address your most critical technology and business challenges.
              </p>
            </motion.div>

            {/* Always show consultancies, remove animation dependency */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {consultancies.map((consultancy, index) => {
                const IconComponent = consultancy.icon;
                return (
                  <motion.div
                    key={consultancy.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group"
                  >
                    {/* Header with Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={consultancy.image} 
                        alt={consultancy.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${consultancy.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{consultancy.name}</h3>
                        <p className="text-sm opacity-90">{consultancy.tagline}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                        {consultancy.shortDescription}
                      </p>

                      {/* Key Services Preview */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                          Key Services:
                        </h4>
                        <ul className="space-y-1">
                          {consultancy.keyServices.slice(0, 4).map((service, idx) => (
                            <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {service}
                            </li>
                          ))}
                          {consultancy.keyServices.length > 4 && (
                            <li className="text-xs text-gray-500 dark:text-gray-500 italic">
                              +{consultancy.keyServices.length - 4} more services...
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
                          {consultancy.technologies.slice(0, 4).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {consultancy.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-electric-pink/10 text-electric-pink rounded text-xs font-medium">
                              +{consultancy.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Industries */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                          Industries:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {consultancy.industries.map((industry, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs font-medium"
                            >
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          {Object.entries(consultancy.stats).map(([key, value], idx) => (
                            <div key={idx}>
                              <div className="text-lg font-bold text-electric-pink">{value}</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                                {key === 'projects' ? 'Projects' : 
                                 key === 'savings' ? 'Cost Savings' :
                                 key === 'uptime' ? 'Uptime' :
                                 key === 'vulnerabilities' ? 'Vuln. Reduction' :
                                 key === 'compliance' ? 'Compliance' :
                                 key === 'incidents' ? 'Incident Reduction' :
                                 key === 'growth' ? 'Growth Increase' :
                                 key === 'efficiency' ? 'Efficiency Gain' :
                                 key === 'roi' ? 'ROI Increase' : key}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col gap-3">
                        <Link
                          to={`/consultancies/${consultancy.id}`}
                          className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        
                        <a
                          href={`https://wa.me/919461232921?text=${encodeURIComponent(`I'm interested in ${consultancy.name}. Could you provide more details about your approach?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center space-x-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
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
          </div>
        </section>

        {/* Why Choose Our Consultancy */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose <span className="text-electric-pink">Our Consultancy</span>?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We bring together deep technical expertise, strategic business insight, and proven methodologies to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Proven Track Record',
                  description: 'Over 200 successful consultancy engagements across diverse industries with measurable business impact.',
                  icon: Award
                },
                {
                  title: 'Expert Team',
                  description: 'Senior consultants with 5+ years of experience and deep expertise in their respective domains.',
                  icon: Users
                },
                {
                  title: 'Tailored Solutions',
                  description: 'Customized strategies and solutions designed specifically for your unique business challenges and goals.',
                  icon: CheckCircle
                },
                {
                  title: 'End-to-End Support',
                  description: 'From initial assessment to implementation and ongoing optimization, we support you throughout the journey.',
                  icon: TrendingUp
                },
                {
                  title: 'Industry Best Practices',
                  description: 'Leverage proven methodologies and industry best practices to ensure successful outcomes.',
                  icon: Shield
                },
                {
                  title: 'Measurable Results',
                  description: 'Focus on delivering quantifiable business value with clear metrics and regular progress reporting.',
                  icon: BarChart3
                }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-pink to-azure rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Schedule a free consultation to discuss your challenges and explore how our expertise can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919461232921"
                  className="bg-white text-electric-pink px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Call +91 9461232921
                </a>
                <a
                  href={`https://wa.me/919461232921?text=${encodeURIComponent("I'd like to schedule a free consultation to discuss my business challenges and explore your consultancy services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-pink px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Schedule Free Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Consultancies;