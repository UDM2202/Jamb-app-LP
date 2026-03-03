import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-dark-200 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
            JAMB Master
          </span>
        </motion.h1>
        
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-gray-400"
        >
          Preparing your success story...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;