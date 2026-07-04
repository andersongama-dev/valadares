import { Briefcase, Database, ShoppingBag, TrendingUp } from "lucide-react";

export default function Solutions() {
  return (
    <section className="mt-32">
      <div>
        <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
          Transformamos dados em{" "}
          <span className="block text-blue-800/50">vantagem competitiva</span>
        </h2>

        <p className="text-gray-500 max-w-5xl text-center mx-auto my-6 leading-6 tracking-[0.02em]">
          Nossa atuação combina inteligência de mercado, análise operacional e
          otimização estratégica para tornar sua operação mais eficiente,
          previsível e lucrativa.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mx-12 mt-16">
        <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-lg">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800 text-white">
            <Database size={24} />
          </div>

          <h5 className="mb-3 text-xl font-semibold">Inteligência de Dados</h5>

          <p className="text-gray-500">
            Analisamos indicadores para identificar gargalos e oportunidades de
            crescimento.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-lg">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800 text-white">
            <Briefcase size={24} />
          </div>

          <h5 className="mb-3 text-xl font-semibold">Estratégia Comercial</h5>

          <p className="text-gray-500">
            Estruturamos processos para aumentar rentabilidade sem depender
            apenas de volume.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-lg">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800 text-white">
            <ShoppingBag size={24} />
          </div>

          <h5 className="mb-3 text-xl font-semibold">
            Otimização de Marketplace
          </h5>

          <p className="text-gray-500">
            Melhoramos posicionamento, anúncios e eficiência operacional.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-lg">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800 text-white">
            <TrendingUp size={24} />
          </div>

          <h5 className="mb-3 text-xl font-semibold">
            Crescimento Sustentável
          </h5>

          <p className="text-gray-500">
            Escalamos sua operação mantendo controle financeiro e
            previsibilidade.
          </p>
        </article>
      </div>
    </section>
  );
}
