import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Tech {
  name: string;
  icon: string;
  color: string;
}

interface Category {
  label: string;
  techs: Tech[];
}

const categories: Category[] = [
  {
    label: 'Frontend',
    techs: [
      { name: 'React', icon: '⚛️', color: 'from-teal-500/20 to-teal-600/5 border-teal-500/20 hover:border-teal-400/50' },
      { name: 'HTML5', icon: '🔸', color: 'from-orange-500/20 to-orange-600/5 border-orange-500/20 hover:border-orange-400/50' },
      { name: 'CSS3', icon: '🔷', color: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-400/50' },
      { name: 'Tailwind CSS', icon: '🌊', color: 'from-teal-500/20 to-teal-600/5 border-teal-500/20 hover:border-teal-400/50' },
    ],
  },
  {
    label: 'Backend',
    techs: [
      { name: 'Node.js', icon: '🟩', color: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/50' },
      { name: 'Express.js', icon: '🚂', color: 'from-slate-500/20 to-slate-600/5 border-slate-500/20 hover:border-slate-400/50' },
      { name: 'REST APIs', icon: '🔗', color: 'from-teal-500/20 to-teal-600/5 border-teal-500/20 hover:border-teal-400/50' },
      { name: 'JWT Auth', icon: '🔐', color: 'from-rose-500/20 to-rose-600/5 border-rose-500/20 hover:border-rose-400/50' },
    ],
  },
  {
    label: 'Database',
    techs: [
      { name: 'PostgreSQL', icon: '🐘', color: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-400/50' },
      { name: 'MongoDB', icon: '🍃', color: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/50' },
      { name: 'Prisma', icon: '◈', color: 'from-teal-500/20 to-teal-600/5 border-teal-500/20 hover:border-teal-400/50' },
    ],
  },
  {
    label: 'Tools',
    techs: [
      { name: 'Git', icon: '🌿', color: 'from-orange-500/20 to-orange-600/5 border-orange-500/20 hover:border-orange-400/50' },
      { name: 'GitHub', icon: '🐙', color: 'from-slate-500/20 to-slate-600/5 border-slate-500/20 hover:border-slate-400/50' },
      { name: 'Postman', icon: '📮', color: 'from-orange-500/20 to-orange-600/5 border-orange-500/20 hover:border-orange-400/50' },
      { name: 'Stripe', icon: '💳', color: 'from-rose-500/20 to-rose-600/5 border-rose-500/20 hover:border-rose-400/50' },
    ],
  },
];

function TechBadge({ tech, delay }: { tech: Tech; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, scale: 1.04 }}
      className={`relative flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-gradient-to-br border text-center cursor-default select-none transition-all duration-300 ${tech.color}`}
    >
      <span className="text-2xl">{tech.icon}</span>
      <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{tech.name}</span>
    </motion.div>
  );
}

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="techstack" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]" 
          style={{ backgroundColor: 'rgba(20, 184, 166, 0.08)' }}
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
            04 / Tech Stack
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-base" style={{ color: 'var(--text-tertiary)' }}>
            The technologies I work with to build modern, production-ready systems.
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span 
                  className="text-sm font-semibold uppercase tracking-widest font-mono"
                  style={{ color: 'var(--primary)' }}
                >
                  {category.label}
                </span>
                <div 
                  className="flex-1 h-px bg-gradient-to-r" 
                  style={{ backgroundImage: 'linear-gradient(to right, rgba(20, 184, 166, 0.3), transparent)' }}
                />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {category.techs.map((tech, ti) => (
                  <TechBadge
                    key={tech.name}
                    tech={tech}
                    delay={ci * 0.1 + ti * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 rounded-2xl glass border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <div className="text-4xl flex-shrink-0">💡</div>
          <div>
            <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Always Learning</div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
              Continuously expanding my expertise in{' '}
              <span style={{ color: 'var(--primary)' }}>TypeScript</span>,{' '}
              <span style={{ color: 'var(--primary)' }}>Docker</span>,{' '}
              <span style={{ color: 'var(--primary)' }}>Redis</span>, and{' '}
              <span style={{ color: 'var(--primary)' }}>system design</span> patterns to build
              increasingly scalable and resilient applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
