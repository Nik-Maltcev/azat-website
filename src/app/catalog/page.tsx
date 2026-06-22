import CatalogFilters from "@/components/catalog/CatalogFilters";
import ProductGrid from "@/components/catalog/ProductGrid";
import Breadcrumbs from "@/components/catalog/Breadcrumbs";

export const metadata = {
  title: "Каталог карданных валов — ARD-AGRO",
  description: "Карданные валы для сельхозтехники. Фильтр по профилю, шлицам, длине и крутящему моменту.",
};

export default function CatalogPage() {
  return (
    <div className="max-w-content mx-auto w-full px-margin-mobile md:px-margin-desktop py-8">
      {/* Breadcrumbs & Title */}
      <div className="mb-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Каталог", href: "/catalog" },
            { label: "Карданные валы" },
          ]}
        />
        <h1 className="font-headline text-headline-xl text-on-surface mt-4">
          Карданные валы
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-gutter">
        {/* Sidebar Filters */}
        <CatalogFilters />

        {/* Product Grid */}
        <ProductGrid />
      </div>
    </div>
  );
}
