import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  data: any;
  social: any;
}

export const Hero = ({ data }: HeroProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between pt-24 pb-12 relative overflow-hidden" id="hero">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[var(--accent)] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[var(--accent)]"></span>
              PORTFOLIO / IDENTITY
            </p>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {data.name.split(' ')[0]} <br />
            <span className="text-[var(--muted)]">{data.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          {data.role && !data.role.includes("TODO:") && (
            <motion.h2
              className="text-2xl md:text-4xl font-medium text-[var(--foreground)] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {data.role}
            </motion.h2>
          )}

          {data.bio && !data.bio.includes("TODO:") && (
            <motion.p
              className="text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {data.bio}
            </motion.p>
          )}

          <motion.div
            className="flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-[var(--foreground)] text-black px-8 py-4 font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              VIEW PROJECTS
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 font-medium text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              CONNECT
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 flex justify-center md:justify-end w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {!imageError ? (
              <img 
                src="/images/profile.webp" 
                alt={data.name} 
                className="w-full h-full object-cover rounded-full border border-[var(--border)] shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-700"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full rounded-full border border-[var(--border)] bg-[var(--glass)] backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <span className="text-[var(--muted)] text-sm tracking-widest uppercase">Add Photo</span>
              </div>
            )}
            {/* Decorative orbit ring */}
            <div className="absolute inset-[-10%] rounded-full border border-[var(--border)] opacity-30 animate-[spin_60s_linear_infinite] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
