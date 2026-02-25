import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Server, Layers } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Built', value: '10+' },
  { label: 'Tech Stack', value: '15+' },
  { label: 'Focus Area', value: 'Full Stack' },
];

const highlights = [
  { icon: <Server size={18} />, text: 'Backend Architecture & REST APIs' },
  { icon: <Database size={18} />, text: 'PostgreSQL & Database Schema Design' },
  { icon: <Code2 size={18} />, text: 'React & Modern Frontend Systems' },
  { icon: <Layers size={18} />, text: 'Authentication & Security Systems' },
];

const codeLines = [
  { indent: 0, content: 'const developer = {', color: 'text-[var(--text-secondary)]' },
  { indent: 1, content: 'name: "Rohini Tiwari",', color: 'text-teal-300' },
  { indent: 1, content: 'role: "Full Stack Developer",', color: 'text-teal-300' },
  { indent: 1, content: 'stack: ["React", "Node.js", "PostgreSQL"],', color: 'text-emerald-400' },
  { indent: 1, content: 'passion: "Production Systems",', color: 'text-amber-400' },
  { indent: 1, content: 'available: true,', color: 'text-sky-400' },
  { indent: 1, content: 'focus: [', color: 'text-[var(--text-secondary)]' },
  { indent: 2, content: '"Backend Architecture",', color: 'text-rose-400' },
  { indent: 2, content: '"Scalable APIs",', color: 'text-rose-400' },
  { indent: 2, content: '"Clean Code",', color: 'text-rose-400' },
  { indent: 1, content: '],', color: 'text-[var(--text-secondary)]' },
  { indent: 0, content: '};', color: 'text-[var(--text-secondary)]' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px]" 
          style={{ backgroundColor: 'rgba(20, 184, 166, 0.08)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
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
            01 / About
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Detail-oriented{' '}
              <span style={{ color: 'var(--primary)', fontWeight: 500 }}>Full Stack Developer</span> with
              hands-on experience building scalable web applications using{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>React, Node.js, and PostgreSQL</span>.
              Skilled in REST API development, authentication systems, and database schema design.
            </p>
            <p 
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--text-tertiary)' }}
            >
              My background as a Business Analyst gives me a unique perspective — I build software
              that solves real business problems. I'm passionate about creating{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>production-ready systems</span> that
              are performant, maintainable, and secure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl glass text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span style={{ color: 'var(--primary)' }}>{item.icon}</span>
                  {item.text}
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center p-3 rounded-xl glass"
                  style={{ borderColor: 'rgba(20, 184, 166, 0.1)' }}
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs mt-1 leading-tight" style={{ color: 'var(--text-tertiary)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div 
              className="absolute -inset-4 rounded-3xl blur-2xl"
              style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
            />

            <div className="relative rounded-2xl overflow-hidden border shadow-2xl" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <div 
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.4)' }}
              >
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>developer.ts</span>
              </div>

              <div className="p-6 font-mono text-sm leading-7" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className="flex"
                  >
                    <span className="text-slate-700 select-none w-6 text-right mr-4 flex-shrink-0 text-xs leading-7">
                      {i + 1}
                    </span>
                    <span
                      className={line.color}
                      style={{ marginLeft: `${line.indent * 1.5}rem` }}
                    >
                      {line.content}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  className="flex"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <span className="text-slate-700 select-none w-6 text-right mr-4 text-xs leading-7">
                    {codeLines.length + 1}
                  </span>
                  <span className="text-teal-400 text-lg leading-7">_</span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass border shadow-lg"
              style={{ borderColor: 'rgba(20, 184, 166, 0.3)' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-xs font-mono" style={{ color: 'var(--primary)' }}>✓ Open to Work</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
