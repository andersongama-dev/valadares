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
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="methodology" className="mx-auto max-w-7xl px-6 mt-24 sm:mt-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl max-w-4xl mx-auto leading-[1.15]">
          Uma metodologia baseada em dados,{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
            não em achismos.
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="relative flex flex-col items-center text-center group bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl cursor-pointer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-xl font-bold text-white shadow-md shadow-blue-600/10 transition-transform duration-300 group-hover:scale-110">
              {step.number}
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900 tracking-tight">
              {step.title}
            </h3>

            <p className="mt-2 text-base text-gray-500 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
