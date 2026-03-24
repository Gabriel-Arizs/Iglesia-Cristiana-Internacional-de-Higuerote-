import type {  FooterLinks } from "../types/Footer";
import { FooterLinkList } from "./FooterLinkList";

const FOOTER_LINKS: FooterLinks = {
  church: [
    { label: "Nuestra Sede", href: "#" },
    { label: "Pastores", href: "#" },
    { label: "Visión G12", href: "#" },
    { label: "Donaciones", href: "#" },
  ],
  ministries: [
    { label: "Somos Uno", href: "#" },
    { label: "Kids", href: "#" },
    { label: "Grupos de Vida", href: "#" },
    { label: "Liderazgo", href: "#" },
  ],
  contact: [
    { label: "info@mci.org", href: "mailto:info@mci.org" },
    { label: "+57 (1) 364 9000", href: "tel:+5713649000" },
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto border-t border-slate-200/50 dark:border-slate-800/50 pt-12">
        
        {/* Columna de Marca */}
        <div className="col-span-1">
          <div className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4 font-headline">
            Misión Carismática
          </div>
          <p className="text-sm font-inter text-slate-500 dark:text-slate-400 mb-6">
            Una casa de oración para todas las naciones.
          </p>
          <div className="flex space-x-4">
            <SocialIcon icon="social_leaderboard" />
            <SocialIcon icon="camera" />
            <SocialIcon icon="play_circle" />
          </div>
        </div>

        {/* Listas de Enlaces */}
        <FooterLinkList title="Nuestra Iglesia" items={FOOTER_LINKS.church} />
        <FooterLinkList title="Ministerios" items={FOOTER_LINKS.ministries} />
        <FooterLinkList title="Contacto" items={FOOTER_LINKS.contact} />
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200/30 text-center">
        <p className="text-sm font-inter text-slate-500 dark:text-slate-400">
          © {currentYear} Misión Carismática Internacional. El Santuario Arquitectónico.
        </p>
      </div>
    </footer>
  );
}

// Mini-componente auxiliar para evitar repetición
function SocialIcon({ icon }: { icon: string }) {
  return (
    <a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
      <span className="material-symbols-outlined">{icon}</span>
    </a>
  );
}