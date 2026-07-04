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

export default function Testimonials() {
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
          Depoimentos de quem{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
            confia no método.
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 items-stretch"
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full flex"
          >
            <Card className="relative mx-auto w-full py-6 shadow-sm transition hover:shadow-lg hover:-translate-y-2 duration-300 h-full flex flex-col justify-between">
              <CardHeader className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <Quote
                    className="mb-4 text-blue-600/20"
                    size={36}
                    fill="currentColor"
                  />

                  <CardTitle className="text-lg font-semibold text-gray-900 leading-snug tracking-tight mb-4">
                    "{item.quote}"
                  </CardTitle>
                </div>

                <div className="mt-auto">
                  <div className="flex gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
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
