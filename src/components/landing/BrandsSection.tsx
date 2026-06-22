const brands = [
  { name: "CLAAS", color: "text-primary" },
  { name: "John Deere", color: "text-green-700", icon: "eco" },
  { name: "KUHN", color: "text-red-700" },
  { name: "NEW HOLLAND", color: "text-blue-800" },
  { name: "CASE IH", color: "text-red-600" },
  { name: "KRONE", color: "text-on-surface" },
  { name: "AMAZONE", color: "text-green-800" },
  { name: "HORSCH", color: "text-red-700" },
];

export default function BrandsSection() {
  return (
    <section id="brands" className="py-12 bg-surface">
      <div className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto">
        <h2 className="text-headline-md font-headline mb-8 text-on-surface">
          Запчасти для техники мировых брендов
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="h-16 flex items-center justify-center border border-outline-variant rounded bg-surface-container-lowest grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer p-4"
            >
              <span className={`font-headline font-bold text-sm ${brand.color}`}>
                {brand.icon && (
                  <span className="material-symbols-outlined text-sm mr-1">{brand.icon}</span>
                )}
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
