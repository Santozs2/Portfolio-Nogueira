import { motion, useMotionValue, useSpring, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Cursor } from "./components/Cursor";
import { MagneticButton } from "./components/MagneticButton";
import { WhatsAppPopup } from "./components/WhatsAppPopup";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "OPORTUNA  CONECTA",
    category: "RH Tech/HR Tech",
    year: "2026",
    img: "./src/assets/oportuna.jpg",
    link: "https://github.com/Santozs2/oportuna-conecta",
    type: "github" as const
  }
];

const SKILLS = [
  { category: "FRONTEND", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "DESIGN", items: ["Figma", "UI/UX", "Design Systems", "Prototipagem", "Tipografia"] },
  { category: "BACKEND", items: ["Node.js", "Python", "Java", "Java Script"] },
  { category: "TOOLS", items: ["Git & GitHub", "Vite", "Webpack", "Vs Code", "Docker"] },
];

export default function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeSkill, setActiveSkill] = useState<number>(0);
  const heroRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 400, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 400, mass: 0.5 });

  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 600], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const revealProps = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-zinc-50 overflow-x-hidden font-sans selection:bg-zinc-200 selection:text-zinc-900 scroll-smooth cursor-none">
      <Cursor />
      <WhatsAppPopup />

    
      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50 mix-blend-difference">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase leading-snug"
        >
          PORTFOLIO <br /> <span className="text-zinc-500">©2026</span>
        </motion.div>
        <div className="flex flex-col items-end gap-6">
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-end gap-3 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
          >
            <MagneticButton><a href="#sobre" className="hover:text-zinc-400 transition-colors block p-2">SOBRE</a></MagneticButton>
            <MagneticButton><a href="#skills" className="hover:text-zinc-400 transition-colors block p-2">SKILLS</a></MagneticButton>
            <MagneticButton><a href="#projetos" className="hover:text-zinc-400 transition-colors block p-2">PROJETOS</a></MagneticButton>
            <MagneticButton><a href="#contato" className="hover:text-zinc-400 transition-colors block p-2">CONTATO</a></MagneticButton>
          </motion.ul>
        </div>
      </nav>


      <section ref={heroRef} className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px"
          }}
        />
     

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-10 mix-blend-difference text-zinc-100"
        >
          <motion.h1
            initial={{ opacity: 0, y: 80, skewY: 4 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17vw] lg:text-[18vw] font-black leading-[1.20] tracking-tighter uppercase"
            style={{ WebkitTextStroke: "2px #fafafa", WebkitTextFillColor: "transparent" }}
          >
            LUIS
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 80, skewY: 4 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-[17vw] lg:text-[18vw] font-black leading-[0.75] tracking-tighter uppercase mt-2 md:-mt-[4vw]"
            style={{ WebkitTextStroke: "2px #fafafa", WebkitTextFillColor: "transparent" }}
          >
            NOGUEIRA
          </motion.h1>
        </motion.div>

        {/* Center badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 flex items-center justify-center"
        >
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-6 md:bottom-12 md:left-10 text-xs font-semibold tracking-[0.2em] uppercase z-30 flex flex-col gap-2"
        >
          <span className="text-zinc-600">LOCALIZAÇÃO</span>
          <span className="leading-relaxed text-zinc-300">São José do Rio Preto - SP<br/>Brasil</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-8 right-6 md:bottom-12 md:right-10 text-xs font-semibold tracking-[0.2em] uppercase z-30 flex items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-zinc-600 hidden md:block" />
          <div className="flex flex-col items-end md:flex-row md:items-center gap-2">
            <span className="text-zinc-300">SCROLL</span>
            <ArrowDownRight size={16} className="text-zinc-400 animate-bounce" />
          </div>
        </motion.div>
      </section>

      <section id="sobre" className="min-h-screen w-full bg-zinc-100 text-[#0a0a0a] px-6 py-24 md:p-24 flex flex-col justify-center relative z-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <h1 className="text-[25vw] font-black tracking-tighter uppercase">SOBRE</h1>
        </motion.div>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter uppercase leading-[0.85] mb-8"
            >
              "Código<br />
              Como<br />
              Arte."
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-4 mt-12 pt-8"
            >
            </motion.div>
          </div>
          <div className="flex flex-col justify-center gap-8">
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl font-medium text-zinc-600 max-w-xl leading-relaxed"
            >
              Sou apaixonado por dar vida a ideias através do código. Minha praia é pegar um layout estático e usar JavaScript e React para transformá-lo em algo com que as pessoas realmente interajam e sintam. Para mim, unir um design limpo com animações fluidas é o que torna o front-end tão fascinante. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-base text-zinc-500 max-w-xl leading-relaxed"
            >
              Gosto de cuidar de cada detalhe, do planejamento à entrega, garantindo que o resultado final não seja apenas um site que funciona bem, mas uma experiência digital que seja gostosa de usar.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton className="self-start">
                <a href="#projetos" className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase py-4 border-b-2 border-[#0a0a0a] hover:pr-8 transition-all duration-300">
                  Ver Projetos <ArrowDownRight size={18} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="skills" className="min-h-screen w-full bg-[#0f0f0f] text-zinc-50 px-6 py-24 md:p-24 flex flex-col justify-center relative z-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <h1 className="text-[22vw] font-black tracking-tighter uppercase text-zinc-50">SKILLS</h1>
        </motion.div>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.p
          {...revealProps}
            className="text-xs md:text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-12 md:mb-20"
          >
            Competências Técnicas
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-800 pb-8 lg:pb-0 lg:pr-16 mb-8 lg:mb-0">
              {SKILLS.map((skill, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveSkill(idx)}
                  className={`group flex items-center justify-between py-6 md:py-8 border-b border-zinc-800 text-left transition-all duration-300 ${activeSkill === idx ? "text-zinc-50" : "text-zinc-600 hover:text-zinc-300"}`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-xs tracking-widest transition-all duration-300 ${activeSkill === idx ? "text-zinc-400" : "text-zinc-700"}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-2xl md:text-4xl font-black tracking-tighter uppercase">{skill.category}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeSkill === idx ? 45 : 0, opacity: activeSkill === idx ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </motion.button>
              ))}
            </div>
            {/* Right: Skills content */}
            <div className="lg:pl-16 flex flex-col justify-center min-h-[300px]">
              <motion.div
                key={activeSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8"
              >
                <div className="flex flex-wrap gap-3">
                  {SKILLS[activeSkill].items.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      className="px-5 py-2.5 border border-zinc-700 rounded-full text-sm font-semibold tracking-widest uppercase text-zinc-300 hover:border-zinc-400 hover:text-zinc-50 transition-colors duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-col gap-4 mt-2">
                  {SKILLS[activeSkill].items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-xs font-semibold tracking-widest uppercase text-zinc-600 w-28 shrink-0">{item}</span>
                      <div className="flex-1 h-[2px] bg-zinc-800 overflow-hidden rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${85 - i * 5}%` }}
                          transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-zinc-300 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-zinc-600 w-8 text-right">{85 - i * 5}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="min-h-screen w-full bg-[#0a0a0a] text-zinc-50 px-6 py-24 md:p-24 flex flex-col justify-center relative z-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            {...revealProps}
            className="text-xs md:text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-12 md:mb-24"
          >
            Trabalhos Recentes
          </motion.h2>
          <div className="flex flex-col relative z-10" onMouseLeave={() => setHoveredProject(null)}>
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredProject(idx)}
                className="group relative border-b border-zinc-800 py-10 md:py-16 flex flex-col md:flex-row md:justify-between items-start md:items-center cursor-none transition-colors hover:text-zinc-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8 w-full md:justify-between">
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs text-zinc-700 font-semibold tracking-widest hidden md:block">{project.year}</span>
                    <h3 className="text-4xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-8 group-hover:text-zinc-100 mix-blend-difference z-20">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-xs md:text-sm font-semibold tracking-widest text-zinc-500 transition-transform duration-500 group-hover:-translate-x-2 md:group-hover:-translate-x-8 z-20">
                      {project.category}
                    </span>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      onMouseEnter={() => setHoveredProject(null)}
                      className="flex items-center gap-2 border border-zinc-700 rounded-full px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-zinc-50 hover:text-[#0a0a0a] hover:border-zinc-50 transition-colors duration-300 z-30 pointer-events-auto cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.type === "github" ? "GitHub" : "Ver Site"}
                      <ArrowUpRight size={14} className="ml-1" />
                    </motion.a>
                  </div>
                </div>
                <div className="w-full h-48 mt-8 overflow-hidden md:hidden rounded-lg">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="fixed top-0 left-0 w-[350px] h-[450px] pointer-events-none z-10 overflow-hidden hidden md:block rounded-xl"
          style={{
            x: smoothX, y: smoothY,
            translateX: "-50%", translateY: "-50%",
            opacity: hoveredProject !== null ? 1 : 0,
            scale: hoveredProject !== null ? 1 : 0.8,
          }}
          transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.4, type: "spring" } }}
        >
          <div
            className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateY(-${(hoveredProject || 0) * 100}%)` }}
          >
            {PROJECTS.map((p, i) => (
              <div key={i} className="w-full h-full bg-zinc-900 overflow-hidden shrink-0">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-80" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contato" className="min-h-[70vh] w-full bg-zinc-950 text-zinc-50 px-6 py-24 md:p-24 flex flex-col items-center justify-center relative z-20 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateX: -20 }}
          whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center z-10"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] mb-8 hover:italic transition-all duration-500 cursor-pointer"
          >
            VAMOS<br />CONVERSAR
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MagneticButton>
              <a href="mailto:sn.luisantonio24@gmail.com" className="inline-flex items-center gap-3 border border-zinc-50 rounded-full px-8 py-4 text-sm font-bold tracking-widest lowercase hover:bg-zinc-50 hover:text-[#0a0a0a] transition-colors duration-300">
                sn.luisantonio24@gmail.com
                <ArrowUpRight size={16} />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <h1 className="text-[30vw] font-black tracking-tighter">CONTATO</h1>
        </div>
      </section>

      <footer className="w-full bg-[#0a0a0a] border-t border-zinc-900 text-zinc-500 pt-20 px-6 md:px-10 flex flex-col gap-12 text-xs tracking-[0.2em] uppercase z-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-2 md:col-span-1 flex flex-col gap-4"
          >
            <span className="text-zinc-50 font-bold text-sm">MANIFESTO</span>
            <p className="text-[11px] leading-relaxed max-w-[220px] text-zinc-400 normal-case tracking-wide">
              Acredito que o código é uma extensão do design. Nenhum detalhe é pequeno demais quando se busca a perfeição digital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <span className="text-zinc-50 font-bold text-sm">EXPLORE</span>
            <div className="flex flex-col gap-3">
              <a href="#sobre" className="hover:text-zinc-300 transition-colors text-[11px]">A JORNADA</a>
              <a href="#skills" className="hover:text-zinc-300 transition-colors text-[11px]">COMPETÊNCIAS</a>
              <a href="#projetos" className="hover:text-zinc-300 transition-colors text-[11px]">O ARQUIVO</a>
              <a href="#contato" className="hover:text-zinc-300 transition-colors text-[11px]">CONTATO</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <span className="text-zinc-50 font-bold text-sm">LOCALIZAÇÃO</span>
            <div className="flex flex-col gap-3">
              <span className="text-[11px] leading-relaxed">SÃO JOSÉ DO RIO PRETO - SP</span>
              <span className="text-[11px] leading-relaxed">BRASIL</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4 md:items-end"
          >
            <span className="text-zinc-50 font-bold text-sm">SOCIAL</span>
            <div className="flex flex-col md:items-end gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors text-[11px]">LINKEDIN ↗</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors text-[11px]">GITHUB ↗</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors text-[11px]">TWITTER ↗</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors text-[11px]">INSTAGRAM ↗</a>
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-8 opacity-[0.04] pointer-events-none mix-blend-plus-lighter">
          <h1 className="text-[13vw] leading-none font-black tracking-tighter text-zinc-50 whitespace-nowrap">NOGUEIRA</h1>
        </div>

        <div className="w-full max-w-7xl mx-auto h-[1px] bg-zinc-900" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-7xl mx-auto pb-8"
        >
          <span className="text-zinc-50 font-bold text-sm">LUIS NOGUEIRA</span>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@example.com" className="text-[10px] hover:text-zinc-300 transition-colors normal-case tracking-wide">sn.luisantonio24@gmail.com</a>
            <span className="text-zinc-800">·</span>
            <span className="text-[8px]">TODOS OS DIREITOS RESERVADOS A LUIS NOGUEIRA ©</span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
