import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactProps {
  data: any;
}

export const Contact = ({ data }: ContactProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:3001/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="py-24 bg-[var(--foreground)]/5" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 uppercase leading-[1.1]">
              Let's build<br />something<br />worth remembering<span className="text-[var(--accent)]">.</span>
            </h2>
            <p className="text-[var(--muted)] text-lg mb-12 max-w-md">
              Have a project in mind or want to discuss a potential opportunity? 
              I'm always open to talking about new ideas.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-[var(--foreground)] font-medium mb-1 uppercase tracking-widest text-xs">Email</h4>
                <a href={`mailto:${data.email}`} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-lg">
                  {data.email}
                </a>
              </div>
              {data.phone && data.phone !== "TODO: ADD INFORMATION" && (
                <div>
                  <h4 className="text-[var(--foreground)] font-medium mb-1 uppercase tracking-widest text-xs">Phone</h4>
                  <a href={`tel:${data.phone}`} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-lg">
                    {data.phone}
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--muted)] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-none px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--muted)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-none px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--muted)] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-none px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-y"
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="text-green-500 text-sm">Message sent successfully! Note: Production email delivery requires backend configuration.</div>
              )}
              {status === 'error' && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[var(--foreground)] text-black font-medium px-8 py-4 hover:bg-[var(--accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
