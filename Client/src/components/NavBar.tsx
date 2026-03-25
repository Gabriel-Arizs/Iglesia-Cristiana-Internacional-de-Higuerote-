import type { NavItem } from "../types/navBar";

const NAV_LINKS: NavItem[] = [
  { label: "Inicio", href: "#", isActive: true },
  { label: "Ministerios", href: "#" },
  { label: "Nuestra Sede", href: "#" },
  { label: "Legado", href: "#" },
];

export  function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 py-0.5 bg-white dark:bg-slate-950">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        
        <div className="text-xl font-bold text-blue-900 dark:text-blue-100 uppercase tracking-tighter font-headline">
          Misión Carismática
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-inter tracking-tight transition-colors ${
                link.isActive
                  ? "text-blue-900 dark:text-blue-400 font-bold border-b-2 border-blue-900 dark:border-blue-400 pb-1"
                  : "text-slate-600 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-200"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Call to Action Button */}
          <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all scale-95 active:scale-90 duration-200">
            Visítanos
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary p-2 focus:outline-none" aria-label="Abrir menú">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar