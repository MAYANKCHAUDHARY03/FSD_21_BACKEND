import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { CustomCursor } from './components/ui/CustomCursor';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/navigation/Footer';

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
