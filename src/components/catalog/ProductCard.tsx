interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  image: string | null;
}

export default function ProductCard({ product }: { product: Product }) {
  const formattedPrice = new Intl.NumberFormat("ru-RU").format(product.price);

  return (
    <div
      className={`bg-surface border border-outline-variant rounded-xl p-4 flex flex-col hover:shadow-[0_4px_20px_rgba(0,62,123,0.1)] transition-shadow duration-300 ${
        !product.inStock ? "opacity-70" : ""
      }`}
    >
      {/* Status badge */}
      <div className="flex justify-start mb-2">
        {product.inStock ? (
          <span className="bg-green-100 text-green-700 text-technical-label px-2 py-1 rounded font-bold">
            В наличии
          </span>
        ) : (
          <span className="bg-surface-container-high text-on-surface-variant text-technical-label px-2 py-1 rounded font-bold">
            Под заказ
          </span>
        )}
      </div>

      {/* Image */}
      <div className={`w-full h-48 bg-surface-container-low rounded-lg mb-4 flex items-center justify-center p-4 ${!product.inStock ? "grayscale" : ""}`}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="object-contain h-full w-full"
          />
        ) : (
          <span className="material-symbols-outlined text-6xl text-outline/30">
            precision_manufacturing
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="font-body text-body-md font-semibold text-on-surface mb-2 leading-tight">
        {product.name}
      </h3>

      {/* Price */}
      <div className="text-headline-md font-bold text-on-surface mb-4">
        от {formattedPrice} ₽
      </div>

      {/* Actions */}
      <div className="mt-auto flex flex-col gap-2">
        <button
          className={`w-full font-bold py-2 rounded transition-colors ${
            product.inStock
              ? "bg-primary text-white hover:bg-[#002b57]"
              : "bg-surface-variant text-on-surface-variant cursor-not-allowed"
          }`}
          disabled={!product.inStock}
        >
          В корзину
        </button>
        <button className="w-full bg-transparent border border-outline-variant text-on-surface font-semibold py-2 rounded hover:border-primary hover:text-primary transition-colors">
          Подобрать аналог
        </button>
      </div>
    </div>
  );
}
