import { defaultPastores } from "../../mocks/PastoralBody";
import type {  PastoralBodyProps } from "./PastoralBody.types";

export default function PastoralBody({
  sectionTitle = "Cuerpo Pastoral",
  pastores = defaultPastores,
}: PastoralBodyProps) {
  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Título de sección */}
        <h2 className="text-5xl font-bold text-primary tracking-tight text-center mb-20">
          {sectionTitle}
        </h2>

        <div className="flex flex-col gap-32">
          {pastores.map((pastor, index) => {
            const isEven = index % 2 === 0;

            const ImageBlock = (
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img
                    className="w-full h-full object-cover"
                    src={pastor.imageUrl}
                    alt={pastor.imageAlt}
                  />
                </div>
                <div
                  className={`absolute -bottom-6 w-full h-full architectural-gradient rounded-2xl -z-10 opacity-10 translate-y-4 ${
                    isEven ? "-right-6 translate-x-4" : "-left-6 -translate-x-4"
                  }`}
                />
              </div>
            );

            const ContentBlock = (
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                  {pastor.subtitle}
                </p>
                <h3 className="text-3xl font-bold text-primary tracking-tight mb-6">
                  {pastor.name}
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  {pastor.description}
                </p>
              </div>
            );

            return (
              <div
                key={pastor.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
              >
                {isEven ? (
                  <>
                    {ImageBlock}
                    {ContentBlock}
                  </>
                ) : (
                  <>
                    {ContentBlock}
                    {ImageBlock}
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}