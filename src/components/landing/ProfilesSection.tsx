const profiles = [
  {
    name: "Профиль Треугольник",
    icon: "change_history",
    svg: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 100 100">
        <polygon points="50,15 90,85 10,85" strokeLinejoin="round" />
        <circle cx="50" cy="62" r="15" />
      </svg>
    ),
  },
  {
    name: "Профиль Лимон",
    icon: "lens",
    svg: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 100 100">
        <path d="M 50 10 Q 90 50 50 90 Q 10 50 50 10 Z" strokeLinejoin="round" />
        <circle cx="50" cy="50" r="15" />
      </svg>
    ),
  },
  {
    name: "Профиль Звезда",
    icon: "star",
    svg: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 100 100">
        <path d="M 50 10 L 60 40 L 90 40 L 65 60 L 75 90 L 50 70 L 25 90 L 35 60 L 10 40 L 40 40 Z" strokeLinejoin="round" />
        <circle cx="50" cy="50" r="10" />
      </svg>
    ),
  },
];

export default function ProfilesSection() {
  return (
    <section className="py-12 bg-surface-container-low border-y border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto">
        <h2 className="text-headline-md font-headline mb-8 text-on-surface">
          Визуальный подбор профилей карданных валов
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col items-center hover:border-primary hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-6 w-full text-left">
                <div className="w-10 h-10 bg-primary-container text-on-primary-container rounded flex items-center justify-center">
                  <span className="material-symbols-outlined">{profile.icon}</span>
                </div>
                <h3 className="text-body-lg font-headline">{profile.name}</h3>
              </div>
              <div className="w-32 h-32 mb-6 flex items-center justify-center text-outline group-hover:text-primary transition-colors">
                {profile.svg}
              </div>
              <button className="w-full py-2 border border-outline text-on-surface-variant text-technical-label rounded hover:bg-surface-container hover:text-on-surface transition-colors">
                Выбрать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
