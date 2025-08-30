import React, { memo } from 'react';
import { motion } from 'framer-motion';

const BackgroundElements: React.FC = memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ willChange: 'transform' }}>
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 dark:opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 255, 0.3) 0%, transparent 70%)',
          willChange: 'transform'
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-10 w-96 h-96 rounded-full opacity-15 dark:opacity-8"
        style={{
          background: 'radial-gradient(circle, rgba(0, 127, 255, 0.3) 0%, transparent 70%)',
          willChange: 'transform'
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full opacity-20 dark:opacity-12"
        style={{
          background: 'radial-gradient(circle, rgba(176, 224, 230, 0.4) 0%, transparent 70%)',
          willChange: 'transform'
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 127, 255, 0.1) 0%, transparent 50%)' }} />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-3 dark:opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 127, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
});

BackgroundElements.displayName = 'BackgroundElements';

export default BackgroundElements;