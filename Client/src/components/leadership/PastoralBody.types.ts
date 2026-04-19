export interface Pastor {
  id: number;
  subtitle: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface PastoralBodyProps {
  sectionTitle?: string;
  pastores?: Pastor[];
}