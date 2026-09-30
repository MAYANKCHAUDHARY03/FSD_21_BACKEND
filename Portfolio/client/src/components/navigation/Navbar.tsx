import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [portfolioData, setPortfolioData] = useState<any>(null);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/portfolio');
        if (response.ok) {
          const result = await response.json();
          setPortfolioData(result.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const hasProjects = portfolioData?.projects?.some((p: any) => p.title && !p.title.includes("TODO:"));
  const hasExperience = portfolioData?.experience?.some((e: any) => e.company && !e.company.includes("TODO:") && !e.role.includes("TODO:"));

  const navLinks = [
    { name: 'About', href: isHome ? '#about' : '/#about', show: true },
    { name: 'Projects', href: isHome ? '#projects' : '/#projects', show: hasProjects },
    { name: 'Experience', href: isHome ? '#experience' : '/#experience', show: hasExperience },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact', show: true },
  ].filter(link => link.show);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    // eslint-disable-next-line react/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--glass)] backdrop-blur-md border-b border-[var(--border)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-[var(--foreground)]">
          PORTFOLIO<span className="text-[var(--accent)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full" />
            </a>
          ))}
          {portfolioData?.personal?.resumeUrl && !portfolioData.personal.resumeUrl.includes("TODO:") && (
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium border border-[var(--border)] hover:border-[var(--accent)] text-[var(--foreground)] transition-colors"
            >
              Resume
            </a>
          )}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[var(--foreground)] p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                {link.name}
              </a>
            ))}
            {portfolioData?.personal?.resumeUrl && !portfolioData.personal.resumeUrl.includes("TODO:") && (
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-center px-6 py-3 text-sm font-medium border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-colors"
              >
                Download Resume
              </a>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
