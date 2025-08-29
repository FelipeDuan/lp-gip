"use client";

import { Container, Stack } from "@mantine/core";
import { Header } from "../../layouts/header";
import { HeroHeader } from "../../layouts/hero-header";
import { HeroActionButtons } from "./action-buttons";
import { FaixasPI } from "./faixas-pi";
import { HeroTitle } from "./title";

export function Hero() {
  return (
    <>
      <Header />
      <HeroHeader />

      <div className="flex flex-col justify-center items-center px-5 py-12 sm:px-8 md:px-16 md:py-20 lg:px-20 lg:py-42">
        <Container size={600} px={"lg"} py={"md"}>
          <Stack align="center" gap={"lg"}>
            <HeroTitle />

            <HeroActionButtons />
          </Stack>
        </Container>
      </div>

      <FaixasPI />
    </>
  );
}
