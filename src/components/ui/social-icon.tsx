import type { LucideIcon } from "lucide-react";

interface SocialIconProps {
  icon: LucideIcon;
  href?: string;
}

export function SocialIcon({ icon: Icon, href }: SocialIconProps) {
  const element = (
    <Icon className="hover:text-primary-100 transition cursor-pointer" />
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {element}
      </a>
    );
  }

  return element;
}
