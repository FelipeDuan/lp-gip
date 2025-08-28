"use client";
import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HeaderLink } from "../ui/header-link";

export function Header() {
  const [opened, { open, close }] = useDisclosure();

  const NAV = [
    { label: "Projetos e Programas", href: "/projetos" },
    { label: "Diálogos", href: "/dialogos" },
    { label: "OPA", href: "/opa" },
  ];

  return (
    <header className="flex items-center py-2 px-5 text-white justify-between bg-primary-600 w-full">
      <HeaderLink label="Projetos e Programas" href="/projetos" items={NAV} />

      <Burger opened={opened} onClick={open} color="white" />

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
    </header>
  );
}
