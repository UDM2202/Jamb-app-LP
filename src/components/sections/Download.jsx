import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Smartphone, 
  Download as DownloadIcon, 
  Star, 
  Shield, 
  Zap,
  CheckCircle
} from 'lucide-react';

const Download = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    'Free to download',
    'Offline access',
    'Regular updates',
    'No hidden fees',
    'All subjects included',
    '24/7 support'
  ];

  return (
    <section id="download" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10" />
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark-200 to-transparent" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm mb-4">
            📱 Get Started Today
          </span>
          <h2 className="section-title">
            Download{' '}
            <span className="gradient-text">JAMB Master</span>
            {' '}Now
          </h2>
          <p className="section-subtitle">
            Available on iOS and Android. Start your journey to JAMB success today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* App Stats */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-200 bg-gradient-to-r from-primary-500 to-secondary-500" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-400">Trusted by 50,000+ students</p>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold mb-4">
              Your Complete JAMB Preparation Partner
            </h3>
            
            <p className="text-gray-400 mb-6">
              Join thousands of successful students who have used JAMB Master to achieve their dream scores. Get instant access to thousands of practice questions, detailed solutions, and smart learning features.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-primary-500/20 transition-all"
              >
                <AppleIcon className="w-8 h-8" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-primary-500/20 transition-all"
              >
                <PlayStoreIcon className="w-8 h-8" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>

            {/* QR Code for mobile */}
            <div className="mt-8 flex items-center gap-4 p-4 glass-card inline-flex">
              <div className="w-16 h-16 bg-white p-1 rounded-lg">
                <div className="w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded" />
              </div>
              <div>
                <p className="text-sm font-semibold">Scan to Download</p>
                <p className="text-xs text-gray-400">Direct APK download</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto max-w-[300px]">
              {/* Phone Frame */}
              <div className="relative z-10 bg-dark-300 rounded-[40px] p-3 shadow-2xl">
                <div className="bg-dark-100 rounded-[32px] overflow-hidden">
                  {/* App Interface Preview */}
                  <div className="p-4">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-semibold">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 bg-white/20 rounded" />
                        <div className="w-4 h-4 bg-white/20 rounded" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="space-y-3">
                      <div className="h-8 w-3/4 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded" />
                      <div className="h-20 w-full bg-white/5 rounded-lg" />
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-12 bg-white/5 rounded" />
                        <div className="h-12 bg-white/5 rounded" />
                      </div>
                      <div className="h-8 w-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-20 h-20 glass-card rounded-2xl p-3 z-20"
              >
                <div className="w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-8 w-24 h-24 glass-card rounded-2xl p-3 z-20"
              >
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary-400 mx-auto mb-1" />
                  <p className="text-xs font-semibold">Secure</p>
                  <p className="text-[10px] text-gray-400">Learning</p>
                </div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Icons
const AppleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const PlayStoreIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 20.5v-17c0-.79.44-1.49 1.13-1.84l9.87 9.87-9.87 9.87c-.69-.35-1.13-1.05-1.13-1.84zm2.16-16.84l11.81 5.76-2.31 2.31-9.5-8.07zm14.53 5.16c.45.2.81.55 1.01 1 .2.45.21.96.01 1.41-.2.45-.55.81-1 1.01L18.42 12l1.28.66c.45.2.8.56 1 1.01.2.45.21.96.01 1.41-.2.45-.56.81-1.01 1.01l-6.79 3.38-2.98-2.98 8.45-8.45 2.58-1.29zM5.16 20.34l9.5-8.07 2.31 2.31-11.81 5.76z"/>
  </svg>
);

export default Download;