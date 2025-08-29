import { Stack, Text, Title } from "@mantine/core";
import { BagdeSection } from "@/components/ui/badge-section";

export function SobreContent() {
  // ToDo: verificar se há como refatorar esse conteúdo

  return (
    <Stack gap={10}>
      <BagdeSection>sobre</BagdeSection>
      <Title order={2} fw={700} lh={1.2} fz={{ base: 24, md: 32 }}>
        O que é o GIP?
      </Title>

      <Text
        c="var(--color-neutral-default)"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
        fw={500}
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
        fw={500}
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
