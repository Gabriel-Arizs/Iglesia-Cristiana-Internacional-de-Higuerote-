export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  side: "left" | "right";
}

export interface TimelineItemProps {
  member: TeamMember;
  isVisible: boolean;
  isLast: boolean;
}