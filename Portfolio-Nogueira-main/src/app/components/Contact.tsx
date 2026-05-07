import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { BaseModal } from "./ui/BaseModal";

export function Contact() {
  const [emailExpanded, setEmailExpanded] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const linkedin = "www.linkedin.com/in/luis-antonio-dos-santos-nogueira-52980634b";
  const github = "https://github.com/Santozs2";
  const instagram = "https://www.instagram.com/santoz.wdd/";

  return (
    <section id="contato" className="py-32 bg-white min-h-screen flex flex-col justify-between dark:bg-zinc-950">
      <div className="max-w-[90%] mx-auto w-full flex-grow flex flex-col justify-center">

        <p className="text-xs font-mono uppercase tracking-widest text-blue-500 mb-8 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-blue-500 block"></span>
          [ INICIAR_CONTATO ]
        </p>

        <a
          href="mailto:sn.luisantonio24@gmail.com"
          className="group block cursor-hover w-full"
          onClick={() => setEmailExpanded(true)}
        >
          <AnimatePresence mode="wait">
            {!emailExpanded ? (
              <motion.div
                key="text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
              >
                <motion.h2
                  className="text-[12vw] md:text-[5vw] font-black text-zinc-900 uppercase tracking-tighter leading-[0.85] flex flex-col md:flex-row md:items-center gap-4 transition-colors group-hover:text-blue-500 dark:text-zinc-50"
                  whileHover="hover"
                >
                  <div>VAMOS TRABALHAR</div>
                  <div className="flex items-center gap-4">
                    JUNTOS
                    <motion.div
                      variants={{
                        hover: { rotate: 45, x: 20 }
                      }}
                      className="hidden md:flex w-16 h-16 md:w-20 md:h-20 bg-blue-500 text-zinc-950 border border-blue-500 items-center justify-center transition-transform"
                    >
                      <ArrowRight size={40} />
                    </motion.div>
                  </div>
                </motion.h2>
              </motion.div>
            ) : (
              <motion.div
                key="email"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <span className="text-zinc-600 font-mono text-sm uppercase tracking-widest dark:text-zinc-500">Enviar email para:</span>
                <h2 className="text-[7vw] md:text-[5vw] font-black text-blue-500 uppercase tracking-tighter leading-[0.85] flex flex-wrap items-center gap-4 md:gap-6 break-all">
                  sn.luisantonio24@gmail.com
                  <motion.div
                    className="w-12 h-12 md:w-20 md:h-20 bg-white text-blue-500 border border-zinc-300 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 dark:bg-zinc-900 dark:border-zinc-800 dark:group-hover:text-zinc-950"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5 md:w-8 md:h-8" />
                  </motion.div>
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </a>

        <div className="mt-32 grid md:grid-cols-3 gap-12 border-t border-zinc-300 pt-12 dark:border-zinc-900">

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-600">EMAIL</span>
            <a href="mailto:sn.luisantonio24@gmail.com" className="text-lg font-mono text-zinc-700 hover:text-blue-500 transition-colors cursor-hover dark:text-zinc-300 break-all">sn.luisantonio24@gmail.com</a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-600">REDES_SOCIAIS</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-mono text-zinc-700 hover:text-blue-500 transition-colors cursor-hover dark:text-zinc-300">
                LinkedIn
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-lg font-mono text-zinc-700 hover:text-blue-500 transition-colors cursor-hover dark:text-zinc-300">
                GitHub
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-lg font-mono text-zinc-700 hover:text-blue-500 transition-colors cursor-hover dark:text-zinc-300">
                Instagram
              </a>
              <button
                onClick={() => setWhatsappOpen(true)}
                className="text-lg font-mono text-zinc-700 hover:text-blue-500 transition-colors cursor-hover dark:text-zinc-300"
              >
                WhatsApp
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-600">LOCALIZAÇÃO</span>
            <span className="text-lg font-mono text-zinc-700 dark:text-zinc-300">SÃO JOSÉ DO RIO PRETO, BR</span>
          </div>

        </div>
      </div>

      {/* Popup do WhatsApp */}
      <BaseModal
        isOpen={whatsappOpen}
        onClose={() => setWhatsappOpen(false)}
        className="w-full max-w-md p-8"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 448 512"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z" />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 mb-2 dark:text-zinc-50">
              CONTATO VIA WHATSAPP
            </h3>
            <p className="text-zinc-600 text-sm dark:text-zinc-400">
              Vamos conversar sobre seu projeto!
            </p>
          </div>

          <div className="space-y-4 w-full">
            <div className="text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-500 mb-2">NÚMERO</p>
              <p className="text-lg font-mono text-zinc-700 dark:text-zinc-300">+55 17 99196-2290</p>
            </div>

            <a
              href="https://wa.me/5517991962290?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full p-4 bg-green-500 text-white text-sm font-black uppercase tracking-widest hover:bg-green-400 transition-colors cursor-hover"
            >
              <svg
                viewBox="0 0 448 512"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z" />
              </svg>
              INICIAR CONVERSA
            </a>
          </div>
        </div>
      </BaseModal>

      <button
        onClick={() => setWhatsappOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-400 transition-all duration-300 flex items-center justify-center cursor-hover hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <svg
          viewBox="0 0 448 512"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z" />
        </svg>
      </button>
    </section>
  );
}
