import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { BaseModal } from "./ui/BaseModal";

export interface Project {
  id: string;
  title: string;
  client: string;
  image: string;
  images: string[];
  description: string;
  roles: string[];
  github: string;
  link: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number | ((prev: number) => number)) => void;
  onShowNoLinkNotice: () => void;
}

export function ProjectModal({ 
  project, 
  onClose, 
  currentImageIndex, 
  setCurrentImageIndex, 
  onShowNoLinkNotice 
}: ProjectModalProps) {
  
  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <BaseModal 
      isOpen={!!project} 
      onClose={onClose}
      className="w-full h-full md:h-auto md:max-h-[90vh] flex flex-col md:flex-row"
    >
      {project && (
        <>
          {/* Left Side: Image Carousel */}
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto relative overflow-hidden p-2 md:p-6 bg-white dark:bg-zinc-950 group/carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} view ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain transition-all duration-500 transform-gpu"
                />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation */}
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all cursor-hover pointer-events-auto"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all cursor-hover pointer-events-auto"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 bg-black/20 backdrop-blur-sm p-2 rounded-full">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-start md:justify-center bg-white overflow-y-auto flex-1 min-h-0 dark:bg-zinc-900">
            
            <h3 
              className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-8 text-zinc-900 dark:text-zinc-50 leading-[0.95] break-words py-2"
            >
              {project.title}
            </h3>

            <div className="space-y-8 flex-grow flex flex-col">
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-medium dark:text-zinc-400">
                {project.description}
              </p>

              <div className="border-t border-zinc-300 pt-8 mt-auto dark:border-zinc-800">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-4 dark:text-zinc-500">VISÃO_GERAL_DAS_TECNOLOGIAS</h4>
                <div className="flex flex-wrap gap-3">
                  {project.roles.map(role => (
                    <span key={role} className="px-3 py-1 bg-white border border-zinc-300 text-blue-500 text-xs font-mono uppercase tracking-wider hover:bg-blue-500 hover:text-white transition-colors cursor-hover dark:bg-zinc-950 dark:border-zinc-800 dark:text-blue-500 dark:hover:text-white">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, "_blank");
                    } else {
                      onShowNoLinkNotice();
                    }
                  }} 
                  className="inline-flex items-center justify-between w-full p-6 bg-blue-500 text-zinc-950 text-sm font-black uppercase tracking-widest hover:bg-blue-400 transition-colors cursor-hover"
                >
                  <span>ACESSAR PROJETO</span> 
                  <ArrowUpRight size={20} />
                </button>
                
                <a href={project.github} className="inline-flex items-center justify-between w-full p-6 bg-zinc-800 text-zinc-300 text-sm font-black uppercase tracking-widest hover:bg-zinc-700 transition-colors cursor-hover" target="_blank">
                  <span>ACESSAR GITHUB</span>
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </BaseModal>
  );
}
