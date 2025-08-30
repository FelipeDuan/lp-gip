"use client";

import { Anchor, Burger, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Info, Layers, ListChecks, MapIcon } from "lucide-react";
import Image from "next/image";
import { AcessoExclusivoButton } from "./acesso-exclusivo-button";

export function HeroHeader() {
  const [opened, { toggle, close }] = useDisclosure();

  const navItems = [
    { label: "Sobre", id: "sobre", icon: <Info size={16} /> },
    { label: "Etapas", id: "etapas", icon: <Layers size={16} /> },
    { label: "Governancia", id: "governancia", icon: <MapIcon size={16} /> },
    {
      label: "Classificação",
      id: "classificacao",
      icon: <ListChecks size={16} />,
    },
  ];

  return (
    <header className="flex w-full justify-between items-center bg-white px-5 py-2 border-b-2 border-b-foreground sm:px-5 md:px-8 xl:px-20">
      <div className="flex items-center">
        <Image
          src="/Projetos.svg"
          alt="Logo do GIP"
          width={160}
          height={48}
          priority
          className="h-12 w-auto"
        />
      </div>

      <nav className="flex lg:hidden">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} color="primary" />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Acesse</Menu.Label>
            {navItems.map((item) => (
              <Menu.Item key={item.id} leftSection={item.icon}>
                <Anchor
                  href={`#${item.id}`}
                  size="sm"
                  fw={500}
                  c="var(--color-neutral-default)"
                  onClick={close}
                >
                  {item.label}
                </Anchor>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </nav>

      <nav className="hidden lg:flex">
        <Group gap={"lg"}>
          {navItems.map((item) => (
            <Anchor
              key={`item-${item.label}`}
              size="md"
              fw={500}
              c={"var(--color-neutral-default)"}
              href={`#${item.id}`}
            >
              {item.label}
            </Anchor>
          ))}

          <AcessoExclusivoButton />
        </Group>
      </nav>
    </header>
  );
}
