import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t py-12 px-6" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-xl font-bold gradient-text">
              Rohini Tiwari
            </a>
            <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Full Stack Developer</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-colors"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {[
              { icon: <Github size={16} />, href: 'https://github.com/rohiniwari', label: 'GitHub' },
              { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/rohinitiwari0906/', label: 'LinkedIn' },
              { icon: <Mail size={16} />, href: 'mailto:rohiniwari@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 flex items-center justify-center rounded-full glass border transition-colors"
                style={{ 
                  borderColor: 'rgba(255,255,255,0.08)', 
                  color: 'var(--text-tertiary)' 
                }}
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div 
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'var(--border)', color: 'var(--text-tertiary)' }}
        >
          <p>© 2024 Rohini Tiwari. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={11} style={{ color: 'var(--secondary)' }} fill="var(--secondary)" /> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
