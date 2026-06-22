export default function CtaSection() {
  return (
    <section className="py-16 bg-surface">
      <div className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto">
        <div className="bg-green-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg text-white relative overflow-hidden">
          {/* Background icon */}
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
    </section>
  );
}
