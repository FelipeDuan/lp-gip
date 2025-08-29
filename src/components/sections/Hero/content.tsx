import { Group, Text, Title } from "@mantine/core";
import { HeroActionButtons } from "./action-buttons";

export function HeroContent() {
  return (
    <Group justify="center" gap={32}>
      <Group justify="center" gap={16}>
        {/* Títulos */}
        <Title
          order={1}
          ta="center"
          fw={700}
          lh={1.2}
          fz={{ base: 32, md: 44, lg: 52 }}
        >
          Investimento Público
        </Title>

        <Title
          order={1}
          ta="center"
          fw={700}
          lh={1.2}
          fz={{ base: 32, md: 44, lg: 52 }}
        >
          que{" "}
          <Text component="span" inherit c={"primary"}>
            Transforma o Piauí
          </Text>
        </Title>
      </Group>

      {/* Parágrafo */}
      <Text
        ta="center"
        c="var(--color-neutral-default)"
        fz={{ base: "md", md: "md " }}
        lh={1.6}
        mx="auto"
        style={{ maxWidth: 600 }}
      >
        O GIP é a metodologia que garante que cada investimento realizado pelo
        Estado gere desenvolvimento, qualidade de vida e mais oportunidades para
        a população.
      </Text>

      <HeroActionButtons />
    </Group>
  );
}
