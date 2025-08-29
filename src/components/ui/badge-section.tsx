import { Badge } from "@mantine/core";

interface BadgeSection {
  children: React.ReactNode;
}

export function BagdeSection({ children }: BadgeSection) {
  return (
    <Badge
      variant="light"
      color="yellow"
      radius={"sm"}
      size="md"
      tt={"lowercase"}
      fw={600}
      fz={{ base: 12, lg: 14 }}
      lh={14}
    >
      {children}
    </Badge>
  );
}
