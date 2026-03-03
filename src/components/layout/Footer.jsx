import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Subjects', href: '#subjects' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
    subjects: [
      { name: 'Science', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Commercial', href: '#' },
      { name: 'Use of English', href: '#' },
      { name: 'Mathematics', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-dark-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="container-custom relative z-10 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="text-2xl font-display font-bold inline-block mb-4">
              <span className="gradient-text">JAMB Master</span>
            </a>
            <p className="text-gray-400 text-sm mb-4">
              Empowering Nigerian students to ace JAMB with smart, accessible, and effective exam preparation tools.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:border-primary-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Subjects</h3>
            <ul className="space-y-2">
              {footerLinks.subjects.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="py-6 border-y border-white/5 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-gray-400">
              <Mail size={18} className="text-primary-500" />
              <span className="text-sm">support@jambmaster.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Phone size={18} className="text-primary-500" />
              <span className="text-sm">+234 (0) 123 456 7890</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={18} className="text-primary-500" />
              <span className="text-sm">Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} JAMB Master. All rights reserved.
          </p>
          
          {/* App Store Badges */}
          <div className="flex gap-3">
            <a href="#" className="h-8 w-24 bg-black rounded flex items-center justify-center text-xs text-white hover:scale-105 transition">
              App Store
            </a>
            <a href="#" className="h-8 w-24 bg-black rounded flex items-center justify-center text-xs text-white hover:scale-105 transition">
              Google Play
            </a>
          </div>

          <p className="text-gray-500 text-xs">
            Made with ❤️ for Nigerian students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;