import React from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, ChevronRight, Mail, MapPin, Link as LinkIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsData {
  [key: string]: Skill[];
}

export function ResumePage() {
  const skills: SkillsData = {
    "PROGRAMMING LANGUAGES": [
      { name: "TypeScript", icon: "ts" },
      { name: "Python", icon: "py" },
      { name: "Go", icon: "go" },
      { name: "Java", icon: "java" },
      { name: "Rust", icon: "rust" },
    ],
    "DEVELOPMENT TOOLS": [
      { name: "Linux", icon: "linux" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "Node.js", icon: "nodejs" },
    ],
    "FRONTEND": [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Astro", icon: "astro" },
      { name: "Redux", icon: "redux" },
      { name: "Svelte", icon: "svelte" },
    ],
    "BACKEND": [
      { name: "Node.js", icon: "nodejs" },
      { name: "Django", icon: "django" },
      { name: "Redis", icon: "redis" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" },
    ],
    "INFRA": [
      { name: "AWS", icon: "aws" },
      { name: "Vercel", icon: "vercel" },
      { name: "Terraform", icon: "terraform" },
    ]
  };


  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-zinc-900 dark:text-zinc-50">
                Resumo
              </h1>
              <p className="text-xl md:text-2xl text-blue-500 font-mono uppercase tracking-widest font-bold">
                Software Engineer
              </p>
            </div>
            <button 
              className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold uppercase tracking-widest text-xs hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 cursor-hover"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              Download Full CV
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Sidebar with Skills & Info */}
          <aside className="lg:w-1/3 space-y-12">
            
            {/* Personal Info Box */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">Contato</h3>
                <div className="space-y-3">
                  <a href="mailto:contato@exemplo.com" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors group">
                    <Mail size={18} className="text-zinc-400 group-hover:text-blue-500" />
                    <span className="font-medium">contato@exemplo.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                    <MapPin size={18} className="text-zinc-400" />
                    <span className="font-medium">São José do Rio Preto, SP</span>
                  </div>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors group">
                    <LinkIcon size={18} className="text-zinc-400 group-hover:text-blue-500" />
                    <span className="font-medium">github.com/nogueira</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Skills Box */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-fit sticky top-32"
            >
              <div className="bg-zinc-950 border border-cyan-500/30 p-8 md:p-10 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]">
                <div className="space-y-10">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-500 font-bold text-xl">{">"}</span>
                    <h2 className="text-2xl font-black uppercase tracking-widest text-zinc-50">SKILLS</h2>
                  </div>

                  <div className="space-y-8">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category} className="space-y-4">
                        <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400/80 font-bold">
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {items.map((skill) => (
                            <div 
                              key={skill.name}
                              className="group relative"
                              title={skill.name}
                            >
                              <img 
                                src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                                alt={skill.name}
                                className="w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Right Column: Main Content */}
          <main className="lg:w-2/3 w-full space-y-20">
            
            {/* About Me Section */}
            <section className="space-y-8">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-blue-500">Sobre Mim</h2>
              <div className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                <p className="mb-8">
                  Desenvolvedor Full-Stack focado em construir aplicações web modernas, escaláveis e com foco total na <span className="text-zinc-950 dark:text-zinc-50 font-bold">experiência do usuário</span>.
                </p>
                <p>
                  Especialista em React e Node.js, com profundo conhecimento em arquitetura de sistemas e metodologias ágeis. Busco sempre as tecnologias mais inovadoras para resolver problemas complexos.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section className="space-y-12">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-blue-500">Experiência Profissional</h2>
              <div className="space-y-16">
                <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase text-zinc-900 dark:text-zinc-50">Sênior Software Engineer</h3>
                      <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mt-1">Tech Solutions Corp</p>
                    </div>
                    <span className="text-sm font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 mt-2 md:mt-0">2023 — Presente</span>
                  </div>
                  <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg">
                    <li className="flex gap-3"><ChevronRight size={18} className="mt-1 flex-shrink-0 text-blue-500" /> Liderança de squads focadas em produtos de alto tráfego.</li>
                    <li className="flex gap-3"><ChevronRight size={18} className="mt-1 flex-shrink-0 text-blue-500" /> Redução de 40% no tempo de carregamento através de otimizações críticas.</li>
                    <li className="flex gap-3"><ChevronRight size={18} className="mt-1 flex-shrink-0 text-blue-500" /> Implementação de Design Systems escaláveis para múltiplos produtos.</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                  <div className="absolute w-4 h-4 bg-zinc-300 dark:bg-zinc-700 rounded-full -left-[9px] top-2" />
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase text-zinc-900 dark:text-zinc-50">Full-Stack Developer</h3>
                      <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mt-1">Innovation Lab</p>
                    </div>
                    <span className="text-sm font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 mt-2 md:mt-0">2021 — 2023</span>
                  </div>
                  <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg">
                    <li className="flex gap-3"><ChevronRight size={18} className="mt-1 flex-shrink-0 text-blue-500" /> Desenvolvimento de APIs robustas utilizando Node.js e GraphQL.</li>
                    <li className="flex gap-3"><ChevronRight size={18} className="mt-1 flex-shrink-0 text-blue-500" /> Integração com sistemas de pagamento e fluxos complexos de checkout.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-8 pb-10">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-blue-500">Formação Acadêmica</h2>
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 border border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 uppercase">Ciência da Computação</h3>
                    <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mt-1">Universidade Federal</p>
                  </div>
                  <span className="text-sm font-mono text-zinc-500 mt-2 md:mt-0">2017 — 2021</span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
