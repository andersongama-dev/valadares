"use client";

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

export default function PainPoints() {
  return (
    <section className="mt-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
          Muitas empresas faturam bilhões,{" "}
          <span className="block text-blue-800/50">
            Poucas realmente lucram
          </span>
        </h2>

        <p className="text-gray-500 max-w-5xl text-center mx-auto my-6 leading-6 tracking-[0.02em]">
          À medida que a operação cresce, aumentam também os custos, a
          complexidade e a dependência dos algoritmos dos marketplaces. O
          faturamento sobe, mas a lucratividade nem sempre acompanha esse
          crescimento. Sem uma estratégia orientada por dados, cada decisão
          representa um risco para a margem da operação.
        </p>
      </motion.div>

      {/* Grid responsivo e com items-stretch garante que as colunas tenham o mesmo tamanho */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 md:mx-12 mt-16 items-stretch"
      >
        <motion.div variants={itemVariants} className="w-full flex">
          <Card className="relative mx-auto w-full max-w-sm py-4 shadow-sm transition hover:shadow-lg hover:-translate-y-2 duration-300 h-full flex flex-col">
            <CardHeader className="flex-1">
              <CardTitle>Alto faturamento</CardTitle>
              <CardDescription>
                Vender mais nem sempre significa gerar mais resultado. Muitas
                operações alcançam grandes números de vendas, mas continuam com
                baixa rentabilidade.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full flex">
          <Card className="relative mx-auto w-full max-w-sm py-4 shadow-sm transition hover:shadow-lg hover:-translate-y-2 duration-300 h-full flex flex-col">
            <CardHeader className="flex-1">
              <CardTitle>Margem reduzida</CardTitle>
              <CardDescription>
                Custos operacionais, campanhas pouco eficientes e decisões sem
                base em dados corroem a margem e comprometem o lucro da
                operação.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full flex">
          <Card className="relative mx-auto w-full max-w-sm py-4 shadow-sm transition hover:shadow-lg hover:-translate-y-2 duration-300 h-full flex flex-col">
            <CardHeader className="flex-1">
              <CardTitle>Crescimento sem controle</CardTitle>
              <CardDescription>
                O aumento da demanda traz mais complexidade. Sem processos e
                indicadores bem definidos, escalar passa a representar mais
                risco do que oportunidade.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full flex">
          <Card className="relative mx-auto w-full max-w-sm py-4 shadow-sm transition hover:shadow-lg hover:-translate-y-2 duration-300 h-full flex flex-col">
            <CardHeader className="flex-1">
              <CardTitle>Operação otimizada</CardTitle>
              <CardDescription>
                Com inteligência de dados, estratégia e processos estruturados,
                sua operação cresce de forma previsível, preservando margem e
                aumentando a lucratividade.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
