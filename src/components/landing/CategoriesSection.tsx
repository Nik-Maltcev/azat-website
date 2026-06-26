import Link from "next/link";

const categories = [
  {
    name: "Карданные валы и шрусы",
    description: "Карданные валы, крестовины, вилки, защитные кожухи для импортной сельхозтехники.",
    icon: "precision_manufacturing",
    large: true,
  },
  {
    name: "Режущие части",
    description: "",
    icon: "content_cut",
    large: false,
  },
  {
    name: "Подшипники и ступицы",
    description: "",
    icon: "settings",
    large: false,
  },
  {
    name: "Детали для жаток",
    description: "",
    icon: "agriculture",
    large: false,
  },
  {
    name: "Гидравлика",
    description: "",
    icon: "water_drop",
    large: false,
  },
  {
    name: "Запчасти для ТО",
    description: "",
    icon: "build",
    large: false,
  },
  {
    name: "Сельхоз шины",
    description: "",
    icon: "trip_origin",
    large: false,
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-16 bg-surface">
      <div className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto">
        <h2 className="text-headline-lg font-headline mb-10 text-on-surface">
          Выберите категорию товаров
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {categories.map((cat, index) => (
            <Link
              key={cat.name}
              href="/catalog"
              className={`group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-outline-variant bg-surface-container-high ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Icon background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-8xl text-outline/10 group-hover:text-primary/10 transition-colors">
                  {cat.icon}
                </span>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-headline-md font-headline text-on-surface mb-2">
                  {cat.name}
                </h3>
                {cat.description && (
                  <p className="text-body-sm text-on-surface-variant max-w-md">
                    {cat.description}
                  </p>
                )}
                <span className="inline-flex items-center gap-1 mt-4 text-primary text-technical-label uppercase">
                  В каталог
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
