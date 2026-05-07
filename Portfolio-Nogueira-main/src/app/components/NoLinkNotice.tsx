import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, X, ArrowUpRight } from "lucide-react";

interface NoLinkNoticeProps {
  isOpen: boolean;
  onClose: () => void;
  githubUrl?: string;
}

export function NoLinkNotice({ isOpen, onClose, githubUrl }: NoLinkNoticeProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 cursor-hover"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 shadow-2xl transform-gpu"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/10 flex items-center justify-center rounded-full mb-6">
                <Github size={32} className="text-blue-500" />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-zinc-900 dark:text-zinc-50">
                ACESSO RESTRITO
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                Este projeto possui apenas acesso ao repositório no <span className="text-blue-500 font-bold">GitHub</span>. O ambiente de demonstração (deploy) não está disponível no momento.
              </p>
              <div className="flex flex-col w-full gap-3">
                <a 
                  href={githubUrl} 
                  target="_blank"
                  className="w-full py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 text-xs font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-hover"
                >
                  VER CÓDIGO NO GITHUB <ArrowUpRight size={16} />
                </a>
                <button 
                  onClick={onClose}
                  className="w-full py-4 border border-zinc-200 dark:border-zinc-800 text-zinc-500 text-xs font-black uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 cursor-hover"
                >
                  FECHAR AVISO
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
