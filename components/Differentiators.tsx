import { BarChart3, Handshake, Rocket, Target, TrendingUp, Zap } from "lucide-react";

export default function Differentiators() {
  return (
    <section className="mt-12">
      <div>
        <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
          Por que empresas escolhem{" "}
          <span className="block text-blue-800/50">a Valadares?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-16 mt-16">
        <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-800 text-white">
            <Target size={28} />
          </div>

          <h3 className="mb-2 text-xl font-semibold">
            Decisões baseadas em dados
          </h3>

          <p className="text-gray-500">
            Utilizamos indicadores e métricas para orientar decisões mais
            assertivas.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-800 text-white">
            <BarChart3 size={28} />
          </div>

          <h3 className="mb-2 text-xl font-semibold">
            Inteligência estratégica
          </h3>

          <p className="text-gray-500">
            Planejamento focado em resultados consistentes e crescimento
            sustentável.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-800 text-white">
            <TrendingUp size={28} />
          </div>

          <h3 className="mb-2 text-xl font-semibold">Foco em lucratividade</h3>

          <p className="text-gray-500">
            Priorizamos estratégias que aumentam margem e rentabilidade do
            negócio.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-800 text-white">
            <Zap size={28} />
          </div>

          <h3 className="mb-2 text-xl font-semibold">Execução personalizada</h3>

          <p className="text-gray-500">
            Soluções adaptadas às necessidades e objetivos da sua empresa.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-800 text-white">
            <Handshake size={28} />
          </div>

          <h3 className="mb-2 text-xl font-semibold">Atendimento próximo</h3>

          <p className="text-gray-500">
            Acompanhamento contínuo com suporte estratégico durante toda a
            jornada.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-800 text-white">
            <Rocket size={28} />
          </div>

          <h3 className="mb-2 text-xl font-semibold">
            Crescimento sustentável
          </h3>

          <p className="text-gray-500">
            Escalamos a operação mantendo previsibilidade e controle financeiro.
          </p>
        </article>
      </div>
    </section>
  );
}
