import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold tracking-tighter text-[var(--accent)] mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-[var(--muted)] mb-10 max-w-md mx-auto text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-black font-medium hover:bg-[var(--accent)] transition-colors"
        >
          <ArrowLeft size={18} /> Return Home
        </Link>
      </motion.div>
    </div>
  );
};
