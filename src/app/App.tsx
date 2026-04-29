import React from 'react';
import { CustomCursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-500 selection:text-zinc-950 sm:cursor-auto cursor-auto md:cursor-none dark:bg-zinc-950 dark:text-zinc-50">
        <Toaster position="top-right" richColors />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
