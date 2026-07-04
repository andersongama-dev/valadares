import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isOpen ? "pt-0 px-0" : "pt-4 px-4 md:pt-8 md:px-0"}`}
    >
      <div
        className={`
        mx-auto max-w-7xl w-full flex justify-between items-center px-6 py-4 md:px-8 relative transition-all duration-300
        ${isOpen ? "bg-transparent rounded-none shadow-none md:bg-blue-800 md:rounded-2xl md:shadow-2xl md:shadow-black/10" : "bg-blue-800 rounded-2xl backdrop-blur-2xl shadow-2xl shadow-black/10"}
      `}
      >
        <div className="flex gap-4 relative z-50">
          {/* <Image alt="Logo valadares" src={""} width={32} height={32} /> */}
          <p className="text-xl font-bold tracking-wide text-white">
            Valadares
          </p>
        </div>

        <nav
          className={`
            fixed inset-0 z-40 h-screen w-screen
            flex flex-col items-center justify-start
            pt-32 pb-12
            bg-linear-to-b from-blue-900 to-blue-950
            transition-all duration-300 ease-in-out
            
            md:static md:h-auto md:w-auto md:flex md:flex-row md:items-center md:justify-between md:pt-0 md:pb-0 md:bg-none md:bg-transparent
            
            ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"}
          `}
        >
          <ul className="flex flex-col md:flex-row w-full md:w-auto px-8 md:px-0 gap-6 lg:gap-8 text-white text-center md:text-left text-2xl md:text-base font-medium">
            <li className="w-full border-b border-blue-800/60 md:border-none pb-4 md:pb-0">
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="block w-full hover:text-blue-300 transition-colors"
              >
                Início
              </a>
            </li>
            <li className="w-full border-b border-blue-800/60 md:border-none pb-4 md:pb-0">
              <a
                href="#solutions"
                onClick={() => setIsOpen(false)}
                className="block w-full hover:text-blue-300 transition-colors"
              >
                Soluções
              </a>
            </li>
            <li className="w-full border-b border-blue-800/60 md:border-none pb-4 md:pb-0">
              <a
                href="#methodology"
                onClick={() => setIsOpen(false)}
                className="block w-full hover:text-blue-300 transition-colors"
              >
                Metodologia
              </a>
            </li>
            <li className="w-full border-b border-blue-800/60 md:border-none pb-4 md:pb-0">
              <a
                href="#depoimentos"
                onClick={() => setIsOpen(false)}
                className="block w-full hover:text-blue-300 transition-colors"
              >
                Resultados
              </a>
            </li>
            <li className="w-full md:border-none pb-4 md:pb-0">
              <a
                href="#cta"
                onClick={() => setIsOpen(false)}
                className="block w-full hover:text-blue-300 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>

          <div className="md:hidden w-full px-8 mt-auto">
            <button className="w-full bg-white py-4 text-lg rounded-xl text-blue-900 font-bold cursor-pointer hover:bg-blue-100 transition-colors shadow-lg">
              Solicitar Auditoria
            </button>
          </div>
        </nav>

        <button className="hidden md:block bg-white px-5 py-2.5 text-sm lg:text-base rounded-xl text-blue-900 font-bold cursor-pointer hover:bg-blue-100 transition-colors">
          Solicitar Auditoria
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span
              className={`h-0.5 w-full bg-white rounded transition-transform duration-300 origin-left ${isOpen ? "rotate-45 translate-x-1" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white rounded transition-transform duration-300 origin-left ${isOpen ? "-rotate-45 translate-x-1" : ""}`}
            />
          </div>
        </button>
      </div>
    </header>
  );
}
