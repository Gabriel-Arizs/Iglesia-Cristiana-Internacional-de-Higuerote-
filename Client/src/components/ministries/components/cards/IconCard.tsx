import { useState } from "react"
import type { Ministry } from "../../types"
import { MinistryTitle } from "../ui"
import { PRIMARY, SURFACE } from "../../tokens"

interface IconCardProps {
  ministry: Ministry
}

export const IconCard: React.FC<IconCardProps> = ({ ministry }) => {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        gridColumn: "span 4",
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        height: 420,
        background: SURFACE,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 40,
        cursor: "pointer"
      }}
    >
      {ministry.icon && (
        <span style={{ fontSize: 52, marginBottom: 24 }}>{ministry.icon}</span>
      )}
      <MinistryTitle size="md">{ministry.title}</MinistryTitle>
      <p
        style={{ color: "#64748b", fontSize: 13, marginTop: 10, maxWidth: 220 }}
      >
        {ministry.subtitle}
      </p>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: PRIMARY,
          transform: hov ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease"
        }}
      />
    </div>
  )
}

export default IconCard
