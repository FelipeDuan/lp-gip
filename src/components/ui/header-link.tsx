import { Group, HoverCard, NavLink, Text } from "@mantine/core";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type HeaderLinkItem = { label: string; href: string };

interface HeaderLinkProps {
  label: string;
  href: string;
  items: HeaderLinkItem[];
  color?: string;
}

export function HeaderLink({
  label,
  href,
  items,
  color = "white",
}: HeaderLinkProps) {
  return (
    <HoverCard
      openDelay={80}
      closeDelay={150}
      shadow="md"
      position="bottom-start"
    >
      <HoverCard.Target>
        <Link href={href}>
          <Group gap={6} className="group items-center">
            <Text fw={500} c={color}>
              {label}
            </Text>
            <ChevronRight
              size={16}
              className="group-hover:rotate-90 group-active:rotate-90 transition font-medium"
            />
          </Group>
        </Link>
      </HoverCard.Target>

      <HoverCard.Dropdown p="xs">
        <nav className="min-w-3xs">
          {items.map((item) => (
            <NavLink
              component={Link}
              key={item.href}
              href={item.href}
              label={item.label}
              variant="light"
              color="primary"
            />
          ))}
        </nav>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
