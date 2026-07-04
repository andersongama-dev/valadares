import { Quote, Star } from "lucide-react";

export default function Testimonials() {
    return(
        <section className="mt-12">
        <div>
          <h2 className="text-5xl text-center font-bold tracking-[0.01em]">
            Depoimentos{" "}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16 mx-16">
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
    )
}