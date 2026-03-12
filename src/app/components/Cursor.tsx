import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-zinc-300 mix-blend-difference pointer-events-none z-[100] flex items-center justify-center"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    >
      <div className="w-1 h-1 bg-white rounded-full" />
    </motion.div>
  );
};
