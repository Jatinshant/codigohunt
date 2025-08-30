import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

// Lazy load non-critical components
const ChatBot = lazy(() => import('./components/ChatBot'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Consultancies = lazy(() => import('./pages/Consultancies'));
const ConsultancyDetail = lazy(() => import('./pages/ConsultancyDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const BlogLogin = lazy(() => import('./pages/BlogLogin'));
const BlogCMS = lazy(() => import('./pages/BlogCMS'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-3 border-electric-pink border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors duration-300 relative overflow-x-hidden">
            <Navbar />
            
            <main className="relative z-10">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:serviceId" element={<ServiceDetail />} />
                  <Route path="/consultancies" element={<Consultancies />} />
                  <Route path="/consultancies/:consultancyId" element={<ConsultancyDetail />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/admin/login" element={<BlogLogin />} />
                  <Route path="/admin/blog" element={<BlogCMS />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            <Suspense fallback={null}>
              <ChatBot />
            </Suspense>
            <WhatsAppButton />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;