import type { Ministry } from "../../types";
import { MinistryTitle, Tag } from "../ui";
import { PRIMARY } from "../../tokens";

interface StatCardProps {
  ministry: Ministry;
}

export const StatCard: React.FC<StatCardProps> = ({ ministry }) => (
  <div
    style={{
      gridColumn: "span 4",
      background: "#fff",
      padding: "48px 40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: 20,
      border: "1px solid #e8eef5",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: -48,
        right: -48,
        width: 96,
        height: 96,
        background: "rgba(26,58,92,0.05)",
        borderRadius: "50%",
      }}
    />
    {ministry.tag && <Tag>{ministry.tag}</Tag>}
    <MinistryTitle size="lg">{ministry.title}</MinistryTitle>
    <p
      style={{
        color: "#64748b",
        fontSize: 13,
        marginTop: 12,
        marginBottom: 20,
      }}
    >
      {ministry.subtitle}
    </p>
    {ministry.stat && (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <span style={{ fontSize: 32, fontWeight: 900, color: PRIMARY }}>
          {ministry.stat}
        </span>
        <span
          style={{
            fontSize: 12,
            color: "#64748b",
            maxWidth: 100,
            textAlign: "left",
          }}
        >
          {ministry.statLabel}
        </span>
      </div>
    )}
  </div>
);

export default StatCard;
