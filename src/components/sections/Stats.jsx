import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

const stats = [
  { value: 15000, label: 'Practice Questions', suffix: '+' },
  { value: 50000, label: 'Active Students', suffix: '+' },
  { value: 95, label: 'Success Rate', suffix: '%' },
  { value: 24, label: 'Subjects Covered', suffix: '' },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                {isInView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyDelay={100}
                  />
                ) : (
                  '0'
                )}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;