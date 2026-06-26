export default function HeroSection() {
  return (
    <section className="relative bg-surface-container-high py-12 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 to-surface-container-high" />

      <div className="relative px-margin-mobile md:px-margin-desktop max-w-content mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Content Box */}
        <div className="bg-primary p-8 md:p-12 rounded-lg shadow-xl max-w-xl text-on-primary">
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline mb-6 leading-tight">
            Запчасти и комплектующие для импортной с/х техники по ценам на 15% ниже рыночных.
          </h1>
          <ul className="flex flex-col gap-4 mb-8">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container filled">
                check_circle
              </span>
              <span className="text-body-lg">От 40 производителей техники</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container filled">
                bolt
              </span>
              <span className="text-body-lg">В наличии и под заказ от 10 дней</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container filled">
                engineering
              </span>
              <span className="text-body-lg">Опыт более 8 лет</span>
            </li>
          </ul>
          <button className="bg-secondary-container hover:bg-secondary text-on-primary px-8 py-4 rounded font-headline text-body-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto flex justify-center items-center gap-2 uppercase tracking-wide">
            <span className="material-symbols-outlined">photo_camera</span>
            ПОДОБРАТЬ ПО ФОТО/РАЗМЕРУ
          </button>
        </div>

        {/* Hero visual placeholder */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="w-80 h-80 bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant">
            <span className="material-symbols-outlined text-8xl text-outline/30">precision_manufacturing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
