export type Variant =
  | "surface"
  | "light"
  | "yellow"
  | "primary"
  | "white"
  | "beige";

export const pallete: Record<
  Variant,
  { bg: string; title: string; desc: string }
> = {
  surface: {
    bg: "var(--color-surface)",
    title: "white",
    desc: "white",
  },
  light: {
    bg: "var(--color-primary-50)",
    title: "primary",
    desc: "var(--color-neutral-default)",
  },
  yellow: {
    bg: "var(--color-yellow-400)",
    title: "var(--color-neutral-emphasis)",
    desc: "var(--color-neutral-default)",
  },
  primary: {
    bg: "var(--color-primary-600)",
    title: "white",
    desc: "white",
  },
  white: {
    bg: "var(--color-white)",
    title: "var(--color-neutral-emphasis)",
    desc: "var(--color-neutral-default)",
  },
  beige: {
    bg: "var(--color-yellow-100)",
    title: "var(--color-neutral-emphasis)",
    desc: "var(--color-neutral-default)",
  },
};
