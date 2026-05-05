import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Link, useLocation } from "react-router-dom";

interface NavbarLink {
  name: string;
  href: string;
  isHash: boolean;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const links: NavbarLink[] = [
    { name: "Início", href: "/#inicio", isHash: true },
    { name: "Visão", href: "/#sobre", isHash: true },
    { name: "Projetos", href: "/#projetos", isHash: true },
    { name: "Resumo", href: "/resume", isHash: false },
    { name: "Contato", href: "/#contato", isHash: true },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    setIsOpen(false);
    if (isHash && location.pathname === "/") {
      e.preventDefault();
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav 
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4 bg-white/80 backdrop-blur-md border-b border-zinc-300 text-zinc-900 dark:bg-zinc-950/80 dark:border-zinc-800 dark:text-zinc-50" : "py-8 text-zinc-900 dark:text-zinc-50"}`}
      >
        <div className="max-w-[90%] mx-auto flex justify-between items-center">
          <Link to="/" onClick={(e) => handleLinkClick(e as any, "/#inicio", true)} className="text-xl md:text-2xl font-black uppercase tracking-tighter cursor-hover z-[60] relative flex items-center gap-2">
            NOGUEIRA
          </Link>

          <div className="flex items-center gap-6 z-[60]">
            <motion.button
              onClick={toggleTheme}
              className="relative w-12 h-12 rounded-full bg-white border-2 border-zinc-300 dark:bg-zinc-900 dark:border-zinc-800 flex items-center justify-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: theme === 'light' ? 0 : 180 }}
                transition={{ duration: 0.4 }}
              >
                {theme === 'light' ? (
                  <Moon size={20} className="text-zinc-900" />
                ) : (
                  <Sun size={20} className="text-yellow-400" />
                )}
              </motion.div>
            </motion.button>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="group flex items-center gap-3 cursor-hover z-[60] relative"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span className="text-xs font-mono uppercase tracking-widest hidden md:block text-zinc-400 group-hover:text-blue-500 transition-colors dark:text-zinc-400">
                {isOpen ? "[ FECHAR ]" : "[ MENU ]"}
              </span>
              <div className={`w-12 h-12 rounded-none border transition-all duration-300 flex items-center justify-center ${isOpen ? "bg-blue-500 border-blue-500 text-zinc-950" : "bg-white border-zinc-300 text-zinc-900 group-hover:border-blue-500 group-hover:text-blue-500 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-50 dark:group-hover:text-blue-500"}`}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-zinc-950"
          >
            <div className="flex flex-col items-center justify-center gap-6 w-full relative z-10 hover:text-blue-500">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.isHash)}
                    className="text-5xl md:text-8xl font-black uppercase tracking-tighter hover:text-blue-500 transition-all duration-300 cursor-hover block text-zinc-900 dark:text-zinc-50 dark:hover:text-blue-500"
                    style={{ WebkitTextStroke: "1px rgba(0,0,0,0.05)" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-12 right-12 flex justify-between text-zinc-500 text-xs font-mono uppercase tracking-widest dark:text-zinc-500"
            >
              <span>LOCAL // SÃO JOSÉ DO RIO PRETO</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

