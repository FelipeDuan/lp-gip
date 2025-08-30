import { Text } from "@mantine/core";
import { BagdeSection } from "@/components/ui/badge-section";

export function FerramentasContent() {
  return (
    <div className="flex flex-col justify-center items-start gap-4">
      <BagdeSection>ferramentas e recursos</BagdeSection>

      <Text fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
        Pronto para começar?
      </Text>

      <Text
        c="var(--color-foreground)"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
        fw={500}
      >
        Acesse os recursos, aprofunde seu conhecimento e comece a aplicar a
        metodologia GIP hoje mesmo.
      </Text>
    </div>
  );
}
