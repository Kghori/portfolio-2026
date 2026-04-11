import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code, Rocket, Coffee, Heart } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Rocket },
    { label: 'Technologies', value: '15+', icon: Code },
    { label: 'Coffee Cups', value: '∞', icon: Coffee },
    { label: 'Passion Level', value: '100%', icon: Heart },
  ];

  const education = [
    {
      degree: 'MCA',
      field: 'Computer Science & Technology',
      grade: 'Grade A',
      year: '2024',
    },
    {
      degree: 'BCA',
      field: 'Shree Swaminarayan Gurukul Computer Science',
      grade: 'Grade A',
      year: '2023',
    },
  ];

  return (
    <section id="about" className={`py-20 lg:py-32 relative overflow-hidden ${
      darkMode ? 'bg-slate-900/50' : 'bg-slate-100/50'
    }`}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 border-2 border-current rounded-full" />
        <div className="absolute bottom-20 right-40 w-48 h-48 border-2 border-current rounded-full" />
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
            darkMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
          }`}>
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Passionate About <span className="gradient-text">Creating Solutions</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A dedicated Full Stack Developer with a strong foundation in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white shadow-xl'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Building the Future, One Line at a Time
              </h3>
              <div className={`space-y-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <p>
                  I'm Kartik Ghori, a Full Stack Web Developer with expertise in building 
                  scalable, user-centric web applications. With a strong foundation in both 
                  frontend and backend technologies, I bring ideas to life through clean, 
                  efficient code.
                </p>
                <p>
                  My journey in tech started with a curiosity for how things work, which 
                  evolved into a passion for creating digital solutions. I've worked on 
                  diverse projects ranging from e-commerce platforms to billing systems, 
                  always focusing on delivering exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`p-4 rounded-xl text-center ${
                      darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                    }`}
                  >
                    <stat.icon className={`w-6 h-6 mx-auto mb-2 ${
                      darkMode ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className={`text-xs ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white shadow-xl'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${
                  darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100'
                }`}>
                  <GraduationCap className={`w-6 h-6 ${
                    darkMode ? 'text-indigo-400' : 'text-indigo-600'
                  }`} />
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`p-5 rounded-xl border-l-4 border-indigo-500 ${
                      darkMode ? 'bg-slate-700/30' : 'bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`text-lg font-bold ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          {edu.degree}
                        </h4>
                        <p className={`text-sm ${
                          darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {edu.field}
                        </p>
                      </div>
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        {edu.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Award className={`w-4 h-4 ${
                        darkMode ? 'text-amber-400' : 'text-amber-500'
                      }`} />
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-amber-400' : 'text-amber-600'
                      }`}>
                        {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Achievement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className={`mt-6 p-5 rounded-xl ${
                  darkMode ? 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30' : 'bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Award className={`w-5 h-5 ${
                    darkMode ? 'text-amber-400' : 'text-amber-500'
                  }`} />
                  <h4 className={`font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Achievement
                  </h4>
                </div>
                <p className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Designed and developed a Jigsaw Puzzle Game using Adobe Flash for 
                  College FLASH (Computer & IT Exhibition)
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
