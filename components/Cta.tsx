"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden bg-linear-to-br from-blue-900 to-indigo-950 px-6 py-24 sm:py-32 mt-12"
      id="cta"
    >
      <div className="absolute top-0 left-1/2 -z-10 h-150 w-250 -translate-x-1/2 mask-[radial-gradient(ellipse_at_top,white,transparent)] bg-blue-500/10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.span
          variants={itemVariants}
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-xs"
        >
          Auditoria Estratégica
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight"
        >
          Sua operação já cresceu. Agora faça seu lucro crescer junto.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80"
        >
          Solicite uma auditoria estratégica e descubra novas oportunidades de
          crescimento.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto"
        >
          <button className="cursor-pointer rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-800 shadow-md transition-transform duration-200 hover:scale-105 active:scale-95">
            Solicitar Auditoria Estratégica
          </button>

          <button className="cursor-pointer rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-xs transition-colors duration-200 hover:bg-white/15">
            Falar com um especialista
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-blue-200"
        >
          <span className="flex items-center gap-2">✓ Atendimento online</span>
          <span className="flex items-center gap-2">
            ✓ Diagnóstico personalizado
          </span>
          <span className="flex items-center gap-2">
            ✓ Estratégia baseada em dados
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
