import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const whatsappNumber = "5517991962290";
  const message = encodeURIComponent("Olá! Vim através do seu portfólio.");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Minimized Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[100] bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl cursor-pointer transition-colors duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
            
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            className="fixed bottom-6 right-6 z-[100] w-[340px] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-800"
          >
            <div className="bg-[#25D366] p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <MessageCircle size={24} className="text-[#25D366]" />
                </div>
                <div className="text-white">
                  <h3 className="font-bold text-sm">Luis Nogueira</h3>
                  <p className="text-xs opacity-90">Online agora</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors cursor-pointer"
              >
                <X size={20} />
              </motion.button>
            </div>

            <div className="p-6 space-y-4 bg-zinc-900">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-800 p-4 rounded-lg rounded-tl-none text-sm text-zinc-200"
              >
                <p className="mb-2">👋 Olá! Como posso ajudar?</p>
                <p className="text-xs text-zinc-400">Respondo em breve!</p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 cursor-pointer"
              >
                <MessageCircle size={20} />
                Iniciar Conversa
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center text-xs text-zinc-500"
              >
                Resposta rápida garantida
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
