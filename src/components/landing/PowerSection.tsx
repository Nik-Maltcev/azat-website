const series = [
  {
    name: "Серия 1",
    torque: "до 210 Нм",
    icon: "hardware",
    description: "Опрыскиватели, сеялки точного высева, разбрасыватели удобрений малого объема.",
  },
  {
    name: "Серия 4",
    torque: "до 460 Нм",
    icon: "build",
    description: "Пресс-подборщики, кормосмесители, косилки, картофелеуборочные комбайны.",
  },
  {
    name: "Серия 8",
    torque: "до 830 Нм",
    icon: "construction",
    description: "Зерноуборочные комбайны, кормоуборочные комбайны, тяжёлые почвообрабатывающие агрегаты.",
  },
];

export default function PowerSection() {
  return (
    <section className="py-16 bg-surface">
      <div className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto">
        <h2 className="text-headline-md font-headline mb-8 text-on-surface">
          Подбор по мощности (Нм)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {series.map((item) => (
            <div
              key={item.name}
              className="bg-surface-container-lowest border border-outline-variant rounded p-6 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-headline-md font-headline text-primary">{item.name}</h3>
                  <span className="bg-surface-container-high px-2 py-1 rounded text-technical-label text-on-surface-variant">
                    {item.torque}
                  </span>
                </div>
                <div className="h-32 bg-surface flex items-center justify-center mb-4 rounded border border-outline-variant border-dashed">
                  <span className="material-symbols-outlined text-outline text-4xl">{item.icon}</span>
                </div>
                <p className="text-body-sm text-on-surface-variant mb-4">{item.description}</p>
              </div>
              <button className="w-full py-2 bg-surface-container hover:bg-primary-container text-on-surface hover:text-on-primary-container border border-outline-variant text-technical-label rounded transition-colors uppercase">
                Выбрать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
