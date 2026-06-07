export type MinistrySize =
  | "feature"
  | "tall"
  | "medium"
  | "text"
  | "icon-card"
  | "wide"
  | "banner"
  | "small"
  | "full";

export interface Ministry {
  id: string;
  title: string;
  subtitle: string;
  size: MinistrySize;
  cta?: string;
  img?: string;
  icon?: string;
  icons?: string[];
  stat?: string;
  statLabel?: string;
  tag?: string;
  dark?: boolean;
}

export interface Step {
  icon: string;
  title: string;
  desc: string;
  items?: string[];
  cta?: string;
  accent: boolean;
}
