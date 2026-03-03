import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';

const faqs = [
  {
    question: 'Is JAMB Master really free?',
    answer: 'Yes! JAMB Master is completely free to download. We offer thousands of practice questions and detailed solutions at no cost. We also have a premium version with additional features for students who want extra practice.',
    category: 'general'
  },
  {
    question: 'How many questions are available?',
    answer: 'We currently have over 15,000 JAMB-style questions across all subjects. This includes questions from past JAMB exams and carefully crafted practice questions that follow the JAMB syllabus and pattern.',
    category: 'general'
  },
  {
    question: 'Can I use the app offline?',
    answer: 'Absolutely! Once you download the app and the subjects you want to study, you can access all questions and solutions offline. Perfect for studying without internet access.',
    category: 'features'
  },
  {
    question: 'Does it cover all JAMB subjects?',
    answer: 'Yes! We cover all JAMB subjects across Science, Art, and Commercial departments. This includes Use of English, Mathematics, Physics, Chemistry, Biology, Economics, Government, Literature, and more.',
    category: 'subjects'
  },
  {
    question: 'How are questions organized?',
    answer: 'Questions are organized by department (Science, Art, Commercial), subject, and specific topics. You can also practice by year or take random tests to simulate the actual exam experience.',
    category: 'features'
  },
  {
    question: 'Will the app be updated for the current year?',
    answer: 'Yes! We regularly update our question bank to include the latest JAMB patterns and syllabus changes. Our team works year-round to ensure our content remains relevant and helpful.',
    category: 'general'
  },
  {
    question: 'Can I track my progress?',
    answer: 'Definitely! The app includes detailed performance analytics showing your strengths, areas for improvement, topic mastery, and comparison with other students. You can track your progress over time.',
    category: 'features'
  },
  {
    question: 'Is there customer support?',
    answer: 'Yes, we offer 24/7 customer support via email and in-app chat. Our team is always ready to help with any questions or issues you might have.',
    category: 'support'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', label: 'All', count: faqs.length },
    { id: 'general', label: 'General', count: faqs.filter(f => f.category === 'general').length },
    { id: 'features', label: 'Features', count: faqs.filter(f => f.category === 'features').length },
    { id: 'subjects', label: 'Subjects', count: faqs.filter(f => f.category === 'subjects').length },
    { id: 'support', label: 'Support', count: faqs.filter(f => f.category === 'support').length },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="py-20">
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
            ❓ Got Questions?
          </span>
          <h2 className="section-title">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about JAMB Master
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                  : 'bg-white/5 hover:bg-white/10 text-gray-400'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left glass-card p-4 transition-all ${
                  openIndex === index ? 'border-primary-500' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 inline-block max-w-2xl mx-auto">
            <HelpCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-400 mb-4">
              Can't find the answer you're looking for? Please contact our support team.
            </p>
            <button className="btn-primary inline-flex items-center gap-2">
              <Mail size={16} />
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;