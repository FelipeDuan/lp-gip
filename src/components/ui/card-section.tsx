import { Card, Text } from "@mantine/core";
import { pallete, type Variant } from "@/lib/card-variants";

interface CardSectionProps {
  title: string;
  description: string;
  variant: Variant;
  className?: string;
}

export function CardSection({
  title,
  className,
  description,
  variant = "primary",
}: CardSectionProps) {
  const preset = pallete[variant];
  const bgColor = preset.bg;
  const titleColor = preset.title;
  const descriptionColor = preset.desc;

  return (
    <Card
      bg={bgColor}
      shadow="xs"
      radius={12}
      px={20}
      py={20}
      className={className}
    >
      <Text c={titleColor} fw={700} fz={{ base: 16, lg: 18 }}>
        {title}
      </Text>

      <Text c={descriptionColor} fw={500} fz={{ base: "sm", lg: "md" }}>
        {description}
      </Text>
    </Card>
  );
}
