import { Anchor, Button, Group } from "@mantine/core";
import Image from "next/image";
import { HeaderLink } from "./header-link";

export function Header() {
  const navItems = [
    { label: "Diálogos", href: "/dialogos" },
    { label: "OPA", href: "/opa" },
    { label: "dadosPI", href: "/dadosPI" },
    { label: "Pactos pelo Piauí", href: "/pactos-pelo-piaui" },
    { label: "Retribuir", href: "/retribuir" },
    { label: "PSI", href: "/psi" },
    { label: "Pilares", href: "/pilares" },
  ];

  return (
    <header className="flex items-center py-2 px-5 text-white justify-between bg-primary-600 w-full sm:px-5 md:px-8 xl:px-20">
      <div className="lg:hidden">
        <HeaderLink label="Projetos e Programas" items={navItems} />
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

          {navItems.map((item) => (
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

      <div className="flex items-center">
        <Image
          src="/SEPLAN.svg"
          alt="Logo da SEPLAN"
          width={160}
          height={48}
          priority
          className="h-12 w-auto"
        />
      </div>
    </header>
  );
}
