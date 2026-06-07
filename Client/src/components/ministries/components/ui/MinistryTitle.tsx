import { PRIMARY } from "../../tokens";

type TitleSize = "xl" | "lg" | "md" | "sm";

interface MinistryTitleProps {
  children: React.ReactNode;
  size?: TitleSize;
  light?: boolean;
}

const fontSizeMap: Record<TitleSize, number> = {
  xl: 48,
  lg: 32,
  md: 26,
  sm: 20,
};

export const MinistryTitle: React.FC<MinistryTitleProps> = ({
  children,
  size = "lg",
  light = false,
}) => (
  <h2
    style={{
      fontSize: fontSizeMap[size],
      fontWeight: 900,
      letterSpacing: "-0.03em",
      textTransform: "uppercase",
      color: light ? "#fff" : PRIMARY,
      margin: 0,
      lineHeight: 1.05,
    }}
  >
    {children}
  </h2>
);

export default MinistryTitle;
