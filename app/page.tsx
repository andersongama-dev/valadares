import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <p>Valadares</p>

        <nav>
          <ul>
            <li>
              <a href="#hero">Início</a>
            </li>
            <li>
              <a href="">Soluções</a>
            </li>
            <li>
              <a href="">Metodologia</a>
            </li>
            <li>
              <a href="">Resultados</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>

        <button>Solicitar Auditoria</button>
      </header>

      <section id="hero">
        <div>
          <p>Estratégia para operações de marketplace</p>
          <h1>Faturamento é ego. Lucro é realidade</h1>
          <p>
            Escalar uma operação vai muito além de vender mais, A Valadares
            Assessoria transforma dados em decisões estratégicas para aumnetar a
            eficiência, preservar margem e construir operações sustentáveis
          </p>

          <article>
            <button>Solicitar Auditoria Estratégica</button>
            <button>Ver Metodologia</button>
          </article>
        </div>
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
    </div>
  );
}
