"use client";

import { motion, Variants } from "framer-motion";
import SideRays from "./SideRays";
import Image from "next/image";
import { div } from "framer-motion/client";
import TextReveal from "./TextReveal";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="bg-black">
      <section
        id="hero"
        className="relative min-h-dvh flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-dvw pointer-events-none px-8">
          <Image
            src={"bg-gradient.svg"}
            alt=""
            width={10}
            height={1920}
            className="w-full h-dvh"
          ></Image>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif text-white text-[88px] text-center"
          >
            Estratégia <span className="font-geist-sans">para quem quer</span>{" "}
            dominar o marketplace.
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="#methodology"
              className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur-xs px-6 py-4 font-semibold text-white text-center transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 active:scale-95"
            >
              Ver Metodologia
            </a>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-16 max-w-3xl text-center text-base sm:text-lg md:text-xl leading-relaxed text-gray-500 font-normal"
          >
            Especialistas em operações de marketplace
          </motion.p>

          <motion.div className="flex gap-16 items-end h-32" variants={itemVariants}>
            <Image
              alt=""
              src={"amazonlogo.svg"}
              width={50}
              height={48}
              className=""
            ></Image>
            <Image
              alt=""
              src={"mercadolivre.svg"}
              width={100}
              height={100}
              className=""
            ></Image>
            <Image
              alt=""
              src={"shopeelogo.svg"}
              width={100}
              height={100}
              className=""
            ></Image>
          </motion.div>
        </motion.div>
      </section>
      <section className="mt-55 flex justify-center">
        <TextReveal></TextReveal>
      </section>
    </div>
  );
}
