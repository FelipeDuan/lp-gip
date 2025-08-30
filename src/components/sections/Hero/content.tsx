import { Stack, Text, Title } from "@mantine/core";
import { HeroActionButtons } from "./action-buttons";

export function HeroContent() {
  return (
    <Stack align="center" gap="lg">
      <Stack align="center" gap="sm">
        <Title
          order={1}
          ta="center"
          fw={700}
          lh={1.2}
          fz={{ base: 32, md: 44, lg: 52, xl: 64 }}
        >
          Investimento Público
        </Title>

        <Title
          order={1}
          ta="center"
          fw={700}
          lh={1.2}
          fz={{ base: 32, md: 44, lg: 52, xl: 64 }}
        >
          que{" "}
          <Text span inherit c="primary">
            Transforma o Piauí
          </Text>
        </Title>
      </Stack>

      <Text
        ta="center"
        c="var(--color-neutral-default)"
        fz="md"
        lh={1.6}
        fw={500}
        maw={600}
      >
        O GIP é a metodologia que garante que cada investimento realizado pelo
        Estado gere desenvolvimento, qualidade de vida e mais oportunidades para
        a população.
      </Text>

      <HeroActionButtons />
    </Stack>
  );
}
