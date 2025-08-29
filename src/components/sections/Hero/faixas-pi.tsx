"use client";

import { Box, Progress } from "@mantine/core";

export function FaixasPI() {
  return (
    <Box w="100%">
      <Progress.Root size={12} radius={0} w="100%">
        <Progress.Section value={35} color="#F7B500" />
        <Progress.Section value={35} color="#E6392E" />
        <Progress.Section value={35} color="#0D7138" />
      </Progress.Root>
    </Box>
  );
}
