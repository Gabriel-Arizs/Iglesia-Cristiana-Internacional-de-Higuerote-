import type { Ministry } from "../../types"
import { MinistryTitle } from "../ui"
import { PRIMARY } from "../../tokens"

interface SmallCardProps {
  ministry: Ministry
}

export const SmallCard: React.FC<SmallCardProps> = ({ ministry }) => (
  <div
    style={{
      gridColumn: "span 4",
      borderRadius: 20,
      overflow: "hidden",
      height: 320,
      background: "#e0edf8",
      padding: 40,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}
  >
    <div>
      <MinistryTitle size="md">{ministry.title}</MinistryTitle>
      <p style={{ color: "#5a7a9a", fontSize: 13, marginTop: 8 }}>
        {ministry.subtitle}
      </p>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }}
    >
      {ministry.icon && <span style={{ fontSize: 40 }}>{ministry.icon}</span>}
      <button
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: PRIMARY,
          color: "#fff",
          border: "none",
          fontSize: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        →
      </button>
    </div>
  </div>
)

export default SmallCard
