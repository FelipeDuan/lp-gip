import { CardSection } from "@/components/ui/card-section";
import type { Variant } from "@/lib/card-variants";

export function ClassificacaoCards() {
  const cards = [
    {
      title: "Estratégicos ",
      desc: "Projetos de caráter transformador, com alta contribuição para o desenvolvimento do Estado. Exigem uma avaliação prévia mais completa e extensiva.",
      variant: "beige" as Variant,
      className: "",
    },
    {
      title: "Complementares ",
      desc: "Empreendimentos de natureza tático-operacional e impacto localizado. A análise de viabilidade é simplificada, dependendo do volume de investimento.",
      variant: "primary" as Variant,
      className: "",
    },
    {
      title: "Parcerias e Concessões",
      desc: "Projetos que envolvem a iniciativa privada e seguem um fluxo normativo específico, já previsto em legislação própria.",
      variant: "white" as Variant,
      className: "",
    },
    {
      title: "Emergenciais ",
      desc: "Projetos urgentes devido a situações como calamidades públicas. Demandam celeridade e seguem um rito sumário, sem passar por todas as etapas da GIP.",
      variant: "yellow" as Variant,
      className: "",
    },
    {
      title: "Pactos e Convênios ",
      desc: "Projetos urgentes devido a situações como calamidades públicas. Demandam celeridade e seguem um rito sumário, sem passar por todas as etapas da GIP.",
      variant: "yellow" as Variant,
      className: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {cards.map((card, idx) => (
        <div key={`${idx}-${card.title}`} className={`${card.className}`}>
          <CardSection
            variant={card.variant}
            title={card.title}
            description={card.desc}
          />
        </div>
      ))}
    </div>
  );
}
