"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    id: "item-1",
    question: "A consultoria serve para qualquer empresa?",
    answer:
      "Atendemos operações que desejam crescer de forma estruturada, independentemente do porte, desde que busquem melhorar processos, rentabilidade e gestão.",
  },
  {
    id: "item-2",
    question: "Vocês trabalham com quais marketplaces?",
    answer:
      "Trabalhamos com Mercado Livre, Shopee, Amazon e outras plataformas, adaptando a estratégia às necessidades de cada operação.",
  },
  {
    id: "item-3",
    question: "A auditoria possui custo?",
    answer:
      "O investimento será definido conforme a política comercial da empresa e o escopo da análise.",
  },
  {
    id: "item-4",
    question: "O atendimento é online?",
    answer:
      "Sim. Todo o atendimento pode ser realizado de forma online, permitindo acompanhar empresas de qualquer região.",
  },
];

export default function FAQ() {
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
          Perguntas{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
            frequentes.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-gray-500 leading-relaxed">
          Tire suas dúvidas sobre como funciona a nossa consultoria e processo
          estratégico.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="mx-auto mt-16 max-w-3xl"
      >
        <Accordion className="w-full space-y-4">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-gray-100 rounded-2xl px-6 shadow-sm transition-all duration-300 bg-white data-[state=open]:shadow-md data-[state=open]:border-gray-200/60"
            >
              <AccordionTrigger className="text-left font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors py-5 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-500 pb-5 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
