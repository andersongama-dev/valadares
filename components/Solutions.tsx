"use client";

import { Briefcase, Database, ShoppingBag, TrendingUp } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Solutions() {
  return (
    <section className="mt-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
          Transformamos dados em{" "}
          <span className="block text-blue-800/50">vantagem competitiva</span>
        </h2>

        <p className="text-gray-500 max-w-5xl text-center mx-auto my-6 leading-6 tracking-[0.02em]">
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
        className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 md:mx-12 mt-16 items-stretch"
      >
        <motion.div variants={itemVariants} className="w-full flex">
          <Card className="relative mx-auto w-full max-w-sm py-4 shadow-sm transition hover:shadow-lg hover:-translate-y-2 duration-300 h-full flex flex-col group">
            <CardHeader className="flex-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800 text-white transition-transform duration-300 group-hover:scale-110">
                <Database size={24} />
              </div>
              <CardTitle>Inteligência de Dados</CardTitle>
              <CardDescription>
                Analisamos indicadores para identificar gargalos e oportunidades
                de crescimento.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full flex">
          <Card className="relative mx-auto w-full max-w-sm py-4 shadow-sm transition hover:shadow-lg hover:-translate-y-2 duration-300 h-full flex flex-col group">
            <CardHeader className="flex-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800 text-white transition-transform duration-300 group-hover:scale-110">
                <Briefcase size={24} />
              </div>
              <CardTitle>Estratégia Comercial</CardTitle>
              <CardDescription>
                Estruturamos processos para aumentar rentabilidade sem depender
                apenas de volume.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full flex">
          <Card className="relative mx-auto w-full max-w-sm py-4 shadow-sm transition hover:shadow-lg hover:-translate-y-2 duration-300 h-full flex flex-col group">
            <CardHeader className="flex-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800 text-white transition-transform duration-300 group-hover:scale-110">
                <ShoppingBag size={24} />
              </div>
              <CardTitle>Otimização de Marketplace</CardTitle>
              <CardDescription>
                Melhoramos posicionamento, anúncios e eficiência operacional.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full flex">
          <Card className="relative mx-auto w-full max-w-sm py-4 shadow-sm transition hover:shadow-lg hover:-translate-y-2 duration-300 h-full flex flex-col group">
            <CardHeader className="flex-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800 text-white transition-transform duration-300 group-hover:scale-110">
                <TrendingUp size={24} />
              </div>
              <CardTitle>Crescimento Sustentável</CardTitle>
              <CardDescription>
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
