import React from "react"
import { PRIMARY, PRIMARY_LIGHT } from "../../tokens"

export const CTASection: React.FC = () => {
  return (
    <section className="bg-[#edf3fa] px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <div
          style={{
            background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_LIGHT} 100%)`
          }}
          className="relative overflow-hidden rounded-[48px] px-15 py-18 text-center shadow-[0_24px_80px_rgba(26,58,92,0.25)]"
        >
          {/* Círculo decorativo superior derecho */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />

          {/* Círculo decorativo inferior izquierdo */}
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/[0.03]" />

          <span className="relative mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-[rgba(180,210,255,0.85)]">
            Tus manos son necesarias
          </span>

          <h2 className="relative mb-5 text-4xl font-black uppercase leading-none tracking-tight text-white md:text-[44px]">
            Únete como Voluntario
          </h2>

          <p className="relative mx-auto mb-11 max-w-[520px] text-[17px] leading-relaxed text-[rgba(180,210,255,0.7)]">
            No importa tu talento o disponibilidad, hay un lugar esperando por
            ti. Juntos podemos construir una comunidad más fuerte y amorosa.
          </p>

          <div className="relative flex flex-wrap items-center justify-center gap-6">
            <button
              style={{ color: PRIMARY }}
              className="cursor-pointer rounded-full bg-white px-11 py-[18px] text-[17px] font-black shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:scale-105"
            >
              Quiero Participar
            </button>

            <a
              href="#"
              className="border-b-2 border-white/35 pb-0.5 text-medium font-bold text-white no-underline"
            >
              Más Información
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
