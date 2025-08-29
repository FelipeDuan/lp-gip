import { Badge, Stack, Text, Title } from "@mantine/core";

export function SobreContent() {
  // ToDo: verificar se há como refatorar esse conteúdo

  return (
    <Stack gap={10}>
      <Badge
        variant="light"
        color="yellow"
        radius="sm"
        size="lg"
        tt="lowercase"
        fw={600}
      >
        sobre
      </Badge>

      <Title order={2} fw={800} lh={1.2} fz={{ base: 24, md: 32 }}>
        O que é o GIP?
      </Title>

      <Text
        c="var(--color-neutral-default)"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
      >
        <Text span fw={700}>
          A Gestão do Investimento Público (GIP)
        </Text>{" "}
        é um modelo inovador adotado pelo Governo do Piauí para{" "}
        <Text span fw={700}>
          aumentar a eficiência, a transparência e a efetividade
        </Text>{" "}
        dos investimentos estaduais.
      </Text>

      <Text
        c="var(--color-neutral-default)"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
      >
        Com base nas melhores práticas nacionais e internacionais, o GIP
        organiza os projetos em um{" "}
        <Text span fw={700}>
          ciclo de 5 etapas
        </Text>
        , assegurando que os recursos públicos sejam aplicados de forma{" "}
        <Text span fw={700}>
          estratégica e sustentável
        </Text>
        .
      </Text>
    </Stack>
  );
}
