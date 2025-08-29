import { EtapasPage } from "@/components/sections/Etapas/etapas-page";
import { GovernanciaPage } from "@/components/sections/Governancia/governancia-page";
import { Hero } from "@/components/sections/Hero/hero-page";
import { SobrePage } from "@/components/sections/Sobre/sobre-page";

export default function Home() {
  return (
    <>
      <Hero />
      <SobrePage />
      <EtapasPage />
      <GovernanciaPage />
    </>
  );
}
