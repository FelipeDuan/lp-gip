"use client";

import { SobreContent } from "./content";
import { SobreImagemLateral } from "./imagem-lateral";

export function SobrePage() {
  // ToDo: depois eu tenho que refatorar isso aqui
  return (
    <section className="pt-16 pb-8 px-5 md:pt-24 md:pb-12 md:px-8 lg:pt-32 lg:pb-20 lg:px-16 xl:px-20">
      <div className="mx-auto">
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-10 lg:gap-12 items-center">
          {/* Imagem */}
          <SobreImagemLateral />

          {/* Conteúdo */}
          <div className="w-full sm:w-1/2 min-w-0">
            <SobreContent />
          </div>
        </div>
      </div>
    </section>
  );
}
