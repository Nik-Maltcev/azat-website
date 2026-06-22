import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest text-on-surface border-t border-outline-variant mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-margin-mobile md:px-margin-desktop py-12 max-w-content mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-on-surface text-2xl">agriculture</span>
            <span className="font-headline text-headline-md text-on-surface font-bold">ARD-AGRO</span>
          </div>
          <p className="text-on-surface-variant text-body-sm max-w-xs">
            Запчасти для импортной сельхозтехники. Собственный склад в РФ, отгрузка в день заказа.
          </p>
          <div className="mt-4 text-on-surface-variant text-body-sm">
            © {new Date().getFullYear()} ARD-AGRO. Все права защищены.
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-on-surface uppercase tracking-wider text-technical-label mb-2">
            Навигация
          </h4>
          <nav className="flex flex-col gap-3">
            <Link href="/catalog" className="text-on-surface-variant hover:text-primary transition-colors text-body-sm">
              Каталог
            </Link>
            <Link href="/#brands" className="text-on-surface-variant hover:text-primary transition-colors text-body-sm">
              Бренды
            </Link>
            <Link href="/#categories" className="text-on-surface-variant hover:text-primary transition-colors text-body-sm">
              Категории
            </Link>
          </nav>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-on-surface uppercase tracking-wider text-technical-label mb-2">
            Контакты
          </h4>
          <div className="flex flex-col gap-3 text-body-sm">
            <a href="tel:88005513590" className="text-on-surface-variant hover:text-primary transition-colors">
              8 (800) 551-35-90
            </a>
            <p className="text-on-surface-variant">
              Пн–Пт: 9:00–18:00 (МСК)
            </p>
            <a href="mailto:info@ard-agro.ru" className="text-on-surface-variant hover:text-primary transition-colors">
              info@ard-agro.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
