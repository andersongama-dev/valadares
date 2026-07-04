"use client";

import { Briefcase, Database, ShoppingBag, TrendingUp } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
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
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

export default function Solutions() {
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
          Transformamos dados em{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
            vantagem competitiva.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-gray-500 leading-relaxed">
          Nossa atuação combina inteligência de mercado, análise operacional e
          otimização estratégica para tornar sua operação mais eficiente,
          previsível e lucrativa.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="w-full flex cursor-pointer group"
        >
          <Card className="relative w-full py-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white rounded-2xl">
            <CardHeader className="flex-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-600/10 transition-transform duration-300 group-hover:scale-110">
                <Database size={22} />
              </div>
              <CardTitle className="text-gray-900 font-bold text-xl">
                Inteligência de Dados
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2 leading-relaxed">
                Analisamos indicadores para identificar gargalos e oportunidades
                de crescimento.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="w-full flex cursor-pointer group"
        >
          <Card className="relative w-full py-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white rounded-2xl">
            <CardHeader className="flex-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-600/10 transition-transform duration-300 group-hover:scale-110">
                <Briefcase size={22} />
              </div>
              <CardTitle className="text-gray-900 font-bold text-xl">
                Estratégia Comercial
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2 leading-relaxed">
                Estruturamos processos para aumentar rentabilidade sem depender
                apenas de volume.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="w-full flex cursor-pointer group"
        >
          <Card className="relative w-full py-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white rounded-2xl">
            <CardHeader className="flex-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-600/10 transition-transform duration-300 group-hover:scale-110">
                <ShoppingBag size={22} />
              </div>
              <CardTitle className="text-gray-900 font-bold text-xl">
                Otimização de Marketplace
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2 leading-relaxed">
                Melhoramos posicionamento, anúncios e eficiência operacional.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="w-full flex cursor-pointer group"
        >
          <Card className="relative w-full py-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white rounded-2xl">
            <CardHeader className="flex-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-600/10 transition-transform duration-300 group-hover:scale-110">
                <TrendingUp size={22} />
              </div>
              <CardTitle className="text-gray-900 font-bold text-xl">
                Crescimento Sustentável
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2 leading-relaxed">
                Escalamos sua operação mantendo controle financeiro e
                previsibilidade.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
