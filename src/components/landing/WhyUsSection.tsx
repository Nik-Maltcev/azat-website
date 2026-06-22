const advantages = [
  { icon: "warehouse", title: "Собственный склад в РФ" },
  { icon: "local_shipping", title: "Отгрузка в день заказа" },
  { icon: "support_agent", title: "Помощь инженера в подборе" },
  { icon: "verified", title: "Гарантия 12 месяцев" },
];

export default function WhyUsSection() {
  return (
    <section className="py-12 bg-surface-container-highest border-y border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto">
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
