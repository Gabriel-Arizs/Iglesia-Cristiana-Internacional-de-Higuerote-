import type { Ministry } from "../../types"
import { MinistryTitle } from "../ui"

interface FullCardProps {
  ministry: Ministry
}

export const FullCard: React.FC<FullCardProps> = ({ ministry }) => (
  <div
    style={{
      gridColumn: "span 12",
      borderRadius: 20,
      overflow: "hidden",
      height: 280,
      background: "#fff",
      border: "1px solid #e8eef5",
      display: "flex",
      alignItems: "center",
      padding: "0 48px"
    }}
  >
    <div style={{ flex: 1 }}>
      <MinistryTitle size="lg">{ministry.title}</MinistryTitle>
      <p
        style={{ color: "#64748b", fontSize: 17, maxWidth: 560, marginTop: 12 }}
      >
        {ministry.subtitle}
      </p>
    </div>
    {ministry.icons && (
      <div style={{ display: "flex", gap: 16, opacity: 0.18, fontSize: 72 }}>
        {ministry.icons.map((ic, i) => (
          <span key={i}>{ic}</span>
        ))}
      </div>
    )}
  </div>
)

export default FullCard
