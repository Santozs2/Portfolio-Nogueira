import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CustomCursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ResumePage } from './components/ResumePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from 'sonner';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-500 selection:text-zinc-950 sm:cursor-auto cursor-auto md:cursor-none dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-500">
          <Toaster position="top-right" richColors />
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}


