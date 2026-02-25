import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  accent: string;
  badge: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'RaiseRealm',
    subtitle: 'Milestone-Based Crowdfunding Platform',
    description:
      'A full-stack crowdfunding platform featuring milestone-based escrow funding, role-based authentication, and secure transaction handling. Built for production-grade reliability.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'React', 'JWT', 'Stripe', 'Tailwind'],
    features: [
      'Role-based access control (Admin, Creator, Backer)',
      'Escrow-style milestone funding logic',
      'JWT authentication & protected routes',
      'ACID-compliant transaction handling',
      'Dynamic project discovery & filtering',
      'Funding progress tracking',
    ],
    accent: 'teal',
    badge: 'Featured',
    github: '#',
    demo: '#',
  },
  {
    title: 'Fashion E-Commerce',
    subtitle: 'Full-Featured Online Fashion Store',
    description:
      'Responsive e-commerce interface with dynamic filtering, search, and complete cart management. Focused on user experience and performance.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Product filtering and sorting',
      'Wishlist and cart functionality',
      'Checkout simulation',
      'Fully responsive design',
    ],
    accent: 'coral',
    badge: 'UI/UX',
    github: '#',
    demo: '#',
  },
  {
    title: 'AudioSphere',
    subtitle: 'Audio Products E-Commerce Platform',
    description:
      'Interactive product browsing experience with authentication, search optimization, and comprehensive profile management dashboard.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Authentication system',
      'Product category filtering',
      'Checkout workflow',
      'User dashboard & profile',
    ],
    accent: 'teal',
    badge: 'E-Commerce',
    github: '#',
    demo: '#',
  },
];

const accentMap: Record<string, { border: string; badge: string; tag: string; glow: string }> = {
  teal: {
    border: 'border-teal-500/20 hover:border-teal-500/50',
    badge: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    tag: 'bg-teal-500/10 text-teal-300',
    glow: 'group-hover:shadow-teal-500/10',
  },
  coral: {
    border: 'border-rose-500/20 hover:border-rose-500/50',
    badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    tag: 'bg-rose-500/10 text-rose-300',
    glow: 'group-hover:shadow-rose-500/10',
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const accent = accentMap[project.accent];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className={`group relative rounded-2xl p-6 glass border transition-all duration-300 ${accent.border} ${accent.glow} hover:shadow-2xl`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold border mb-3 ${accent.badge}`}>
            {project.badge}
          </span>
          <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
          <p className="text-sm mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{project.subtitle}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 flex items-center justify-center rounded-full glass border transition-colors"
            style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'var(--text-tertiary)' }}
            aria-label="GitHub"
          >
            <Github size={15} />
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 flex items-center justify-center rounded-full glass border transition-colors"
            style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'var(--text-tertiary)' }}
            aria-label="Live Demo"
          >
            <ExternalLink size={15} />
          </motion.a>
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-tertiary)' }}>{project.description}</p>

      <div className="mb-5 space-y-1.5">
        {project.features.map((f, i) => (
          <div key={i} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-tertiary)' }}>
            <ArrowRight size={12} className="text-teal-500 mt-0.5 flex-shrink-0" />
            {f}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        {project.tech.map((t) => (
          <span
            key={t}
            className={`px-2.5 py-1 rounded-md text-xs font-medium ${accent.tag}`}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px]" 
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
            02 / Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: 'var(--text-tertiary)' }}>
            Real-world projects built with modern tech stacks, focused on scalability and clean
            architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 rounded-2xl glass border p-8"
          style={{ borderColor: 'rgba(20, 184, 166, 0.15)' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>RaiseRealm – System Architecture</h3>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
            <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>v1.0</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center">
            {[
              { label: 'Client (React)', sub: 'Tailwind UI', color: 'border-teal-500/40 bg-teal-500/8' },
              { label: '→', sub: '', color: 'border-none bg-transparent text-teal-500 text-xl' },
              { label: 'Express API', sub: 'JWT Auth + RBAC', color: 'border-cyan-500/40 bg-cyan-500/8' },
              { label: '→', sub: '', color: 'border-none bg-transparent text-teal-500 text-xl' },
              { label: 'PostgreSQL', sub: 'Prisma ORM', color: 'border-emerald-500/40 bg-emerald-500/8' },
            ].map((node, i) => (
              <div
                key={i}
                className={`rounded-xl border px-4 py-3 text-sm ${node.color}`}
              >
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{node.label}</div>
                {node.sub && <div className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>{node.sub}</div>}
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Auth Flow', steps: ['POST /register', 'POST /login → JWT', 'Middleware validates token', 'Role-based route access'] },
              { title: 'Funding Flow', steps: ['Creator sets milestones', 'Backer funds escrow', 'Admin verifies milestone', 'Funds released on approval'] },
              { title: 'DB Relations', steps: ['User ↔ Projects (1:N)', 'Project ↔ Milestones (1:N)', 'Backer ↔ Transactions (1:N)', 'ACID-compliant ops'] },
            ].map((flow) => (
              <div key={flow.title} className="rounded-xl p-4 border" style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--primary)' }}>
                  {flow.title}
                </div>
                <ul className="space-y-1.5">
                  {flow.steps.map((step, i) => (
                    <li key={i} className="text-xs flex items-start gap-2" style={{ color: 'var(--text-tertiary)' }}>
                      <span className="text-teal-500 mt-0.5 flex-shrink-0">›</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
