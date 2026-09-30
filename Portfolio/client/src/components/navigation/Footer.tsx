import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/portfolio')
      .then(res => res.json())
      .then(result => setData(result.data))
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-tighter text-[var(--foreground)] mb-2">
            {data.personal.name}<span className="text-[var(--accent)]">.</span>
          </h2>
          {((data.personal.role && !data.personal.role.includes("TODO:")) || 
            (data.personal.location && !data.personal.location.includes("TODO:"))) && (
            <p className="text-[var(--muted)] text-sm">
              {[
                data.personal.role && !data.personal.role.includes("TODO:") ? data.personal.role : null,
                data.personal.location && !data.personal.location.includes("TODO:") ? data.personal.location : null
              ].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>

        <div className="flex items-center gap-6">
          {data.social.github && (
            <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          )}
          {data.social.linkedin && (
            <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          )}
          {data.social.twitter && (
            <a href={data.social.twitter} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          )}
          {data.personal.email && (
            <a href={`mailto:${data.personal.email}`} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-[var(--border)]/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--muted)]">
        <p>&copy; {currentYear} {data.personal.name}. All rights reserved.</p>
        <p>Built with React & Express.</p>
      </div>
    </footer>
  );
};
