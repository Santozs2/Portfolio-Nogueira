import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="inicio" className="relative h-screen flex flex-col justify-center overflow-hidden bg-white border-b border-zinc-200 dark:bg-zinc-950 dark:border-zinc-900 md:">
      {/* Fundo de Grade Industrial Escura */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-zinc-950/50 dark:to-zinc-950" />

      {/* Texto de Fundo Dinâmico */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[15%] left-[-2%] text-[24vw] font-black text-zinc-100/50 leading-none tracking-tighter whitespace-nowrap z-0 select-none pointer-events-none dark:text-zinc-900/50 transform-gpu"
      >
        DESENVOLVEDOR
      </motion.div>

      <div className="max-w-[90%] mx-auto w-full relative z-10 grid md:grid-cols-12 gap-8 items-end h-full pb-20 md:pb-32">
        
        <motion.div 
          style={{ y: y1, opacity }}
          className="md:col-span-12 flex flex-col transform-gpu"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[14vw] md:text-[11vw] font-black text-zinc-900 leading-[0.85] tracking-tighter uppercase dark:text-zinc-50">
              CÓDIGO <br/>
              COMO <br/>
              <span className="text-zinc-400 relative inline-block dark:text-zinc-500">
                ARTE<span className="text-blue-900">.</span>
                <div className="absolute top-1/2 left-0 w-full h-[1vw] bg-blue-500 mix-blend-overlay -translate-y-1/2"></div>
              </span>
            </h1>
          </motion.div>
        </motion.div>

      </div>

      {/* Fita de Letreiro (Marquee) */}
      <div className="absolute bottom-8 left-0 w-full overflow-hidden border-y border-zinc-300 bg-white/80 py-3 z-20 dark:border-zinc-800 dark:bg-zinc-950/80">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }} 
          className="flex whitespace-nowrap text-sm font-mono text-zinc-400 uppercase tracking-widest dark:text-zinc-500 transform-gpu"
        >
          <span className="px-4 flex items-center gap-4">ARQUITETURA FRONTEND <span className="text-blue-500">///</span> WEBGL & CÓDIGO CRIATIVO <span className="text-blue-500">///</span> ESTÉTICA MODERNA <span className="text-blue-500">///</span> </span>
          <span className="px-4 flex items-center gap-4">ARQUITETURA FRONTEND <span className="text-blue-500">///</span> WEBGL & CÓDIGO CRIATIVO <span className="text-blue-500">///</span> ESTÉTICA MODERNA <span className="text-blue-500">///</span> </span>
        </motion.div>
      </div>
    </section>
  );
}
