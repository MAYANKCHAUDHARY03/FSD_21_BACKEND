import { motion } from 'framer-motion';

interface AboutProps {
  data: any;
}

export const About = ({ data }: AboutProps) => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[var(--accent)] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[var(--accent)]"></span>
            ABOUT
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-12 leading-[1.1]">
            I build digital experiences that blend <span className="text-[var(--muted)]">technical precision</span> with <span className="text-[var(--muted)]">editorial design</span><span className="text-[var(--accent)]">.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-[var(--muted)] leading-relaxed font-light">
            <div className="space-y-6">
              {data.bio && !data.bio.includes("TODO:") && (
                <p>
                  {data.bio}
                </p>
              )}
            </div>
            <div className="space-y-6">
              <p>
                My work is driven by a focus on robust architecture, clean code, and uncompromising visual quality. When I'm not coding, you can usually find me exploring new technologies or refining my design systems.
              </p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[var(--border)] pt-8">
            {data.location && !data.location.includes("TODO:") && (
              <div>
                <h3 className="text-[var(--foreground)] font-medium mb-1 uppercase tracking-widest text-xs">Location</h3>
                <p className="text-[var(--muted)] text-lg">{data.location}</p>
              </div>
            )}
            {data.email && !data.email.includes("TODO:") && (
              <div>
                <h3 className="text-[var(--foreground)] font-medium mb-1 uppercase tracking-widest text-xs">Contact</h3>
                <p className="text-[var(--muted)] text-lg">{data.email}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
