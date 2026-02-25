import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const techIcons = [
  { label: 'React', symbol: '⚛️', delay: 0, x: '10%', y: '20%' },
  { label: 'Node.js', symbol: '🟩', delay: 0.5, x: '85%', y: '15%' },
  { label: 'PostgreSQL', symbol: '🐘', delay: 1, x: '8%', y: '70%' },
  { label: 'TypeScript', symbol: '🔷', delay: 1.5, x: '88%', y: '65%' },
  { label: 'Prisma', symbol: '◈', delay: 0.8, x: '75%', y: '80%' },
  { label: 'Tailwind', symbol: '🌊', delay: 0.3, x: '20%', y: '85%' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Animated gradient background - Teal to Coral */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[120px] animate-pulse"
          style={{ backgroundColor: 'rgba(20, 184, 166, 0.15)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ backgroundColor: 'rgba(244, 63, 94, 0.1)', animation: 'pulse 4s ease-in-out infinite 1s' }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px]"
          style={{ backgroundColor: 'rgba(20, 184, 166, 0.08)', animation: 'pulse 3s ease-in-out infinite 2s' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating tech icons */}
      {techIcons.map((icon) => (
        <motion.div
          key={icon.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium select-none pointer-events-none z-10"
          style={{ left: icon.x, top: icon.y, color: 'var(--text-tertiary)' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: icon.delay + 1, duration: 0.5 }}
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ delay: icon.delay + 1.5, duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-1.5"
          >
            <span>{icon.symbol}</span>
            <span>{icon.label}</span>
          </motion.span>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Badge - Teal */}
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
          <span 
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border tracking-wider uppercase"
            style={{ 
              color: 'var(--primary)',
              borderColor: 'rgba(20, 184, 166, 0.3)',
              backgroundColor: 'rgba(20, 184, 166, 0.1)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--primary)' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--primary)' }} />
            </span>
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4"
        >
          <span style={{ color: 'var(--text-primary)' }}>Rohini </span>
          <span className="gradient-text">Tiwari</span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
          <div 
            className="h-px w-12 bg-gradient-to-r from-transparent" 
            style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--primary))' }}
          />
          <p 
            className="font-mono text-sm sm:text-base tracking-widest uppercase font-medium"
            style={{ color: 'var(--primary)' }}
          >
            Full Stack Developer
          </p>
          <div 
            className="h-px w-12 bg-gradient-to-l from-transparent" 
            style={{ backgroundImage: 'linear-gradient(to left, transparent, var(--primary))' }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light"
          style={{ color: 'var(--text-secondary)' }}
        >
          Building{' '}
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>scalable web applications</span> with{' '}
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>secure backend systems</span> and modern
          frontend experiences.
        </motion.p>

        {/* CTA Buttons - Teal + Coral */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white text-sm font-semibold transition-all duration-200 glow shadow-lg"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border text-sm font-semibold transition-all duration-200 glass"
            style={{ 
              borderColor: 'var(--primary)',
              color: 'var(--text-secondary)',
            }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-5">
          {[
            { icon: <Github size={18} />, href: 'https://github.com/rohiniwari', label: 'GitHub' },
            { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/rohinitiwari0906/', label: 'LinkedIn' },
            { icon: <Mail size={18} />, href: 'mailto:rohiniwari@gmail.com', label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-full glass transition-all duration-200"
              style={{ color: 'var(--text-tertiary)' }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-tertiary)' }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} style={{ color: 'var(--primary)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
