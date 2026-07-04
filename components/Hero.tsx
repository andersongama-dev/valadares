import SideRays from "./SideRays";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-dvh flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 w-dvw">
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h1 className="text-6xl font-bold tracking-[0.01em] text-center">
          Faturamento impressiona.
          <span className="block text-blue-800/50">
            Lucro sustenta o crescimento.
          </span>
        </h1>

        <p className="mt-6 max-w-4xl text-center text-xl leading-8 text-gray-500">
          Empresas crescem quando vendem mais. Líderes de mercado crescem quando
          transformam dados em decisões. A Valadares Assessoria ajuda operações
          de marketplace a escalar com inteligência, preservando margem e
          aumentando a rentabilidade.
        </p>

        <div className="mt-8 flex gap-6">
          <a
            href="#"
            className="rounded-xl bg-blue-800 px-5 py-3 font-medium text-white"
          >
            Solicitar Auditoria Estratégica
          </a>

          <a
            href="#"
            className="rounded-xl border border-blue-800 px-5 py-3 font-medium text-blue-800"
          >
            Ver Metodologia
          </a>
        </div>
      </div>
    </section>
  );
}
