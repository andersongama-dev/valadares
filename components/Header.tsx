export default function Header() {
  return (
    <header
      className="
          fixed top-8 left-1/2 -translate-x-1/2
          w-full max-w-7xl
          flex justify-between items-center
          px-8 py-4
          rounded-2xl
          z-50
          backdrop-blur-2xl
          bg-blue-800
          shadow-2xl shadow-black/10
          "
    >
      <div className="flex gap-4">
        {/* <Image alt="Logo valadares" src={""} width={32} height={32} /> */}
        <p className="text-xl font-medium text-white">Valadares</p>
      </div>
      <nav>
        <ul className="flex gap-6 text-white">
          <li>
            <a href="#hero" className="hover:text-blue-300 transition-colors">
              Início
            </a>
          </li>
          <li>
            <a href="" className="hover:text-blue-300 transition-colors">
              Soluções
            </a>
          </li>
          <li>
            <a href="" className="hover:text-blue-300 transition-colors">
              Metodologia
            </a>
          </li>
          <li>
            <a href="" className="hover:text-blue-300 transition-colors">
              Resultados
            </a>
          </li>
          <li>
            <a href="" className="hover:text-blue-300 transition-colors">
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <button className="bg-white px-4 py-3 text-base rounded-xl text-blue-800 font-medium cursor-pointer hover:bg-blue-800 hover:text-white transition-colors">
        Solicitar Auditoria
      </button>
    </header>
  );
}
