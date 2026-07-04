"use client";

import { MessageCircle, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3"
      >
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight bg-linear-to-r api-gradient from-blue-700 to-indigo-800 bg-clip-text text-transparent">
            Valadares Assessoria
          </h3>

          <p className="mt-4 max-w-sm leading-relaxed text-gray-600 text-base">
            Nascemos para trazer clareza para operações de alta escala no
            marketplace, ajudando empresas a crescer com estratégia,
            previsibilidade e lucratividade.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-base font-bold text-gray-900 uppercase tracking-wider">
            Redes sociais
          </h4>

          <div className="space-y-3">
            <a
              href="#"
              className="group flex items-center gap-3 text-gray-600 transition-colors duration-200 hover:text-blue-700 font-medium"
            >
              <MessageCircle
                size={20}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-base font-bold text-gray-900 uppercase tracking-wider">
            Contato
          </h4>

          <div className="space-y-3">
            <a
              href="mailto:contato@empresa.com"
              className="group flex items-center gap-3 text-gray-600 transition-colors duration-200 hover:text-blue-700 font-medium"
            >
              <Mail
                size={20}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              contato@empresa.com
            </a>

            <a
              href="tel:+5500000000000"
              className="group flex items-center gap-3 text-gray-600 transition-colors duration-200 hover:text-blue-700 font-medium"
            >
              <Phone
                size={20}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              (00) 00000-0000
            </a>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Valadares Assessoria. Todos os direitos reservados.</p>
          <p className="font-medium">
            Desenvolvido com foco em estratégia e resultados.
          </p>
        </div>
      </div>
    </footer>
  );
}
