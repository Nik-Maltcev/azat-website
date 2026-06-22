import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex text-body-sm text-on-surface-variant gap-2 items-center flex-wrap">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-2">
          {index > 0 && (
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          )}
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-on-surface font-semibold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
