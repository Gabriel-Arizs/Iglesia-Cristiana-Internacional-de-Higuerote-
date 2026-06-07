import { useState } from "react"
import type { Ministry } from "../../types"
import { MinistryTitle } from "../ui"
import { PRIMARY } from "../../tokens"

interface MediumDarkCardProps {
  ministry: Ministry
}

export const MediumDarkCard: React.FC<MediumDarkCardProps> = ({ ministry }) => {
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
        background: PRIMARY,
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
          filter: "grayscale(100%)",
          opacity: hov ? 0.6 : 0.4,
          transition: "opacity 0.7s"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: 32,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        {ministry.icon && <span style={{ fontSize: 28 }}>{ministry.icon}</span>}
        <div>
          <MinistryTitle size="lg" light>
            {ministry.title}
          </MinistryTitle>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 13,
              lineHeight: 1.6,
              marginTop: 10
            }}
          >
            {ministry.subtitle}
          </p>
          {ministry.cta && (
            <a
              href="#"
              style={{
                color: "#fff",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: 8,
                fontSize: 14,
                display: "inline-block",
                marginTop: 20
              }}
            >
              {ministry.cta}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default MediumDarkCard
