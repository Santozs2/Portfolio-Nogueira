import React from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, ChevronRight, Mail, MapPin, Link as LinkIcon, Code2, Globe, Server, Database, Cloud } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsData {
  [key: string]: {
    items: Skill[];
    icon: React.ReactNode;
  };
}

export function ResumePage() {
  const skills: SkillsData = {
    "PROGRAMMING LANGUAGES": {
      icon: <Code2 size={14} />,
      items: [
        { name: "TypeScript", icon: "ts" },
        { name: "Python", icon: "py" },
      ]
    },
    "DEVELOPMENT TOOLS": {
      icon: <Server size={14} />,
      items: [
        { name: "Windows", icon: "windows" },
        { name: "Git", icon: "git" },
        { name: "Node.js", icon: "nodejs" },
      ]
    },
    "FRONTEND": {
      icon: <Globe size={14} />,
      items: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Tailwind", icon: "tailwind" },
      ]
    },
    "BACKEND": {
      icon: <Database size={14} />,
      items: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Django", icon: "django" },
        { name: "MySQL", icon: "mysql" },
      ]
    },
    "INFRA": {
      icon: <Cloud size={14} />,
      items: [
        { name: "netlify  ", icon: "netlify" },
        { name: "Vercel", icon: "vercel" },
        { name: "github", icon: "github" },
      ]
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Página */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32 border-b border-zinc-200 dark:border-zinc-800 pb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.8] mb-4">
                Resumo
              </h1>
              <div className="flex items-center gap-4">
                <span className="w-16 h-[3px] bg-blue-500"></span>
                <p className="text-xl md:text-3xl text-blue-500 font-mono uppercase tracking-[0.3em] font-black italic">
                  Web Developer
                </p>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 px-10 py-5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 cursor-hover shadow-2xl shadow-blue-500/10 border border-zinc-800 dark:border-zinc-200"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Download Full CV
            </motion.button>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-20 xl:gap-32">
          
          {/* Coluna Esquerda: Barra Lateral com Habilidades */}
          <aside className="lg:w-[38%] xl:w-[32%] order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32 h-fit"
            >
              {/* Box da Barra Lateral com nome de grupo único para evitar interferência com hover do ícone */}
              <div className="relative group/sidebar">
                {/* Brilho Cyberpunk */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-none blur opacity-15 group-hover/sidebar:opacity-30 transition duration-1000 group-hover/sidebar:duration-200"></div>
                
                <div className="relative bg-zinc-950 border border-zinc-800 dark:border-cyan-500/20 p-8 md:p-12 shadow-2xl">
                  <div className="space-y-12">
                    {Object.entries(skills).map(([category, data]) => (
                      <div key={category} className="space-y-6">
                        <div className="flex items-center gap-3">
                          <span className="p-1.5 bg-zinc-900 border border-zinc-800 text-cyan-500">
                            {data.icon}
                          </span>
                          <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-400/60 font-black">
                            {category}
                          </h3>
                        </div>
                        
                        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-5">
                          {data.items.map((skill) => (
                            /* Cada ícone de habilidade recebe seu próprio escopo de grupo */
                            <motion.div 
                              key={skill.name}
                              whileHover={{ y: -5 }}
                              className="group/skill relative aspect-square flex items-center justify-center bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300"
                            >
                              <img 
                                src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                                alt={skill.name}
                                className="w-8 h-8 md:w-10 md:h-10 grayscale group-hover/skill:grayscale-0 transition-all duration-500"
                              />
                              {/* Tooltip Personalizado - Apenas ao passar o mouse diretamente no ícone */}
                              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 group-hover/skill:-top-12 transition-all duration-300 pointer-events-none z-20">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 bg-zinc-950 px-3 py-1.5 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] whitespace-nowrap">
                                  {skill.name}
                                </span>
                                <div className="w-2 h-2 bg-zinc-950 border-r border-b border-cyan-500/40 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 font-bold">Status</span>
                <div className="flex items-center gap-3 text-green-500">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-black uppercase tracking-widest">Disponível</span>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Coluna Direita */}
          <main className="lg:w-[62%] xl:w-[68%] order-1 lg:order-2 space-y-32">
            <section className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-blue-500 font-black tracking-widest">01 //</span>
                <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-zinc-400">Trajetória</h2>
                <div className="flex-grow h-[1px] bg-zinc-200 dark:bg-zinc-800"></div>
              </div>
              <div className="text-3xl md:text-5xl text-zinc-700 dark:text-zinc-200 leading-[1.1] font-light">
                <p>
                  Sou um estudante em Desenvolvimento Web e estou em <span className="font-black italic text-zinc-950 dark:text-zinc-50">constante busca de oportunidades</span> para crescer profissionalmente.
                  Tenho experiencia com html, css, javascript, react, nodejs, mysql e git.
                </p>
              </div>
            </section>

            <section className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-blue-500 font-black tracking-widest">02 //</span>
                <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-zinc-400">Carreira</h2>
                <div className="flex-grow h-[1px] bg-zinc-200 dark:bg-zinc-800"></div>
              </div>
              
              <div className="space-y-24">
                {[
                  {
                    role: "Estudante em Desenvolvimento Web",
                    company: "SENAI",
                    period: "2025 — 2026",
                    desc: "Desenvolvimento de sistemas web."
                  }
                ].map((exp, idx) => (
                  <motion.div key={idx} className="group">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4 mb-8">
                      <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 transition-colors duration-500">
                        {exp.role}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-zinc-50 dark:bg-zinc-900 px-3 py-1">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-blue-500 font-black uppercase tracking-widest text-sm mb-6">
                      <span>{exp.company}</span>
                      <div className="w-12 h-[1px] bg-blue-500/30"></div>
                      <span className="text-zinc-500 font-medium lowercase tracking-normal italic text-xs">{exp.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="pb-20">
              <div className="flex items-center gap-6 mb-12">
                <span className="text-xs font-mono text-blue-500 font-black tracking-widest">03 //</span>
                <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-zinc-400">Contato & Redes</h2>
                <div className="flex-grow h-[1px] bg-zinc-200 dark:bg-zinc-800"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Vamos conversar?</p>
                  <a 
                    href="mailto:sn.luisantonio24@gmail.com" 
                    className="group flex items-center gap-4 text-2xl md:text-4xl font-black text-zinc-900 dark:text-zinc-50 hover:text-blue-500 transition-all duration-300"
                  >
                    <Mail size={32} className="text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="break-all md:break-normal">sn.luisantonio24@gmail.com</span>
                  </a>
                </div>

                <div className="flex flex-col justify-end gap-6 mt-22">
                  <div className="flex flex-wrap gap-8 ">
                    <a 
                      href="https://www.linkedin.com/in/luis-antonio-dos-santos-nogueira-52980634b" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-black text-zinc-400 hover:text-blue-500 transition-colors"
                    >
                      <LinkIcon size={14} className="group-hover:rotate-45 transition-transform" />
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/Santozs2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-black text-zinc-400 hover:text-blue-500 transition-colors"
                    >
                      <LinkIcon size={14} className="group-hover:rotate-45 transition-transform" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
