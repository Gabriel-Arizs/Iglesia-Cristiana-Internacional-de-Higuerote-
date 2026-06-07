import React from "react"

interface VisualSeparatorProps {
  /** Color de fondo (puede ser un hex, rgb, o clase de Tailwind si prefieres) */
  bgColor?: string
  /** Altura personalizada opcional (ej: '120px', '200px'). Por defecto es '140px' */
  height?: string | number
}

export const VisualSeparator: React.FC<VisualSeparatorProps> = ({
  bgColor = "#f5f7fa", // Color por defecto basado en tu diseño original
  height = 140 // Altura decente y equilibrada para separación visual
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: height
      }}
      className="w-full col-span-12 mb-24 rounded-[20px] shadow-[0_2px_8px_rgba(26,58,92,0.02)] transition-all duration-300"
    />
  )
}

export default VisualSeparator
