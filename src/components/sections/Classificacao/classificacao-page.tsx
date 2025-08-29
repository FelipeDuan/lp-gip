import { ClassificacaoCards } from "./classificacao-cards";
import { ClassificacaoContent } from "./content";

export function ClassificacaoPage() {
  return (
    <section className="flex flex-col bg-primary-10 gap-8 px-5 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20 xl:px-20 xl:gap-12">
      <ClassificacaoContent />

      <ClassificacaoCards />
    </section>
  );
}
