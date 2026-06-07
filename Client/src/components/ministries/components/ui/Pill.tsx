import React, { useState } from "react"
import { PRIMARY } from "../../tokens"

interface PillProps {
  children: React.ReactNode
  light?: boolean
  onClick?: () => void
}

export const Pill: React.FC<PillProps> = ({
  children,
  light = false,
  onClick
}) => {
  const [hov, setHov] = useState(false)

  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        background: hov
          ? light
            ? "#fff"
            : PRIMARY
          : light
            ? "rgba(255,255,255,0.12)"
            : "transparent",
        color: hov ? (light ? PRIMARY : "#fff") : light ? "#fff" : PRIMARY,
        border: `1.5px solid ${light ? "rgba(255,255,255,0.3)" : PRIMARY}`,
        padding: "10px 24px",
        borderRadius: 999,
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "all 0.3s",
        backdropFilter: "blur(8px)",
        marginTop: 20
      }}
    >
      {children}
    </button>
  )
}

export default Pill
