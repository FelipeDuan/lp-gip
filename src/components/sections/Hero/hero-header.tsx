"use client";

import { Anchor, Burger, Drawer, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Lock } from "lucide-react";

export function HeroHeader() {
  const [opened, { open, close }] = useDisclosure();

  const navDesktop = [
    { label: "Sobre" },
    { label: "Etapas" },
    { label: "Governancia" },
    { label: "Classificação" },
  ];

  return (
    <header className="flex w-full justify-between items-center px-5 py-2 border-b-2 border-b-border lg:px-8 lg:py-3">
      <Text fw={700} size="lg">
        Logo
      </Text>

      <nav className="flex lg:hidden">
        <Burger opened={opened} onClick={open} color="primary" />

        <Drawer
          offset={8}
          radius={"md"}
          opened={opened}
          onClose={close}
          position="right"
          title="Menu"
        >
          {
            // ToDo: aqui eu preencho depois
          }
        </Drawer>
      </nav>

      <nav className="hidden lg:flex">
        <Group gap={"lg"}>
          {navDesktop.map((item) => (
            <Anchor
              key={`item-${item.label}`}
              size="md"
              fw={500}
              c={"var(--color-neutral-default)"}
            >
              {item.label}
            </Anchor>
          ))}

          <button
            type="button"
            className="flex justify-between items-center px-5 py-2 gap-2 rounded-md bg-primary-600 text-white cursor-pointer shadow  hover:bg-primary-700"
          >
            <Lock size={16} />
            acesso exclusivo
          </button>
        </Group>
      </nav>
    </header>
  );
}
