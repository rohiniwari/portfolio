import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Business Analyst',
    company: 'Bhadoria Infrastructure Pvt. Ltd.',
    period: 'Oct 2021 – Nov 2024',
    duration: '3 Years',
    location: 'India',
    type: 'Full-time',
    responsibilities: [
      'Analyzed project and financial data for large-scale infrastructure projects, identifying optimization opportunities and risk factors',
      'Created detailed performance and progress reports for management, enabling data-driven decision-making',
      'Coordinated with cross-functional teams including engineering, finance, and operations departments',
      'Supported executive decision-making with structured data analysis and insights',
      'Developed proficiency in translating complex business requirements into actionable technical documentation',
    ],
    skills: ['Data Analysis', 'Reporting', 'Cross-team Coordination', 'Documentation', 'Business Intelligence'],
  },
];

const transitionNote = {
  title: 'Transition to Software Engineering',
  description:
    'Leveraging 3 years of analytical thinking and business domain expertise, I transitioned into Full Stack Development — bringing a unique combination of technical skill and product mindset to every system I build.',
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute right-0 bottom-0 w-[500px] h-[400px] rounded-full blur-[120px]" 
          style={{ backgroundColor: 'rgba(244, 63, 94, 0.08)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span 
            className="font-mono text-sm tracking-widest uppercase font-medium"
            style={{ color: 'var(--primary)' }}
          >
            03 / Experience
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Work <span className="gradient-text">History</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ 
              backgroundImage: 'linear-gradient(to bottom, var(--primary), rgba(20, 184, 166, 0.3), transparent)',
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.2 }}
              className="relative pl-16 md:pl-20 pb-12"
            >
              <div 
                className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 shadow-lg"
                style={{ 
                  backgroundColor: 'var(--bg-primary)', 
                  borderColor: 'var(--primary)',
                  boxShadow: '0 0 10px rgba(20, 184, 166, 0.3)',
                }}
              />

              <div className="rounded-2xl glass border p-6 md:p-8 transition-all duration-300" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--primary)' }}>
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      <Calendar size={12} style={{ color: 'var(--primary)' }} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      <MapPin size={12} style={{ color: 'var(--primary)' }} />
                      {exp.location}
                    </div>
                    <span 
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
                      style={{ 
                        backgroundColor: 'rgba(20, 184, 166, 0.1)', 
                        color: 'var(--primary)',
                        borderColor: 'rgba(20, 184, 166, 0.2)',
                      }}
                    >
                      {exp.type} · {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {exp.responsibilities.map((resp, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + j * 0.08 }}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }} />
                      {resp}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium border"
                      style={{ 
                        backgroundColor: 'rgba(255,255,255,0.03)', 
                        color: 'var(--text-tertiary)',
                        borderColor: 'rgba(255,255,255,0.05)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="relative pl-16 md:pl-20"
          >
            <div 
              className="absolute left-4 md:left-6 top-3 w-4 h-4 rounded-full border-2 flex items-center justify-center"
              style={{ 
                backgroundColor: 'var(--bg-primary)', 
                borderColor: 'rgba(20, 184, 166, 0.5)',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--primary)' }} />
            </div>

            <div 
              className="rounded-2xl border p-6 md:p-7"
              style={{ 
                borderColor: 'rgba(244, 63, 94, 0.2)',
                backgroundColor: 'rgba(244, 63, 94, 0.05)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold" style={{ color: 'var(--secondary)' }}>{transitionNote.title}</span>
                <span 
                  className="text-xs px-2 py-0.5 rounded-full font-medium border"
                  style={{ 
                    backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                    color: '#10b981',
                    borderColor: 'rgba(16, 185, 129, 0.2)',
                  }}
                >
                  Now
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>{transitionNote.description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
