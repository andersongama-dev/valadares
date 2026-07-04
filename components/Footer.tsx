import { InspectionPanelIcon, LucideKanbanSquareDashed, Mail, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold text-blue-800">
            Valadares Assessoria
          </h3>

          <p className="mt-4 max-w-sm leading-7 text-gray-600">
            Nascemos para trazer clareza para operações de alta escala no
            marketplace, ajudando empresas a crescer com estratégia,
            previsibilidade e lucratividade.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-gray-900">
            Redes sociais
          </h4>

          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center gap-3 text-gray-600 transition hover:text-blue-800"
            >
              <InspectionPanelIcon size={20} />
              Instagram
            </a>

            <a
              href="#"
              className="flex items-center gap-3 text-gray-600 transition hover:text-blue-800"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

            <a
              href="#"
              className="flex items-center gap-3 text-gray-600 transition hover:text-blue-800"
            >
              <LucideKanbanSquareDashed size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-gray-900">Contato</h4>

          <div className="space-y-3">
            <a
              href="mailto:contato@empresa.com"
              className="flex items-center gap-3 text-gray-600 transition hover:text-blue-800"
            >
              <Mail size={20} />
              contato@empresa.com
            </a>

            <a
              href="tel:+5500000000000"
              className="flex items-center gap-3 text-gray-600 transition hover:text-blue-800"
            >
              <Phone size={20} />
              (00) 00000-0000
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Valadares Assessoria. Todos os direitos reservados.</p>

          <p>Desenvolvido com foco em estratégia e resultados.</p>
        </div>
      </div>
    </footer>
  );
}
