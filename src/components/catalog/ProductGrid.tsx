import ProductCard from "./ProductCard";

// Моковые данные — потом заменятся на запрос к Strapi API
const mockProducts = [
  {
    id: 1,
    name: "Вал карданный 8 шлицов, L=710мм, 460Нм",
    price: 12500,
    inStock: true,
    image: null,
  },
  {
    id: 2,
    name: "Вал карданный 8 шлицов, L=810мм, 460Нм",
    price: 13200,
    inStock: true,
    image: null,
  },
  {
    id: 3,
    name: "Вал карданный 8 шлицов, L=1010мм, 460Нм",
    price: 14500,
    inStock: true,
    image: null,
  },
  {
    id: 4,
    name: "Вал карданный 6 шлицов, L=710мм, 210Нм",
    price: 9500,
    inStock: true,
    image: null,
  },
  {
    id: 5,
    name: "Вал карданный 6 шлицов, L=810мм, 210Нм",
    price: 10200,
    inStock: true,
    image: null,
  },
  {
    id: 6,
    name: "Вал карданный 21 шлиц, L=1010мм, 800Нм",
    price: 22500,
    inStock: false,
    image: null,
  },
];

export default function ProductGrid() {
  return (
    <div className="flex-1 flex flex-col gap-8">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* CTA Banner */}
      <div className="bg-green-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg text-white relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-20 pointer-events-none">
          <span className="material-symbols-outlined text-[200px]">support_agent</span>
        </div>

        <div className="flex items-center gap-6 z-10">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
            <span className="material-symbols-outlined text-5xl filled text-white">chat</span>
          </div>
          <div>
            <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg font-bold mb-2 leading-tight">
              Не нашли нужный вал?
            </h3>
            <p className="text-body-lg text-white/90">
              Пришлите фото шильдика в WhatsApp, и наши инженеры подберут аналог.
            </p>
          </div>
        </div>

        <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl shadow-md hover:bg-surface-bright transition-colors whitespace-nowrap z-10 w-full md:w-auto text-lg">
          Подобрать аналог
        </button>
      </div>
    </div>
  );
}
