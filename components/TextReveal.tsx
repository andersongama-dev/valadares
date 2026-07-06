import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TextReveal() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 70%", "end 50%"],
  });

  const text =
    "Transformamos operações de marketplace em negócios mais eficientes, previsíveis e preparados para crescer com inteligência.";
  const words = text.split(" ");

  return (
    <div ref={container} className="w-full flex justify-center">
      <p className="text-[62px] max-w-7xl text-center leading-tight">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;

          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0.15, 1],
          );

          return (
            <motion.span
              key={i}
              style={{ opacity }}
              className="text-white inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
}
