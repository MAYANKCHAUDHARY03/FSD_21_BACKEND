import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/v1/projects/${slug}`);
        if (!response.ok) {
          throw new Error('Project not found');
        }
        const result = await response.json();
        setProject(result.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--muted)] border-t-[var(--accent)] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-[var(--muted)] mb-8">The project you're looking for doesn't exist or an error occurred.</p>
        <Link to="/" className="text-[var(--accent)] hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24"
    >
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{project.title}</h1>
          <p className="text-xl md:text-2xl text-[var(--muted)] max-w-3xl mb-12 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[var(--foreground)] text-black px-6 py-3 font-medium hover:bg-[var(--accent)] transition-colors"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[var(--border)] px-6 py-3 font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> View Source
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Image Placeholder */}
        <motion.div 
          className="aspect-video bg-[var(--border)] w-full mb-20 flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {project.screenshots && project.screenshots.length > 0 && (
            <img src={project.screenshots[0]} alt={project.title} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 border border-[var(--border)] mix-blend-overlay pointer-events-none" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            {project.problem && !project.problem.includes("TODO:") && (
              <section>
                <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
                <p className="text-[var(--muted)] text-lg leading-relaxed">{project.problem}</p>
              </section>
            )}
            
            {project.solution && !project.solution.includes("TODO:") && (
              <section>
                <h2 className="text-2xl font-bold mb-6">The Solution</h2>
                <p className="text-[var(--muted)] text-lg leading-relaxed">{project.solution}</p>
              </section>
            )}

            {project.features && project.features.length > 0 && !project.features[0].includes("TODO:") && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature: string, i: number) => (
                    <li key={i} className="flex gap-3 text-[var(--muted)] text-lg">
                      <span className="text-[var(--accent)] mt-1.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 border border-[var(--border)] bg-[var(--background)]">
              <h3 className="text-xl font-bold mb-6">Technology Stack</h3>
              <ul className="flex flex-col gap-3">
                {project.techStack.map((tech: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--muted)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
