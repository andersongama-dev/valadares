import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function PainPoints() {
  return (
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
  );
}
