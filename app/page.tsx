"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SideRays from "@/components/SideRays";
import { Briefcase, Database, ShoppingBag, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div>
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

      <section
        id="hero"
        className="relative h-dvh flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-dvw">
          <SideRays
            speed={2.5}
            rayColor1="#EAB308"
            rayColor2="#96c8ff"
            intensity={2}
            spread={2}
            origin="top-right"
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
          <h1 className="text-6xl font-bold tracking-[0.01em] text-center">
            Faturamento impressiona.
            <span className="block text-blue-800/50">
              Lucro sustenta o crescimento.
            </span>
          </h1>

          <p className="mt-6 max-w-4xl text-center text-xl leading-8 text-gray-500">
            Empresas crescem quando vendem mais. Líderes de mercado crescem
            quando transformam dados em decisões. A Valadares Assessoria ajuda
            operações de marketplace a escalar com inteligência, preservando
            margem e aumentando a rentabilidade.
          </p>

          <div className="mt-8 flex gap-6">
            <a
              href="#"
              className="rounded-xl bg-blue-800 px-5 py-3 font-medium text-white"
            >
              Solicitar Auditoria Estratégica
            </a>

            <a
              href="#"
              className="rounded-xl border border-blue-800 px-5 py-3 font-medium text-blue-800"
            >
              Ver Metodologia
            </a>
          </div>
        </div>
      </section>

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

          <div className="h-1 flex-1 mx-6 rounded-full bg-blue-700"></div>

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

          <div className="h-1 flex-1 mx-6 rounded-full bg-blue-700"></div>

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

      <section>
        <div>
          <p>Diferenciais</p>
          <h2>Por que empresas escolhem a Valadares?</h2>
        </div>

        {/* Transofrme isso em um card */}
        <div>
          Cards 🎯 Decisões baseadas em dados 📊 Inteligência estratégica 📈
          Foco em lucratividade ⚡ Execução personalizada 🤝 Atendimento próximo
          🚀 Crescimento sustentável
        </div>
      </section>

      <section>
        <div>
          <p>Resultados</p>
          <h2>Os números contam a história.</h2>
        </div>

        <div>
          Coloque placeholders até receber dados reais. +XX% Aumento de margem
          +XXX Operações atendidas +X Mi Em faturamento analisado XX% Redução de
          desperdícios
        </div>
      </section>

      <section>
        <div>
          <h2>Depoimentos</h2>
        </div>

        <div>
          <article>
            <h5>
              Depois da consultoria conseguimos escalar mantendo nossa margem.
            </h5>
            <p>Pedro</p>
            <p>Js Revisões</p>
            <p>⭐⭐⭐⭐⭐</p>
          </article>
        </div>
      </section>

      <section>
        <div>
          <h2>FAQ</h2>
        </div>

        <div>
          A consultoria serve para qualquer empresa? Atendemos operações que
          desejam crescer de forma estruturada. Vocês trabalham com quais
          marketplaces? Mercado Livre, Shopee, Amazon e outras plataformas. A
          auditoria possui custo? Será definido conforme a política da empresa.
          O atendimento é online? Sim.
        </div>
      </section>

      <section>
        <div>
          <h2>Sua operação está crescendo.</h2>
          <p>Agora é hora de fazer seu lucro crescer junto.</p>

          <p>
            Solicite uma auditoria estratégica e descubra onde sua operação pode
            ganhar eficiência.
          </p>

          <button>Solicitar Auditoria Estratégica</button>
        </div>
      </section>

      <footer>
        Logo Valadares Assessoria "Nascemos para trazer clareza para operações
        de alta escala no marketplace." Links Instagram WhatsApp LinkedIn
        Contato E-mail Telefone Direitos reservados.
      </footer>
    </div>
  );
}
