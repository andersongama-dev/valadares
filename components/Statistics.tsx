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
            <h3 className="text-5xl font-bold text-white">+XX%</h3>
            <p className="mt-3 text-blue-100">Aumento de margem</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">+XXX</h3>
            <p className="mt-3 text-blue-100">Operações atendidas</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">+X Mi</h3>
            <p className="mt-3 text-blue-100">Em faturamento analisado</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">XX%</h3>
            <p className="mt-3 text-blue-100">Redução de desperdícios</p>
          </div>
        </div>
      </div>
    </section>
  );
}
