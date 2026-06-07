import type { Ministry } from "../../types"
import { MinistryTitle } from "../ui"
import { PRIMARY_LIGHT } from "../../tokens"

interface BannerCardProps {
  ministry: Ministry
}

export const BannerCard: React.FC<BannerCardProps> = ({ ministry }) => (
  <div
    style={{
      gridColumn: "span 8",
      position: "relative",
      borderRadius: 20,
      overflow: "hidden",
      height: 320,
      background: PRIMARY_LIGHT
    }}
  >
    <div
      style={{
        position: "absolute",
        right: 40,
        top: "50%",
        transform: "translateY(-50%)",
        opacity: 0.08,
        fontSize: 160
      }}
    >
      🌍
    </div>
    <div
      style={{
        position: "relative",
        zIndex: 1,
        padding: "48px 48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%"
      }}
    >
      <MinistryTitle size="lg" light>
        {ministry.title}
      </MinistryTitle>
      <p
        style={{
          color: "rgba(200,220,255,0.85)",
          maxWidth: 480,
          fontSize: 17,
          marginTop: 12
        }}
      >
        {ministry.subtitle}
      </p>
      {ministry.cta && (
        <div
          style={{
            marginTop: 24,
            display: "flex",
            alignItems: "center",
            gap: 12
          }}
        >
          <span style={{ fontSize: 20 }}>🌐</span>
          <span
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em"
            }}
          >
            {ministry.cta}
          </span>
        </div>
      )}
    </div>
  </div>
)

export default BannerCard
