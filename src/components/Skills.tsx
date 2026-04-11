import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Wrench, Palette } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const skillCategories = [
  {
    title: 'AI & Automation',
    icon: Code2,
    color: 'indigo',
    skills: [
      { name: 'GenAI APIs (OpenAI)', level: 75 },
      { name: 'Prompt Engineering', level: 78 },
      { name: 'Workflow Automation (N8N)', level: 80 },
      { name: 'Zapier Automation', level: 70 },
      { name: 'API Integrations', level: 85 },
      { name: 'AI Chatbot Development', level: 75 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Wrench,
    color: 'amber',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'Authentication (JWT)', level: 80 },
      { name: 'Server Logic & Routing', level: 82 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Palette,
    color: 'cyan',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    title: 'Databases & Cloud',
    icon: Database,
    color: 'green',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Firebase', level: 80 },
      { name: 'Database Design', level: 78 },
    ],
  },
  // {
  //   title: 'Tools & DevOps',
  //   icon: Code2,
  //   color: 'indigo',
  //   skills: [
  //     { name: 'Git & GitHub', level: 90 },
  //     { name: 'Postman', level: 88 },
  //     { name: 'VS Code', level: 95 },
  //     { name: 'Debugging & Testing', level: 85 },
  //   ],
  // },
];

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '🚂' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Git', icon: '📦' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Java', icon: '☕' },
  { name: 'N8N', icon: '🔗' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'API Integration', icon: '🔌' },
];

export default function Skills({ darkMode }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; bar: string }> = {
      indigo: {
        bg: darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100',
        text: darkMode ? 'text-indigo-400' : 'text-indigo-600',
        bar: 'bg-gradient-to-r from-indigo-500 to-indigo-400',
      },
      cyan: {
        bg: darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100',
        text: darkMode ? 'text-cyan-400' : 'text-cyan-600',
        bar: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
      },
      green: {
        bg: darkMode ? 'bg-green-500/20' : 'bg-green-100',
        text: darkMode ? 'text-green-400' : 'text-green-600',
        bar: 'bg-gradient-to-r from-green-500 to-green-400',
      },
      amber: {
        bg: darkMode ? 'bg-amber-500/20' : 'bg-amber-100',
        text: darkMode ? 'text-amber-400' : 'text-amber-600',
        bar: 'bg-gradient-to-r from-amber-500 to-amber-400',
      },
    };
    return colors[color] || colors.indigo;
  };

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
            darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-600'
          }`}>
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`px-4 py-2 rounded-full flex items-center gap-2 cursor-default ${
                darkMode
                  ? 'bg-slate-800 border border-slate-700 hover:border-indigo-500/50'
                  : 'bg-white shadow-md border border-slate-200 hover:border-indigo-300'
              } transition-all`}
            >
              <span className="text-lg">{tech.icon}</span>
              <span className={`text-sm font-medium ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
                className={`p-6 lg:p-8 rounded-2xl card-hover ${
                  darkMode
                    ? 'bg-slate-800/50 border border-slate-700/50'
                    : 'bg-white shadow-xl border border-slate-100'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${colorClasses.bg}`}>
                    <category.icon className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm ${
                          darkMode ? 'text-slate-500' : 'text-slate-400'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-slate-700' : 'bg-slate-200'
                      }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className={`h-full rounded-full ${colorClasses.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
