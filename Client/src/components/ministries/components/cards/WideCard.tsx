import { useState } from "react";
import type { Ministry } from "../../types";
import { MinistryTitle } from "../ui";
import { OVERLAY_GRAD } from "../../tokens";

interface WideCardProps {
  ministry: Ministry;
}

export const WideCard: React.FC<WideCardProps> = ({ ministry }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        gridColumn: "span 6",
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        height: 380,
        cursor: "pointer",
      }}
    >
      <img
        alt={ministry.title}
        src={ministry.img}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: hov ? "none" : "grayscale(100%) brightness(0.9)",
          transition: "filter 0.7s ease",
        }}
      />
      <div
        style={{ position: "absolute", inset: 0, background: OVERLAY_GRAD }}
      />
      <div style={{ position: "absolute", bottom: 28, left: 28 }}>
        <MinistryTitle size="md" light>
          {ministry.title}
        </MinistryTitle>
        <p
          style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginTop: 8 }}
        >
          {ministry.subtitle}
        </p>
      </div>
    </div>
  );
};

export default WideCard;
