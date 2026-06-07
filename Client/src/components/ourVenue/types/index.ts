export interface HeroSectionData {
  label: string
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
  backgroundImage: string
}

export interface SanctuaryData {
  title: string
  description: string
  ctaText: string
  image: string
}

export interface LegacyStat {
  value: string
  label: string
}

export interface LegacyImpactData {
  title: string
  description: string
  stats: LegacyStat[]
  image: string
  decorativeText: string
}

export interface MinistryCardData {
  id: string
  tag: string
  title: string
  subtitle: string
  image: string
}

export interface ScheduleInfo {
  day: string
  times: string[]
}

export interface VisitPlanData {
  title: string
  subtitle: string
  addressTitle: string
  address: string
  scheduleTitle: string
  schedules: ScheduleInfo[]
}
