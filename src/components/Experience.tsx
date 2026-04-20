import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const experiences = [
  {
    title: 'Full Stack Web Developer',
    company: 'WRP Solution',
    location: 'India',
    period: 'Present',
    type: 'Full-time',
    description: 'Developing customized projects including E-logics, Basecamp Trading, Moby – PWA, and BCT Mining platforms.',
    achievements: [
      'Built and maintained multiple trading platforms',
      'Developed Progressive Web Applications (PWA)',
      'Implemented E-logics business solutions',
      'Collaborated with cross-functional teams',
    ],
    color: 'indigo',
    current: true,
  },
  {
    title: 'Web Development',
    company: 'Encryptix',
    location: 'Online',
    period: '6 months',
    type: 'Internship',
    description: 'Executed coding, debugging, and testing tasks while collaborating on the design of responsive user interfaces.',
    achievements: [
      'Enhanced code quality through code reviews',
      'Developed responsive user interfaces',
      'Worked with HTML, CSS, and JavaScript',
      'Participated in agile development processes',
    ],
    color: 'cyan',
    current: false,
  },
  {
    title: 'Full-stack Web Developer Intern',
    company: 'Webs Technology',
    location: 'India',
    period: '3 months',
    type: 'Internship',
    description: 'Developed projects under team supervision using HTML, CSS, JavaScript, PHP, and React.',
    achievements: [
      'Built internship certificate generation system',
      'Learned full-stack development practices',
      'Worked with React and PHP',
      'Collaborated with senior developers',
    ],
    color: 'amber',
    current: false,
  },
];

export default function Experience({ darkMode }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
      indigo: {
        bg: darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100',
        text: darkMode ? 'text-indigo-400' : 'text-indigo-600',
        border: darkMode ? 'border-indigo-500' : 'border-indigo-500',
        dot: 'bg-indigo-500',
      },
      cyan: {
        bg: darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100',
        text: darkMode ? 'text-cyan-400' : 'text-cyan-600',
        border: darkMode ? 'border-cyan-500' : 'border-cyan-500',
        dot: 'bg-cyan-500',
      },
      amber: {
        bg: darkMode ? 'bg-amber-500/20' : 'bg-amber-100',
        text: darkMode ? 'text-amber-400' : 'text-amber-600',
        border: darkMode ? 'border-amber-500' : 'border-amber-500',
        dot: 'bg-amber-500',
      },
    };
    return colors[color] || colors.indigo;
  };

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
            darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
          }`}>
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            My professional journey in the world of web development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`hidden md:block absolute md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 ${
  darkMode ? 'bg-slate-700' : 'bg-slate-300'
          }`} />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${colorClasses.dot} ring-4 ${
                      darkMode ? 'ring-slate-900' : 'ring-slate-50'
                    }`}>
                      {exp.current && (
                        <span className="absolute inset-0 rounded-full animate-ping bg-indigo-500 opacity-50" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isLeft ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className={`p-6 lg:p-8 rounded-2xl border-l-4 ${colorClasses.border} ${
                      darkMode
                        ? 'bg-slate-800/50 border-t border-r border-b border-slate-700/50'
                        : 'bg-white shadow-xl border-t border-r border-b border-slate-100'
                    }`}>
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {exp.current && (
                              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                                darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
                              }`}>
                                Current
                              </span>
                            )}
                            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${colorClasses.bg} ${colorClasses.text}`}>
                              {exp.type}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold ${
                            darkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {exp.title}
                          </h3>
                          <p className={`font-medium ${colorClasses.text}`}>
                            {exp.company}
                          </p>
                        </div>
                        <div className={`flex flex-col items-end text-sm ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`mb-4 ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colorClasses.text}`} />
                            <span className={`text-sm ${
                              darkMode ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
