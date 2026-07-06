"use client";

import { motion, Variants } from "framer-motion";

const innerBgVariants: Variants = {
  default: {
    background: "rgba(0, 0, 0, 1)",
    transition: { duration: 0.3 },
  },
  hover: {
    background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const borderGradientVariants: Variants = {
  default: {
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0.5) 100%)",
  },
  hover: {
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 0.8) 0%, rgba(30, 58, 138, 1) 50%, rgba(255, 255, 255, 0.8) 100%)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const descriptionVariants: Variants = {
  default: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  hover: {
    opacity: 1,
    height: "auto",
    marginTop: 16,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function PainPoints() {
  const cards = [
    {
      title: "Inteligência Estratégica",
      description:
        "Aqui vai uma descrição detalhada sobre a Inteligência Estratégica e como ela impacta o negócio.",
    },
    {
      title: "Crescimento Sustentável",
      description:
        "Aqui vai uma descrição detalhada sobre as práticas de Crescimento Sustentável a longo prazo.",
    },
    {
      title: "Resultados Reais",
      description:
        "Aqui vai uma descrição detalhada focada nas métricas e Resultados Reais alcançados.",
    },
  ];

  return (
    <section className="px-8 pt-32 w-dvw bg-black flex flex-col gap-4 pb-2">
      {cards.map((card, index) => (
        <motion.article
          key={index}
          className="relative py-8 px-6 text-center cursor-pointer overflow-hidden rounded-[32px]"
          initial="default"
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 z-0 rounded-[32px]"
            variants={borderGradientVariants}
          />

          <motion.div
            className="absolute inset-[2px] z-10 rounded-[30px]"
            variants={innerBgVariants}
          />

          <div className="relative z-20 pointer-events-none">
            <h3 className="text-[62px] font-serif text-white">{card.title}</h3>
            <motion.p
              className="text-white/80 text-lg max-w-xl mx-auto"
              variants={descriptionVariants}
            >
              {card.description}
            </motion.p>
          </div>
        </motion.article>
      ))}
    </section>
  );
}
