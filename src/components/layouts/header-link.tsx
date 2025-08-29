"use client";

import { Group, HoverCard, NavLink, Text } from "@mantine/core";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type HeaderLinkItem = { label: string; href: string };

interface HeaderLinkProps {
  label: string;
  items: HeaderLinkItem[];
  color?: string;
}

export function HeaderLink({ label, items, color = "white" }: HeaderLinkProps) {
  // ToDo: depois ajustar para o mobile também
  return (
    <HoverCard
      openDelay={80}
      closeDelay={150}
      shadow="md"
      position="bottom-start"
    >
      <HoverCard.Target>
        <Group gap={6} className="group items-center cursor-pointer">
          <Text fw={500} c={color}>
            {label}
          </Text>
          <ChevronRight
            size={16}
            className="group-hover:rotate-90 group-active:rotate-90 transition font-medium"
          />
        </Group>
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
