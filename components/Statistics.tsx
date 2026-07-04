"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
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
    <section className="mt-12">
      <div>
        <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
          Os números contam{" "}
          <span className="block text-blue-800/50">a história.</span>
        </h2>
      </div>

      <div className="bg-blue-800 px-8 py-12 mt-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">
              +<AnimatedNumber value={25} />%
            </h3>
            <p className="mt-3 text-blue-100">Aumento de margem</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">
              +<AnimatedNumber value={150} />
            </h3>
            <p className="mt-3 text-blue-100">Operações atendidas</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">
              +<AnimatedNumber value={45} /> Mi
            </h3>
            <p className="mt-3 text-blue-100">Em faturamento analisado</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">
              <AnimatedNumber value={35} />%
            </h3>
            <p className="mt-3 text-blue-100">Redução de desperdícios</p>
          </div>
        </div>
      </div>
    </section>
  );
}
