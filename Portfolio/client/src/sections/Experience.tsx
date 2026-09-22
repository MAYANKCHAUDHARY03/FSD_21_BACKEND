import { motion } from 'framer-motion';

interface ExperienceProps {
  data: any[];
}

export const Experience = ({ data }: ExperienceProps) => {
  const validExperience = data.filter(job => 
    job.company && !job.company.includes("TODO:") && !job.role.includes("TODO:")
  );

  if (validExperience.length === 0) return null;

  return (
    <section className="py-24" id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 uppercase">
            My Journey<span className="text-[var(--accent)]">.</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-[var(--border)] ml-3 md:ml-0 md:pl-0">
          {validExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 relative pl-8 md:pl-12 last:mb-0"
            >
              <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[6.5px] top-2" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-[var(--foreground)]">{job.role}</h3>
                <span className="text-[var(--accent)] font-mono text-sm tracking-wider mt-1 md:mt-0">{job.period}</span>
              </div>
              
              <h4 className="text-lg text-[var(--muted)] mb-4">{job.company}</h4>
              
              <ul className="space-y-2 text-[var(--muted)]">
                {job.description.map((item: string, i: number) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[var(--accent)] mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
