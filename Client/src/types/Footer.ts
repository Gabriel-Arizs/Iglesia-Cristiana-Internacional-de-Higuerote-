export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinks {
  church: NavLink[];
  ministries: NavLink[];
  contact: NavLink[];
}

export interface FooterLinkListProps {
  title: string;
  items: NavLink[];
}