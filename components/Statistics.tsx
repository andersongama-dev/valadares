"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";

function AnimatedNumber({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString("pt-BR");
      }
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

export default function Statistics() {
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
          Os números contam{" "}
          <span className="bg-linear-to-r api-gradient from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
            a nossa história.
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl px-6 py-12 md:px-8 mt-16 shadow-2xl shadow-blue-900/10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              +<AnimatedNumber value={25} />%
            </h3>
            <p className="mt-3 text-base text-blue-100 font-medium">
              Aumento de margem
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              +<AnimatedNumber value={150} />
            </h3>
            <p className="mt-3 text-base text-blue-100 font-medium">
              Operações atendidas
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              +<AnimatedNumber value={45} /> Mi
            </h3>
            <p className="mt-3 text-base text-blue-100 font-medium">
              Em faturamento analisado
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <AnimatedNumber value={35} />%
            </h3>
            <p className="mt-3 text-base text-blue-100 font-medium">
              Redução de desperdícios
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
