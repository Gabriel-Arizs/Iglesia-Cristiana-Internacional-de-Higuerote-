import React from "react"
import { PRIMARY } from "../../tokens"

const stats = [
  { value: "10", label: "Ministerios" },
  { value: "200+", label: "Voluntarios Activos" },
  { value: "12k+", label: "Vidas Impactadas" }
]

export const StatsBar: React.FC = () => {
  return (
    <section className="border-y border-[#e0e8f0] bg-[#f5f7fa] px-6 py-14 mb-14">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center md:px-8 ${
                i === 1 ? "md:border-x md:border-[#e0e8f0]" : ""
              }`}
            >
              <span
                style={{ color: PRIMARY }}
                className="text-5xl font-black tracking-tight md:text-6xl"
              >
                {stat.value}
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#5a7a9a]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
