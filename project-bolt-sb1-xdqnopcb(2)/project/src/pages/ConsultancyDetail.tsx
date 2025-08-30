import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  Phone,
  Clock,
  Users,
  Star,
  ArrowRight,
  Cloud,
  Lock,
  Shield,
  BarChart3,
  ChevronRight,
  TrendingUp,
  Award,
  Target,
  Zap
} from 'lucide-react';

const ConsultancyDetail: React.FC = () => {
  const { consultancyId } = useParams<{ consultancyId: string }>();
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const consultancies: { [key: string]: any } = {
    'aws-cloud': {
      name: 'AWS Cloud Consultancy',
      icon: Cloud,
      tagline: 'Optimize Your Cloud Journey',
      description: 'Transform your infrastructure with our comprehensive AWS cloud consultancy services. We help organizations migrate to the cloud, optimize existing deployments, and implement best practices for security, performance, and cost management.',
      longDescription: 'Our AWS Cloud Consultancy services are designed to help organizations harness the full power of Amazon Web Services. Whether you\'re planning your first cloud migration or looking to optimize existing cloud infrastructure, our certified AWS experts provide strategic guidance and hands-on implementation support to ensure your cloud journey is successful, secure, and cost-effective.',
      keyServices: [
        'Cloud Migration Strategy & Execution',
        'AWS Architecture Design & Review',
        'Cost Optimization & Management',
        'Security & Compliance Implementation',
        'Performance Optimization & Monitoring',
        'Disaster Recovery Planning',
        'DevOps & CI/CD Integration',
        'Training & Knowledge Transfer',
        'Multi-Account Strategy',
        'Serverless Architecture Design',
        'Container Strategy & Implementation',
        'Data Analytics & Machine Learning Setup'
      ],
      problemsSolved: [
        'High infrastructure costs and unpredictable spending',
        'Complex migration challenges and downtime risks',
        'Security vulnerabilities and compliance gaps',
        'Poor application performance and scalability issues',
        'Lack of disaster recovery and backup strategies',
        'Inefficient resource utilization and waste'
      ],
      solutions: [
        'Comprehensive cost optimization strategies reducing expenses by 30-50%',
        'Zero-downtime migration methodologies with rollback capabilities',
        'Enterprise-grade security frameworks and compliance automation',
        'Auto-scaling architectures that handle traffic spikes seamlessly',
        'Robust disaster recovery solutions with RTO/RPO guarantees',
        'Right-sizing recommendations and automated resource management'
      ],
      benefits: [
        'Reduced infrastructure costs by up to 40%',
        'Improved application performance and scalability',
        'Enhanced security posture and compliance',
        'Faster deployment and time-to-market',
        'Better disaster recovery capabilities',
        'Increased operational efficiency'
      ],
      industries: ['E-commerce', 'Financial Services', 'Healthcare', 'Manufacturing', 'Education', 'Startups'],
      color: 'from-orange-500 to-red-500',
      engagementModel: {
        assessment: '1-2 weeks',
        planning: '2-3 weeks',
        implementation: '4-12 weeks',
        optimization: 'Ongoing'
      },
      deliverables: [
        'Comprehensive cloud assessment report',
        'Migration strategy and roadmap',
        'AWS architecture design documents',
        'Cost optimization recommendations',
        'Security and compliance framework',
        'Implementation and deployment',
        'Training materials and documentation',
        'Ongoing support and optimization'
      ],
      technologies: [
        'AWS EC2 - Elastic Compute Cloud for scalable virtual servers',
        'AWS S3 - Simple Storage Service for object storage',
        'AWS RDS - Relational Database Service for managed databases',
        'AWS Lambda - Serverless computing platform',
        'AWS EKS - Elastic Kubernetes Service for container orchestration',
        'AWS CloudFormation - Infrastructure as Code service',
        'AWS CloudWatch - Monitoring and observability platform',
        'AWS IAM - Identity and Access Management',
        'AWS VPC - Virtual Private Cloud for network isolation',
        'AWS Route 53 - DNS and domain management',
        'AWS CloudFront - Content Delivery Network',
        'AWS Auto Scaling - Automatic capacity management',
        'AWS Elastic Load Balancing - Traffic distribution',
        'AWS CodePipeline - Continuous integration and delivery',
        'AWS Systems Manager - Operations management suite'
      ],
      certifications: ['AWS Solutions Architect Professional', 'AWS DevOps Engineer Professional']
    },
    'devsecops': {
      name: 'DevSecOps Advisory & Implementation',
      icon: Lock,
      tagline: 'Security-First Development',
      description: 'Embed security into every stage of your development lifecycle with our DevSecOps advisory services. We help organizations implement security-first development practices, automate security testing, and create a culture of shared security responsibility.',
      longDescription: 'Our DevSecOps Advisory & Implementation services help organizations integrate security seamlessly into their development and operations processes. We work with your teams to establish security-first practices, implement automated security testing, and create a culture where security is everyone\'s responsibility, not just the security team\'s.',
      keyServices: [
        'Security Assessment & Gap Analysis',
        'DevSecOps Pipeline Implementation',
        'Automated Security Testing Integration',
        'Container & Kubernetes Security',
        'Infrastructure Security Hardening',
        'Compliance Automation & Reporting',
        'Security Training & Culture Development',
        'Incident Response Planning',
        'Threat Modeling & Risk Assessment',
        'Security Monitoring & SIEM Integration',
        'Vulnerability Management Automation',
        'Security Policy as Code Implementation'
      ],
      problemsSolved: [
        'Security vulnerabilities discovered late in development cycle',
        'Manual security processes causing deployment delays',
        'Lack of security expertise within development teams',
        'Compliance requirements slowing down development',
        'Inconsistent security practices across projects',
        'Poor visibility into security posture and threats'
      ],
      solutions: [
        'Shift-left security approach catching issues early in development',
        'Automated security testing integrated into CI/CD pipelines',
        'Security training and upskilling for development teams',
        'Automated compliance checking and reporting',
        'Standardized security practices and tooling',
        'Real-time security monitoring and threat detection'
      ],
      benefits: [
        'Reduced security vulnerabilities by up to 80%',
        'Faster security issue resolution and remediation',
        'Improved compliance posture and audit readiness',
        'Enhanced team security awareness and skills',
        'Reduced security-related deployment delays',
        'Better visibility into security risks and threats'
      ],
      industries: ['Financial Services', 'Healthcare', 'Government', 'Technology', 'Retail', 'Insurance'],
      color: 'from-teal-500 to-green-500',
      engagementModel: {
        assessment: '2-3 weeks',
        planning: '2-4 weeks',
        implementation: '6-16 weeks',
        optimization: 'Ongoing'
      },
      deliverables: [
        'Security assessment and gap analysis report',
        'DevSecOps strategy and implementation roadmap',
        'Automated security testing pipeline',
        'Security policy and procedure documentation',
        'Compliance automation framework',
        'Security training materials and programs',
        'Incident response procedures',
        'Ongoing security monitoring and support'
      ],
      technologies: [
        'SonarQube - Static Application Security Testing (SAST)',
        'OWASP ZAP - Dynamic Application Security Testing (DAST)',
        'Snyk - Vulnerability scanning for dependencies',
        'Aqua Security - Container and cloud security platform',
        'Twistlock - Container security and compliance',
        'HashiCorp Vault - Secrets management',
        'Open Policy Agent - Policy as code framework',
        'Falco - Runtime security monitoring',
        'Clair - Container vulnerability analysis',
        'Anchore - Container image scanning',
        'GitLab Security - Integrated security testing',
        'Jenkins Security Plugins - CI/CD security integration',
        'Kubernetes Security - Pod security policies and RBAC',
        'Terraform Security - Infrastructure security scanning',
        'AWS Security Hub - Centralized security findings'
      ],
      certifications: ['Certified DevSecOps Professional', 'AWS Security Specialist']
    },
    'cybersecurity-risk': {
      name: 'Cybersecurity Risk & Compliance',
      icon: Shield,
      tagline: 'Protect Your Digital Assets',
      description: 'Protect your organization with comprehensive cybersecurity risk management and compliance services. We conduct thorough assessments, implement robust security frameworks, and ensure ongoing compliance with industry standards and regulations.',
      longDescription: 'Our Cybersecurity Risk & Compliance services provide comprehensive protection for your digital assets through strategic risk management, robust security implementations, and continuous compliance monitoring. We help organizations build resilient security postures that protect against evolving threats while meeting regulatory requirements.',
      keyServices: [
        'Cybersecurity Risk Assessment & Analysis',
        'Compliance Framework Implementation',
        'Security Policy Development & Management',
        'Vulnerability Assessment & Management',
        'Incident Response Planning & Testing',
        'Security Awareness Training Programs',
        'Third-party Risk Management',
        'Continuous Monitoring & Reporting',
        'Penetration Testing & Red Team Exercises',
        'Business Continuity Planning',
        'Data Privacy & Protection Implementation',
        'Regulatory Compliance Auditing'
      ],
      problemsSolved: [
        'Unknown security risks and vulnerabilities',
        'Regulatory compliance gaps and audit failures',
        'Inadequate incident response capabilities',
        'Lack of security awareness among employees',
        'Third-party vendor security risks',
        'Insufficient security monitoring and detection'
      ],
      solutions: [
        'Comprehensive risk assessment and mitigation strategies',
        'Automated compliance monitoring and reporting',
        'Robust incident response procedures and training',
        'Comprehensive security awareness programs',
        'Third-party risk assessment and management frameworks',
        'Advanced threat detection and response capabilities'
      ],
      benefits: [
        'Comprehensive visibility into security risks',
        'Regulatory compliance assurance and audit readiness',
        'Reduced cyber attack surface and exposure',
        'Improved incident response capabilities',
        'Enhanced employee security awareness',
        'Better third-party risk management'
      ],
      industries: ['Healthcare', 'Financial Services', 'Government', 'Manufacturing', 'Legal', 'Insurance'],
      color: 'from-red-500 to-pink-500',
      engagementModel: {
        assessment: '2-4 weeks',
        planning: '3-4 weeks',
        implementation: '8-20 weeks',
        optimization: 'Ongoing'
      },
      deliverables: [
        'Comprehensive cybersecurity risk assessment',
        'Compliance gap analysis and remediation plan',
        'Security policies and procedures documentation',
        'Incident response plan and playbooks',
        'Security awareness training program',
        'Vulnerability management program',
        'Continuous monitoring and reporting system',
        'Regular security assessments and updates'
      ],
      technologies: [
        'Splunk - Security Information and Event Management (SIEM)',
        'QRadar - IBM Security intelligence platform',
        'Nessus - Vulnerability assessment scanner',
        'Rapid7 - Security analytics and automation',
        'CrowdStrike - Endpoint detection and response',
        'Palo Alto Networks - Next-generation firewall',
        'Okta - Identity and access management',
        'Microsoft Defender - Endpoint protection platform',
        'Wireshark - Network protocol analyzer',
        'Metasploit - Penetration testing framework',
        'Burp Suite - Web application security testing',
        'NMAP - Network discovery and security auditing',
        'Kali Linux - Penetration testing distribution',
        'Veeam - Backup and disaster recovery',
        'Symantec - Enterprise security solutions'
      ],
      certifications: ['CISSP - Certified Information Systems Security Professional']
    },
    'business-strategy': {
      name: 'Business Strategy & Growth Consultancy',
      icon: BarChart3,
      tagline: 'Technology-Driven Growth',
      description: 'Accelerate your business growth with strategic technology consulting. We help organizations align their technology investments with business objectives, identify growth opportunities, and implement digital transformation strategies that drive measurable results.',
      longDescription: 'Our Business Strategy & Growth Consultancy services help organizations leverage technology as a strategic enabler for business growth. We work with leadership teams to develop comprehensive digital transformation strategies, optimize business processes, and implement technology solutions that drive competitive advantage and sustainable growth.',
      keyServices: [
        'Digital Transformation Strategy Development',
        'Technology Roadmap & Investment Planning',
        'Business Process Analysis & Optimization',
        'Market Analysis & Competitive Intelligence',
        'ROI Analysis & Business Case Development',
        'Change Management & Organizational Development',
        'Performance Metrics & KPI Framework',
        'Strategic Partnership & Vendor Management',
        'Innovation Strategy & Implementation',
        'Customer Experience Optimization',
        'Data Strategy & Analytics Implementation',
        'Agile Transformation & Methodology'
      ],
      problemsSolved: [
        'Misaligned technology investments and business goals',
        'Slow digital transformation and competitive disadvantage',
        'Inefficient business processes and operations',
        'Lack of data-driven decision making',
        'Poor customer experience and engagement',
        'Inability to scale and adapt to market changes'
      ],
      solutions: [
        'Strategic technology roadmaps aligned with business objectives',
        'Comprehensive digital transformation programs',
        'Process optimization and automation strategies',
        'Data analytics and business intelligence implementations',
        'Customer experience enhancement programs',
        'Scalable business models and operational frameworks'
      ],
      benefits: [
        'Accelerated business growth and revenue increase',
        'Improved operational efficiency and cost reduction',
        'Better technology ROI and investment decisions',
        'Enhanced competitive advantage and market position',
        'Improved customer satisfaction and retention',
        'Increased organizational agility and adaptability'
      ],
      industries: ['Retail', 'Manufacturing', 'Professional Services', 'Healthcare', 'Education', 'Non-profit'],
      color: 'from-blue-500 to-purple-500',
      engagementModel: {
        assessment: '2-3 weeks',
        planning: '4-6 weeks',
        implementation: '12-24 weeks',
        optimization: 'Ongoing'
      },
      deliverables: [
        'Digital transformation strategy document',
        'Technology roadmap and investment plan',
        'Business process optimization recommendations',
        'Market analysis and competitive assessment',
        'ROI analysis and business case documentation',
        'Change management plan and training materials',
        'Performance measurement framework',
        'Implementation support and ongoing guidance'
      ],
      technologies: [
        'Tableau - Business intelligence and analytics platform',
        'Power BI - Microsoft business analytics solution',
        'Salesforce - Customer relationship management platform',
        'HubSpot - Inbound marketing and sales platform',
        'Microsoft Dynamics - Enterprise resource planning',
        'SAP - Enterprise application software',
        'Google Analytics - Web analytics service',
        'Slack - Business communication platform',
        'Asana - Project management and collaboration',
        'Jira - Issue tracking and project management',
        'Confluence - Team collaboration software',
        'Zoom - Video conferencing and communication',
        'Microsoft Teams - Collaboration and communication',
        'AWS Business Intelligence - Cloud analytics services',
        'Azure Synapse - Analytics service platform'
      ],
      certifications: ['PMP - Project Management Professional']
    }
  };

  const consultancy = consultancies[consultancyId || ''];

  if (!consultancy) {
    return (
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Consultancy Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            The consultancy service you're looking for doesn't exist.
          </p>
          <Link
            to="/consultancies"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Consultancies</span>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = consultancy.icon;
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in ${consultancy.name} services. Could you provide more details about your approach, timeline, and pricing?`
  );

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-electric-pink/10 via-azure/10 to-powder-blue/10 dark:from-electric-pink/5 dark:via-azure/5 dark:to-powder-blue/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <Link to="/" className="hover:text-electric-pink transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/consultancies" className="hover:text-electric-pink transition-colors">Consultancies</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-electric-pink">{consultancy.name}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${consultancy.color} rounded-2xl flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                      {consultancy.name}
                    </h1>
                    <p className="text-lg md:text-xl text-electric-pink font-semibold mt-2">
                      {consultancy.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {consultancy.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/919461232921?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Talk to Consultant</span>
                  </a>
                  <a
                    href="tel:+919461232921"
                    className="inline-flex items-center justify-center space-x-2 border-2 border-electric-pink text-electric-pink hover:bg-electric-pink hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Expert</span>
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Engagement Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-electric-pink" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Assessment:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">{consultancy.engagementModel.assessment}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-azure" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Planning:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">{consultancy.engagementModel.planning}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Implementation:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">{consultancy.engagementModel.implementation}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Optimization:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">{consultancy.engagementModel.optimization}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {consultancy.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem-Solution Narrative */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                Challenges We <span className="text-red-500">Solve</span>
              </h2>
              <div className="space-y-4">
                {consultancy.problemsSolved.map((problem: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                Our <span className="text-green-500">Solutions</span>
              </h2>
              <div className="space-y-4">
                {consultancy.solutions.map((solution: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{solution}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section ref={benefitsRef} className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What's <span className="text-electric-pink">Included</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Comprehensive services designed to address your specific challenges
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate={benefitsInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {consultancy.keyServices.map((service: string, index: number) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">{service}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Key <span className="text-azure">Benefits</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Measurable outcomes that drive business value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {consultancy.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-electric-pink to-azure rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Certifications */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                Technologies We <span className="text-electric-pink">Use</span>
              </h2>
              <div className="space-y-4">
                {consultancy.technologies.map((tech: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-electric-pink/20"
                  >
                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                Our <span className="text-azure">Certifications</span>
              </h2>
              <div className="space-y-4">
                {consultancy.certifications.map((cert: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
                  >
                    <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What You'll <span className="text-electric-pink">Receive</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Comprehensive deliverables to ensure consultancy success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {consultancy.deliverables.map((deliverable: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">{deliverable}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
              Industries We <span className="text-azure">Serve</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {consultancy.industries.map((industry: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 md:px-6 py-2 md:py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium shadow-lg border border-gray-200 dark:border-gray-700 text-sm md:text-base"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-electric-pink via-azure to-powder-blue">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Start Your {consultancy.name} Journey?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
              Let's discuss your challenges and develop a customized strategy that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/919461232921?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-electric-pink px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </a>
              <a
                href="tel:+919461232921"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-pink px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Expert</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Consultancies */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            to="/consultancies"
            className="inline-flex items-center space-x-2 text-electric-pink hover:text-azure transition-colors font-semibold text-sm md:text-base"
          >
            <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
            <span>Back to All Consultancies</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ConsultancyDetail;