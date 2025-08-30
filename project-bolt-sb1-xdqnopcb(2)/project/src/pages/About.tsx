import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Shield, 
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  Phone,
  MessageCircle,
  MapPin,
  Mail
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const directors = [
    {
      name: 'Ankit Sharma',
      role: 'DevOps Engineer & Development Expert',
      experience: '5+ years',
      phone: '+91 9461232921',
      expertise: [
        'DevOps Pipeline Architecture',
        'Cloud Infrastructure Management',
        'Full-Stack Development',
        'System Optimization',
        'Team Leadership'
      ],
      description: 'Ankit brings extensive experience in DevOps engineering and full-stack development. He specializes in creating robust CI/CD pipelines, managing cloud infrastructure, and leading development teams to deliver high-quality solutions.'
    },
    {
      name: 'Akshay Gupta',
      role: 'Cloud, DevOps & DevSecOps Expert',
      experience: '6+ years',
      phone: '+91 87698 92429',
      expertise: [
        'Cloud Architecture Design',
        'DevSecOps Implementation',
        'Security Integration',
        'Performance Optimization',
        'Compliance Management'
      ],
      description: 'Akshay is our cloud and security specialist with deep expertise in DevSecOps practices. He ensures that security is integrated throughout the development lifecycle while maintaining optimal performance and compliance standards.'
    },
    {
      name: 'Vaibhav Patidar',
      role: 'DevOps and IT Services & Support Expert',
      experience: '5+ years',
      phone: '+91 94148 01812',
      expertise: [
        'IT Infrastructure Management',
        'DevOps Automation',
        'Technical Support',
        'System Administration',
        'Process Optimization'
      ],
      description: 'Vaibhav leads our IT services and support operations with a focus on DevOps automation and infrastructure management. He ensures reliable system operations and provides expert technical support to our clients.'
    },
    {
      name: 'Sameer Khan',
      role: 'DevOps and IT Services & Support Expert',
      experience: '5+ years',
      phone: '+91 9588926429',
      expertise: [
        'IT Infrastructure Engineering',
        'DevOps Pipeline Automation',
        'Enterprise Technical Support',
        'Linux/Cloud System Administration',
        'Operational Efficiency & Process Streamlining'
      ],
      description: 'Sameer leads our IT services and support division with a strong emphasis on DevOps automation and infrastructure orchestration. He ensures high-availability system performance and delivers expert-level technical solutions to our clients.'
    },
    {
      name: 'Ravi Naval',
      role: 'Sales Head – IT Solutions & Services',
      experience: '5+ years',
      phone: '+91 93582 50657',
      expertise: [
        'IT Sales Strategy & Execution',
        'Client Relationship Management',
        'B2B Solutions Selling',
        'Revenue Growth & Market Expansion',
        'Team Leadership & Sales Enablement'
      ],
      description: 'Ravi leads our sales operations with a strategic focus on driving business growth and client acquisition across IT solutions and services. He specializes in building high-performance sales teams, forging strong client relationships, and delivering customized tech-driven solutions that align with client needs.'
    }
  ];

  const values = [
    {
      title: 'Agile Delivery',
      description: 'We embrace agile methodologies to deliver solutions quickly and efficiently, adapting to changing requirements and ensuring continuous improvement.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Transparent Engagement',
      description: 'We believe in complete transparency with our clients, providing clear communication, regular updates, and honest assessments throughout every project.',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Ethical Standards',
      description: 'We maintain the highest ethical standards in all our business practices, ensuring integrity, honesty, and respect in every client relationship.',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Innovation Focus',
      description: 'We continuously explore new technologies and methodologies to provide cutting-edge solutions that give our clients a competitive advantage.',
      icon: Target,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const achievements = [
    {
      number: '50+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries',
      icon: Award
    },
    {
      number: '10+',
      label: 'Global Clients',
      description: 'Trusted by clients from different countries and regions',
      icon: Globe
    },
    {
      number: '20+',
      label: 'Industry Domains',
      description: 'Experience across diverse business sectors',
      icon: Users
    },
    {
      number: '98%',
      label: 'Client Retention',
      description: 'High client satisfaction and long-term partnerships',
      icon: TrendingUp
    }
  ];

  return (
    <>
      <SEOHead 
        title="About Us - Expert IT Team & Company Story | Codigohunt Solutions"
        description="Learn about Codigohunt Solutions' expert team, company mission, values, and our journey in delivering premier IT consultancy and development services globally."
        keywords="about codigohunt solutions, IT company team, DevOps experts, cloud specialists, company mission, IT consultancy team, Jaipur IT company"
        url="https://silly-otter-2e6a50.netlify.app/about"
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Codigohunt</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We are a premier IT consultancy and services firm dedicated to empowering businesses through innovative technology solutions and expert guidance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto"
            >
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-electric-pink to-azure rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">
                      {achievement.description}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={missionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission & <span className="text-electric-pink">Vision</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Driving digital transformation through innovative solutions and expert guidance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-electric-pink to-azure rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  To empower businesses of all sizes with cutting-edge technology solutions that drive growth, 
                  improve efficiency, and create competitive advantages. We are committed to delivering 
                  high-quality, scalable, and secure solutions that meet our clients' unique needs and exceed their expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-azure to-powder-blue rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  To become the leading global IT consultancy firm recognized for innovation, excellence, 
                  and transformative impact. We envision a future where technology seamlessly integrates 
                  with business processes to create unprecedented opportunities for growth and success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Directors Section */}
        <section ref={teamRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-azure">Leadership Team</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Meet the experienced professionals leading Codigohunt Solutions to new heights of excellence.
              </p>
            </motion.div>

            {/* Always show team members, remove animation dependency */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {directors.map((director, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Director Info */}
                  <div className="text-center mb-6">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-electric-pink to-azure rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {director.name}
                    </h3>
                    <p className="text-electric-pink font-semibold mb-1 text-sm sm:text-base">
                      {director.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {director.experience} Experience
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center text-sm sm:text-base">
                    {director.description}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Key Expertise:
                    </h4>
                    <div className="space-y-2">
                      {director.expertise.map((skill, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="text-center">
                    <a
                      href={`tel:${director.phone}`}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{director.phone}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Core <span className="text-electric-pink">Values</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </motion.div>

            {/* Always show values, remove animation dependency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Culture */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Team <span className="text-azure">Culture</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We foster a collaborative, innovative, and inclusive environment where every team member can thrive.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: 'Continuous Learning',
                  description: 'We invest in our team\'s growth through training, certifications, and knowledge sharing.',
                  icon: Award
                },
                {
                  title: 'Collaborative Spirit',
                  description: 'We believe in the power of teamwork and cross-functional collaboration.',
                  icon: Users
                },
                {
                  title: 'Innovation Mindset',
                  description: 'We encourage creative thinking and experimentation with new technologies.',
                  icon: Zap
                },
                {
                  title: 'Work-Life Balance',
                  description: 'We promote a healthy balance between professional and personal life.',
                  icon: Heart
                },
                {
                  title: 'Quality Focus',
                  description: 'We are committed to delivering excellence in everything we do.',
                  icon: Target
                },
                {
                  title: 'Client-Centric Approach',
                  description: 'We put our clients\' success at the center of all our decisions.',
                  icon: Shield
                }
              ].map((culture, index) => {
                const IconComponent = culture.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow text-center group"
                  >
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-electric-pink to-azure rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {culture.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      {culture.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Global <span className="text-electric-pink">Reach</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                While headquartered in Jaipur, Rajasthan, we serve clients globally, delivering world-class solutions across continents.
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-electric-pink" />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Headquarters</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">CBC 13 First Floor, Vikramaditya Marg</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Jaipur, Rajasthan, India</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-azure" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Phone</p>
                      <a href="tel:+919461232921" className="text-gray-600 dark:text-gray-300 hover:text-electric-pink transition-colors text-sm sm:text-base">
                        +91 9461232921
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-azure" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</p>
                      <a href="mailto:official@codigohunt.com" className="text-gray-600 dark:text-gray-300 hover:text-electric-pink transition-colors text-sm sm:text-base">
                        official@codigohunt.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-electric-pink via-azure to-powder-blue">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Ready to Work with Us?
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                Let's discuss how our expertise and values can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919461232921"
                  className="bg-white text-electric-pink px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Call +91 9461232921
                </a>
                <a
                  href={`https://wa.me/919461232921?text=${encodeURIComponent("I'd like to learn more about Codigohunt Solutions and discuss potential collaboration opportunities.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-pink px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;