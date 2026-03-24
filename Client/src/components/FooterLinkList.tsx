import type { FooterLinkListProps } from "../types/Footer";

export function FooterLinkList({ title, items }: FooterLinkListProps) {
  return (
    <div>
      <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-4">{title}</h5>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              className="text-sm font-inter text-slate-500 hover:text-blue-600 transition-all"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}