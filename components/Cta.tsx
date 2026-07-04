export default function CTA() {
  return (
    <section className="bg-blue-800 px-8 py-16 mt-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
          Auditoria Estratégica
        </span>

        <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white lg:text-5xl">
          Sua operação está crescendo.
          <br />
          Agora é hora de fazer seu lucro crescer junto.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Solicite uma auditoria estratégica e descubra onde sua operação pode
          ganhar eficiência, reduzir desperdícios e aumentar a lucratividade.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-800 transition hover:scale-105">
            Solicitar Auditoria Estratégica
          </button>

          <button className="rounded-xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10">
            Falar com um especialista
          </button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-blue-100">
          <span>✓ Atendimento online</span>
          <span>✓ Diagnóstico personalizado</span>
          <span>✓ Estratégia baseada em dados</span>
        </div>
      </div>
    </section>
  );
}
