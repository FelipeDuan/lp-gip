import { CardSection } from "@/components/ui/card-section";

export function GovernanciaCards() {
  const cards = [
    {
      title: "Grupo Técnico de Investimento (GTI)",
      description:
        "Estuda a viabilidade orçamentária, avaliando a sustentabilidade financeira dos projetos.",
    },
    {
      title: "Grupo Técnico de Gestão Fiscal (GTF)",
      description:
        "Estuda a viabilidade orçamentária, avaliando a sustentabilidade financeira dos projetos.",
    },
    {
      title: "Órgão de Governança (CGRF)",
      description:
        "Delibera e decide, avaliando os pareceres técnicos e fiscais para aprovação final junto ao Governador.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, idx) => (
        <CardSection
          key={`${idx}-${card.title}`}
          title={card.title}
          description={card.description}
          variant="surface"
        />
      ))}
    </div>
  );
}
