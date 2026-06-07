import React from "react"
import { steps } from "../../data/steps"
import { Tag } from "../ui"
import { StepCard } from "./StepCard"
import { PRIMARY, SURFACE } from "../../tokens"

export const ServingSteps: React.FC = () => (
  <section style={{ background: SURFACE }} className="px-6 py-20">
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-12">
        <Tag>Tu Vocación en Acción</Tag>
        <h2
          style={{ color: PRIMARY }}
          className="m-0 text-4xl font-black uppercase tracking-tight"
        >
          Pasos para Servir
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {steps.map((step, i) => (
          <StepCard key={i} step={step} />
        ))}
      </div>
    </div>
  </section>
)

export default ServingSteps
