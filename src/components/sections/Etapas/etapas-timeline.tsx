import { Timeline } from "@mantine/core";
import { CardSection } from "@/components/ui/card-section";

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
    <Timeline
      active={etapas.length}
      bulletSize={28}
      lineWidth={2}
      color="primary"
    >
      {etapas.map((etapa, idx) => (
        <Timeline.Item
          key={`${idx}-${etapa.title}`}
          bullet={idx + 1}
          lineVariant="dashed"
        >
          <CardSection
            variant="light"
            title={etapa.title}
            description={etapa.description}
          />
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
