import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  Target, 
  BarChart3, 
  Users, 
  Sparkles,
  Download,
  Brain,
  Clock
} from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Topic-wise Questions',
    description: 'Practice questions organized by topics for focused learning and better understanding.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Detailed Solutions',
    description: 'Step-by-step explanations with workings for every question to ensure concept clarity.'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Performance Analytics',
    description: 'Track your progress, identify strengths and areas that need improvement.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Department Specific',
    description: 'Tailored content for Science, Art, and Commercial students.'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI Recommendations',
    description: 'Smart question recommendations based on your performance and goals.'
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: 'Offline Access',
    description: 'Study anywhere, anytime even without internet connection.'
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm mb-4">
            ✨ Why Choose Us
          </span>
          <h2 className="section-title">
            Everything You Need to{' '}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive features designed to help you master exams and achieve your dream score
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group hover:border-primary-500/50 transition-all"
            >
              <div className="mb-4 text-primary-400 group-hover:text-primary-300 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-card p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-500/20 rounded-full">
                <Sparkles className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-1">New: AI-Powered Practice</h3>
                <p className="text-gray-400">Get personalized question recommendations based on your performance</p>
              </div>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Try AI Feature
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Features;