<!DOCTYPE html>

<html lang="ru"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ARD-AGRO - Запчасти для импортной с/х техники</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&amp;family=Montserrat:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "primary": "#003e7b",
                        "on-error": "#ffffff",
                        "surface-container-highest": "#e0e3e5",
                        "primary-fixed": "#d6e3ff",
                        "on-tertiary-container": "#c1cbe1",
                        "surface-container-high": "#e6e8ea",
                        "outline": "#727783",
                        "on-primary-container": "#b0ccff",
                        "on-secondary-fixed-variant": "#7a3000",
                        "tertiary-container": "#4c5668",
                        "on-background": "#191c1e",
                        "tertiary": "#353f50",
                        "inverse-primary": "#a8c8ff",
                        "on-tertiary-fixed": "#121c2c",
                        "tertiary-fixed": "#d9e3f9",
                        "surface-container-low": "#f2f4f6",
                        "primary-fixed-dim": "#a8c8ff",
                        "secondary": "#a04100",
                        "secondary-container": "#fe6b00",
                        "on-primary": "#ffffff",
                        "on-tertiary-fixed-variant": "#3d4759",
                        "tertiary-fixed-dim": "#bdc7dc",
                        "surface-variant": "#e0e3e5",
                        "on-error-container": "#93000a",
                        "error-container": "#ffdad6",
                        "secondary-fixed": "#ffdbcc",
                        "on-primary-fixed": "#001b3c",
                        "outline-variant": "#c2c6d3",
                        "primary-container": "#0055a5",
                        "surface-tint": "#175eae",
                        "on-tertiary": "#ffffff",
                        "surface": "#f7f9fb",
                        "on-surface": "#191c1e",
                        "inverse-on-surface": "#eff1f3",
                        "surface-container-lowest": "#ffffff",
                        "on-surface-variant": "#424751",
                        "secondary-fixed-dim": "#ffb693",
                        "inverse-surface": "#2d3133",
                        "on-secondary-fixed": "#351000",
                        "on-secondary": "#ffffff",
                        "on-primary-fixed-variant": "#00468a",
                        "on-secondary-container": "#572000",
                        "surface-dim": "#d8dadc",
                        "error": "#ba1a1a",
                        "background": "#f7f9fb",
                        "surface-container": "#eceef0",
                        "surface-bright": "#f7f9fb"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "margin-desktop": "64px",
                        "base": "8px",
                        "margin-mobile": "16px",
                        "gutter": "24px",
                        "max-width": "1280px"
                    },
                    "fontFamily": {
                        "technical-label": ["Inter"],
                        "headline-xl": ["Montserrat"],
                        "body-sm": ["Inter"],
                        "headline-lg": ["Montserrat"],
                        "headline-lg-mobile": ["Montserrat"],
                        "body-lg": ["Inter"],
                        "body-md": ["Inter"],
                        "headline-md": ["Montserrat"]
                    },
                    "fontSize": {
                        "technical-label": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "headline-xl": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md antialiased">
<!-- Block 1: Header (TopNavBar variant) -->
<header class="bg-surface border-b border-outline-variant w-full sticky top-0 z-50">
<div class="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-4 md:h-20 gap-4 md:gap-0">
<!-- Logo -->
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">agriculture</span>
<span class="text-headline-md font-headline-md text-primary tracking-tight">ARD-AGRO</span>
</div>
<!-- Search Bar -->
<div class="flex-1 w-full md:max-w-md mx-0 md:mx-8 relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full pl-10 pr-4 py-2 border border-outline-variant rounded bg-surface-container-lowest text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Поиск по артикулу или названию" type="text"/>
</div>
<!-- Actions & Info -->
<div class="flex items-center gap-6">
<div class="hidden lg:flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined">local_shipping</span>
<span class="text-technical-label font-technical-label text-primary">Доставка по РФ</span>
</div>
<div class="flex flex-col items-end">
<a class="text-headline-md font-headline-md text-on-surface hover:text-primary transition-colors" href="tel:88005513590">8 (800) 551-35-90</a>
<button class="text-technical-label font-technical-label text-primary hover:text-secondary transition-colors underline decoration-dashed underline-offset-4">Заказать звонок</button>
</div>
</div>
</div>
</header>
<main>
<!-- Block 2: Hero Section -->
<section class="relative bg-surface-container-high py-12 md:py-24 overflow-hidden">
<!-- Background Image -->
<div class="absolute inset-0 w-full h-full">
<img alt="A massive, pristine agricultural PTO shaft resting on a clean, well-lit industrial steel workbench. In the background, rows of organized heavy-duty warehouse shelving are slightly out of focus. The lighting is bright and technical, highlighting the metallic precision and robust rubber boots of the shaft. Corporate blue and gray tones dominate the scene." class="w-full h-full object-cover opacity-20" data-alt="A massive, pristine agricultural PTO shaft resting on a clean, well-lit industrial steel workbench. In the background, rows of organized heavy-duty warehouse shelving are slightly out of focus. The lighting is bright and technical, highlighting the metallic precision and robust rubber boots of the shaft. Corporate blue and gray tones dominate the scene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0m-zuGy-gtOHl_OIukgUXGK7FtwYl4skIO7c7WJHDDswVvlA0025hZTy_G3QPgLN5UeT0tLpYMES51mC5yeAh-Vxo0xRj4jjll8UDEcMcBwLkyx4vj0OD3H005zhcug5hL9NzJTaCzAJtST2YqiK2IOTHdiN8duzyD1dObeoWDtazL8EzsSyvUKd_ZmGJpq-uou2-1QXEN742mzg3U4h6K0ZYswIwEQCG_aetplOpOzhV6-6TilWS9sjOkakm9cJJJbwJZgF9875N"/>
</div>
<div class="relative px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto flex flex-col lg:flex-row items-center gap-8">
<!-- Content Box -->
<div class="bg-primary p-8 md:p-12 rounded-lg shadow-xl max-w-xl text-on-primary">
<h1 class="text-headline-lg-mobile md:text-headline-lg font-headline-lg mb-6 leading-tight">В наличии на складе, отгрузка день в день. Помощь в подборе экспертом.</h1>
<ul class="flex flex-col gap-4 mb-8">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary-container" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="text-body-lg font-body-lg">Огромный склад в РФ</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary-container" style="font-variation-settings: 'FILL' 1;">bolt</span>
<span class="text-body-lg font-body-lg">Отгрузка в день заказа</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary-container" style="font-variation-settings: 'FILL' 1;">engineering</span>
<span class="text-body-lg font-body-lg">Помощь инженера в подборе</span>
</li>
</ul>
<button class="bg-secondary-container hover:bg-secondary text-on-primary px-8 py-4 rounded font-headline-md text-body-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto flex justify-center items-center gap-2 uppercase tracking-wide">
<span class="material-symbols-outlined">photo_camera</span>
                        ПОДОБРАТЬ ПО ФОТО/РАЗМЕРУ
                    </button>
</div>
<!-- Hero Image (Foreground) -->
<div class="flex-1 w-full flex justify-center lg:justify-end">
<img alt="A high-resolution, detailed close-up of a heavy-duty universal joint and PTO shaft component. The metal is shiny and precisely machined, resting on a stark white studio background. The corporate industrial aesthetic emphasizes technical reliability and robust engineering suitable for large agricultural machinery." class="max-w-full h-auto drop-shadow-2xl rounded" data-alt="A high-resolution, detailed close-up of a heavy-duty universal joint and PTO shaft component. The metal is shiny and precisely machined, resting on a stark white studio background. The corporate industrial aesthetic emphasizes technical reliability and robust engineering suitable for large agricultural machinery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO7MkxVAvFaxvEf5CdxCBaDYKr--LpZ-V0oYaK57z93UbTD69IWb2dkVk1GpCtwhjJDnAAwVg4jZpikPQoW-PucAfx6s7WGQjGujO7aUnfed7Ocb7HHXvIM4u6-8WenjOXVKhfwyrbV991ID6n4CiblTSSLTxPO17WMGF199vWlw7q_1sWHn0F6cxehlXQonfNsTF2aKAiWAcxPnV7C4CAwnzlajUNVQhpCQKXGUimJWQiR94C0amH0z0JNKRGdAxjsv_PkL6N-bfU"/>
</div>
</div>
</section>
<!-- Block 3: Brand Logos -->
<section class="py-12 bg-surface">
<div class="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
<h2 class="text-headline-md font-headline-md mb-8 text-on-surface">Запчасти для техники мировых брендов</h2>
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
<!-- Pseudo-logos for industrial feel using typography and simple borders -->
<div class="h-16 flex items-center justify-center border border-outline-variant rounded bg-surface-container-lowest grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer p-4">
<span class="font-headline-md text-primary font-bold">CLAAS</span>
</div>
<div class="h-16 flex items-center justify-center border border-outline-variant rounded bg-surface-container-lowest grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer p-4">
<span class="font-headline-md text-green-700 font-bold flex items-center gap-1"><span class="material-symbols-outlined">eco</span> JD</span>
</div>
<div class="h-16 flex items-center justify-center border border-outline-variant rounded bg-surface-container-lowest grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer p-4">
<span class="font-headline-md text-red-700 font-bold tracking-widest">KUHN</span>
</div>
<div class="h-16 flex items-center justify-center border border-outline-variant rounded bg-surface-container-lowest grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer p-4">
<span class="font-headline-md text-blue-800 font-bold">NEW H.</span>
</div>
<div class="h-16 flex items-center justify-center border border-outline-variant rounded bg-surface-container-lowest grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer p-4">
<span class="font-headline-md text-red-600 font-bold italic">CASE IH</span>
</div>
<div class="h-16 flex items-center justify-center border border-outline-variant rounded bg-surface-container-lowest grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer p-4">
<span class="font-headline-md text-on-surface font-bold tracking-tighter">KRONE</span>
</div>
<div class="h-16 flex items-center justify-center border border-outline-variant rounded bg-surface-container-lowest grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer p-4">
<span class="font-headline-md text-green-800 font-bold">AMAZONE</span>
</div>
<div class="h-16 flex items-center justify-center border border-outline-variant rounded bg-surface-container-lowest grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer p-4">
<span class="font-headline-md text-red-700 font-bold uppercase">Horsch</span>
</div>
</div>
</div>
</section>
<!-- Block 4: Visual Profiles -->
<section class="py-12 bg-surface-container-low border-y border-outline-variant">
<div class="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
<h2 class="text-headline-md font-headline-md mb-8 text-on-surface">Визуальный подбор профилей карданных валов</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Profile Card 1 -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col items-center hover:border-primary hover:shadow-md transition-all group">
<div class="flex items-center gap-2 mb-6 w-full text-left">
<div class="w-10 h-10 bg-primary-container text-on-primary-container rounded flex items-center justify-center">
<span class="material-symbols-outlined">change_history</span>
</div>
<h3 class="text-body-lg font-headline-md">Профиль Треугольник</h3>
</div>
<div class="w-32 h-32 mb-6 flex items-center justify-center text-outline group-hover:text-primary transition-colors">
<svg class="w-full h-full" fill="none" stroke="currentColor" stroke-width="4" viewbox="0 0 100 100">
<polygon points="50,15 90,85 10,85" stroke-linejoin="round"></polygon>
<circle cx="50" cy="62" r="15"></circle>
</svg>
</div>
<button class="w-full py-2 border border-outline text-on-surface-variant font-technical-label text-technical-label rounded hover:bg-surface-container hover:text-on-surface transition-colors">Выбрать</button>
</div>
<!-- Profile Card 2 -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col items-center hover:border-primary hover:shadow-md transition-all group">
<div class="flex items-center gap-2 mb-6 w-full text-left">
<div class="w-10 h-10 bg-primary-container text-on-primary-container rounded flex items-center justify-center">
<span class="material-symbols-outlined">lens</span>
</div>
<h3 class="text-body-lg font-headline-md">Профиль Лимон</h3>
</div>
<div class="w-32 h-32 mb-6 flex items-center justify-center text-outline group-hover:text-primary transition-colors">
<svg class="w-full h-full" fill="none" stroke="currentColor" stroke-width="4" viewbox="0 0 100 100">
<path d="M 50 10 Q 90 50 50 90 Q 10 50 50 10 Z" stroke-linejoin="round"></path>
<circle cx="50" cy="50" r="15"></circle>
</svg>
</div>
<button class="w-full py-2 border border-outline text-on-surface-variant font-technical-label text-technical-label rounded hover:bg-surface-container hover:text-on-surface transition-colors">Выбрать</button>
</div>
<!-- Profile Card 3 -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col items-center hover:border-primary hover:shadow-md transition-all group">
<div class="flex items-center gap-2 mb-6 w-full text-left">
<div class="w-10 h-10 bg-primary-container text-on-primary-container rounded flex items-center justify-center">
<span class="material-symbols-outlined">star</span>
</div>
<h3 class="text-body-lg font-headline-md">Профиль Звезда</h3>
</div>
<div class="w-32 h-32 mb-6 flex items-center justify-center text-outline group-hover:text-primary transition-colors">
<svg class="w-full h-full" fill="none" stroke="currentColor" stroke-width="4" viewbox="0 0 100 100">
<path d="M 50 10 L 60 40 L 90 40 L 65 60 L 75 90 L 50 70 L 25 90 L 35 60 L 10 40 L 40 40 Z" stroke-linejoin="round"></path>
<circle cx="50" cy="50" r="10"></circle>
</svg>
</div>
<button class="w-full py-2 border border-outline text-on-surface-variant font-technical-label text-technical-label rounded hover:bg-surface-container hover:text-on-surface transition-colors">Выбрать</button>
</div>
</div>
</div>
</section>
<!-- Block 5: Categories (Bento Grid Style) -->
<section class="py-16 bg-surface">
<div class="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
<h2 class="text-headline-lg font-headline-lg mb-10 text-on-surface">Категории запчастей</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
<!-- Item 1: Large -->
<a class="group relative rounded-lg overflow-hidden lg:col-span-2 lg:row-span-2 shadow-sm hover:shadow-lg transition-all border border-outline-variant" href="#">
<img alt="Close-up of heavy industrial gears and universal joints inside a well-organized spare parts warehouse. The metallic surfaces reflect cool, clinical lighting. The environment is clean, structured, and exudes technical precision." class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up of heavy industrial gears and universal joints inside a well-organized spare parts warehouse. The metallic surfaces reflect cool, clinical lighting. The environment is clean, structured, and exudes technical precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcV6r_zr4YCjNH9I_C99U8VY5m1mYPiy0mBEqgUct9ctVIHmTTVpsBP32fYSM7qdJ7aNRAHjx7g2Cs1dLHYOSY7WvJpgIWRzPa5mo6g1kbzHWn5c1ViRWcsEqMvivbCmeH85M1NF6jrernPYYUT7Se-LPbd1Jufs7fyAcQU7jIO0VXLUcArIjpGTalLw_KXGzJPXh4vkmq7yF-HUe-D-04xbU1kFQ7TDR3FcZOu0Q7YeM3xb3BvatltxCYWzySjrfKPUjturR2ihsr"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-6 w-full">
<h3 class="text-headline-md font-headline-md text-on-surface mb-2">Крестовины</h3>
<p class="text-body-sm text-on-surface-variant max-w-md">Надежные крестовины для высоких нагрузок. От ведущих европейских OEM производителей.</p>
<span class="inline-flex items-center gap-1 mt-4 text-primary font-technical-label text-technical-label uppercase">В каталог <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
</div>
</a>
<!-- Item 2 -->
<a class="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-outline-variant" href="#">
<img alt="Rows of precision-machined steel yokes and adapters arranged neatly on an industrial rack. The focus is sharp on the foreground items, highlighting the robust engineering and smooth metal finish typical of high-quality agricultural components." class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Rows of precision-machined steel yokes and adapters arranged neatly on an industrial rack. The focus is sharp on the foreground items, highlighting the robust engineering and smooth metal finish typical of high-quality agricultural components." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJL4wg-4M20fRvmHT5aSRm-7KPIqP2ONoAuHt8bGXHGrIGX7lwydQnEkPuNZssx3jokmJXLNICc3_ctZ_FLUVCVGZw2NLjNEUuvzVMMglkW_IszXVRS3IM8QOnRU-VXPx_n6qFMSiK4MuH45hadoHGU5Lntk4dQyaKQRvL3U2KgK6bmgCfKRu2w1Re9jxDMyz-x8tD7qAgyfUyrEpRBFxJSrPZrlzRcWK7W2BR8AgkqG7qN97ihp8D4Mh01mBFrUXf8PK0fcDvHjhq"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-6">
<h3 class="text-headline-md font-headline-md text-on-surface mb-1">Вилки</h3>
<span class="inline-flex items-center gap-1 mt-2 text-primary font-technical-label text-technical-label uppercase">В каталог <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
</div>
</a>
<!-- Item 3 -->
<a class="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-outline-variant" href="#">
<img alt="Long, heavy-duty steel profile tubes leaning vertically in a warehouse staging area. The lighting emphasizes the solid structural integrity of the tubes, essential for power take-off shafts in heavy machinery." class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Long, heavy-duty steel profile tubes leaning vertically in a warehouse staging area. The lighting emphasizes the solid structural integrity of the tubes, essential for power take-off shafts in heavy machinery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_nJ4kI3kPFS7qYKFz7C-oOGjGyWc3p7oY1lP-k79-JEvGhPsOv7pkDobNUBNZw13PphifwHsmIwip4GH6kEDzds7N4Ardlhd1spqA_rPGcklfuZSKGqDRmRjYoIjqNd0XyW2cQWJ5IpEzijXLaPJnWCQdzI6hRGX9yplSy5pG3moVUIJK1DOB1sWwKvmyqooZpnLQsn0idxp77AZAF2fPDgI7hdALsP-MortAVXgN_tjiFOY2HuIc4yhlaVibVwXvE_qehcxJoANK"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-6">
<h3 class="text-headline-md font-headline-md text-on-surface mb-1">Трубы (Профили)</h3>
<span class="inline-flex items-center gap-1 mt-2 text-primary font-technical-label text-technical-label uppercase">В каталог <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
</div>
</a>
<!-- Item 4 -->
<a class="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-outline-variant" href="#">
<img alt="Durable black plastic safety guards and cones for PTO shafts, stacked efficiently in a warehouse. The texture of the safety plastic is visible under bright, neutral industrial lighting." class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Durable black plastic safety guards and cones for PTO shafts, stacked efficiently in a warehouse. The texture of the safety plastic is visible under bright, neutral industrial lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2fHQ05o8uaDhIiB7YHH7lY8jHBLKtF8HrTOW2EAL2JDI2zfzR-hJGsPWW1ReK7Zn0nwJs-0qkCjkQ1psDaYHfM8Lrc2ozFgLUwbA6ewbLZwtN19waQLEFCLg6JltUhrunfEDIMHbsAXkClvuoc6DJ-ToBOFoJ9xifWLx7dGksYMn58jRra46ZZuCFewH4eq3HhlY2dB4fLcarQb3Kh67JZicVZ59-4YuD7qm7IU5hZgVpArTpJuH0RGKlqmyqmxSLo4TP5TZeqcs_"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-6">
<h3 class="text-headline-md font-headline-md text-on-surface mb-1">Защитные кожухи</h3>
<span class="inline-flex items-center gap-1 mt-2 text-primary font-technical-label text-technical-label uppercase">В каталог <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
</div>
</a>
<!-- Item 5 -->
<a class="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-outline-variant" href="#">
<div class="absolute inset-0 bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-6xl text-outline opacity-20">settings_applications</span>
</div>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-6">
<h3 class="text-headline-md font-headline-md text-on-surface mb-1">Адаптеры и Муфты</h3>
<span class="inline-flex items-center gap-1 mt-2 text-primary font-technical-label text-technical-label uppercase">В каталог <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
</div>
</a>
</div>
</div>
</section>
<!-- Block 6: Why us -->
<section class="py-12 bg-surface-container-highest border-y border-outline-variant">
<div class="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div class="flex flex-col items-center">
<div class="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4 shadow-sm text-primary">
<span class="material-symbols-outlined text-3xl">warehouse</span>
</div>
<h4 class="text-body-md font-headline-md text-on-surface">Собственный склад в РФ</h4>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4 shadow-sm text-primary">
<span class="material-symbols-outlined text-3xl">local_shipping</span>
</div>
<h4 class="text-body-md font-headline-md text-on-surface">Отгрузка в день заказа</h4>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4 shadow-sm text-primary">
<span class="material-symbols-outlined text-3xl">support_agent</span>
</div>
<h4 class="text-body-md font-headline-md text-on-surface">Помощь инженера в подборе</h4>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4 shadow-sm text-primary">
<span class="material-symbols-outlined text-3xl">verified</span>
</div>
<h4 class="text-body-md font-headline-md text-on-surface">Гарантия 12 месяцев</h4>
</div>
</div>
</div>
</section>
<!-- Block 7: Selection by Power -->
<section class="py-16 bg-surface">
<div class="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
<h2 class="text-headline-md font-headline-md mb-8 text-on-surface">Подбор по мощности (Нм)</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="bg-surface-container-lowest border border-outline-variant rounded p-6 hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-4">
<h3 class="text-headline-md font-headline-md text-primary">Серия 1</h3>
<span class="bg-surface-container-high px-2 py-1 rounded text-technical-label font-technical-label text-on-surface-variant">до 210 Нм</span>
</div>
<div class="h-32 bg-surface flex items-center justify-center mb-4 rounded border border-outline-variant border-dashed">
<span class="material-symbols-outlined text-outline text-4xl">hardware</span>
</div>
<p class="text-body-sm text-on-surface-variant mb-4">Опрыскиватели, сеялки точного высева, разбрасыватели удобрений малого объема.</p>
</div>
<button class="w-full py-2 bg-surface-container hover:bg-primary-container text-on-surface hover:text-on-primary-container border border-outline-variant font-technical-label text-technical-label rounded transition-colors uppercase">Выбрать</button>
</div>
<div class="bg-surface-container-lowest border border-outline-variant rounded p-6 hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-4">
<h3 class="text-headline-md font-headline-md text-primary">Серия 4</h3>
<span class="bg-surface-container-high px-2 py-1 rounded text-technical-label font-technical-label text-on-surface-variant">до 460 Нм</span>
</div>
<div class="h-32 bg-surface flex items-center justify-center mb-4 rounded border border-outline-variant border-dashed">
<span class="material-symbols-outlined text-outline text-4xl">build</span>
</div>
<p class="text-body-sm text-on-surface-variant mb-4">Пресс-подборщики, кормосмесители, косилки, картофелеуборочные комбайны.</p>
</div>
<button class="w-full py-2 bg-surface-container hover:bg-primary-container text-on-surface hover:text-on-primary-container border border-outline-variant font-technical-label text-technical-label rounded transition-colors uppercase">Выбрать</button>
</div>
<div class="bg-surface-container-lowest border border-outline-variant rounded p-6 hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-4">
<h3 class="text-headline-md font-headline-md text-primary">Серия 8</h3>
<span class="bg-surface-container-high px-2 py-1 rounded text-technical-label font-technical-label text-on-surface-variant">до 830 Нм</span>
</div>
<div class="h-32 bg-surface flex items-center justify-center mb-4 rounded border border-outline-variant border-dashed">
<span class="material-symbols-outlined text-outline text-4xl">handyman</span>
</div>
<p class="text-body-sm text-on-surface-variant mb-4">Тяжелые фрезы, мульчеры, кормоуборочные комбайны, крупногабаритная техника.</p>
</div>
<button class="w-full py-2 bg-surface-container hover:bg-primary-container text-on-surface hover:text-on-primary-container border border-outline-variant font-technical-label text-technical-label rounded transition-colors uppercase">Выбрать</button>
</div>
</div>
</div>
</section>
<!-- Block 8: Useful materials -->
<section class="py-12 bg-primary-container text-on-primary-container">
<div class="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h2 class="text-headline-md font-headline-md mb-2">Полезные материалы для инженеров</h2>
<p class="text-body-md opacity-90">Скачайте техническую документацию для точного подбора деталей.</p>
</div>
<div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<button class="bg-surface text-primary hover:bg-surface-container-lowest px-6 py-3 rounded font-technical-label text-technical-label flex items-center justify-center gap-2 transition-colors shadow-sm">
<span class="material-symbols-outlined">picture_as_pdf</span>
                        Таблица совместимости крестовин
                    </button>
<button class="bg-transparent border border-on-primary-container hover:bg-on-primary-container/10 px-6 py-3 rounded font-technical-label text-technical-label flex items-center justify-center gap-2 transition-colors">
<span class="material-symbols-outlined">table</span>
                        Таблица подбора по сериям
                    </button>
</div>
</div>
</section>
<!-- Block 9: Live from Warehouse -->
<section class="py-16 bg-surface border-b border-outline-variant">
<div class="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
<div class="flex items-center gap-3 mb-8">
<div class="w-3 h-3 bg-secondary-container rounded-full animate-pulse"></div>
<h2 class="text-headline-md font-headline-md text-on-surface">Новости со склада</h2>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<div class="relative aspect-square rounded overflow-hidden group">
<img alt="A warehouse worker operating a forklift to move a large pallet of neatly packaged agricultural machinery parts. The warehouse is vast, with high ceilings and rows of tall steel racking filled with inventory. Industrial lighting casts a cool, efficient glow over the scene." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A warehouse worker operating a forklift to move a large pallet of neatly packaged agricultural machinery parts. The warehouse is vast, with high ceilings and rows of tall steel racking filled with inventory. Industrial lighting casts a cool, efficient glow over the scene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP0fvgSp5TKM8kzXkViktn3sjdm2y2hEtzHd00Z1ZoQwGhngzTO6wVX6-iVjPsJVLSlqLz5vwv_Bxp0laaOE0Ufxq21qaiu4ICuekJ_B3c21l5rg6FTv9F_qKjQU-yojjFRkyNbw9kmN4Lu8kHohU8IJnCsIPAEBALDSbEnhGE8KgAdt3q1ZUIknyTQLBgo8Vrfk8McmsJj_Ds73CA84O5rYYkuanzNfKkPhHC_p8UnL5QGDi0cAoHlLqzAwNL5SOTkDtFvgtZUDy-"/>
<div class="absolute bottom-2 left-2 bg-surface/90 backdrop-blur px-2 py-1 rounded text-technical-label font-technical-label text-on-surface text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">schedule</span> Сегодня, 14:30
                        </div>
</div>
<div class="relative aspect-square rounded overflow-hidden group">
<img alt="Close up of several sturdy cardboard boxes sealed with industrial tape, sitting on a wooden pallet ready for shipping. Shipping labels are attached, indicating a fast-paced dispatch environment within a large spare parts distribution center." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up of several sturdy cardboard boxes sealed with industrial tape, sitting on a wooden pallet ready for shipping. Shipping labels are attached, indicating a fast-paced dispatch environment within a large spare parts distribution center." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOhj-YqFwRORvUulqUGF20tY2Y8oT5OqWdje1JHPZvazh-6Y1RcdnXr_9y0tT_OXk3RlJrmnuIaQgaM_S9f9vZc5sL3NMVxQbqjm94ND0ghQ5N3jsC4FhyZbDlOLfwaDFIUTiRtO81kWaEMWS9pKaiGDsT_NubisLI28zyzskpYL-SBAtWuVpgA4-44hvVig0YJgDQwVwy4NGwwpQnoaisqXN-rmgcwdgVHla9TDKajDYVoxnMDkqEnQt1ctIPMaGlT9x492a8-5iZ"/>
<div class="absolute bottom-2 left-2 bg-surface/90 backdrop-blur px-2 py-1 rounded text-technical-label font-technical-label text-on-surface text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">schedule</span> Сегодня, 11:15
                        </div>
</div>
<div class="relative aspect-square rounded overflow-hidden group">
<img alt="A pristine, newly unwrapped heavy-duty universal joint resting on an inspection table in a warehouse setting. A clipboard with technical specifications lies next to it, suggesting rigorous quality control before shipping to agricultural clients." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A pristine, newly unwrapped heavy-duty universal joint resting on an inspection table in a warehouse setting. A clipboard with technical specifications lies next to it, suggesting rigorous quality control before shipping to agricultural clients." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY9KSbh3W6P35WbAsMtzTxIqSNfkDh83WUPdGEHNPrgLrlboDYY1T0ntV0YKfyqOGBrJtdiBt8Tf_HMEOakfmYggrdW3RivlvUKMrWQSqg3yu_wJSRlJU5JoZmp7LRkXVXug_6FmlejvNqNbs4OSi0e97rXWdJAecTlAHj0PDJXfVVlbtYlWps_pfHqpvce614C9FVilAJizRy__1kP8EoJlZl_Ud6JJ4jjkuvtiFHVWYNxMFSUd8T2yYYNktFmF6Qt35dk6hJ9F3N"/>
<div class="absolute bottom-2 left-2 bg-surface/90 backdrop-blur px-2 py-1 rounded text-technical-label font-technical-label text-on-surface text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">schedule</span> Вчера, 16:40
                        </div>
</div>
<div class="relative aspect-square rounded overflow-hidden group bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer border border-outline-variant border-dashed">
<div class="text-center text-primary">
<span class="material-symbols-outlined text-4xl mb-2">video_library</span>
<p class="text-technical-label font-technical-label">Смотреть все<br/>отгрузки</p>
</div>
</div>
</div>
</div>
</section>
<!-- Block 10: Physical Contacts -->
<section class="py-16 bg-surface-container-lowest">
<div class="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div class="order-2 lg:order-1 h-[400px] bg-surface-container rounded-lg overflow-hidden border border-outline-variant relative">
<!-- Placeholder map using an image to simulate embed while keeping code clean -->
<img alt="A simplified digital map interface showing a location pin in a generic urban area. The map uses a light, modern color scheme with subtle roads and green spaces, reflecting a corporate utility aesthetic." class="w-full h-full object-cover opacity-80" data-alt="A simplified digital map interface showing a location pin in a generic urban area. The map uses a light, modern color scheme with subtle roads and green spaces, reflecting a corporate utility aesthetic." data-location="Krasnodar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvABt_Vvr9HcbUFwtqW_YTZ2W9O_cZhIAzD-U_cWcXqcKSGzDH11HRDX7t4Kcny1XkxIQ0KJX_s5o4WWU9Nu9Qax857omLScv-2D_HlWqxVudL3XwBCh7VrzNUKkgk99f9l5KUjGHFg_w1673jWSaPZMYcexyUKbHLXVzIrzci0DrcY2h5Ibb-kixuIAm1G6Bx0h3iJtPj9jjIhBARGWHL8l8wj9sguL21Wwz7TCrFSPuRwLfA2Z29x6_1UlilN5UapEu_u-72wdGf"/>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary drop-shadow-md">
<span class="material-symbols-outlined text-5xl" style="font-variation-settings: 'FILL' 1;">location_on</span>
</div>
</div>
<div class="order-1 lg:order-2">
<h2 class="text-headline-lg font-headline-lg mb-8 text-on-surface">Контакты</h2>
<ul class="flex flex-col gap-6">
<li class="flex items-start gap-4">
<div class="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">location_on</span>
</div>
<div>
<h4 class="text-body-sm font-technical-label text-outline mb-1 uppercase tracking-wider">Адрес склада и офиса</h4>
<p class="text-body-lg text-on-surface">г. Краснодар, ул. Соколова 52, офис 10</p>
</div>
</li>
<li class="flex items-start gap-4">
<div class="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">schedule</span>
</div>
<div>
<h4 class="text-body-sm font-technical-label text-outline mb-1 uppercase tracking-wider">Режим работы</h4>
<p class="text-body-lg text-on-surface">Пн-Пт: 9:00 - 18:00 (МСК)</p>
</div>
</li>
<li class="flex items-start gap-4">
<div class="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">call</span>
</div>
<div>
<h4 class="text-body-sm font-technical-label text-outline mb-1 uppercase tracking-wider">Телефон (Бесплатно по РФ)</h4>
<a class="text-body-lg font-headline-md text-primary hover:underline" href="tel:88005513590">8 (800) 551-35-90</a>
</div>
</li>
<li class="flex items-start gap-4">
<div class="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center shrink-0">
<span class="material-symbols-outlined">mail</span>
</div>
<div>
<h4 class="text-body-sm font-technical-label text-outline mb-1 uppercase tracking-wider">E-mail</h4>
<a class="text-body-lg text-primary hover:underline" href="mailto:info@ard-agro.ru">info@ard-agro.ru</a>
</div>
</li>
</ul>
</div>
</div>
</section>
</main>
<!-- Block 11: Footer (Footer variant) -->
<footer class="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant w-full py-12 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto">
<div class="col-span-1 md:col-span-1 flex flex-col gap-4">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">agriculture</span>
<span class="text-headline-sm font-headline-md text-on-surface dark:text-inverse-on-surface tracking-tight">ARD-AGRO</span>
</div>
<p class="text-body-sm text-on-surface-variant dark:text-on-surface-variant mt-2">© 2024 ARD-AGRO. Industrial PTO Solutions.<br/>Поставка запчастей для с/х техники.</p>
</div>
<div class="col-span-1 flex flex-col gap-3">
<h4 class="text-body-md font-headline-md text-on-surface dark:text-inverse-on-surface mb-2">Навигация</h4>
<a class="text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">Каталог</a>
<a class="text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">Как заказать</a>
<a class="text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">О нас</a>
<a class="text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">Контакты</a>
</div>
<div class="col-span-1 flex flex-col gap-3">
<h4 class="text-body-md font-headline-md text-on-surface dark:text-inverse-on-surface mb-2">Информация</h4>
<a class="text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">Privacy Policy</a>
<a class="text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">Terms of Service</a>
<a class="text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">ISO Certification</a>
<a class="text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">Returns</a>
</div>
<div class="col-span-1 flex flex-col gap-3">
<h4 class="text-body-md font-headline-md text-on-surface dark:text-inverse-on-surface mb-2">Связь</h4>
<a class="text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-sm">chat</span> Telegram
            </a>
<a class="text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-sm">chat_bubble</span> WhatsApp
            </a>
</div>
</footer>
<!-- Floating FAB Widget -->
<div class="fixed bottom-6 right-6 z-50 flex items-center gap-3">
<div class="bg-surface border border-outline-variant shadow-lg rounded-full px-4 py-2 hidden md:flex items-center gap-2">
<span class="text-technical-label font-technical-label text-on-surface">Пришлите фото детали - подберем аналог</span>
<span class="material-symbols-outlined text-outline">arrow_forward</span>
</div>
<button class="bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 focus:outline-none">
<span class="material-symbols-outlined text-3xl">chat</span>
</button>
</div>
</body></html>