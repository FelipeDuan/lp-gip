"use client";

import { Container, Stack } from "@mantine/core";
import { HeroContent } from "./content";
import { FaixasPI } from "./faixas-pi";
import { HeroHeader } from "./hero-header";

export function HeroPage() {
  return (
    <>
      <HeroHeader />

      <div className="flex flex-col justify-center items-center bg-white px-5 py-12 sm:px-8 md:px-16 md:py-20 lg:px-20 lg:py-42">
        <Container size={600} px={"lg"} py={"md"}>
          <Stack align="center" gap={"lg"}>
            <HeroContent />
          </Stack>
        </Container>
      </div>

      <FaixasPI />
    </>
  );
}
