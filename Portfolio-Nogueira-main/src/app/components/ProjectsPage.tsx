import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, LayoutGrid, List, Plus } from "lucide-react";
import { ProjectModal, Project } from "./ProjectModal";
import { NoLinkNotice } from "./NoLinkNotice";

import { projects } from "../data/projects";

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNoLinkNotice, setShowNoLinkNotice] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-40 pb-32 relative overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Elementos de Fundo Estruturais */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
        
        {/* Círculos Decorativos de Vidro */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-[90%] mx-auto relative z-10">
        {/* Cabeçalho de Alta Costura Digital */}
        <header className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              
              <h1 className="text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[0.75] text-zinc-900 dark:text-zinc-50 relative group">
                PROJETOS<span className="text-blue-500"></span><br/>
                <span className="text-zinc-200 dark:text-zinc-900 inline-block transition-transform duration-700 group-hover:translate-x-4">ARQUIVOS</span>
              </h1>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="h-px bg-zinc-200 dark:bg-zinc-800 mt-12"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-end gap-6"
            >
              <div className="flex items-center p-1.5 bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-full shadow-inner">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`px-6 py-2 rounded-full flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest transition-all duration-500 ${viewMode === "grid" ? "bg-white text-blue-500 shadow-lg dark:bg-zinc-800 dark:text-blue-400" : "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"}`}
                >
                  <LayoutGrid size={14} /> Grid
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`px-6 py-2 rounded-full flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest transition-all duration-500 ${viewMode === "list" ? "bg-white text-blue-500 shadow-lg dark:bg-zinc-800 dark:text-blue-400" : "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"}`}
                >
                  <List size={14} /> List
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Galeria Dinâmica */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24" : "flex flex-col gap-32"}>
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className={`group relative cursor-pointer ${
                  viewMode === "grid" 
                    ? "flex flex-col" 
                    : "flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
                }`}
                onClick={() => handleOpenProject(project)}
              >
                {/* Background Text Decorativo (Apenas no Grid) */}
                {viewMode === "grid" && (
                  <div className="absolute -top-12 -left-8 text-8xl font-black text-zinc-50 dark:text-zinc-900/40 pointer-events-none select-none z-0 transition-colors group-hover:text-blue-500/10">
                    0{index + 1}
                  </div>
                )}

                {/* Container de Imagem de Luxo */}
                <div className={`${viewMode === "grid" ? "w-full mb-12" : "w-full lg:w-3/5"} relative z-10 group/img overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 transform-gpu hover:-rotate-1 transition-transform duration-700`}>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale brightness-90 group-hover/img:grayscale-0 group-hover/img:scale-110 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                    />
                    
                    {/* Scan Line Animation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent h-20 -translate-y-full group-hover/img:animate-scan-line pointer-events-none" />
                    
                    {/* Information Overlay on Hover (Desktop) */}
                    <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white hidden md:flex">
                      <div className="flex gap-2 mb-4">
                        {project.roles.map(role => (
                          <span key={role} className="text-[8px] font-mono border border-white/20 px-2 py-1 rounded-sm uppercase">
                            {role}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Acessar Documentação_</p>
                    </div>
                  </div>
                </div>

                {/* Conteúdo Informativo Premium */}
                <div className={`${viewMode === "grid" ? "w-full" : "flex-1 w-full"} relative z-10`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
                      {project.client}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 dark:from-zinc-800 to-transparent" />
                  </div>
                  
                  <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>

                  <div className={viewMode === "grid" ? "space-y-8" : "grid md:grid-cols-2 gap-12"}>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-400 group-hover:text-blue-500 transition-all">
                        <Plus size={14} className="group-hover:rotate-90 transition-transform" />
                        <span>Ver Detalhes do Projeto</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.roles.slice(0, 3).map(role => (
                          <div key={role} className="w-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-800 group-hover:bg-blue-500 transition-colors" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Rodapé do Arquivo */}
        <footer className="mt-40 pt-16 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-8 text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">
              <span>[ &copy; 2026 NOGUEIRA_ARCHIVE ]</span>
              <span className="hidden md:inline">SYSTEM_STATUS // ONLINE</span>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-1 bg-zinc-900 dark:bg-zinc-50" />
              <div className="w-12 h-1 bg-blue-500" />
              <div className="w-12 h-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </footer>
      </div>

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        onShowNoLinkNotice={() => setShowNoLinkNotice(true)}
      />

      <NoLinkNotice 
        isOpen={showNoLinkNotice}
        onClose={() => setShowNoLinkNotice(false)}
        githubUrl={selectedProject?.github}
      />
    </div>
  );
}
