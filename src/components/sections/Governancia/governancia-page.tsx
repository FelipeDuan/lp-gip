import { Text } from "@mantine/core";
import { BagdeSection } from "@/components/ui/badge-section";
import { GovernanciaCards } from "./gornancia-cards";

export function GovernanciaPage() {
  return (
    <section className="flex flex-col justify-center items-start gap-8 bg-primary-800 text-white px-5 py-8 sm:flex-row md:px-8 md:py-12 lg:px-16 lg:py-20 xl:px-20">
      <div className="flex flex-col justify-center items-start gap-4">
        <BagdeSection>governancia</BagdeSection>

        <div className="flex flex-col justify-center items-start">
          <Text fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
            Decisões Inteligentes,
          </Text>
          <Text fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
            Estrutura Robusta
          </Text>
        </div>

        <Text
          c="var(--color-foreground)"
          fw={500}
          fz={{ base: "sm", md: "md" }}
          lh={1.6}
        >
          O sucesso da GIP depende de uma governança bem definida, que garante
          avaliações técnicas, imparciais e alinhadas à capacidade fiscal do
          Estado.
        </Text>
      </div>

      <div className="flex flex-col gap-4">
        <GovernanciaCards />
      </div>
    </section>
  );
}
