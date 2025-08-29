import { GovernanciaContent } from "./content";
import { GovernanciaCards } from "./gornancia-cards";

export function GovernanciaPage() {
  return (
    <section className="flex flex-col justify-center items-start gap-8 bg-primary-800 text-white px-5 py-8 sm:flex-row md:px-8 md:py-12 lg:px-16 lg:py-20 xl:px-20">
      <GovernanciaContent />

      <GovernanciaCards />
    </section>
  );
}
