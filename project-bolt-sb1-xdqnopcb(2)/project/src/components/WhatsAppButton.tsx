import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = memo(() => {
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in learning more about Codigohunt Solutions' IT consultancy services. Could you please provide more information?"
  );

  return (
    <motion.a
      href={`https://wa.me/919461232921?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors transform-gpu"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ 
        boxShadow: [
          "0 0 0 0 rgba(34, 197, 94, 0.7)",
          "0 0 0 10px rgba(34, 197, 94, 0)",
          "0 0 0 0 rgba(34, 197, 94, 0)"
        ]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
    </motion.a>
  );
});

WhatsAppButton.displayName = 'WhatsAppButton';

export default WhatsAppButton;