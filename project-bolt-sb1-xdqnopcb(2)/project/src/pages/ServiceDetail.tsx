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
  Code,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  Database,
  Settings,
  TrendingUp,
  ChevronRight,
  Award,
  Target,
  Zap
} from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services: { [key: string]: any } = {
    'devops-consulting': {
      name: 'DevOps Consulting',
      icon: Settings,
      tagline: 'Streamline Your Development Workflow',
      description: 'Transform your development lifecycle with our comprehensive DevOps consulting services. We implement continuous integration and deployment pipelines, automate infrastructure provisioning, and establish monitoring solutions that ensure reliable, scalable, and efficient software delivery.',
      longDescription: 'Our DevOps consulting services are designed to bridge the gap between development and operations teams, creating a culture of collaboration and continuous improvement. We help organizations implement industry best practices, automate repetitive tasks, and establish robust CI/CD pipelines that accelerate software delivery while maintaining high quality and security standards.',
      keyFeatures: [
        'CI/CD Pipeline Setup & Optimization',
        'Infrastructure as Code (IaC) Implementation',
        'Container Orchestration with Kubernetes',
        'Cloud Infrastructure Management',
        'Monitoring & Logging Solutions',
        'Security Integration (DevSecOps)',
        'Performance Optimization & Tuning',
        'Team Training & Best Practices',
        'Automated Testing Integration',
        'Release Management Strategies',
        'Configuration Management',
        'Disaster Recovery Planning'
      ],
      problemsSolved: [
        'Slow and error-prone manual deployments',
        'Lack of visibility into application performance',
        'Inconsistent environments across development stages',
        'Poor collaboration between development and operations teams',
        'High infrastructure costs and resource waste',
        'Security vulnerabilities in deployment processes'
      ],
      solutions: [
        'Automated CI/CD pipelines reducing deployment time by 80%',
        'Comprehensive monitoring and alerting systems',
        'Infrastructure as Code ensuring environment consistency',
        'Cross-functional team collaboration frameworks',
        'Cost optimization strategies reducing infrastructure expenses',
        'Security-first approach with automated vulnerability scanning'
      ],
      benefits: [
        'Faster time-to-market for new features',
        'Improved code quality and reliability',
        'Reduced deployment risks and rollback capabilities',
        'Enhanced team collaboration and productivity',
        'Better resource utilization and cost efficiency',
        'Increased system reliability and uptime'
      ],
      industries: ['Technology', 'E-commerce', 'Financial Services', 'Healthcare', 'Manufacturing', 'Startups'],
      color: 'from-blue-500 to-cyan-500',
      deliverables: [
        'DevOps strategy and roadmap document',
        'CI/CD pipeline implementation',
        'Infrastructure automation scripts',
        'Monitoring and alerting setup',
        'Documentation and best practices guide',
        'Team training and knowledge transfer',
        'Performance optimization recommendations',
        'Ongoing support and maintenance'
      ],
      technologies: [
        'Jenkins - Open-source automation server for CI/CD',
        'GitLab CI - Integrated CI/CD platform',
        'Docker - Containerization platform',
        'Kubernetes - Container orchestration system',
        'Terraform - Infrastructure as Code tool',
        'Ansible - Configuration management and automation',
        'AWS/Azure/GCP - Cloud platforms',
        'Prometheus - Monitoring and alerting toolkit',
        'Grafana - Analytics and monitoring platform',
        'ELK Stack - Elasticsearch, Logstash, and Kibana for logging',
        'Helm - Kubernetes package manager',
        'ArgoCD - GitOps continuous delivery tool',
        'SonarQube - Code quality and security analysis',
        'Nexus/Artifactory - Artifact repository management',
        'Vault - Secrets management'
      ],
      processSteps: [
        {
          title: 'Assessment & Planning',
          description: 'Evaluate current infrastructure and development processes',
          duration: '1-2 weeks'
        },
        {
          title: 'Strategy Development',
          description: 'Create comprehensive DevOps roadmap and implementation plan',
          duration: '1 week'
        },
        {
          title: 'Implementation',
          description: 'Deploy CI/CD pipelines, automation tools, and monitoring systems',
          duration: '4-8 weeks'
        },
        {
          title: 'Training & Optimization',
          description: 'Team training and continuous optimization of processes',
          duration: 'Ongoing'
        }
      ]
    },
    'app-development': {
      name: 'Mobile App Development',
      icon: Smartphone,
      tagline: 'Native & Cross-Platform Excellence',
      description: 'Create powerful, user-friendly mobile applications that engage your customers and drive business growth. Our mobile development team specializes in both native iOS/Android apps and cross-platform solutions using cutting-edge frameworks.',
      longDescription: 'Our mobile app development services combine innovative design with robust functionality to create applications that users love. Whether you need a native iOS app, Android application, or cross-platform solution, our experienced developers use the latest technologies and best practices to deliver high-performance mobile experiences that drive engagement and business results.',
      keyFeatures: [
        'Native iOS App Development (Swift)',
        'Native Android App Development (Kotlin)',
        'Cross-Platform Development (React Native, Flutter)',
        'UI/UX Design & Prototyping',
        'App Store Optimization (ASO)',
        'Backend API Development & Integration',
        'Push Notifications & Real-time Features',
        'Offline Functionality & Data Sync',
        'Payment Gateway Integration',
        'Social Media Integration',
        'Analytics & Performance Tracking',
        'App Maintenance & Updates'
      ],
      problemsSolved: [
        'Limited mobile presence affecting customer reach',
        'Poor user experience on mobile devices',
        'Lack of engagement with mobile customers',
        'Inefficient business processes requiring mobile solutions',
        'Competition advantage through mobile innovation',
        'Need for real-time customer communication'
      ],
      solutions: [
        'Custom mobile apps tailored to business needs',
        'Intuitive user interfaces with excellent UX design',
        'Engaging features that increase user retention',
        'Mobile-first business process optimization',
        'Innovative features that differentiate from competitors',
        'Real-time communication and notification systems'
      ],
      benefits: [
        'Reach mobile-first customer base effectively',
        'Increase user engagement and retention',
        'Generate new revenue streams',
        'Improve customer experience and satisfaction',
        'Gain competitive advantage in the market',
        'Access real-time business insights and analytics'
      ],
      industries: ['Retail', 'Healthcare', 'Education', 'Finance', 'Food & Beverage', 'Entertainment'],
      color: 'from-green-500 to-emerald-500',
      deliverables: [
        'Mobile app strategy and wireframes',
        'UI/UX design mockups and prototypes',
        'Native or cross-platform app development',
        'Backend API development and integration',
        'App store submission and optimization',
        'Testing and quality assurance',
        'Documentation and user guides',
        'Post-launch support and maintenance'
      ],
      technologies: [
        'Swift - Native iOS development language',
        'Kotlin - Modern Android development language',
        'React Native - Cross-platform framework by Facebook',
        'Flutter - Google\'s UI toolkit for cross-platform apps',
        'Xamarin - Microsoft\'s cross-platform solution',
        'Firebase - Backend-as-a-Service platform',
        'Node.js - Server-side JavaScript runtime',
        'MongoDB - NoSQL database for mobile backends',
        'Redux - State management for React Native',
        'Expo - Platform for universal React applications',
        'Fastlane - Automation for iOS and Android deployment',
        'TestFlight - iOS app testing platform',
        'Google Play Console - Android app distribution',
        'Crashlytics - Real-time crash reporting',
        'App Center - Continuous integration for mobile'
      ],
      processSteps: [
        {
          title: 'Discovery & Planning',
          description: 'Requirements gathering, market research, and technical planning',
          duration: '1-2 weeks'
        },
        {
          title: 'Design & Prototyping',
          description: 'UI/UX design, wireframing, and interactive prototypes',
          duration: '2-3 weeks'
        },
        {
          title: 'Development & Testing',
          description: 'App development, backend integration, and comprehensive testing',
          duration: '8-16 weeks'
        },
        {
          title: 'Launch & Support',
          description: 'App store submission, launch, and ongoing maintenance',
          duration: 'Ongoing'
        }
      ]
    },
    'web-development': {
      name: 'Web Development',
      icon: Globe,
      tagline: 'Modern Web Solutions',
      description: 'Build stunning, high-performance websites and web applications that deliver exceptional user experiences. From simple business websites to complex enterprise applications, we create solutions that scale with your business.',
      longDescription: 'Our web development services encompass the full spectrum of modern web technologies and frameworks. We create responsive, fast-loading, and SEO-optimized websites that not only look great but also perform exceptionally well. Whether you need a corporate website, e-commerce platform, or custom web application, our team delivers solutions that drive results.',
      keyFeatures: [
        'Responsive Web Design & Development',
        'Single Page Applications (SPAs)',
        'Progressive Web Apps (PWAs)',
        'E-commerce Platform Development',
        'Content Management Systems (CMS)',
        'Custom Web Application Development',
        'API Development & Third-party Integration',
        'Database Design & Implementation',
        'Performance Optimization & SEO',
        'Security Implementation & SSL',
        'Analytics Integration & Tracking',
        'Maintenance & Support Services'
      ],
      problemsSolved: [
        'Outdated website affecting business credibility',
        'Poor mobile experience losing customers',
        'Slow loading times impacting user engagement',
        'Lack of online presence limiting business growth',
        'Inefficient manual processes needing automation',
        'Poor search engine visibility'
      ],
      solutions: [
        'Modern, professional websites that build trust',
        'Mobile-first responsive design for all devices',
        'Optimized performance with fast loading times',
        'Strong online presence with SEO optimization',
        'Custom web applications automating business processes',
        'Search engine optimized content and structure'
      ],
      benefits: [
        'Professional online presence and credibility',
        'Improved search engine rankings and visibility',
        'Better user engagement and conversion rates',
        'Mobile-responsive design for all devices',
        'Scalable architecture for future growth',
        'Enhanced security and data protection'
      ],
      industries: ['Professional Services', 'Retail', 'Healthcare', 'Education', 'Real Estate', 'Non-profit'],
      color: 'from-purple-500 to-pink-500',
      deliverables: [
        'Website strategy and sitemap',
        'UI/UX design and mockups',
        'Responsive web development',
        'Content management system setup',
        'SEO optimization and analytics',
        'Security implementation',
        'Testing and quality assurance',
        'Training and ongoing support'
      ],
      technologies: [
        'React - Modern JavaScript library for building UIs',
        'Vue.js - Progressive JavaScript framework',
        'Angular - Platform for building mobile and desktop apps',
        'Node.js - JavaScript runtime for server-side development',
        'Express.js - Web application framework for Node.js',
        'Next.js - React framework for production',
        'Nuxt.js - Vue.js framework for universal applications',
        'Django - High-level Python web framework',
        'Laravel - PHP framework for web artisans',
        'WordPress - Popular content management system',
        'Shopify - E-commerce platform',
        'Strapi - Headless CMS',
        'PostgreSQL - Advanced open source database',
        'MongoDB - Document-based NoSQL database',
        'Tailwind CSS - Utility-first CSS framework'
      ],
      processSteps: [
        {
          title: 'Planning & Strategy',
          description: 'Requirements analysis, technical planning, and project roadmap',
          duration: '1-2 weeks'
        },
        {
          title: 'Design & Development',
          description: 'UI/UX design, frontend and backend development',
          duration: '4-12 weeks'
        },
        {
          title: 'Testing & Optimization',
          description: 'Quality assurance, performance optimization, and SEO',
          duration: '1-2 weeks'
        },
        {
          title: 'Launch & Maintenance',
          description: 'Deployment, training, and ongoing support',
          duration: 'Ongoing'
        }
      ]
    },
    'cybersecurity': {
      name: 'Cybersecurity Solutions',
      icon: Shield,
      tagline: 'Protect Your Digital Assets',
      description: 'Safeguard your business with enterprise-grade cybersecurity solutions. Our security experts implement multi-layered protection strategies, conduct thorough assessments, and provide ongoing monitoring to keep your digital assets secure.',
      longDescription: 'In today\'s digital landscape, cybersecurity is not optional—it\'s essential. Our comprehensive cybersecurity services protect your business from evolving threats through proactive security measures, continuous monitoring, and rapid incident response. We implement defense-in-depth strategies that secure your infrastructure, applications, and data.',
      keyFeatures: [
        'Security Assessment & Vulnerability Testing',
        'Network Security Implementation',
        'Endpoint Protection & Management',
        'Data Encryption & Protection',
        'Identity & Access Management (IAM)',
        'Security Information & Event Management (SIEM)',
        'Incident Response & Recovery',
        'Compliance Management & Auditing',
        'Security Awareness Training',
        'Penetration Testing & Red Team Exercises',
        'Cloud Security Implementation',
        '24/7 Security Monitoring & Support'
      ],
      problemsSolved: [
        'Increasing cyber threats and attack sophistication',
        'Lack of visibility into security posture',
        'Compliance requirements and regulatory pressure',
        'Insider threats and human error risks',
        'Legacy systems with security vulnerabilities',
        'Inadequate incident response capabilities'
      ],
      solutions: [
        'Comprehensive security frameworks and controls',
        'Real-time threat detection and monitoring',
        'Automated compliance reporting and management',
        'Employee security training and awareness programs',
        'Security modernization and vulnerability remediation',
        'Rapid incident response and recovery procedures'
      ],
      benefits: [
        'Protection against cyber threats and data breaches',
        'Regulatory compliance and audit readiness',
        'Reduced business risk and liability',
        'Enhanced customer trust and reputation',
        'Business continuity and disaster recovery',
        'Cost savings from prevented security incidents'
      ],
      industries: ['Financial Services', 'Healthcare', 'Government', 'Manufacturing', 'Legal', 'Education'],
      color: 'from-red-500 to-orange-500',
      deliverables: [
        'Security assessment and gap analysis',
        'Security architecture and implementation plan',
        'Network and endpoint security deployment',
        'Security policies and procedures',
        'Incident response plan and procedures',
        'Security training materials and programs',
        'Compliance documentation and reports',
        'Ongoing monitoring and support services'
      ],
      technologies: [
        'Palo Alto Networks - Next-generation firewall solutions',
        'CrowdStrike - Endpoint detection and response',
        'Splunk - Security information and event management',
        'Okta - Identity and access management platform',
        'Qualys - Vulnerability management and compliance',
        'Rapid7 - Security analytics and automation',
        'Microsoft Defender - Comprehensive security platform',
        'Cisco Security - Network security solutions',
        'Fortinet - Integrated security fabric',
        'Symantec - Enterprise security solutions',
        'Nessus - Vulnerability assessment scanner',
        'Wireshark - Network protocol analyzer',
        'Metasploit - Penetration testing framework',
        'OWASP ZAP - Web application security testing',
        'Kali Linux - Penetration testing distribution'
      ],
      processSteps: [
        {
          title: 'Security Assessment',
          description: 'Comprehensive evaluation of current security posture',
          duration: '2-3 weeks'
        },
        {
          title: 'Strategy & Planning',
          description: 'Security roadmap and implementation planning',
          duration: '1-2 weeks'
        },
        {
          title: 'Implementation',
          description: 'Security controls deployment and configuration',
          duration: '6-12 weeks'
        },
        {
          title: 'Monitoring & Support',
          description: 'Ongoing monitoring, maintenance, and incident response',
          duration: 'Ongoing'
        }
      ]
    },
    'digital-marketing': {
      name: 'Digital Marketing',
      icon: TrendingUp,
      tagline: 'Data-Driven Growth Strategies',
      description: 'Accelerate your business growth with strategic digital marketing campaigns. We combine creativity with analytics to deliver marketing solutions that drive real results and maximize your return on investment.',
      longDescription: 'Our digital marketing services are designed to help businesses thrive in the digital age. We create comprehensive marketing strategies that combine multiple channels and tactics to reach your target audience, generate qualified leads, and drive conversions. Our data-driven approach ensures every marketing dollar is optimized for maximum impact.',
      keyFeatures: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Social Media Marketing & Management',
        'Content Marketing & Strategy',
        'Email Marketing Campaigns',
        'Marketing Automation & Lead Nurturing',
        'Analytics & Performance Tracking',
        'Brand Strategy & Development',
        'Conversion Rate Optimization (CRO)',
        'Influencer Marketing & Partnerships',
        'Video Marketing & Production',
        'Online Reputation Management'
      ],
      problemsSolved: [
        'Low online visibility and poor search rankings',
        'Ineffective marketing campaigns with poor ROI',
        'Lack of qualified leads and conversions',
        'Inconsistent brand messaging across channels',
        'Limited understanding of customer behavior',
        'Difficulty measuring marketing effectiveness'
      ],
      solutions: [
        'SEO strategies improving organic search visibility',
        'Targeted advertising campaigns with measurable ROI',
        'Lead generation systems with automated nurturing',
        'Consistent brand messaging and positioning',
        'Customer journey mapping and behavior analysis',
        'Comprehensive analytics and performance reporting'
      ],
      benefits: [
        'Increased online visibility and brand awareness',
        'Higher quality leads and improved conversion rates',
        'Better return on marketing investment',
        'Enhanced customer engagement and loyalty',
        'Data-driven insights for business decisions',
        'Competitive advantage in digital channels'
      ],
      industries: ['E-commerce', 'Professional Services', 'Healthcare', 'Real Estate', 'Technology', 'Hospitality'],
      color: 'from-yellow-500 to-orange-500',
      deliverables: [
        'Digital marketing strategy and roadmap',
        'SEO audit and optimization plan',
        'PPC campaign setup and management',
        'Social media content calendar and management',
        'Email marketing campaigns and automation',
        'Analytics setup and reporting dashboard',
        'Brand guidelines and messaging framework',
        'Performance reports and optimization recommendations'
      ],
      technologies: [
        'Google Analytics - Web analytics and reporting',
        'Google Ads - Pay-per-click advertising platform',
        'Facebook Ads Manager - Social media advertising',
        'HubSpot - Inbound marketing and sales platform',
        'Mailchimp - Email marketing automation',
        'SEMrush - SEO and competitive analysis',
        'Hootsuite - Social media management platform',
        'Canva - Graphic design and content creation',
        'WordPress - Content management and blogging',
        'Shopify - E-commerce platform integration',
        'Zapier - Marketing automation and integration',
        'Hotjar - User behavior analytics',
        'Unbounce - Landing page optimization',
        'Buffer - Social media scheduling',
        'Ahrefs - SEO and backlink analysis'
      ],
      processSteps: [
        {
          title: 'Strategy Development',
          description: 'Market research, competitor analysis, and strategy planning',
          duration: '1-2 weeks'
        },
        {
          title: 'Campaign Setup',
          description: 'Channel setup, content creation, and campaign launch',
          duration: '2-4 weeks'
        },
        {
          title: 'Execution & Optimization',
          description: 'Campaign management, testing, and continuous optimization',
          duration: 'Ongoing'
        },
        {
          title: 'Analysis & Reporting',
          description: 'Performance analysis, reporting, and strategy refinement',
          duration: 'Monthly'
        }
      ]
    },
    'hosting-deployment': {
      name: 'Cloud Hosting & Deployment',
      icon: Cloud,
      tagline: 'Scalable Cloud Infrastructure',
      description: 'Deploy and manage your applications with confidence using our cloud hosting and deployment services. We provide scalable, secure, and cost-effective cloud solutions that grow with your business needs.',
      longDescription: 'Our cloud hosting and deployment services leverage the power of leading cloud platforms to provide reliable, scalable, and secure infrastructure for your applications. We handle everything from initial setup to ongoing management, ensuring your applications perform optimally while you focus on your core business.',
      keyFeatures: [
        'Cloud Infrastructure Setup & Configuration',
        'Auto-scaling & Load Balancing',
        'Content Delivery Network (CDN) Integration',
        'Database Management & Optimization',
        'Backup & Disaster Recovery Solutions',
        'Security & Compliance Implementation',
        'Performance Monitoring & Optimization',
        'Cost Optimization & Management',
        'DevOps Integration & CI/CD',
        'Multi-region Deployment',
        'Container Orchestration',
        '24/7 Technical Support & Monitoring'
      ],
      problemsSolved: [
        'High infrastructure costs and maintenance overhead',
        'Poor application performance and downtime',
        'Lack of scalability for growing businesses',
        'Complex deployment and management processes',
        'Security vulnerabilities and compliance issues',
        'Limited technical expertise for cloud management'
      ],
      solutions: [
        'Cost-effective cloud infrastructure with pay-as-you-use pricing',
        'High-performance hosting with 99.9% uptime guarantee',
        'Auto-scaling solutions that handle traffic spikes automatically',
        'Simplified deployment with automated CI/CD pipelines',
        'Enterprise-grade security and compliance frameworks',
        'Managed services with expert technical support'
      ],
      benefits: [
        'Reduced infrastructure costs and operational overhead',
        'Improved application performance and reliability',
        'Seamless scalability for business growth',
        'Enhanced security and data protection',
        'Global reach with multi-region deployment',
        'Focus on core business while we manage infrastructure'
      ],
      industries: ['SaaS', 'E-commerce', 'Media & Entertainment', 'Gaming', 'Financial Services', 'Startups'],
      color: 'from-indigo-500 to-blue-500',
      deliverables: [
        'Cloud architecture design and planning',
        'Infrastructure setup and configuration',
        'Security implementation and hardening',
        'Monitoring and alerting system setup',
        'Backup and disaster recovery implementation',
        'Performance optimization and tuning',
        'Documentation and operational procedures',
        'Ongoing management and support services'
      ],
      technologies: [
        'Amazon Web Services (AWS) - Leading cloud platform',
        'Microsoft Azure - Enterprise cloud services',
        'Google Cloud Platform (GCP) - Google\'s cloud infrastructure',
        'Docker - Containerization platform',
        'Kubernetes - Container orchestration system',
        'Nginx - High-performance web server',
        'CloudFlare - CDN and security services',
        'Terraform - Infrastructure as Code',
        'Ansible - Configuration management',
        'Prometheus - Monitoring and alerting',
        'Grafana - Metrics visualization',
        'ELK Stack - Logging and analytics',
        'Redis - In-memory data structure store',
        'PostgreSQL - Advanced relational database',
        'MongoDB - Document-oriented database'
      ],
      processSteps: [
        {
          title: 'Assessment & Planning',
          description: 'Infrastructure requirements analysis and architecture design',
          duration: '1-2 weeks'
        },
        {
          title: 'Setup & Configuration',
          description: 'Cloud infrastructure deployment and configuration',
          duration: '2-4 weeks'
        },
        {
          title: 'Migration & Testing',
          description: 'Application migration, testing, and optimization',
          duration: '2-6 weeks'
        },
        {
          title: 'Management & Support',
          description: 'Ongoing monitoring, maintenance, and support',
          duration: 'Ongoing'
        }
      ]
    },
    'erp-cms': {
      name: 'ERP & CMS Solutions',
      icon: Database,
      tagline: 'Streamline Business Operations',
      description: 'Streamline your business operations with comprehensive ERP and CMS solutions. We develop and implement systems that integrate all your business processes, improve efficiency, and provide real-time insights for better decision-making.',
      longDescription: 'Our ERP and CMS solutions are designed to transform how your business operates by integrating all departments and functions into a single, comprehensive system. From customer relationship management to inventory control, financial management to content publishing, we create unified platforms that streamline operations and drive efficiency.',
      keyFeatures: [
        'Custom ERP System Development',
        'CRM Integration & Management',
        'Inventory Management & Control',
        'Financial Management & Accounting',
        'Human Resources Management',
        'Supply Chain Management',
        'Content Management Systems',
        'Workflow Automation & BPM',
        'Reporting & Business Intelligence',
        'Multi-location & Multi-currency Support',
        'Mobile Access & Responsive Design',
        'Third-party System Integration'
      ],
      problemsSolved: [
        'Disconnected systems and data silos',
        'Manual processes and inefficient workflows',
        'Lack of real-time business insights',
        'Poor inventory and resource management',
        'Inconsistent customer experience',
        'Difficulty in scaling business operations'
      ],
      solutions: [
        'Integrated ERP systems connecting all business functions',
        'Automated workflows reducing manual effort by 70%',
        'Real-time dashboards and business intelligence',
        'Optimized inventory and resource management',
        'Unified customer experience across all touchpoints',
        'Scalable architecture supporting business growth'
      ],
      benefits: [
        'Streamlined operations and improved efficiency',
        'Better data accuracy and real-time insights',
        'Enhanced customer relationship management',
        'Improved inventory and resource utilization',
        'Reduced operational costs and waste',
        'Scalable platform for future growth'
      ],
      industries: ['Manufacturing', 'Retail', 'Distribution', 'Professional Services', 'Healthcare', 'Non-profit'],
      color: 'from-teal-500 to-green-500',
      deliverables: [
        'Business process analysis and requirements',
        'System architecture and design documentation',
        'Custom ERP/CMS development and configuration',
        'Data migration and system integration',
        'User training and change management',
        'Testing and quality assurance',
        'Go-live support and optimization',
        'Ongoing maintenance and support'
      ],
      technologies: [
        'Odoo - Open-source ERP platform',
        'SAP - Enterprise resource planning software',
        'Microsoft Dynamics - Business applications suite',
        'Salesforce - Customer relationship management',
        'NetSuite - Cloud-based ERP solution',
        'WordPress - Content management system',
        'Drupal - Enterprise content management',
        'Magento - E-commerce platform',
        'Django - Python web framework',
        'Laravel - PHP framework',
        'React - Frontend JavaScript library',
        'Node.js - Server-side JavaScript',
        'PostgreSQL - Enterprise database',
        'MySQL - Relational database management',
        'Redis - In-memory data store'
      ],
      processSteps: [
        {
          title: 'Analysis & Planning',
          description: 'Business process analysis and system requirements gathering',
          duration: '2-4 weeks'
        },
        {
          title: 'Design & Development',
          description: 'System design, development, and customization',
          duration: '8-20 weeks'
        },
        {
          title: 'Testing & Training',
          description: 'System testing, user training, and change management',
          duration: '2-4 weeks'
        },
        {
          title: 'Deployment & Support',
          description: 'Go-live support, optimization, and ongoing maintenance',
          duration: 'Ongoing'
        }
      ]
    },
    'custom-software': {
      name: 'Custom Software Development',
      icon: Code,
      tagline: 'Tailored Solutions for Unique Needs',
      description: 'Get software that perfectly fits your business requirements with our custom development services. We create scalable, maintainable, and user-friendly applications that solve your unique business challenges.',
      longDescription: 'Our custom software development services are designed to address your specific business needs with precision and innovation. We work closely with you to understand your unique requirements and create software solutions that not only meet your current needs but also scale with your future growth.',
      keyFeatures: [
        'Requirements Analysis & Business Process Mapping',
        'Custom Application Development',
        'Database Design & Architecture',
        'API Development & Third-party Integration',
        'User Interface & Experience Design',
        'Quality Assurance & Testing',
        'Performance Optimization',
        'Security Implementation',
        'Documentation & Training',
        'Deployment & Go-live Support',
        'Maintenance & Support Services',
        'Scalability & Future Enhancement Planning'
      ],
      problemsSolved: [
        'Off-the-shelf software doesn\'t meet specific needs',
        'Manual processes requiring automation',
        'Legacy systems needing modernization',
        'Integration challenges between different systems',
        'Scalability limitations of existing solutions',
        'Unique business requirements not addressed by standard software'
      ],
      solutions: [
        'Custom software perfectly aligned with business processes',
        'Automated workflows reducing manual effort significantly',
        'Modern, scalable applications replacing legacy systems',
        'Seamless integration between all business systems',
        'Scalable architecture supporting unlimited growth',
        'Unique features providing competitive advantages'
      ],
      benefits: [
        'Perfect fit for your specific business needs',
        'Competitive advantage through unique features',
        'Full ownership and control of the software',
        'Scalable architecture for future growth',
        'Integration with existing systems and workflows',
        'Long-term cost savings compared to licensing fees'
      ],
      industries: ['Healthcare', 'Finance', 'Manufacturing', 'Logistics', 'Education', 'Government'],
      color: 'from-purple-500 to-indigo-500',
      deliverables: [
        'Detailed requirements specification',
        'System architecture and design documents',
        'Custom software application',
        'Database design and implementation',
        'API documentation and integration guides',
        'User manuals and training materials',
        'Testing reports and quality assurance',
        'Deployment and ongoing support'
      ],
      technologies: [
        'Python - Versatile programming language',
        'Java - Enterprise-grade development platform',
        'C# - Microsoft\'s object-oriented language',
        '.NET - Microsoft development framework',
        'Node.js - JavaScript runtime for server-side development',
        'React - Modern frontend JavaScript library',
        'Angular - TypeScript-based web application framework',
        'Vue.js - Progressive JavaScript framework',
        'Django - High-level Python web framework',
        'Spring Boot - Java-based framework',
        'PostgreSQL - Advanced open source database',
        'MongoDB - Document-oriented NoSQL database',
        'Redis - In-memory data structure store',
        'Docker - Containerization platform',
        'Kubernetes - Container orchestration'
      ],
      processSteps: [
        {
          title: 'Discovery & Analysis',
          description: 'Requirements gathering, analysis, and project planning',
          duration: '2-4 weeks'
        },
        {
          title: 'Design & Architecture',
          description: 'System design, architecture planning, and prototyping',
          duration: '2-3 weeks'
        },
        {
          title: 'Development & Testing',
          description: 'Software development, testing, and quality assurance',
          duration: '8-24 weeks'
        },
        {
          title: 'Deployment & Support',
          description: 'Deployment, training, and ongoing maintenance',
          duration: 'Ongoing'
        }
      ]
    },
    'it-support': {
      name: 'IT Support & Managed Services',
      icon: Users,
      tagline: 'Comprehensive IT Management',
      description: 'Focus on your core business while we handle your IT infrastructure. Our managed services provide proactive monitoring, maintenance, and support to ensure your systems run smoothly and efficiently.',
      longDescription: 'Our IT support and managed services provide comprehensive technology management for businesses of all sizes. We take care of your entire IT infrastructure, from servers and networks to end-user support, allowing you to focus on what you do best while ensuring your technology works seamlessly.',
      keyFeatures: [
        '24/7 System Monitoring & Alerting',
        'Help Desk & End-user Support',
        'Network Management & Optimization',
        'Server Administration & Maintenance',
        'Data Backup & Disaster Recovery',
        'Software Updates & Patch Management',
        'Hardware Procurement & Setup',
        'Cybersecurity Management',
        'Cloud Services Management',
        'IT Strategy & Planning',
        'Vendor Management & Coordination',
        'Performance Reporting & Analytics'
      ],
      problemsSolved: [
        'High IT operational costs and overhead',
        'Frequent system downtime and performance issues',
        'Lack of internal IT expertise and resources',
        'Reactive approach to IT problems',
        'Security vulnerabilities and compliance risks',
        'Difficulty keeping up with technology changes'
      ],
      solutions: [
        'Cost-effective managed services reducing IT expenses',
        'Proactive monitoring preventing downtime and issues',
        'Expert IT team providing specialized knowledge',
        'Proactive maintenance and problem prevention',
        'Comprehensive security management and compliance',
        'Strategic IT planning and technology roadmaps'
      ],
      benefits: [
        'Reduced IT costs and operational overhead',
        'Improved system reliability and uptime',
        'Access to expert IT knowledge and skills',
        'Proactive problem resolution and prevention',
        'Enhanced security and compliance posture',
        'Focus on core business activities'
      ],
      industries: ['Small Business', 'Professional Services', 'Healthcare', 'Legal', 'Non-profit', 'Manufacturing'],
      color: 'from-gray-500 to-slate-500',
      deliverables: [
        'IT infrastructure assessment and audit',
        'Managed services agreement and SLAs',
        'Monitoring and alerting system setup',
        'Help desk and support procedures',
        'Backup and disaster recovery implementation',
        'Security policies and procedures',
        'Regular performance and health reports',
        'Strategic IT planning and recommendations'
      ],
      technologies: [
        'Microsoft 365 - Cloud productivity suite',
        'Windows Server - Server operating system',
        'VMware - Virtualization platform',
        'Cisco - Networking equipment and solutions',
        'Fortinet - Network security appliances',
        'Veeam - Backup and disaster recovery',
        'ConnectWise - IT service management',
        'TeamViewer - Remote access and support',
        'Nagios - IT infrastructure monitoring',
        'Splunk - IT operations analytics',
        'Active Directory - Identity and access management',
        'Exchange Server - Email and collaboration',
        'SharePoint - Document management and collaboration',
        'Hyper-V - Microsoft virtualization platform',
        'Azure - Microsoft cloud platform'
      ],
      processSteps: [
        {
          title: 'Assessment & Planning',
          description: 'IT infrastructure assessment and service planning',
          duration: '1-2 weeks'
        },
        {
          title: 'Setup & Onboarding',
          description: 'Monitoring setup, documentation, and team onboarding',
          duration: '2-3 weeks'
        },
        {
          title: 'Service Delivery',
          description: 'Ongoing monitoring, support, and maintenance services',
          duration: 'Ongoing'
        },
        {
          title: 'Review & Optimization',
          description: 'Regular service reviews and optimization',
          duration: 'Quarterly'
        }
      ]
    }
  };

  const service = services[serviceId || ''];

  if (!service) {
    return (
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in ${service.name} services. Could you provide more details about your approach, timeline, and how we can get started?`
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
              <Link to="/services" className="hover:text-electric-pink transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-electric-pink">{service.name}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                      {service.name}
                    </h1>
                    <p className="text-lg md:text-xl text-electric-pink font-semibold mt-2">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/919461232921?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Get Quote</span>
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
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Service Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-electric-pink" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Timeline:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">{service.processSteps[0].duration} - {service.processSteps[service.processSteps.length - 1].duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-azure" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Team:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">Dedicated experts</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Support:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">24/7 available</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Quality:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">Enterprise-grade</span>
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
              {service.longDescription}
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
                {service.problemsSolved.map((problem: string, index: number) => (
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
                {service.solutions.map((solution: string, index: number) => (
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

      {/* Key Features */}
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
              Comprehensive features designed to address your specific needs
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate={benefitsInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {service.keyFeatures.map((feature: string, index: number) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
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
            {service.benefits.map((benefit: string, index: number) => (
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

      {/* Technologies */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We <span className="text-electric-pink">Use</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Cutting-edge tools and platforms for optimal results
            </p>
          </motion.div>

          <div className="space-y-4">
            {service.technologies.map((tech: string, index: number) => (
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
        </div>
      </section>

      {/* Process Steps */}
      <section ref={processRef} className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-azure">Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Structured approach ensuring successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.processSteps.map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center relative"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-electric-pink to-azure rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                  {step.description}
                </p>
                <div className="text-xs text-electric-pink font-semibold">
                  {step.duration}
                </div>
                {index < service.processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
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
              Comprehensive deliverables ensuring project success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {service.deliverables.map((deliverable: string, index: number) => (
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
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
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
              {service.industries.map((industry: string, index: number) => (
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
              Ready to Get Started with {service.name}?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
              Let's discuss your requirements and create a solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/919461232921?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-electric-pink px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Free Quote</span>
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

      {/* Back to Services */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-electric-pink hover:text-azure transition-colors font-semibold text-sm md:text-base"
          >
            <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
            <span>Back to All Services</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;