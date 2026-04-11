import { motion } from 'framer-motion';
import { Code2, Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Kghori', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ghori-kartik', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kartikghori19@gmail.com', label: 'Email' },
  ];

  return (
    <footer className={`relative pt-16 pb-8 ${
      darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-slate-100 border-t border-slate-200'
    }`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 opacity-5 ${
          darkMode ? 'bg-gradient-to-t from-indigo-600' : 'bg-gradient-to-t from-indigo-400'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className={`p-2 rounded-xl ${
                darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100'
              }`}>
                <Code2 className={`w-6 h-6 ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-600'
                }`} />
              </div>
              <span className="text-xl font-bold gradient-text">Kartik.dev</span>
            </a>
            <p className={`mb-6 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Full Stack Web Developer passionate about creating innovative digital solutions 
              and delivering exceptional user experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-lg transition-colors ${
                    darkMode
                      ? 'bg-slate-800 text-slate-400 hover:text-indigo-400 hover:bg-slate-700'
                      : 'bg-white text-slate-600 hover:text-indigo-600 shadow-sm hover:shadow'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`py-1.5 transition-colors ${
                    darkMode
                      ? 'text-slate-400 hover:text-indigo-400'
                      : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Get In Touch
            </h3>
            <div className={`space-y-3 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <p>kartikghori19@gmail.com</p>
              <p>+91 9426758592</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          darkMode ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <p className={`text-sm flex items-center gap-1 ${
            darkMode ? 'text-slate-500' : 'text-slate-500'
          }`}>
            © {currentYear} Kartik Ghori. Made with
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            in India
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-xl transition-colors ${
              darkMode
                ? 'bg-slate-800 text-slate-400 hover:text-indigo-400 hover:bg-slate-700'
                : 'bg-white text-slate-600 hover:text-indigo-600 shadow-md hover:shadow-lg'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
