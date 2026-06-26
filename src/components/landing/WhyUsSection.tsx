const advantages = [
  { icon: "price_check", title: "Конкурентные цены" },
  { icon: "local_shipping", title: "Удобная доставка" },
  { icon: "history", title: "Опыт 8+ лет" },
  { icon: "inventory_2", title: "Обширный ассортимент" },
  { icon: "forum", title: "Открытые каналы коммуникаций" },
  { icon: "verified", title: "Обеспечение гарантией" },
  { icon: "storefront", title: "Открытые каналы поставщиков" },
  { icon: "engineering", title: "Консультация от инженера" },
];

export default function WhyUsSection() {
  return (
    <section className="py-12 bg-surface-container-highest border-y border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto">
        <h2 className="text-headline-lg font-headline mb-10 text-on-surface text-center">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {advantages.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4 shadow-sm text-primary">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h4 className="text-body-md font-headline text-on-surface">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
