// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Adebayo Olamide',
//     role: 'Science Student',
//     department: 'Science',
//     image: 'https://i.pravatar.cc/150?img=1',
//     content: 'JAMB Master transformed my preparation. The detailed solutions helped me understand difficult concepts in Physics and Chemistry. I scored 320 in my JAMB!',
//     rating: 5,
//     score: '320'
//   },
//   {
//     id: 2,
//     name: 'Chioma Nnamdi',
//     role: 'Art Student',
//     department: 'Art',
//     image: 'https://i.pravatar.cc/150?img=2',
//     content: 'The Literature and Government questions were spot on! The topic-wise organization made it easy to focus on my weak areas. Highly recommended!',
//     rating: 5,
//     score: '305'
//   },
//   {
//     id: 3,
//     name: 'Emeka Okonkwo',
//     role: 'Commercial Student',
//     department: 'Commercial',
//     image: 'https://i.pravatar.cc/150?img=3',
//     content: 'Economics and Accounting questions with step-by-step solutions helped me understand complex calculations. Best JAMB prep app out there!',
//     rating: 5,
//     score: '315'
//   },
//   {
//     id: 4,
//     name: 'Fatima Abubakar',
//     role: 'Science Student',
//     department: 'Science',
//     image: 'https://i.pravatar.cc/150?img=4',
//     content: 'The Biology questions are amazing! The diagrams and explanations made learning so easy. I finally understand genetics and ecology.',
//     rating: 5,
//     score: '298'
//   },
//   {
//     id: 5,
//     name: 'Daniel Peter',
//     role: 'Art Student',
//     department: 'Art',
//     image: 'https://i.pravatar.cc/150?img=5',
//     content: "CRS and History questions are comprehensive. The app's interface is user-friendly and the offline feature is a lifesaver!",
//     rating: 5,
//     score: '310'
//   }
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextTestimonial();
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const nextTestimonial = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section id="testimonials" className="py-20 bg-dark-100/50">
//       <div className="container-custom">
//         {/* Section Header */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm mb-4">
//             ⭐ Student Success Stories
//           </span>
//           <h2 className="section-title">
//             What Our{' '}
//             <span className="gradient-text">Students Say</span>
//           </h2>
//           <p className="section-subtitle">
//             Join thousands of successful students who aced JAMB with JAMB Master
//           </p>
//         </motion.div>

//         {/* Testimonials Slider */}
//         <div className="relative max-w-4xl mx-auto">
//           {/* Main Testimonial Card */}
//           <div className="relative h-[400px] overflow-hidden">
//             <AnimatePresence initial={false} custom={direction} mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
//                 className="absolute inset-0"
//               >
//                 <div className="glass-card p-8 h-full flex flex-col">
//                   {/* Quote Icon */}
//                   <Quote className="w-12 h-12 text-primary-500/20 mb-4" />

//                   {/* Rating */}
//                   <div className="flex gap-1 mb-4">
//                     {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
//                     ))}
//                   </div>

//                   {/* Content */}
//                   <p className="text-lg text-gray-300 mb-6 flex-1">
//                     "{testimonials[currentIndex].content}"
//                   </p>

//                   {/* Author Info */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <img
//                         src={testimonials[currentIndex].image}
//                         alt={testimonials[currentIndex].name}
//                         className="w-14 h-14 rounded-full border-2 border-primary-500"
//                       />
//                       <div>
//                         <h4 className="font-display font-bold">{testimonials[currentIndex].name}</h4>
//                         <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
//                         <span className="text-xs text-primary-400">{testimonials[currentIndex].department}</span>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-2xl font-display font-bold gradient-text">
//                         {testimonials[currentIndex].score}
//                       </div>
//                       <p className="text-xs text-gray-500">JAMB Score</p>
//                     </div>
//                   </div>

//                   {/* Department Badge */}
//                   <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500/20 rounded-full text-xs">
//                     {testimonials[currentIndex].department}
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevTestimonial}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 w-10 h-10 glass-card rounded-full flex items-center justify-center hover:border-primary-500 transition-colors"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={nextTestimonial}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 w-10 h-10 glass-card rounded-full flex items-center justify-center hover:border-primary-500 transition-colors"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>

//           {/* Dots Indicator */}
//           <div className="flex justify-center gap-2 mt-6">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setDirection(index > currentIndex ? 1 : -1);
//                   setCurrentIndex(index);
//                 }}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? 'w-6 bg-gradient-to-r from-primary-500 to-secondary-500'
//                     : 'bg-white/20 hover:bg-white/40'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Stats Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
//         >
//           {[
//             { label: 'Students', value: '50k+', icon: '👥' },
//             { label: '5-Star Reviews', value: '10k+', icon: '⭐' },
//             { label: 'Success Rate', value: '95%', icon: '📈' },
//             { label: 'Universities', value: '150+', icon: '🏛️' },
//           ].map((stat, index) => (
//             <div key={index} className="glass-card p-4 text-center">
//               <div className="text-2xl mb-2">{stat.icon}</div>
//               <div className="text-xl font-display font-bold gradient-text">{stat.value}</div>
//               <p className="text-xs text-gray-400">{stat.label}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;