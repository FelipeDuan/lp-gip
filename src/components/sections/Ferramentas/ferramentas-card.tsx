"use client";

import { Button, Card, Group, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Download } from "lucide-react";

export function FerramentasCard() {
  function handleDownloadButtonClick() {
    notifications.show({
      title: "Baixando Manual Técnico",
      message: "O arquivo pode demorar um pouco para baixar.",
    });
  }

  return (
    <Card bg="primary" shadow="md" radius={"lg"} withBorder maw={460}>
      <Group justify="start" gap={12}>
        <Text c={"white"} fw={700} fz={{ base: 16, lg: 18 }}>
          Manual Técnico
        </Text>

        <Text c={"white"} fw={500} fz={{ base: "sm", lg: "md" }}>
          Aprofunde-se em cada detalhe, critério e cálculo da metodologia. O
          guia completo para especialistas.
        </Text>

        <Button
          bg={"var(--color-yellow-400)"}
          leftSection={<Download size={16} />}
          fullWidth
          c={"var(--color-neutral-emphasis)"}
          onClick={handleDownloadButtonClick}
        >
          Baixar Manual Técnico
        </Button>
      </Group>
    </Card>
  );
}
