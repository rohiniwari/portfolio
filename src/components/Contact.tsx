import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const socials = [
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    handle: '@rohiniwari',
    href: 'https://github.com/rohiniwari',
    color: 'hover:border-teal-400/50',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    handle: 'rohinitiwari0906',
    href: 'https://www.linkedin.com/in/rohinitiwari0906/',
    color: 'hover:border-cyan-400/50',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    handle: 'rohiniwari@gmail.com',
    href: 'mailto:rohiniwari@gmail.com',
    color: 'hover:border-rose-400/50',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'Message too short (min 20 chars)';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-0 bottom-0 w-[500px] h-[400px] rounded-full blur-[120px]" 
          style={{ backgroundColor: 'rgba(244, 63, 94, 0.1)' }}
        />
        <div 
          className="absolute right-1/4 top-1/4 w-[300px] h-[300px] rounded-full blur-[80px]" 
          style={{ backgroundColor: 'rgba(20, 184, 166, 0.08)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
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
            05 / Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: 'var(--text-tertiary)' }}>
            Looking for a Full Stack Developer? I'm open to new opportunities. Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center gap-4"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Get In Touch</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                Whether you have a project in mind, a job opportunity, or just want to say hi — my
                inbox is always open.
              </p>
            </div>

            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 p-4 rounded-xl glass border transition-all duration-200 ${s.color} group`}
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    color: 'var(--primary)',
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{s.label}</div>
                  <div className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>{s.handle}</div>
                </div>
              </motion.a>
            ))}

            <div 
              className="mt-4 p-4 rounded-xl border bg-opacity-5"
              style={{ 
                borderColor: 'rgba(244, 63, 94, 0.2)',
                backgroundColor: 'rgba(244, 63, 94, 0.05)',
              }}
            >
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                📍 <span style={{ color: 'var(--secondary)', fontWeight: 500 }}>Open to:</span> Full-time roles,
                freelance projects, and remote opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div 
              className="rounded-2xl glass border p-7 md:p-8 relative"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl z-10"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle2 size={64} className="mb-4" style={{ color: 'var(--primary)' }} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Message Sent! 🎉</h3>
                    <p className="text-sm text-center max-w-xs px-4" style={{ color: 'var(--text-tertiary)' }}>
                      Thanks for reaching out, I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-colors"
                      style={{ backgroundColor: 'var(--primary)' }}
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Name <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 ${
                      errors.name ? 'border-red-500/50' : ''
                    }`}
                    style={{ 
                      backgroundColor: 'rgba(0,0,0,0.3)', 
                      color: 'var(--text-primary)',
                      borderColor: errors.name ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255,255,255,0.1)',
                      '--tw-ring-color': 'rgba(20, 184, 166, 0.4)',
                    } as React.CSSProperties}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs" style={{ color: '#ef4444' }}>{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Email <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 ${
                      errors.email ? 'border-red-500/50' : ''
                    }`}
                    style={{ 
                      backgroundColor: 'rgba(0,0,0,0.3)', 
                      color: 'var(--text-primary)',
                      borderColor: errors.email ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255,255,255,0.1)',
                      '--tw-ring-color': 'rgba(20, 184, 166, 0.4)',
                    } as React.CSSProperties}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs" style={{ color: '#ef4444' }}>{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Message <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 resize-none ${
                      errors.message ? 'border-red-500/50' : ''
                    }`}
                    style={{ 
                      backgroundColor: 'rgba(0,0,0,0.3)', 
                      color: 'var(--text-primary)',
                      borderColor: errors.message ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255,255,255,0.1)',
                      '--tw-ring-color': 'rgba(20, 184, 166, 0.4)',
                    } as React.CSSProperties}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs" style={{ color: '#ef4444' }}>{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 glow"
                  style={{ 
                    backgroundColor: 'var(--primary)',
                    opacity: status === 'loading' ? 0.7 : 1,
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
