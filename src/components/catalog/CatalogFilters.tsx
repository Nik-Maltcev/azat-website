"use client";

export default function CatalogFilters() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 bg-surface-container-low border border-outline-variant rounded-xl p-4 flex flex-col gap-6 h-max md:sticky md:top-24">
      <div>
        <h2 className="font-headline text-[20px] font-bold text-on-surface mb-1">
          Технические фильтры
        </h2>
        <p className="text-on-surface-variant text-body-sm mb-6">Подбор по параметрам</p>
      </div>

      {/* Profile Type */}
      <div className="border-b border-outline-variant pb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-on-surface text-body-sm">Тип профиля</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <ProfileOption icon="change_history" label="Треугольник" active />
          <ProfileOption icon="lens" label="Лимон" />
          <ProfileOption icon="star" label="Звезда" />
        </div>
      </div>

      {/* Splines Count */}
      <div className="border-b border-outline-variant pb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-on-surface text-body-sm">Количество шлицов</span>
        </div>
        <div className="flex flex-col gap-3">
          {[6, 8, 20, 21].map((count) => (
            <label key={count} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={count === 8}
                className="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary"
              />
              <span className="text-body-sm text-on-surface">{count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Length */}
      <div className="border-b border-outline-variant pb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-on-surface text-body-sm">Длина (мм)</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            defaultValue={100}
            className="w-full bg-surface border border-outline-variant rounded p-2 text-body-sm text-center focus:ring-1 focus:ring-primary focus:border-primary"
          />
          <span className="text-outline-variant">—</span>
          <input
            type="number"
            defaultValue={1000}
            className="w-full bg-surface border border-outline-variant rounded p-2 text-body-sm text-center focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      {/* Torque */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-on-surface text-body-sm">Крутящий момент (Нм)</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            defaultValue={100}
            className="w-full bg-surface border border-outline-variant rounded p-2 text-body-sm text-center focus:ring-1 focus:ring-primary focus:border-primary"
          />
          <span className="text-outline-variant">—</span>
          <input
            type="number"
            defaultValue={800}
            className="w-full bg-surface border border-outline-variant rounded p-2 text-body-sm text-center focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      <button className="w-full bg-surface border border-primary text-primary font-bold py-3 rounded hover:bg-primary hover:text-white transition-colors">
        Применить фильтры
      </button>
    </aside>
  );
}

function ProfileOption({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div
        className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center transition-colors ${
          active
            ? "border-primary bg-primary-fixed"
            : "border-outline-variant bg-surface group-hover:border-primary"
        }`}
      >
        <span className={`material-symbols-outlined ${active ? "text-primary filled" : "text-outline group-hover:text-primary"}`}>
          {icon}
        </span>
      </div>
      <span className="text-[10px] text-on-surface-variant group-hover:text-primary">{label}</span>
    </div>
  );
}
