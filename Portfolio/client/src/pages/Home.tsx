import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { Contact } from '../sections/Contact';

export const Home = () => {
  const [portfolioData, setPortfolioData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using the API endpoint as specified
        const response = await fetch('http://localhost:3001/api/v1/portfolio');
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }
        const result = await response.json();
        setPortfolioData(result.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--muted)] border-t-[var(--accent)] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !portfolioData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
        <p className="text-[var(--muted)] mb-8">We couldn't load the portfolio data. Please ensure the backend is running.</p>
        <p className="text-xs text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero data={portfolioData.personal} social={portfolioData.social} />
      <About data={portfolioData.personal} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Experience data={portfolioData.experience} />
      <Contact data={portfolioData.personal} />
    </motion.div>
  );
};
