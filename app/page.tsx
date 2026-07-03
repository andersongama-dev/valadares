import Image from "next/image";
import { AetherHero } from "@/components/ui/aether-hero";

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
          z-[999999999999999]
          bg-gradient-to-b from-white/30 to-white/10
          backdrop-blur-2xl
          border border-white/30
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

      <section id="#hero">
        <AetherHero
          title="Faturamento é ego. Lucro é realidade"
          subtitle="Escalar uma operação vai muito além de vender mais, A Valadares
            Assessoria transforma dados em decisões estratégicas para aumnetar a
            eficiência, preservar margem e construir operações sustentáveis"
          ctaLabel="Solicitar Auditoria Estratégica"
          ctaHref="#docs"
          secondaryCtaLabel="Ver Metodologia"
          secondaryCtaHref="https://github.com/rahil1202"
          align="left"
          overlayGradient="linear-gradient(180deg, #0000FB 0%, #0000FF55 40%, transparent)"
        />
      </section>

      <section>
        <div>
          <p>O problema</p>
          <h2>Muitas empresas faturam bilhões, Poucas realmente lucram</h2>

          <p>
            À medida que a operação cresce, aumentam também os custos, a
            complexidade e a dependência dos algoritmos dos marketplaces. O
            faturamento sobe, mas a lucratividade nem sempre acompanha esse
            crescimento. Sem uma estratégia orientada por dados, cada decisão
            representa um risco para a margem da operação.
          </p>
        </div>

        <div>
          <article>
            <h5>Alto faturamento</h5>
          </article>

          <article>
            <h5>Margem reduzida</h5>
          </article>

          <article>
            <h5>Crescimento sem controle</h5>
          </article>

          <article>
            <h5>Operação otimizada</h5>
          </article>
        </div>
      </section>

      <section>
        <div>
          <p>O que fazemos</p>
          <h2>Transformamos dados em vantagem competitiva</h2>
          <p>
            Nossa atuação combina inteligência de mercado, análise operacional e
            otimização estratégica para tornar sua operação mais eficiente,
            previsível e lucrativa.
          </p>
        </div>

        <div>
          <article>
            <h5>Inteligência de Dados</h5>
            <p>
              Analisamos indicadores para identificar gargalos e oportunidades
              de crescimento.
            </p>
          </article>
          <article>
            <h5>Estratégia Comercial</h5>
            <p>
              Estruturamos processos para aumentar rentabilidade sem depender
              apenas de volume.
            </p>
          </article>
          <article>
            <h5>Otimização de Marketplace</h5>
            <p>Melhoramos posicionamento, anúncios e eficiência operacional.</p>
          </article>
          <article>
            <h5>Crescimento Sustentável</h5>
            <p>
              Escalamos sua operação mantendo controle financeiro e
              previsibilidade.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div>
          <p>Nossa metodologia</p>
          <h2>Uma metodologia baseada em dados, não em achismos</h2>
        </div>

        {/* Transofrme isso em uma timeline */}
        <div>
          01 Diagnóstico Estratégico Análise completa da operação. ↓ 02
          Mapeamento de Oportunidades Identificação dos principais gargalos. ↓
          03 Plano de Ação Estratégia personalizada. ↓ 04 Acompanhamento
          Monitoramento contínuo dos resultados.
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
