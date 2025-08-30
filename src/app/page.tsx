import { Header } from "@/components/layouts/header";
import { ClassificacaoPage } from "@/components/sections/Classificacao/classificacao-page";
import { EtapasPage } from "@/components/sections/Etapas/etapas-page";
import { FerramentasPage } from "@/components/sections/Ferramentas/ferramentas-page";
import { GovernanciaPage } from "@/components/sections/Governancia/governancia-page";
import { HeroPage } from "@/components/sections/Hero/hero-page";
import { SobrePage } from "@/components/sections/Sobre/sobre-page";

export default function Home() {
  return (
    <>
      <Header />
      <HeroPage />
      <SobrePage />
      <EtapasPage />
      <GovernanciaPage />
      <ClassificacaoPage />

      <div className="lg:px-5 lg:pt-20 lg:pb-32 xl:px-9 xl:pt-20 xl:pb-32">
        <FerramentasPage />
      </div>
    </>
  );
}
