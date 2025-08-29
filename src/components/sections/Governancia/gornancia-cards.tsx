import { Card, Text } from "@mantine/core";

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
    <>
      {cards.map((card, idx) => (
        <Card
          key={`${idx}-${card.title}`}
          bg={"var(--color-surface)"}
          shadow="xs"
          radius={12}
          px={20}
          py={20}
        >
          <Text c={"white"} fw={700} fz={{ base: 16, lg: 18 }}>
            {card.title}
          </Text>

          <Text c={"white"} fw={500} fz={{ base: "sm", lg: "md" }}>
            {card.description}
          </Text>
        </Card>
      ))}
    </>
  );
}
