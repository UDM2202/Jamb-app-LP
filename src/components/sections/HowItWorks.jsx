import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Download, 
  UserPlus, 
  BookOpen, 
  Target, 
  BarChart3,
  Award 
} from 'lucide-react';

const steps = [
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Download the App',
    description: 'Get Prep X from Google Play Store or Apple App Store for free.',
    color: 'from-primary-500 to-secondary-500'
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: 'Create Account',
    description: 'Sign up in seconds and select your department (Science, Art, or Commercial).',
    color: 'from-secondary-500 to-accent-500'
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Choose Subjects',
    description: 'Select the subjects you want to focus on and start practicing.',
    color: 'from-accent-500 to-primary-500'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Practice Daily',
    description: 'Answer topic-wise questions with detailed solutions and explanations.',
    color: 'from-primary-500 to-accent-500'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Track Progress',
    description: 'Monitor your performance with detailed analytics and insights.',
    color: 'from-secondary-500 to-primary-500'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Ace Your Exam',
    description: 'Build confidence and master exams with consistent practice.',
    color: 'from-accent-500 to-secondary-500'
  }
];

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="py-20">
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
            🎯 Simple Process
          </span>
          <h2 className="section-title">
            How{' '}
            <span className="gradient-text">Prep X</span>
            {' '}Works
          </h2>
          <p className="section-subtitle">
            Get started in minutes and follow these simple steps to master exams
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-dark-200 rounded-full flex items-center justify-center border-2 border-primary-500/30">
                  <span className="text-sm font-bold gradient-text">{index + 1}</span>
                </div>

                <div className="glass-card p-6 ml-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} p-3 mb-4`}>
                    <div className="w-full h-full text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                  {/* Progress Indicator (Mobile) */}
                  <div className="lg:hidden mt-4 flex items-center">
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                      />
                    </div>
                    <span className="ml-2 text-xs text-gray-500">{index + 1}/{steps.length}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Demo Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-card p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 group-hover:opacity-75 transition-opacity" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold mb-3">
                Watch How Students Are Acing exams with Prep X
              </h3>
              <p className="text-gray-400 mb-4">
                See how Prep X has helped thousands of students improve their scores
              </p>
              <button className="btn-primary group">
                Watch Demo Video
                <Play className="inline ml-2" size={16} />
              </button>
            </div>
            
            <div className="flex-1 relative">
              <div className="aspect-video bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

// Missing icons
const Play = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="5 3 19 12 5 21 5 3"/></svg>;

export default HowItWorks;