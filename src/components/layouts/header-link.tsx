"use client";

import { Group, Menu, Text } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

type HeaderLinkItem = { label: string; href: string };

interface HeaderLinkProps {
  label: string;
  items: HeaderLinkItem[];
  color?: string;
}

export function HeaderLink({ label, items, color = "white" }: HeaderLinkProps) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Group gap={6} className="group items-center cursor-pointer">
          <Text fw={500} c={color}>
            {label}
          </Text>
          <ChevronDown size={16} />
        </Group>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Outros Links</Menu.Label>
        {items.map((item, idx) => (
          <Link href={item.href} key={`${idx}-${item.label}`}>
            <Menu.Item>{item.label}</Menu.Item>
          </Link>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
