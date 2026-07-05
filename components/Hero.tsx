"use client";

import { motion, Variants } from "framer-motion";
import SideRays from "./SideRays";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-dvh flex items-center justify-center overflow-hidden bg-white"
    >
      <div className="absolute inset-0 w-dvw pointer-events-none">
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-center text-gray-900 max-w-5xl leading-[1.1]"
        >
          Faturamento impressiona.{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
            Lucro sustenta o crescimento.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-3xl text-center text-base sm:text-lg md:text-xl leading-relaxed text-gray-500 font-normal"
        >
          Ajudamos operações de marketplace a crescer com mais previsibilidade,
          protegendo a margem e transformando dados em decisões estratégicas.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#"
            className="rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 px-6 py-4 font-semibold text-white shadow-xl shadow-blue-600/10 hover:shadow-blue-600/20 text-center transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Solicitar Auditoria Estratégica
          </a>

          <a
            href="#methodology"
            className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur-xs px-6 py-4 font-semibold text-gray-700 text-center transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 active:scale-95"
          >
            Ver Metodologia
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
