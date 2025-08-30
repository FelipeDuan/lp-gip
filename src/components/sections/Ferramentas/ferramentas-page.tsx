import { FerramentasContent } from "./content";
import { FerramentasCard } from "./ferramentas-card";

export function FerramentasPage() {
  return (
    <section className="flex flex-col justify-center items-start gap-8 bg-gradient-to-br from-primary-600 from-0% to-primary-500 to-95% text-white px-5 py-8 md:flex-row md:px-8 md:py-12 lg:w-full lg:rounded-2xl lg:px-11 lg:py-14 lg:justify-between">
      <FerramentasContent />

      <FerramentasCard />
    </section>
  );
}
