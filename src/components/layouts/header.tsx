"use client";

import { Anchor, Button, Group, Text } from "@mantine/core";
import { HeaderLink } from "./header-link";

export function Header() {
  const navMobile = [
    { label: "Projetos e Programas", href: "/projetos" },
    { label: "Diálogos", href: "/dialogos" },
    { label: "OPA", href: "/opa" },
  ];

  const navDesktop = [
    { label: "Diálogos" },
    { label: "OPA" },
    { label: "dadosPI" },
    { label: "Pactos pelo Piauí" },
    { label: "Retribuir" },
    { label: "PSI" },
    { label: "Pilares" },
  ];

  return (
    <header className="flex items-center py-2 px-5 text-white justify-between bg-primary-600 w-full sm:px-5 md:px-8 xl:px-20">
      <div className="lg:hidden">
        <HeaderLink
          label="Projetos e Programas"
          href="/projetos"
          items={navMobile}
        />
      </div>

      <div className="hidden lg:flex">
        <Group justify="center" gap={"lg"}>
          <Button
            variant="default"
            radius={"md"}
            c={"var(--color-neutral-default)"}
          >
            Site da Seplan
          </Button>

          {navDesktop.map((item) => (
            <Anchor
              key={`item-${item.label}`}
              underline="hover"
              c={"white"}
              size="md"
            >
              {item.label}
            </Anchor>
          ))}
        </Group>
      </div>

      <Text fw={700} size="lg">
        Logo
      </Text>
    </header>
  );
}
