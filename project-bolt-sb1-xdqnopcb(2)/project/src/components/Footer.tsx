import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  ChevronRight,
  ArrowUp,
  Code
} from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const services = [
    'DevOps Consulting',
    'App Development',
    'Web Development',
    'Cybersecurity',
    'Digital Marketing',
    'ERP & CMS Solutions'
  ];

  const consultancies = [
    'AWS Cloud Consultancy',
    'DevSecOps Advisory',
    'Cybersecurity Risk & Compliance',
    'Business Strategy & Growth'
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-pink to-azure rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">
                Codigohunt
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Premier IT consultancy and services firm delivering high-performance, scalable, 
              and secure digital solutions globally.
            </p>
            <div className="space-y-2">
              <a 
                href="tel:+919461232921"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-electric-pink transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9461232921</span>
              </a>
              <a 
                href="mailto:official@codigohunt.com"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-electric-pink transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">official@codigohunt.com</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  CBC 13 First Floor, Vikramaditya Marg, Jaipur, Rajasthan
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Consultancies', path: '/consultancies' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-electric-pink transition-colors group w-full text-left"
                >
                  <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  <span className="text-sm">{link.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Services</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                  <ChevronRight className="w-3 h-3 text-electric-pink" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultancies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Consultancies</h3>
            <div className="space-y-2">
              {consultancies.map((consultancy) => (
                <div key={consultancy} className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                  <ChevronRight className="w-3 h-3 text-azure" />
                  <span className="text-sm">{consultancy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © 2025 Codigohunt Solutions. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleNavigation('/privacy-policy')}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-electric-pink transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => handleNavigation('/terms')}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-electric-pink transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/919461232921"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-electric-pink hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-electric-pink to-azure text-white rounded-full hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;