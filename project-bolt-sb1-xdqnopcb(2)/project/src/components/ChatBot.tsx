import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, AlertCircle, Wifi, WifiOff } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isLoading?: boolean;
  error?: boolean;
  errorType?: 'api' | 'network' | 'auth';
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant from Codigohunt Solutions. How can I help you with our IT consultancy services today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState<'connected' | 'disconnected' | 'testing'>('testing');

  // Updated Gemini API configuration
  const GEMINI_API_KEY = 'AIzaSyAsz6PSAS2TWU59RmO6Wgz5jSOGgofwkxA'; // Your provided API key
  const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

  // Company context for AI responses
  const companyContext = `
    You are an AI assistant for Codigohunt Solutions, a premier IT consultancy and services firm based in Jaipur, Rajasthan, India. 

    Company Information:
    - Name: Codigohunt Solutions
    - Location: CBC 13 First Floor, Vikramaditya Marg, Jaipur, Rajasthan
    - Phone: +91 9461232921
    - Email: official@codigohunt.com
    - Website: https://silly-otter-2e6a50.netlify.app

    Services:
    1. DevOps Consulting - CI/CD pipelines, infrastructure automation, monitoring
    2. App Development - Native iOS/Android, cross-platform mobile apps
    3. Web Development - Modern responsive websites, SPAs, PWAs
    4. Cybersecurity - Security auditing, vulnerability testing, compliance
    5. Digital Marketing - SEO, PPC, social media marketing
    6. Cloud Hosting & Deployment - AWS, Azure, scalable infrastructure
    7. ERP & CMS Solutions - Custom ERP, CRM integration, workflow automation
    8. Custom Software Development - Tailored solutions for specific needs
    9. IT Support & Managed Services - 24/7 monitoring, help desk support

    Consultancy Services:
    1. AWS Cloud Consultancy - Cloud migration and optimization
    2. DevSecOps Advisory - Security integration in development
    3. Cybersecurity Risk & Compliance - Risk assessment and frameworks
    4. Business Strategy & Growth - Technology-driven growth consulting

    Team:
    - Ankit Sharma: DevOps Engineer & Development Expert (5+ years)
    - Akshay Gupta: Cloud, DevOps & DevSecOps Expert (6+ years)
    - Vaibhav Patidar: DevOps and IT Services & Support Expert (5+ years)
    - Sameer Khan: DevOps and IT Services & Support Expert (5+ years)
    - Ravi Naval: Sales Head – IT Solutions & Services (5+ years)

    Statistics:
    - 50+ Projects Delivered
    - 10+ Global Clients
    - 20+ Industry Domains
    - 98% Client Retention Rate

    Always be helpful, professional, and focus on how Codigohunt Solutions can help with their IT needs. Provide specific information about services when asked. Keep responses concise (under 200 words). If you don't know something specific, direct them to contact the team directly.
  `;

  const callGeminiAPI = async (userMessage: string): Promise<string> => {
    try {
      console.log('Calling Gemini API...');
      
      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: `${companyContext}\n\nUser Question: ${userMessage}\n\nPlease provide a helpful response as Codigohunt Solutions' AI assistant. Keep responses concise but informative (under 200 words).`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 512,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      };

      console.log('Request body:', JSON.stringify(requestBody, null, 2));

      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        
        if (response.status === 403) {
          throw new Error('API key authentication failed');
        } else if (response.status === 429) {
          throw new Error('API rate limit exceeded');
        } else {
          throw new Error(`API request failed: ${response.status} - ${errorText}`);
        }
      }

      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
        const responseText = data.candidates[0].content.parts[0].text;
        setApiStatus('connected');
        return responseText;
      } else {
        console.error('Invalid response format:', data);
        throw new Error('Invalid response format from API');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      setApiStatus('disconnected');
      
      if (error instanceof Error) {
        if (error.message.includes('authentication') || error.message.includes('403')) {
          throw new Error('auth');
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          throw new Error('network');
        }
      }
      
      throw new Error('api');
    }
  };

  const getFallbackResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Predefined responses as fallback
    const responses = {
      'services': "We offer comprehensive IT services including DevOps Consulting, App Development, Web Development, Cybersecurity, Digital Marketing, Hosting & Deployment, ERP & CMS Solutions, Custom Software Development, and IT Support & Managed Services. Which service interests you most?",
      'consultancy': "Our consultancy services include AWS Cloud Consultancy, DevSecOps Advisory & Implementation, Cybersecurity Risk & Compliance, and Business Strategy & Growth Consultancy. Would you like to know more about any specific consultancy?",
      'contact': "You can reach us at +91 9461232921 or email us at official@codigohunt.com. Our office is located at CBC 13 First Floor, Vikramaditya Marg, Jaipur, Rajasthan. Would you like to schedule a consultation?",
      'pricing': "We offer competitive pricing tailored to your specific needs. Each project is unique, so we provide customized quotes. Please contact us at +91 9461232921 for a detailed discussion about your requirements.",
      'team': "Our team consists of experienced directors: Ankit Sharma (DevOps Engineer & Development Expert with 5+ years), Akshay Gupta (Cloud, DevOps & DevSecOps Expert with 6+ years), Vaibhav Patidar (DevOps and IT Services & Support Expert with 5+ years), Sameer Khan (DevOps and IT Services & Support Expert with 5+ years), and Ravi Naval (Sales Head with 5+ years).",
      'experience': "We have successfully delivered 50+ projects for 10+ global clients across 20+ industry domains with a 98% client retention rate. Our team brings enterprise-level expertise to every project.",
      'devops': "Our DevOps services include CI/CD pipeline setup, monitoring solutions, cloud infrastructure management, and OpenShift implementations. We help streamline your development workflow and improve deployment efficiency.",
      'cloud': "We specialize in AWS cloud solutions, cloud migration, infrastructure as code, containerization, and cloud security. Our cloud experts can help optimize your cloud infrastructure for performance and cost.",
      'security': "Our cybersecurity services cover risk assessment, compliance auditing, security implementation, threat monitoring, and security training. We ensure your systems are protected against modern cyber threats."
    };

    for (const [key, response] of Object.entries(responses)) {
      if (message.includes(key)) {
        return response;
      }
    }

    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! Welcome to Codigohunt Solutions. I'm here to help you learn about our IT consultancy services. What would you like to know?";
    }

    if (message.includes('help')) {
      return "I can help you with information about our services, consultancy offerings, team, pricing, or contact details. What specific area interests you?";
    }

    return "Thank you for your question! For detailed information about your specific needs, I recommend contacting our team directly at +91 9461232921 or official@codigohunt.com. Our experts can provide personalized assistance.";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsLoading(true);

    // Add loading message
    const loadingMessage: Message = {
      id: Date.now() + 1,
      text: "Thinking...",
      isBot: true,
      timestamp: new Date(),
      isLoading: true
    };

    setMessages(prev => [...prev, loadingMessage]);

    try {
      // Try to get AI response
      const aiResponse = await callGeminiAPI(currentInput);
      
      // Remove loading message and add AI response
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isLoading);
        return [...filtered, {
          id: Date.now() + 2,
          text: aiResponse,
          isBot: true,
          timestamp: new Date()
        }];
      });
    } catch (error) {
      console.error('AI API failed, using fallback:', error);
      
      // Remove loading message and add fallback response
      const fallbackResponse = getFallbackResponse(currentInput);
      const errorType = error instanceof Error ? error.message as 'api' | 'network' | 'auth' : 'api';
      
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isLoading);
        return [...filtered, {
          id: Date.now() + 2,
          text: fallbackResponse,
          isBot: true,
          timestamp: new Date(),
          error: true,
          errorType
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getErrorMessage = (errorType?: 'api' | 'network' | 'auth') => {
    switch (errorType) {
      case 'auth':
        return 'API authentication issue';
      case 'network':
        return 'Network connection issue';
      case 'api':
      default:
        return 'Using fallback response';
    }
  };

  const getStatusIcon = () => {
    switch (apiStatus) {
      case 'connected':
        return <Wifi className="w-3 h-3 text-green-500" />;
      case 'disconnected':
        return <WifiOff className="w-3 h-3 text-red-500" />;
      case 'testing':
      default:
        return <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />;
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-electric-pink to-azure text-white rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-electric-pink to-azure text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Codigohunt AI Assistant</h3>
                    <div className="flex items-center space-x-1">
                      <p className="text-xs opacity-90">Powered by Gemini AI</p>
                      {getStatusIcon()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot 
                        ? 'bg-gradient-to-r from-electric-pink to-azure text-white' 
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                    }`}>
                      {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className={`px-3 py-2 rounded-lg text-sm relative ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        : 'bg-gradient-to-r from-electric-pink to-azure text-white'
                    }`}>
                      {message.isLoading ? (
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-electric-pink rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-electric-pink rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-electric-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      ) : (
                        <>
                          {message.text}
                          {message.error && (
                            <div className="flex items-center mt-1 text-xs opacity-70">
                              <AlertCircle className="w-3 h-3 mr-1" />
                              <span>{getErrorMessage(message.errorType)}</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about our services..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white text-sm disabled:opacity-50"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputText.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-electric-pink to-azure text-white rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  AI-powered with smart fallback
                </p>
                <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                  {getStatusIcon()}
                  <span>
                    {apiStatus === 'connected' ? 'AI Active' : 
                     apiStatus === 'disconnected' ? 'Fallback Mode' : 
                     'Testing...'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;