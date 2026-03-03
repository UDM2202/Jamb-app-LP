import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm mb-6">
                🚀 Your Success Starts Here
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Master JAMB with{' '}
              <span className="gradient-text">AI-Powered</span>
              <br />
              Learning
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-400 mb-8 max-w-lg"
            >
              Access 15,000+ JAMB questions with detailed solutions, organized by subject, topic, and department. Join 50,000+ students already preparing smarter.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button className="btn-primary group">
                Start Learning Free
                <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="btn-secondary group">
                <Play className="inline mr-2" size={20} />
                Watch Demo
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-8"
            >
              <div>
                <h3 className="text-3xl font-display font-bold gradient-text">15k+</h3>
                <p className="text-sm text-gray-400">Questions</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <h3 className="text-3xl font-display font-bold gradient-text">50k+</h3>
                <p className="text-sm text-gray-400">Students</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <h3 className="text-3xl font-display font-bold gradient-text">95%</h3>
                <p className="text-sm text-gray-400">Success Rate</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - App Preview */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main App Preview */}
              <div className="glass-card p-4 floating">
                <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg" />
                    <div>
                      <h4 className="font-display font-bold">Today's Practice</h4>
                      <p className="text-sm text-gray-400">Physics • 10 questions</p>
                    </div>
                  </div>
                  
                  {/* Sample Question */}
                  <div className="bg-white/5 rounded-lg p-4 mb-3">
                    <p className="text-sm mb-3">A body of mass 5kg is acted upon by a force of 20N. What is the acceleration?</p>
                    <div className="grid grid-cols-2 gap-2">
                      {['2 m/s²', '4 m/s²', '5 m/s²', '10 m/s²'].map((option, i) => (
                        <div key={i} className="bg-white/5 rounded p-2 text-sm hover:bg-primary-500/20 cursor-pointer transition">
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>60%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent-500/10 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;