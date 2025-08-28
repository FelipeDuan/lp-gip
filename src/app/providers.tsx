import { MantineProvider } from "@mantine/core";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <MantineProvider>{children}</MantineProvider>;
}
