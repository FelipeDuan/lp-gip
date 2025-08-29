import { Text, Title } from "@mantine/core";

export function HeroTitle() {
  return (
    <>
      <Title order={1} ta="center" fw={700} lh={1.2} fz={{ base: 32, md: 44 }}>
        Investimento
        <br />
        Público
      </Title>

      <Title order={1} ta="center" fw={700} lh={1.2} fz={{ base: 32, md: 44 }}>
        que{" "}
        <Text component="span" inherit c={"primary"}>
          Transforma o Piauí
        </Text>
      </Title>

      {/* Parágrafo */}
      <Text
        ta="center"
        c="dimmed"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
        mx="auto"
        style={{ maxWidth: 600 }}
      >
        O GIP é a metodologia que garante que cada investimento realizado pelo
        Estado gere desenvolvimento, qualidade de vida e mais oportunidades para
        a população.
      </Text>
    </>
  );
}
