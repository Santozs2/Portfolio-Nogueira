import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { ProjectModal, Project } from "./ProjectModal";
import { NoLinkNotice } from "./NoLinkNotice";

import Image1 from "./../../assets/oportuna.jpg";
import Image2 from "./../../assets/amorecacau.jpg";
import Image3 from "./../../assets/amorecacau2.jpg";
import Image4 from "./../../assets/amorecacau3.jpg";
import Image5 from "./../../assets/oportuna2.jpg";
import Image6 from "./../../assets/oportuna3.jpg";
import Image7 from "./../../assets/icefrost.jpg";
import Image8 from "./../../assets/icefrost2.jpg";
import Image9 from "./../../assets/icefrost3.jpg";

const projects: Project[] = [
  {
    id: "01",
    title: "OPORTUNA CONECTA",
    client: "Match de Oportunidades de Carreira",
    image: Image1,
    images: [Image1, Image5, Image6],
    description: "Oportuna Conecta — Plataforma web de empregabilidade que conecta alunos egressos de programas de qualificação profissional a vagas na indústria. Possui gestão de alunos, cadastro de vagas, avaliação técnica e psicológica de competências industriais (NR-10, NR-35, Soldagem, Automação, CLP e mais), sistema de matching com score de compatibilidade e um assistente de IA conversacional para análise de dados. Desenvolvido com React, TypeScript, Tailwind CSS e shadcn/ui.",
    roles: ["Frontend", "Backend", "WebSockets"],
    github: "https://github.com/Santozs2/oportunaconecta",
    link: "",
  },
  {
    id: "02",
    title: "AMOR & CACAU",
    client: "E-commerce",
    image: Image2,
    images: [Image2, Image3, Image4],
    description: "E-commerce completo para confeitaria artesanal, desenvolvido com React, TypeScript e Supabase. Conta com catálogo de produtos por categorias, carrinho de compras, checkout com cálculo de frete via CEP, pagamento via PIX com QR Code, histórico de pedidos e painel administrativo com dashboard de vendas, gestão de produtos e exportação de dados em CSV.",
    roles: ["JavaScript", "TypeScript", "Supabase"],
    github: "https://github.com/Santozs2/amor-cacau",
    link: "https://amor-cacau.onrender.com",
  },
    {
    id: "03",
    title: "ICEFROST",
    client: "Gestor de sorveteria",
    image: Image7,
    images: [Image7, Image8, Image9],
    description: "Gestor de uma sorveteria desenvolvido com Django e MySql lite 3. O sistema inclui cadastro de sorvetes, fornecedores, etc. O projeto foi criado para uma avaliação formativa de Django do meu curso técnico.",
    roles: ["Django", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Santozs2/icefrost",
    link: "",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNoLinkNotice, setShowNoLinkNotice] = useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projetos" className="py-32 bg-white text-zinc-900 relative border-b border-zinc-200 dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-900">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-6xl sm:text-[10vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none mb-12 md:mb-24 text-zinc-900 stroke-zinc-200 dark:text-zinc-100 dark:stroke-zinc-600" style={{ WebkitTextStroke: "1px #e4e4e777" }}>
          PROJETOS RECENTES
        </h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center group cursor-hover`}
                onClick={() => handleOpenProject(project)}
              >
                
                <div className="w-full md:w-3/5 relative overflow-hidden bg-zinc-100 border border-zinc-300 p-2 md:p-4 dark:bg-zinc-900 dark:border-zinc-800 transform-gpu">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white dark:bg-zinc-950">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">{project.client}</span>
                    <span className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-800"></span>
                  </div>
                  <h3 
                    className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 group-hover:text-blue-500 transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-lg mb-8 max-w-md dark:text-zinc-500">
                    {project.description}
                  </p>
                  <div className="flex gap-4 items-center uppercase text-xs font-mono tracking-widest text-zinc-600 group-hover:text-blue-500 transition-colors dark:text-zinc-400">
                    [ EXAMINAR_PROJETO ] <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
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
    </section>
  );
}
