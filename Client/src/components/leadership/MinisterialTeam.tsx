import { useEffect, useRef, useState } from "react";
import type { TimelineItemProps } from "./MinisterialTeam.types";
import { teamMembers } from "../../mocks/ministerialTeam";

function TimelineItem({ member, isVisible, isLast }: TimelineItemProps) {
  const isLeft = member.side === "left";

  const cardClasses = `
    bg-background p-8 rounded-xl shadow-blue-900/5 shadow-xl border-l-4
    ${isLeft ? "md:border-l-0 md:border-r-4" : ""}
    border-primary
    transition-all duration-700 ease-out
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `;

  const imageWrapperClasses = `
    w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white
    ${isLeft ? "mx-auto md:mx-0" : "mx-auto md:ml-auto md:mr-0"}
    transition-all duration-700 ease-out delay-150
    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
  `;

  return (
    <div
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
        isLast ? "" : "mb-24"
      } items-center`}
    >
      {isLeft ? (
        <>
          <div className="md:text-right pr-0 md:pr-16 order-2 md:order-1">
            <div className={cardClasses}>
              <h4 className="text-xl font-bold text-primary mb-1">
                {member.name}
              </h4>
              <p className="text-secondary font-medium mb-3">{member.role}</p>
              <p className="text-on-surface-variant text-sm">
                {member.description}
              </p>
            </div>
          </div>

          {/* Center dot - Usando primary para que resalte sobre el blanco */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-20" />

          <div className="pl-0 md:pl-16 order-1 md:order-2">
            <div className={imageWrapperClasses}>
              <img
                className="w-full h-full object-cover"
                src={member.imageUrl}
                alt={member.imageAlt}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="pr-0 md:pr-16 text-center md:text-right">
            <div className={imageWrapperClasses}>
              <img
                className="w-full h-full object-cover"
                src={member.imageUrl}
                alt={member.imageAlt}
              />
            </div>
          </div>

          {/* Center dot */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-20" />

          <div className="pl-0 md:pl-16">
            <div className={cardClasses}>
              <h4 className="text-xl font-bold text-primary mb-1">
                {member.name}
              </h4>
              <p className="text-secondary font-medium mb-3">{member.role}</p>
              <p className="text-on-surface-variant text-sm">
                {member.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function MinisterialTeam() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(teamMembers.length).fill(false)
  );
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      <div className="text-center mb-20">
        <span className="text-primary font-bold tracking-[0.05em] uppercase text-sm">
          Organización
        </span>
        <h2 className="text-4xl font-bold text-primary mt-4">
          Cuerpo Ministerial
        </h2>
      </div>

      <div className="relative timeline-container">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-primary/10 z-10" />

        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
          >
            <TimelineItem
              member={member}
              isVisible={visibleItems[index]}
              isLast={index === teamMembers.length - 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}