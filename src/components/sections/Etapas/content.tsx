import { Text } from "@mantine/core";
import { BagdeSection } from "@/components/ui/badge-section";

export function EtapasContent() {
  return (
    <>
      <BagdeSection>as 5 etapas</BagdeSection>

      <div className="flex flex-col justify-center items-start">
        <Text fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
          O Caminho para o
        </Text>
        <Text c={"primary"} fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
          Investimento de Impacto
        </Text>
      </div>

      <Text
        c="var(--color-neutral-default)"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
        fw={500}
      >
        O modelo GIP organiza o ciclo de vida dos projetos em 5 etapas
        estratégicas, baseadas nas melhores práticas nacionais e internacionais.
      </Text>

      <div className="w-full sm:w-1/2 aspect-[2/4] lg:aspect[3/4] xl:aspect-square bg-neutral-emphasis/10 hidden md:flex" />
    </>
  );
}
