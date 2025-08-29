import { Text } from "@mantine/core";
import { BagdeSection } from "@/components/ui/badge-section";

export function ClassificacaoContent() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <BagdeSection>classificação</BagdeSection>

      <Text fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
        Nem todo projeto é igual
      </Text>

      <Text
        c="var(--color-neutral-default)"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
        fw={500}
      >
        A GIP adapta a profundidade da análise conforme a natureza e o impacto
        de cada projeto.
      </Text>
    </div>
  );
}
