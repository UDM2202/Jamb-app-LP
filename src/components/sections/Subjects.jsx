import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FlaskConical, 
  Calculator, 
  BookOpen, 
  Globe, 
  History, 
  Languages,
  ChevronRight,
  Beaker,
  Microscope,
  Landmark,
  PenTool,
  BarChart3,
  Palette,
  Shield
} from 'lucide-react';

const subjects = {
  science: [
    { name: 'Physics', icon: <Beaker className="w-6 h-6" />, questions: 2500, color: 'from-blue-500 to-cyan-500' },
    { name: 'Chemistry', icon: <FlaskConical className="w-6 h-6" />, questions: 2300, color: 'from-green-500 to-emerald-500' },
    { name: 'Biology', icon: <Microscope className="w-6 h-6" />, questions: 2800, color: 'from-teal-500 to-green-500' },
    { name: 'Mathematics', icon: <Calculator className="w-6 h-6" />, questions: 2100, color: 'from-purple-500 to-pink-500' },
    { name: 'English', icon: <BookOpen className="w-6 h-6" />, questions: 2000, color: 'from-orange-500 to-red-500' },
  ],
  art: [
    { name: 'Literature in English', icon: <BookOpen className="w-6 h-6" />, questions: 1800, color: 'from-pink-500 to-rose-500' },
    { name: 'History', icon: <History className="w-6 h-6" />, questions: 1600, color: 'from-amber-500 to-orange-500' },
    { name: 'Government', icon: <Landmark className="w-6 h-6" />, questions: 1500, color: 'from-indigo-500 to-purple-500' },
    { name: 'Christian Religious Studies', icon: <BookOpen className="w-6 h-6" />, questions: 1200, color: 'from-yellow-500 to-amber-500' },
    { name: 'Islamic Studies', icon: <BookOpen className="w-6 h-6" />, questions: 1100, color: 'from-emerald-500 to-teal-500' },
  ],
  commercial: [
    { name: 'Economics', icon: <BarChart3 className="w-6 h-6" />, questions: 1900, color: 'from-emerald-500 to-teal-500' },
    { name: 'Accounting', icon: <Calculator className="w-6 h-6" />, questions: 1700, color: 'from-violet-500 to-purple-500' },
    { name: 'Commerce', icon: <Globe className="w-6 h-6" />, questions: 1500, color: 'from-blue-500 to-indigo-500' },
    { name: 'Geography', icon: <Globe className="w-6 h-6" />, questions: 1600, color: 'from-cyan-500 to-blue-500' },
    { name: 'Insurance', icon: <Shield className="w-6 h-6" />, questions: 1100, color: 'from-fuchsia-500 to-pink-500' },
  ],
};

const Subjects = () => {
  const [activeTab, setActiveTab] = useState('science');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    { id: 'science', label: 'Science', icon: <FlaskConical className="w-4 h-4" /> },
    { id: 'art', label: 'Art', icon: <Palette className="w-4 h-4" /> },
    { id: 'commercial', label: 'Commercial', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  // Sample topics for each subject (you can expand this)
  const getSampleTopics = (subjectName) => {
    const topics = {
      Physics: ['Mechanics', 'Waves', 'Electricity', 'Thermodynamics'],
      Chemistry: ['Atomic Structure', 'Organic Chemistry', 'Physical Chemistry', 'Inorganic Chemistry'],
      Biology: ['Cell Biology', 'Genetics', 'Ecology', 'Physiology'],
      Mathematics: ['Algebra', 'Calculus', 'Trigonometry', 'Statistics'],
      English: ['Comprehension', 'Grammar', 'Vocabulary', 'Literature'],
      'Literature in English': ['Prose', 'Poetry', 'Drama', 'Literary Terms'],
      History: ['Nigerian History', 'World History', 'African History', 'Colonialism'],
      Government: ['Political Systems', 'Constitution', 'Citizenship', 'International Relations'],
      'Christian Religious Studies': ['Old Testament', 'New Testament', 'Pauline Epistles', 'The Gospels'],
      'Islamic Studies': ['Quran', 'Hadith', 'Islamic Law', 'Prophet Muhammad'],
      Economics: ['Microeconomics', 'Macroeconomics', 'Development Economics', 'Economic Systems'],
      Accounting: ['Financial Accounting', 'Cost Accounting', 'Bookkeeping', 'Trial Balance'],
      Commerce: ['Trade', 'Marketing', 'Business Organizations', 'Finance'],
      Geography: ['Physical Geography', 'Human Geography', 'Map Reading', 'Climate'],
      Insurance: ['Risk Management', 'Insurance Principles', 'Types of Insurance', 'Claims'],
    };
    return topics[subjectName] || ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'];
  };

  return (
    <section id="subjects" className="py-20 bg-dark-100/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm mb-4">
            📚 Comprehensive Coverage
          </span>
          <h2 className="section-title">
            Subjects Across All{' '}
            <span className="gradient-text">Departments</span>
          </h2>
          <p className="section-subtitle">
            Choose your department and access thousands of questions tailored to your curriculum
          </p>
        </motion.div>

        {/* Department Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Subjects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {subjects[activeTab].map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-card p-6 hover:border-transparent relative overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${subject.color} p-3 mb-4 flex items-center justify-center`}>
                      <div className="w-full h-full text-white">
                        {subject.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary-400 transition-colors">
                      {subject.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {subject.questions.toLocaleString()} practice questions
                    </p>

                    {/* Topics Preview */}
                    <div className="space-y-2 mb-4">
                      {getSampleTopics(subject.name).slice(0, 3).map((topic, i) => (
                        <div key={i} className="flex items-center text-xs text-gray-500">
                          <ChevronRight size={12} className="mr-1 text-primary-400" />
                          {topic}
                        </div>
                      ))}
                    </div>

                    {/* Progress indicator (visual) */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Coverage</span>
                        <span className="text-primary-400">{Math.floor(Math.random() * 30 + 70)}%</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${subject.color} rounded-full`}
                          style={{ width: `${Math.floor(Math.random() * 30 + 70)}%` }}
                        />
                      </div>
                    </div>

                    {/* Explore Button */}
                    <button className="mt-4 text-sm text-primary-400 group-hover:text-primary-300 transition-colors flex items-center">
                      Explore Topics
                      <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            View All Subjects
            <ChevronRight className="inline ml-2" size={16} />
          </button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-display font-bold gradient-text">24+</div>
            <p className="text-sm text-gray-400">Subjects Covered</p>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-display font-bold gradient-text">15,000+</div>
            <p className="text-sm text-gray-400">Practice Questions</p>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-display font-bold gradient-text">200+</div>
            <p className="text-sm text-gray-400">Topics</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Subjects;