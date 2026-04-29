import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  showCloseButton?: boolean;
}

export function BaseModal({ 
  isOpen, 
  onClose, 
  children, 
  className = "", 
  overlayClassName = "",
  showCloseButton = true 
}: BaseModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 bg-white/90 cursor-hover dark:bg-zinc-950/90 ${overlayClassName}`}
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative bg-white border border-zinc-300 text-zinc-900 overflow-hidden shadow-2xl z-10 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-50 ${className}`}
          >
            {showCloseButton && (
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-white border border-zinc-300 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors cursor-hover dark:bg-zinc-950 dark:border-zinc-800 dark:text-blue-500 dark:hover:text-zinc-950"
              >
                <X size={20} />
              </button>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
