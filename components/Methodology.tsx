"use client";

import { motion, Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Estratégico",
    description:
      "Análise profunda e completa do momento atual da sua operação.",
  },
  {
    number: "02",
    title: "Mapeamento",
    description: "Identificação cirúrgica dos principais gargalos e perdas.",
  },
  {
    number: "03",
    title: "Plano de Ação",
    description: "Construção de uma estratégia sob medida para o seu negócio.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Monitoramento contínuo e evolução constante dos resultados.",
  },
];

export default function Methodology() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Uma metodologia baseada em dados,{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
            não em achismos.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Nosso método é focado em clareza, previsibilidade e crescimento
          sustentável.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6 relative"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative flex flex-col items-center text-center group"
          >
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] right-[-40%] h-0.5 bg-linear-to-r from-blue-500/50 to-transparent z-0 transition-all duration-300 group-hover:from-blue-600" />
            )}

            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-indigo-700 text-2xl font-bold text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
              {step.number}
            </div>

            <h3 className="mt-6 text-xl font-medium text-gray-900 tracking-tight">
              {step.title}
            </h3>

            <p className="mt-3 text-base text-gray-500 max-w-xs leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
