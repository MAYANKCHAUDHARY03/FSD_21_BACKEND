import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  data: any[];
}

export const Projects = ({ data }: ProjectsProps) => {
  const validProjects = data.filter(project => 
    project.title && !project.title.includes("TODO:")
  );

  if (validProjects.length === 0) return null;

  return (
    <section className="py-24" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-end mb-16 border-b border-[var(--border)] pb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Selected Work<span className="text-[var(--accent)]">.</span>
          </h2>
          <span className="text-[var(--muted)] hidden md:block">
            {validProjects.length < 10 ? `0${validProjects.length}` : validProjects.length} PROJECTS
          </span>
        </motion.div>

        <div className="flex flex-col">
          {validProjects.map((project) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to={`/projects/${project.slug}`}
                className="group block py-12 border-b border-[var(--border)] transition-colors hover:border-[var(--accent)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 lg:col-span-4">
                    <h3 className="text-3xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2 mt-4 text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                      {project.techStack.slice(0, 3).map((tech: string) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="md:col-span-6 lg:col-span-7">
                    <p className="text-[var(--muted)] line-clamp-2 md:line-clamp-3 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="md:col-span-1 flex justify-end">
                    <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] group-hover:bg-[var(--accent)] group-hover:text-black group-hover:border-[var(--accent)] transition-all">
                      <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
