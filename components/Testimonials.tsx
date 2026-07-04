"use client";

import { Quote, Star } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion, Variants } from "framer-motion";

const testimonials = [
  {
    quote:
      "A organização dos processos reduziu desperdícios e aumentou nossa lucratividade.",
    name: "Lucas Almeida",
    company: "Grupo LA",
  },
  {
    quote:
      "O acompanhamento constante fez toda a diferença para manter o crescimento sustentável.",
    name: "Fernanda Souza",
    company: "FS Commerce",
  },
  {
    quote:
      "Hoje temos muito mais controle financeiro e clareza sobre onde investir.",
    name: "Rafael Martins",
    company: "RM Distribuidora",
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

export default function Testimonials() {
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
          Depoimentos de quem{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
            confia no método.
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="w-full flex cursor-pointer"
          >
            <Card className="relative w-full py-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white rounded-2xl">
              <CardHeader className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <Quote
                    className="mb-4 text-blue-600/15"
                    size={36}
                    fill="currentColor"
                  />
                  <CardTitle className="text-lg font-medium text-gray-900 leading-relaxed tracking-tight mb-6 italic">
                    "{item.quote}"
                  </CardTitle>
                </div>

                <div className="mt-auto">
                  <div className="flex gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <CardDescription className="font-bold text-gray-900 text-base block">
                    {item.name}
                  </CardDescription>
                  <span className="text-sm text-gray-500">{item.company}</span>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
