import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ShoppingCart, BookOpen, Diamond, Layers, Code, Rocket } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const projects = [
  {
    title: 'E-Commerce Web App',
    description: 'A robust platform for product listings and online orders with an admin panel for efficient product management. Users can browse products, manage their cart, and track orders seamlessly.',
    image: 'ecommerce',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React'],
    icon: ShoppingCart,
    color: 'indigo',
    features: ['Product Management', 'Cart System', 'Order Tracking', 'Admin Dashboard'],
    github: 'https://github.com/Kghori',
    demo: '#',
  },
  {
    title: 'Book Selling Website',
    description: 'A user-friendly e-commerce site with Razorpay payment integration for secure transactions. Features an admin panel to manage inventory, user accounts, and orders.',
    image: 'books',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Razorpay'],
    icon: BookOpen,
    color: 'cyan',
    features: ['Razorpay Integration', 'Inventory Management', 'User Accounts', 'Order Management'],
    github: 'https://github.com/Kghori',
    demo: '#',
  },
  {
    title: 'Diamond Billing System',
    description: 'A calculation portal using Android (Java) and Firebase to streamline salary processing for diamond industry employees with user authentication and accurate calculations.',
    image: 'diamond',
    tags: ['Android', 'Java', 'Firebase', 'Material UI'],
    icon: Diamond,
    color: 'amber',
    features: ['Salary Calculation', 'User Authentication', 'Real-time Sync', 'Employee Management'],
    github: 'https://github.com/Kghori',
    demo: '#',
  },
  {
    title: 'PWA Trading Platform',
    description: 'Developed customized projects including E-logics, Basecamp Trading, Moby – PWA, and BCT Mining platforms at WRP Solution.',
    image: 'trading',
    tags: ['React', 'PWA', 'Node.js', 'REST API'],
    icon: Layers,
    color: 'green',
    features: ['Progressive Web App', 'Real-time Data', 'Trading Features', 'Cross-platform'],
    github: 'https://github.com/Kghori',
    demo: '#',
  },
  {
    title: 'Internship Certificate Generator',
    description: 'A live project for generating internship certificates developed during Full-stack Web Developer internship at Webs Technology.',
    image: 'certificate',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'],
    icon: Code,
    color: 'purple',
    features: ['Certificate Generation', 'Template System', 'PDF Export', 'Batch Processing'],
    github: 'https://github.com/Kghori',
    demo: '#',
  },
  {
    title: 'Responsive UI Components',
    description: 'Executed coding, debugging, and testing tasks while collaborating on the design of responsive user interfaces at Encryptix.',
    image: 'ui',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    icon: Rocket,
    color: 'rose',
    features: ['Responsive Design', 'Code Reviews', 'UI/UX', 'Cross-browser'],
    github: 'https://github.com/Kghori',
    demo: '#',
  },
];

export default function Projects({ darkMode }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
      indigo: {
        bg: darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100',
        text: darkMode ? 'text-indigo-400' : 'text-indigo-600',
        border: darkMode ? 'border-indigo-500/30' : 'border-indigo-200',
        gradient: 'from-indigo-500 to-indigo-600',
      },
      cyan: {
        bg: darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100',
        text: darkMode ? 'text-cyan-400' : 'text-cyan-600',
        border: darkMode ? 'border-cyan-500/30' : 'border-cyan-200',
        gradient: 'from-cyan-500 to-cyan-600',
      },
      amber: {
        bg: darkMode ? 'bg-amber-500/20' : 'bg-amber-100',
        text: darkMode ? 'text-amber-400' : 'text-amber-600',
        border: darkMode ? 'border-amber-500/30' : 'border-amber-200',
        gradient: 'from-amber-500 to-amber-600',
      },
      green: {
        bg: darkMode ? 'bg-green-500/20' : 'bg-green-100',
        text: darkMode ? 'text-green-400' : 'text-green-600',
        border: darkMode ? 'border-green-500/30' : 'border-green-200',
        gradient: 'from-green-500 to-green-600',
      },
      purple: {
        bg: darkMode ? 'bg-purple-500/20' : 'bg-purple-100',
        text: darkMode ? 'text-purple-400' : 'text-purple-600',
        border: darkMode ? 'border-purple-500/30' : 'border-purple-200',
        gradient: 'from-purple-500 to-purple-600',
      },
      rose: {
        bg: darkMode ? 'bg-rose-500/20' : 'bg-rose-100',
        text: darkMode ? 'text-rose-400' : 'text-rose-600',
        border: darkMode ? 'border-rose-500/30' : 'border-rose-200',
        gradient: 'from-rose-500 to-rose-600',
      },
    };
    return colors[color] || colors.indigo;
  };

  return (
    <section id="projects" className={`py-20 lg:py-32 relative ${
      darkMode ? 'bg-slate-900/50' : 'bg-slate-100/50'
    }`}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
            darkMode ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-600'
          }`}>
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A showcase of my work, from e-commerce platforms to mobile applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`group rounded-2xl overflow-hidden card-hover ${
                  darkMode
                    ? 'bg-slate-800/80 border border-slate-700/50'
                    : 'bg-white shadow-xl border border-slate-100'
                }`}
              >
                {/* Project Image/Icon Header */}
                <div className={`relative h-48 bg-gradient-to-br ${colorClasses.gradient} p-6 flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/30 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 border-2 border-white/20 rounded-full" />
                  </div>
                  <project.icon className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 line-clamp-3 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className={`text-xs px-2 py-1 rounded-md ${
                          darkMode ? 'bg-slate-700/50 text-slate-400' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${colorClasses.bg} ${colorClasses.text}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Kghori"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              darkMode
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-lg'
            }`}
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
