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

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <section className="mt-32">
        <div>
          <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
            Muitas empresas faturam bilhões,{" "}
            <span className="block text-blue-800/50">
              Poucas realmente lucram
            </span>
          </h2>

          <p className="text-gray-500 max-w-5xl text-center mx-auto my-6 leading-6 tracking-[0.02em]">
            À medida que a operação cresce, aumentam também os custos, a
            complexidade e a dependência dos algoritmos dos marketplaces. O
            faturamento sobe, mas a lucratividade nem sempre acompanha esse
            crescimento. Sem uma estratégia orientada por dados, cada decisão
            representa um risco para a margem da operação.
          </p>
        </div>

        <div className="text-white grid grid-cols-4 mx-12 mt-16">
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardTitle>Alto faturamento</CardTitle>
              <CardDescription>
                A practical talk on component APIs, accessibility, and shipping
                faster.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardTitle>Margem reduzida</CardTitle>
              <CardDescription>
                A practical talk on component APIs, accessibility, and shipping
                faster.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardTitle>Crescimento sem controle</CardTitle>
              <CardDescription>
                A practical talk on component APIs, accessibility, and shipping
                faster.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardTitle>Operação otimizada</CardTitle>
              <CardDescription>
                A practical talk on component APIs, accessibility, and shipping
                faster.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
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

            <h5 className="mb-3 text-xl font-semibold">
              Inteligência de Dados
            </h5>

            <p className="text-gray-500">
              Analisamos indicadores para identificar gargalos e oportunidades
              de crescimento.
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
      <section className="mt-32">
        <div>
          <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
            Uma metodologia baseada em dados,{" "}
            <span className="block text-blue-800/50">não em achismos</span>
          </h2>
        </div>

        <div className="flex items-center justify-between mx-32 mt-12">
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
      <section className="mt-12">
        <div>
          <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
            Por que empresas escolhem{" "}
            <span className="block text-blue-800/50">a Valadares?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-16 mt-12">
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

            <h3 className="mb-2 text-xl font-semibold">
              Foco em lucratividade
            </h3>

            <p className="text-gray-500">
              Priorizamos estratégias que aumentam margem e rentabilidade do
              negócio.
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-800 text-white">
              <Zap size={28} />
            </div>

            <h3 className="mb-2 text-xl font-semibold">
              Execução personalizada
            </h3>

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
              Escalamos a operação mantendo previsibilidade e controle
              financeiro.
            </p>
          </article>
        </div>
      </section>
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
      <section className="mt-12">
        <div>
          <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
            Depoimentos{" "}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 mx-16">
          <article className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <Quote className="mb-4 text-blue-800" size={32} />

            <h5 className="text-lg font-semibold">
              A organização dos processos reduziu desperdícios e aumentou nossa
              lucratividade.
            </h5>

            <div className="mt-6 flex gap-1 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            <p className="mt-4 font-semibold">Lucas Almeida</p>
            <p className="text-gray-500">Grupo LA</p>
          </article>

          <article className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <Quote className="mb-4 text-blue-800" size={32} />

            <h5 className="text-lg font-semibold">
              O acompanhamento constante fez toda a diferença para manter o
              crescimento sustentável.
            </h5>

            <div className="mt-6 flex gap-1 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            <p className="mt-4 font-semibold">Fernanda Souza</p>
            <p className="text-gray-500">FS Commerce</p>
          </article>

          <article className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <Quote className="mb-4 text-blue-800" size={32} />

            <h5 className="text-lg font-semibold">
              Hoje temos muito mais controle financeiro e clareza sobre onde
              investir.
            </h5>

            <div className="mt-6 flex gap-1 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            <p className="mt-4 font-semibold">Rafael Martins</p>
            <p className="text-gray-500">RM Distribuidora</p>
          </article>
        </div>
      </section>
      <section className="mt-12">
        <div>
          <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
            FAQ{" "}
          </h2>
        </div>

        <div className="w-7xl mx-auto mt-12">
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                A consultoria serve para qualquer empresa?
              </AccordionTrigger>
              <AccordionContent>
                Atendemos operações que desejam crescer de forma estruturada,
                independentemente do porte, desde que busquem melhorar
                processos, rentabilidade e gestão.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Vocês trabalham com quais marketplaces?
              </AccordionTrigger>
              <AccordionContent>
                Trabalhamos com Mercado Livre, Shopee, Amazon e outras
                plataformas, adaptando a estratégia às necessidades de cada
                operação.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>A auditoria possui custo?</AccordionTrigger>
              <AccordionContent>
                O investimento será definido conforme a política comercial da
                empresa e o escopo da análise.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>O atendimento é online?</AccordionTrigger>
              <AccordionContent>
                Sim. Todo o atendimento pode ser realizado de forma online,
                permitindo acompanhar empresas de qualquer região.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
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
