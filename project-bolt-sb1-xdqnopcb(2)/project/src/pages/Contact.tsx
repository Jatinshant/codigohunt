import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send,
  Clock,
  Globe,
  Users,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    reason: '',
    urgency: '',
    department: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create WhatsApp message with form data
      let whatsappMessage = `Hello! I'm reaching out through your website contact form.\n\n`;
      whatsappMessage += `📝 *Contact Details:*\n`;
      whatsappMessage += `• Name: ${formData.name}\n`;
      whatsappMessage += `• Email: ${formData.email}\n`;
      if (formData.phone) whatsappMessage += `• Phone: ${formData.phone}\n`;
      if (formData.company) whatsappMessage += `• Company: ${formData.company}\n`;
      
      whatsappMessage += `\n🎯 *Inquiry Details:*\n`;
      if (formData.reason) whatsappMessage += `• Reason: ${formData.reason}\n`;
      if (formData.urgency) whatsappMessage += `• Urgency: ${formData.urgency}\n`;
      if (formData.department) whatsappMessage += `• Department: ${formData.department}\n`;
      
      whatsappMessage += `\n💬 *Message:*\n${formData.message}\n\n`;
      whatsappMessage += `Looking forward to hearing from you!`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/919461232921?text=${encodedMessage}`;
      
      // Simulate a brief loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank');
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        reason: '',
        urgency: '',
        department: '',
        message: ''
      });
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      value: '+91 9461232921',
      action: 'tel:+919461232921',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Email Us',
      description: 'Send us your detailed requirements',
      icon: Mail,
      value: 'official@codigohunt.com',
      action: 'mailto:official@codigohunt.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'WhatsApp Chat',
      description: 'Quick chat for immediate assistance',
      icon: MessageCircle,
      value: 'Chat with us',
      action: `https://wa.me/919461232921?text=${encodeURIComponent("Hello! I'd like to discuss my project requirements with Codigohunt Solutions.")}`,
      color: 'from-green-600 to-green-500'
    },
    {
      title: 'Visit Our Office',
      description: 'Meet us in person for detailed discussions',
      icon: MapPin,
      value: 'CBC 13 First Floor, Vikramaditya Marg, Jaipur',
      action: 'https://maps.google.com/?q=CBC+13+First+Floor+Vikramaditya+Marg+Jaipur',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM IST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM IST' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  return (
    <>
      <SEOHead 
        title="Contact Us - Get in Touch with IT Experts | Codigohunt Solutions"
        description="Contact Codigohunt Solutions for IT consultancy, development services, and technical support. Call +91 9461232921 or visit our Jaipur office for expert assistance."
        keywords="contact codigohunt solutions, IT support contact, Jaipur IT company contact, DevOps consulting contact, technical support, IT consultancy contact"
        url="https://silly-otter-2e6a50.netlify.app/contact"
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
                Get in <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge technology solutions? Let's discuss your project and explore how we can help you achieve your goals.
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
                className="bg-gradient-to-r from-electric-pink to-azure text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/919461232921?text=${encodeURIComponent("Hello! I'd like to discuss my project requirements with Codigohunt Solutions.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-electric-pink text-electric-pink hover:bg-electric-pink hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Multiple Ways to <span className="text-electric-pink">Connect</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose the communication method that works best for you. We're here to help!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                const isExternal = method.action.startsWith('http');
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <a
                      href={method.action}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="block bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    >
                      <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                        {method.description}
                      </p>
                      <p className="text-electric-pink font-semibold group-hover:text-azure transition-colors text-sm sm:text-base">
                        {method.value}
                      </p>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section ref={formRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                  Send Us a <span className="text-electric-pink">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Inquiry Reason *
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                      >
                        <option value="">Select reason</option>
                        <option value="New Project">New Project</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                      >
                        <option value="">Select urgency</option>
                        <option value="Low - Within a month">Low - Within a month</option>
                        <option value="Medium - Within 2 weeks">Medium - Within 2 weeks</option>
                        <option value="High - Within a week">High - Within a week</option>
                        <option value="Urgent - ASAP">Urgent - ASAP</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Department
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                      >
                        <option value="">Select department</option>
                        <option value="Sales">Sales</option>
                        <option value="Technical">Technical</option>
                        <option value="Support">Support</option>
                        <option value="Management">Management</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white resize-none text-sm sm:text-base"
                      placeholder="Please describe your project requirements, timeline, and any specific questions you have..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-600 dark:text-green-400"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Redirecting to WhatsApp with your message...</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-600 dark:text-red-400"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Failed to process. Please try again or contact us directly.</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-electric-pink to-azure text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" />
                        <span>Send via WhatsApp</span>
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    This form will open WhatsApp with your message pre-filled for quick communication.
                  </p>
                </form>
              </motion.div>

              {/* Map & Office Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Google Map */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                    Our Location
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 sm:mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0123456789!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Codigohunt Solutions Office Location"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-electric-pink mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Address</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          CBC 13 First Floor, Vikramaditya Marg<br />
                          Jaipur, Rajasthan, India
                        </p>
                      </div>
                    </div>
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

                {/* Office Hours */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center space-x-2">
                    <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-electric-pink" />
                    <span>Office Hours</span>
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                        <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{schedule.day}</span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-electric-pink/10 dark:bg-electric-pink/20 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Note:</strong> For urgent matters outside office hours, please use WhatsApp or email. We'll respond as soon as possible.
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+919461232921"
                      className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                    >
                      <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                      <span className="text-green-700 dark:text-green-400 font-medium text-sm sm:text-base">Request Callback</span>
                    </a>
                    <a
                      href={`https://wa.me/919461232921?text=${encodeURIComponent("Hello! I'd like to discuss my project requirements with Codigohunt Solutions.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                    >
                      <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                      <span className="text-green-700 dark:text-green-400 font-medium text-sm sm:text-base">WhatsApp Chat</span>
                    </a>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Users className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                      <span className="text-blue-700 dark:text-blue-400 font-medium text-sm sm:text-base">Live Chat (AI Assistant)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                24/7 <span className="text-electric-pink">Support Channels</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                We're committed to providing exceptional support whenever you need it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: 'Emergency Support',
                    description: 'Critical issues and urgent technical support',
                    availability: '24/7 Available',
                    contact: 'WhatsApp: +91 9461232921',
                    icon: AlertCircle,
                    color: 'from-red-500 to-orange-500'
                  },
                  {
                    title: 'General Inquiries',
                    description: 'Project discussions and general questions',
                    availability: 'Business Hours',
                    contact: 'Email: official@codigohunt.com',
                    icon: Mail,
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    title: 'Technical Support',
                    description: 'Ongoing project support and maintenance',
                    availability: 'Mon-Sat, 9 AM - 7 PM',
                    contact: 'Phone: +91 9461232921',
                    icon: Users,
                    color: 'from-green-500 to-emerald-500'
                  }
                ].map((channel, index) => {
                  const IconComponent = channel.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                        <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {channel.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                        {channel.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-electric-pink">
                          {channel.availability}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {channel.contact}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;