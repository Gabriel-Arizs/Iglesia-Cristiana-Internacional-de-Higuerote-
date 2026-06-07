import React from "react"
import type { Step } from "../../types"
import { PRIMARY } from "../../tokens"

interface StepCardProps {
  step: Step
}

export const StepCard: React.FC<StepCardProps> = ({ step }) => {
  if (step.accent) {
    return (
      <div
        style={{ "--primary-color": PRIMARY } as React.CSSProperties}
        className="group flex cursor-pointer flex-col justify-between rounded-[20px] bg-[#dce8f5] p-8 transition-colors duration-300 hover:bg-[var(--primary-color)]"
      >
        <div>
          <h3
            style={{ color: PRIMARY }}
            className="m-0 mb-3 text-[22px] font-black uppercase transition-colors duration-300 group-hover:text-white"
          >
            {step.title}
          </h3>
          <p className="text-[13px] leading-[1.6] text-[#5a7a9a] transition-colors duration-300 group-hover:text-white/75">
            {step.desc}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span
            style={{ color: PRIMARY }}
            className="text-[11px] font-black uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-white"
          >
            {step.cta}
          </span>
          <span className="text-4xl transition-transform duration-300 group-hover:translate-x-1.5">
            ❤️
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="group rounded-[20px] border border-[#e8eef5] bg-white p-8 shadow-[0_2px_8px_rgba(26,58,92,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(26,58,92,0.1)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e0edf8] text-[22px]">
        {step.icon}
      </div>

      <h3 style={{ color: PRIMARY }} className="m-0 mb-2.5 text-lg font-bold">
        {step.title}
      </h3>

      <p className="mb-5 text-[13px] leading-[1.6] text-slate-500">
        {step.desc}
      </p>

      {step.items && (
        <ul className="m-0 flex flex-col gap-2.5 p-0 list-none">
          {step.items.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-xs font-semibold text-[#4a6a8a]"
            >
              <span style={{ color: PRIMARY }} className="text-base">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default StepCard
