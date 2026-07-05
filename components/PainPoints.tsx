"use client";

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

export default function PainPoints() {
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
          Muitas empresas faturam milhões,{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
            poucas realmente lucram.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-gray-500 leading-relaxed">
          Crescer sem estratégia aumenta custos, reduz margens e torna sua
          operação dependente dos algoritmos. Nossa missão é transformar dados
          em decisões que impulsionam resultados.
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
          className="w-full flex cursor-pointer"
        >
          <Card className="relative w-full py-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white rounded-2xl">
            <CardHeader className="flex-1">
              <CardTitle className="text-gray-900 font-bold text-xl">
                Alto faturamento
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2 leading-relaxed">
                Vender mais não significa lucrar mais.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="w-full flex cursor-pointer"
        >
          <Card className="relative w-full py-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white rounded-2xl">
            <CardHeader className="flex-1">
              <CardTitle className="text-gray-900 font-bold text-xl">
                Margem reduzida
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2 leading-relaxed">
                Custos e decisões imprecisas comprometem a rentabilidade.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="w-full flex cursor-pointer"
        >
          <Card className="relative w-full py-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white rounded-2xl">
            <CardHeader className="flex-1">
              <CardTitle className="text-gray-900 font-bold text-xl">
                Crescimento sem controle
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2 leading-relaxed">
                Escalar sem estratégia aumenta riscos.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="w-full flex cursor-pointer"
        >
          <Card className="relative w-full py-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white rounded-2xl">
            <CardHeader className="flex-1">
              <CardTitle className="text-gray-900 font-bold text-xl">
                Operação otimizada
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2 leading-relaxed">
                Dados e processos transformam crescimento em lucro.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
