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
    icon: <Target size={28} />,
    title: "Decisões baseadas em dados",
    description:
      "Utilizamos indicadores e métricas para orientar decisões mais assertivas.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Inteligência estratégica",
    description:
      "Planejamento focado em resultados consistentes e crescimento sustentável.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Foco em lucratividade",
    description:
      "Priorizamos estratégias que aumentam margem e rentabilidade do negócio.",
  },
  {
    icon: <Zap size={28} />,
    title: "Execução personalizada",
    description:
      "Soluções adaptadas às necessidades e objetivos da sua empresa.",
  },
  {
    icon: <Handshake size={28} />,
    title: "Atendimento próximo",
    description:
      "Acompanhamento contínuo com suporte estratégico durante toda a jornada.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Crescimento sustentável",
    description:
      "Escalamos a operação mantendo previsibilidade e controle financeiro.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Efeito cascata um pouco mais rápido para 6 itens
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

export default function Differentiators() {
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
          Por que empresas escolhem{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
            a Valadares?
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 items-stretch"
      >
        {differentiators.map((diff, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full flex"
          >
            <Card className="relative mx-auto w-full py-6 shadow-sm transition hover:shadow-lg hover:-translate-y-2 duration-300 h-full flex flex-col group">
              <CardHeader className="flex-1">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-800 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  {diff.icon}
                </div>

                <CardTitle className="text-xl font-bold text-gray-900 tracking-tight">
                  {diff.title}
                </CardTitle>

                <CardDescription className="mt-2 text-base text-gray-500 leading-relaxed">
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
