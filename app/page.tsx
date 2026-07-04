"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SideRays from "@/components/SideRays";
import {
  BarChart3,
  Briefcase,
  Database,
  Handshake,
  InspectionPanelIcon,
  LucideKanbanSquareDashed,
  Mail,
  MessageCircle,
  Phone,
  Quote,
  Rocket,
  ShoppingBag,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import Methodology from "@/components/Methodology";
import Differentiators from "@/components/Differentiators";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/Faq";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <PainPoints />

      <Solutions />

      <Methodology />

      <Differentiators />

      <Statistics />

      <Testimonials />

      <FAQ />

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
            <h4 className="mb-4 text-lg font-semibold text-gray-900">
              Contato
            </h4>

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
    </div>
  );
}
