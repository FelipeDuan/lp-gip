import { Button, Group } from "@mantine/core";

export function HeroActionButtons() {
  return (
    <Group justify="center" mt={{ base: 8, md: 12 }} w="100%">
      <Button size="md" radius="md" classNames={{ root: "w-full md:w-auto" }}>
        Conheça as 5 Etapas
      </Button>

      <Button
        size="md"
        radius="md"
        variant="outline"
        classNames={{ root: "w-full md:w-auto" }}
      >
        Baixar Guia Completo
      </Button>
    </Group>
  );
}
