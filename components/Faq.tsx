import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
  return (
    <section className="mt-12">
      <div>
        <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
          FAQ{" "}
        </h2>
      </div>

      <div className="w-7xl mx-auto mt-16">
        <Accordion className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              A consultoria serve para qualquer empresa?
            </AccordionTrigger>
            <AccordionContent>
              Atendemos operações que desejam crescer de forma estruturada,
              independentemente do porte, desde que busquem melhorar processos,
              rentabilidade e gestão.
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
  );
}
