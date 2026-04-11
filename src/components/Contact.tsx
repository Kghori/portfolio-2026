import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, you would send this to your backend or email service
    console.log('Form submitted:', formData);
    
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kartikghori19@gmail.com',
      href: 'mailto:kartikghori19@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9426758592',
      href: 'tel:+919426758592',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Kghori', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ghori-kartik', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className={`py-20 lg:py-32 relative ${
      darkMode ? 'bg-slate-900/50' : 'bg-slate-100/50'
    }`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-400'
        }`} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-cyan-600' : 'bg-cyan-400'
        }`} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
            darkMode ? 'bg-rose-500/20 text-rose-400' : 'bg-rose-100 text-rose-600'
          }`}>
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className={`p-6 lg:p-8 rounded-2xl ${
              darkMode ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white shadow-xl'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                      darkMode
                        ? 'bg-slate-700/50 hover:bg-slate-700'
                        : 'bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${
                      darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100'
                    }`}>
                      <info.icon className={`w-5 h-5 ${
                        darkMode ? 'text-indigo-400' : 'text-indigo-600'
                      }`} />
                    </div>
                    <div>
                      <p className={`text-sm ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {info.label}
                      </p>
                      <p className={`font-medium ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className={`text-sm font-medium mb-4 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl transition-colors ${
                        darkMode
                          ? 'bg-slate-700/50 text-slate-400 hover:text-indigo-400 hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-slate-200'
                      }`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className={`p-6 lg:p-8 rounded-2xl ${
                darkMode ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white shadow-xl'
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode
                        ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode
                        ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode
                      ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                    darkMode
                      ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Failed to Send
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
