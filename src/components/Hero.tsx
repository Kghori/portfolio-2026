import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [showResumePreview, setShowResumePreview] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse-slow ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-400'
        }`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse-slow ${
          darkMode ? 'bg-cyan-600' : 'bg-cyan-400'
        }`} style={{ animationDelay: '2s' }} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 ${
          darkMode ? 'bg-amber-500' : 'bg-amber-300'
        }`} />
      </div>

      {/* Grid Pattern */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                darkMode ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'bg-indigo-100 text-indigo-600 border border-indigo-200'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Kartik Ghori</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-2xl sm:text-3xl font-semibold mb-6 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Full Stack Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-lg mb-6 max-w-xl mx-auto lg:mx-0 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Building robust, scalable web applications with modern technologies. 
              Specializing in React.js, Node.js, and cloud solutions. Passionate about 
              creating seamless user experiences and efficient backend systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className={`flex items-center justify-center lg:justify-start gap-2 mb-8 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>India</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl text-white font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="/uploads/upload_1.png"
                download="Kartik_Ghori_Resume.png"
                className={`group px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all ${
                  darkMode
                    ? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    : 'bg-white text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-lg'
                }`}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </motion.div>

            {/* View Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <button
                onClick={() => setShowResumePreview(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  darkMode
                    ? 'text-indigo-400 hover:bg-indigo-500/10'
                    : 'text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <FileText className="w-4 h-4" />
                View Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/Kghori', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/ghori-kartik', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:kartikghori19@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl transition-colors ${
                    darkMode
                      ? 'bg-slate-800 text-slate-400 hover:text-indigo-400 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-slate-200'
                  }`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center "
          >
            <div className="relative  w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-indigo-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border-2 border-dashed border-cyan-500/20"
              />

              {/* Profile Image Container */}
               <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0  from-indigo-500 via-cyan-500 to-amber-500 rounded-3xl rotate-6 opacity-80" />
                <div className={`absolute inset-0 rounded-3xl overflow-hidden ${
                  darkMode ? '' : ''
                }`}>
                  <img 
                    src="/images/89268475.jpg" 
                    alt="Kartik Ghori - Full Stack Developer"
                   className="w-full h-full object-cover rounded-full border-4 border-white "
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" /> */}
                </div>
              </div> 

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -top-4 -right-4 px-4 py-2 rounded-xl shadow-lg ${
                  darkMode ? 'bg-slate-800 text-cyan-400' : 'bg-white text-cyan-600'
                }`}
              >
                <span className="font-mono text-sm">React.js</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className={`absolute -bottom-4 -left-4 px-4 py-2 rounded-xl shadow-lg ${
                  darkMode ? 'bg-slate-800 text-green-400' : 'bg-white text-green-600'
                }`}
              >
                <span className="font-mono text-sm">Node.js</span>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className={`absolute top-1/2 -right-8 px-4 py-2 rounded-xl shadow-lg ${
                  darkMode ? 'bg-slate-800 text-amber-400' : 'bg-white text-amber-600'
                }`}
              >
                <span className="font-mono text-sm">MongoDB</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`flex flex-col items-center gap-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Resume Preview Modal */}
      {showResumePreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowResumePreview(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">Resume - Kartik Ghori</h3>
              <div className="flex items-center gap-3">
                <a
                  href="/uploads/upload_1.png"
                  download="Kartik_Ghori_Resume.png"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                <button
                  onClick={() => setShowResumePreview(false)}
                  className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Resume Image */}
            <div className="p-4">
              <img 
                src="/uploads/upload_1.png" 
                alt="Kartik Ghori Resume"
                 className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
