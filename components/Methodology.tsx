export default function Methodology() {
  return (
    <section className="mt-32">
      <div>
        <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
          Uma metodologia baseada em dados,{" "}
          <span className="block text-blue-800/50">não em achismos</span>
        </h2>
      </div>

      <div className="flex items-center justify-between mx-32 mt-16">
        <div className="flex flex-col items-center text-center max-w-52">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-800 text-2xl font-bold text-white shadow-lg">
            01
          </div>

          <h3 className="mt-6 text-xl font-semibold">
            Diagnóstico Estratégico
          </h3>

          <p className="mt-2 text-gray-500">Análise completa da operação.</p>
        </div>

        <div className="h-1 flex-1 mx-6 rounded-full bg-blue-800"></div>

        <div className="flex flex-col items-center text-center max-w-52">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-800 text-2xl font-bold text-white shadow-lg">
            02
          </div>

          <h3 className="mt-6 text-xl font-semibold">
            Mapeamento de Oportunidades
          </h3>

          <p className="mt-2 text-gray-500">
            Identificação dos principais gargalos.
          </p>
        </div>

        <div className="h-1 flex-1 mx-6 rounded-full bg-blue-800"></div>

        <div className="flex flex-col items-center text-center max-w-52">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-800 text-2xl font-bold text-white shadow-lg">
            03
          </div>

          <h3 className="mt-6 text-xl font-semibold">Plano de Ação</h3>

          <p className="mt-2 text-gray-500">Estratégia personalizada.</p>
        </div>

        <div className="h-1 flex-1 mx-6 rounded-full bg-blue-800"></div>

        <div className="flex flex-col items-center text-center max-w-52">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-800 text-2xl font-bold text-white shadow-lg">
            04
          </div>

          <h3 className="mt-6 text-xl font-semibold">Acompanhamento</h3>

          <p className="mt-2 text-gray-500">
            Monitoramento contínuo dos resultados.
          </p>
        </div>
      </div>
    </section>
  );
}
