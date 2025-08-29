import { Card, Text, Timeline } from "@mantine/core";

export function EtapasTimeline() {
  const etapas = [
    {
      title: "Ideação e Concepção",
      description:
        "Onde as grandes ideias nascem e as propostas de projeto são elaboradas e alinhadas às necessidades do Piauí.",
    },
    {
      title: "Avaliação Prévia",
      description:
        "Análise técnica e de viabilidade para garantir que apenas os projetos sólidos avancem, com base em sua complexidade e valor.",
    },
    {
      title: "Priorização e Seleção",
      description:
        "Os projetos viáveis são hierarquizados com base no impacto estratégico e nos riscos, para otimizar a alocação do orçamento do Estado.",
    },
    {
      title: "Execução do Investimento",
      description:
        "Implementação e monitoramento do projeto aprovado, com registro de informações para garantir a transparência e o aprendizado.",
    },
    {
      title: "Avaliação Ex Post",
      description:
        "Após a entrega, os resultados são comparados com o planejado, gerando lições que aprimoram todos os futuros investimentos.",
    },
  ];

  return (
    <Timeline active={2} bulletSize={28} lineWidth={2} color="primary">
      {etapas.map((etapa, idx) => (
        <Timeline.Item
          key={`${idx}-${etapa.title}`}
          bullet={idx + 1}
          lineVariant="dashed"
        >
          <Card
            bg={"var(--color-primary-50)"}
            shadow="xs"
            radius={12}
            px={20}
            py={20}
          >
            <Text c={"primary"} fw={700} fz={{ base: 18, lg: 20 }}>
              {etapa.title}
            </Text>

            <Text
              c={"var(--color-neutral-default)"}
              fw={500}
              fz={{ base: "sm", lg: "md" }}
            >
              {etapa.description}
            </Text>
          </Card>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
