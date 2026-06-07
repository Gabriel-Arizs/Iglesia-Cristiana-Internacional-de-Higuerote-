import { useState } from "react"
import type { Ministry } from "../../types"
import { MinistryTitle } from "../ui"
import { PRIMARY_LIGHT } from "../../tokens"

interface TallCardProps {
  ministry: Ministry
}

export const TallCard: React.FC<TallCardProps> = ({ ministry }) => {
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
        height: 560,
        background: "#e8f0f8",
        cursor: "pointer"
      }}
    >
      <img
        alt={ministry.title}
        src={ministry.img}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.55,
          mixBlendMode: "multiply",
          transform: hov ? "scale(1.1)" : "scale(1)",
          transition: "transform 1s ease"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hov ? "rgba(26,58,92,0.08)" : "rgba(26,58,92,0.28)",
          transition: "background 0.5s"
        }}
      />
      <div style={{ position: "absolute", top: 40, left: 32 }}>
        <MinistryTitle size="lg">{ministry.title}</MinistryTitle>
        <p
          style={{
            color: PRIMARY_LIGHT,
            fontWeight: 500,
            maxWidth: 200,
            marginTop: 8,
            fontSize: 14
          }}
        >
          {ministry.subtitle}
        </p>
      </div>
      {ministry.icon && (
        <div
          style={{ position: "absolute", bottom: 28, right: 28, fontSize: 36 }}
        >
          {ministry.icon}
        </div>
      )}
    </div>
  )
}

export default TallCard
