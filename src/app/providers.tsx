import { MantineProvider } from "@mantine/core";
import { theme } from "@/lib/theme";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
