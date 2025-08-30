import { Anchor, Button, Group } from "@mantine/core";
import { notifications } from "@mantine/notifications";

export function HeroActionButtons() {
  function handleDownloadButtonClick() {
    notifications.show({
      title: "Baixando Guia Completo",
      message: "O arquivo pode demorar um pouco para baixar.",
    });
  }

  return (
    <Group justify="center" mt={{ base: 8, md: 12 }} w="100%">
      <Anchor href={"#etapas"}>
        <Button size="md" radius="md">
          Conheça as 5 Etapas
        </Button>
      </Anchor>

      <Button
        size="md"
        radius="md"
        variant="outline"
        onClick={handleDownloadButtonClick}
      >
        Baixar Guia Completo
      </Button>
    </Group>
  );
}
