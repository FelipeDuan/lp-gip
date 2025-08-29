"use client";

import { EtapasContent } from "./content";
import { EtapasTimeline } from "./etapas-timeline";

export function EtapasPage() {
  return (
    <section className="flex flex-col justify-center items-start gap-8 bg-white lg:gap-12 md:flex-row md:items-center py-8 px-5 md:py-12 lg:px-16 lg:py-20 xl:px-20">
      <div className="flex flex-col justify-center items-start gap-4">
        <EtapasContent />
      </div>

      <EtapasTimeline />
    </section>
  );
}
