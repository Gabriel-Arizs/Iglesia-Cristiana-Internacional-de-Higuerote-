import { useState } from "react";
import type { Ministry } from "../../types";
import { MinistryTitle, Pill } from "../ui";
import { PRIMARY, OVERLAY_GRAD } from "../../tokens";

interface FeatureCardProps {
  ministry: Ministry;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ ministry }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        gridColumn: "span 8",
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        height: 560,
        background: PRIMARY,
        cursor: "pointer",
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
          filter: hov ? "none" : "grayscale(100%)",
          opacity: 0.6,
          transform: hov ? "scale(1)" : "scale(1.06)",
          transition: "all 1s ease",
        }}
      />
      <div
        style={{ position: "absolute", inset: 0, background: OVERLAY_GRAD }}
      />
      <div style={{ position: "absolute", bottom: 48, left: 48, right: 48 }}>
        <MinistryTitle size="xl" light>
          {ministry.title}
        </MinistryTitle>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            maxWidth: 460,
            fontSize: 17,
            lineHeight: 1.6,
            marginTop: 12,
          }}
        >
          {ministry.subtitle}
        </p>
        {ministry.cta && <Pill light>{ministry.cta}</Pill>}
      </div>
    </div>
  );
};
