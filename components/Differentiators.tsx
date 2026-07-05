"use client";

import {
  BarChart3,
  Handshake,
  Rocket,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion, Variants } from "framer-motion";

const differentiators = [
  {
    icon: <Target size={22} />,
    title: "Decisões baseadas em dados",
    description: "Indicadores para decisões mais precisas.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Inteligência estratégica",
    description: "Crescimento orientado por estratégia.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Foco em lucratividade",
    description: "Mais margem, menos desperdício.",
  },
  {
    icon: <Zap size={22} />,
    title: "Execução personalizada",
    description: "Soluções para a realidade do seu negócio.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Atendimento próximo",
    description: "Acompanhamento durante toda a operação.",
  },
  {
    icon: <Rocket size={22} />,
    title: "Crescimento sustentável",
    description: "Escala com previsibilidade.",
  },
];

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
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function Differentiators() {
  return (
    <section className="mx-auto max-w-7xl px-6 mt-24 sm:mt-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl max-w-4xl mx-auto leading-[1.15]">
          Por que empresas escolhem{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
            a Valadares?
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      >
        {differentiators.map((diff, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="w-full flex cursor-pointer group"
          >
            <Card className="relative w-full py-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white rounded-2xl">
              <CardHeader className="flex-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-600/10 transition-transform duration-300 group-hover:scale-110">
                  {diff.icon}
                </div>

                <CardTitle className="text-gray-900 font-bold text-xl">
                  {diff.title}
                </CardTitle>

                <CardDescription className="text-gray-500 mt-2 leading-relaxed">
                  {diff.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
