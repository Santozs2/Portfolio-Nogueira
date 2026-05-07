import React from "react";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="sobre" className="py-32 md:py-48 bg-white relative z-10 border-b border-zinc-200 dark:bg-zinc-950 dark:border-zinc-900">
      <div className="max-w-[90%] mx-auto">
        
        <div className="grid md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 sticky top-32 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-500 block"></span>
              [ VISÃO & FILOSOFIA ]
            </h2>
          </div>

          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.1] tracking-tight mb-12 uppercase dark:text-zinc-50">
                A tecnologia como extensão da visão. <br/>
                Desenvolvo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">produtos digitais</span> de alto impacto e precisão.
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-12 text-zinc-600 text-lg leading-relaxed font-medium dark:text-zinc-400">
                <p>
                  Sou um jovem estudante, com foco em desenvolvimento web, apaixonado por tecnologia e inovação, busco sempre me atualizar e aprender novas tecnologias para oferecer o melhor para os meus clientes. 
                </p>
                <div className="flex flex-col gap-8">
                  <div className="border-l-2 border-zinc-300 pl-6 hover:border-blue-500 transition-colors duration-300 dark:border-zinc-800">
                    <h4 className="font-mono text-zinc-900 uppercase tracking-widest text-xs mb-3 dark:text-zinc-100">Tecnologias Principais_</h4>
                    <p className="font-mono text-sm text-zinc-600 dark:text-zinc-500">React, Next.js, Django, SQL Server,Node.js.</p>
                  </div>
                  <div className="border-l-2 border-zinc-300 pl-6 hover:border-blue-500 transition-colors duration-300 dark:border-zinc-800">
                    <h4 className="font-mono text-zinc-900 uppercase tracking-widest text-xs mb-3 dark:text-zinc-100">Metodologia_</h4>
                    <p className="font-mono text-sm text-zinc-600 dark:text-zinc-500">Arquitetura modular, Performance orientada a Core Web Vitals, Clean Code e UX Premium.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
