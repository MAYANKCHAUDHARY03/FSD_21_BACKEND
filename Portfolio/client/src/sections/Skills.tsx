import { motion } from 'framer-motion';

interface SkillsProps {
  data: any[];
}

export const Skills = ({ data }: SkillsProps) => {
  const validSkills = data.filter(group => 
    group.items.length > 0 && !group.items.some((item: string) => item.includes("TODO:"))
  );

  if (validSkills.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--foreground)]/5" id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16">
            Skills & Tools<span className="text-[var(--accent)]">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {validSkills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-[var(--border)] pt-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-[var(--foreground)]">{skillGroup.category}</h3>
              <ul className="flex flex-wrap gap-3">
                {skillGroup.items.map((item: string) => (
                  <li 
                    key={item}
                    className="px-4 py-2 border border-[var(--border)] text-[var(--muted)] text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                  >
                    {item}
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
