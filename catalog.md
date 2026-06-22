<!DOCTYPE html>

<html lang="ru"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Карданные валы - AgroParts Pro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&amp;family=Montserrat:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "secondary-fixed-dim": "#ffb693",
                        "on-primary-container": "#b0ccff",
                        "surface-variant": "#e0e3e5",
                        "surface-bright": "#f7f9fb",
                        "secondary": "#a04100",
                        "on-tertiary-fixed-variant": "#3d4759",
                        "surface-tint": "#175eae",
                        "on-tertiary-fixed": "#121c2c",
                        "inverse-surface": "#2d3133",
                        "primary-container": "#0055a5",
                        "on-background": "#191c1e",
                        "surface-container": "#eceef0",
                        "secondary-fixed": "#ffdbcc",
                        "on-error-container": "#93000a",
                        "on-tertiary-container": "#c1cbe1",
                        "on-surface": "#191c1e",
                        "surface": "#f7f9fb",
                        "primary-fixed-dim": "#a8c8ff",
                        "outline-variant": "#c2c6d3",
                        "tertiary": "#353f50",
                        "surface-dim": "#d8dadc",
                        "primary-fixed": "#d6e3ff",
                        "on-primary": "#ffffff",
                        "on-error": "#ffffff",
                        "surface-container-highest": "#e0e3e5",
                        "surface-container-lowest": "#ffffff",
                        "secondary-container": "#fe6b00",
                        "on-primary-fixed": "#001b3c",
                        "inverse-primary": "#a8c8ff",
                        "surface-container-high": "#e6e8ea",
                        "on-surface-variant": "#424751",
                        "error-container": "#ffdad6",
                        "on-tertiary": "#ffffff",
                        "on-primary-fixed-variant": "#00468a",
                        "background": "#f7f9fb",
                        "tertiary-fixed": "#d9e3f9",
                        "surface-container-low": "#f2f4f6",
                        "on-secondary": "#ffffff",
                        "tertiary-container": "#4c5668",
                        "on-secondary-container": "#572000",
                        "on-secondary-fixed-variant": "#7a3000",
                        "outline": "#727783",
                        "inverse-on-surface": "#eff1f3",
                        "primary": "#003e7b",
                        "on-secondary-fixed": "#351000",
                        "error": "#ba1a1a",
                        "tertiary-fixed-dim": "#bdc7dc"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "gutter": "24px",
                        "margin-desktop": "64px",
                        "base": "8px",
                        "margin-mobile": "16px",
                        "max-width": "1280px"
                    },
                    "fontFamily": {
                        "headline-xl": ["Montserrat"],
                        "body-md": ["Inter"],
                        "headline-md": ["Montserrat"],
                        "headline-lg-mobile": ["Montserrat"],
                        "headline-lg": ["Montserrat"],
                        "technical-label": ["Inter"],
                        "body-sm": ["Inter"],
                        "body-lg": ["Inter"]
                    },
                    "fontSize": {
                        "headline-xl": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
                        "technical-label": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.filled {
            font-variation-settings: 'FILL' 1;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
<!-- TopNavBar -->
<header class="bg-surface dark:bg-surface-dim text-primary dark:text-primary-fixed-dim font-body-md text-body-md w-full top-0 sticky border-b border-outline-variant dark:border-outline flat no shadows z-50">
<div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-max-width mx-auto">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[32px]">agriculture</span>
<span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">AgroParts Pro</span>
</div>
<div class="hidden md:flex items-center flex-1 max-w-2xl mx-8">
<div class="relative w-full">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-body-sm font-body-sm" placeholder="Поиск по артикулу или названию" type="text"/>
</div>
</div>
<div class="hidden md:flex items-center gap-6">
<nav class="flex gap-6">
<a class="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 cursor-pointer active:opacity-80 hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Catalog</a>
<a class="text-on-surface-variant dark:text-surface-variant cursor-pointer active:opacity-80 hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Compatibility</a>
<a class="text-on-surface-variant dark:text-surface-variant cursor-pointer active:opacity-80 hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">OEM Search</a>
<a class="text-on-surface-variant dark:text-surface-variant cursor-pointer active:opacity-80 hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Order Status</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="hidden md:flex flex-col items-end mr-4">
<span class="font-bold text-primary">8 (800) 551-35-90</span>
<span class="text-technical-label text-outline cursor-pointer hover:text-primary transition-colors">Заказать звонок</span>
</div>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">shopping_cart</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-colors hidden md:block">
<span class="material-symbols-outlined">account_circle</span>
</button>
<button class="md:hidden text-on-surface-variant">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
<div class="bg-surface-container-low py-1 border-b border-outline-variant">
<div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex justify-end items-center gap-2 text-technical-label text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">local_shipping</span>
                 Доставка по РФ
             </div>
</div>
</header>
<main class="flex-1 max-w-max-width mx-auto w-full px-margin-mobile md:px-margin-desktop py-8">
<!-- Breadcrumbs & Title -->
<div class="mb-8">
<nav class="flex text-body-sm text-on-surface-variant mb-4 gap-2 items-center">
<a class="hover:text-primary" href="#">Главная</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<a class="hover:text-primary" href="#">Каталог</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<span class="text-on-surface font-semibold">Карданные валы</span>
</nav>
<h1 class="font-headline-xl text-headline-xl text-on-surface">Карданные валы</h1>
</div>
<div class="flex flex-col md:flex-row gap-gutter">
<!-- Sidebar Filters -->
<aside class="w-full md:w-64 flex-shrink-0 bg-surface-container-low dark:bg-surface-container text-primary dark:text-primary-fixed-dim font-technical-label text-technical-label uppercase tracking-wider h-max sticky top-24 border border-outline-variant dark:border-outline rounded-xl p-4 flex flex-col gap-6 flat no shadows">
<div>
<h2 class="font-headline-md text-[20px] font-bold text-on-surface mb-1 normal-case tracking-normal">Технические фильтры</h2>
<p class="text-on-surface-variant text-body-sm normal-case tracking-normal mb-6">Precision Hardware Selection</p>
</div>
<!-- Profile Type -->
<div class="border-b border-outline-variant pb-6">
<div class="flex justify-between items-center mb-4 cursor-pointer">
<span class="font-bold text-on-surface">Тип профиля</span>
<span class="material-symbols-outlined text-outline">expand_less</span>
</div>
<div class="grid grid-cols-3 gap-2">
<div class="flex flex-col items-center gap-2 cursor-pointer group">
<div class="w-12 h-12 border-2 border-primary bg-primary-fixed rounded-lg flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-primary filled">change_history</span>
</div>
<span class="text-[10px] text-on-surface-variant group-hover:text-primary">Треугольник</span>
</div>
<div class="flex flex-col items-center gap-2 cursor-pointer group">
<div class="w-12 h-12 border border-outline-variant bg-surface rounded-lg flex items-center justify-center group-hover:border-primary transition-colors">
<div class="w-6 h-4 border-2 border-outline-variant rounded-full group-hover:border-primary"></div>
</div>
<span class="text-[10px] text-on-surface-variant group-hover:text-primary">Лимон</span>
</div>
<div class="flex flex-col items-center gap-2 cursor-pointer group">
<div class="w-12 h-12 border border-outline-variant bg-surface rounded-lg flex items-center justify-center group-hover:border-primary transition-colors">
<span class="material-symbols-outlined text-outline group-hover:text-primary">star</span>
</div>
<span class="text-[10px] text-on-surface-variant group-hover:text-primary">Звезда</span>
</div>
</div>
</div>
<!-- Splines Count -->
<div class="border-b border-outline-variant pb-6">
<div class="flex justify-between items-center mb-4 cursor-pointer">
<span class="font-bold text-on-surface">Количество шлицов</span>
<span class="material-symbols-outlined text-outline">expand_less</span>
</div>
<div class="flex flex-col gap-3">
<label class="flex items-center gap-3 cursor-pointer">
<input class="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary" type="checkbox"/>
<span class="text-body-sm normal-case tracking-normal text-on-surface">6</span>
</label>
<label class="flex items-center gap-3 cursor-pointer">
<input checked="" class="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary" type="checkbox"/>
<span class="text-body-sm normal-case tracking-normal text-on-surface">8</span>
</label>
<label class="flex items-center gap-3 cursor-pointer">
<input class="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary" type="checkbox"/>
<span class="text-body-sm normal-case tracking-normal text-on-surface">20</span>
</label>
<label class="flex items-center gap-3 cursor-pointer">
<input class="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary" type="checkbox"/>
<span class="text-body-sm normal-case tracking-normal text-on-surface">21</span>
</label>
</div>
</div>
<!-- Length -->
<div class="border-b border-outline-variant pb-6">
<div class="flex justify-between items-center mb-4 cursor-pointer">
<span class="font-bold text-on-surface">Длина (мм)</span>
<span class="material-symbols-outlined text-outline">expand_less</span>
</div>
<div class="px-2 mb-4">
<div class="h-1 bg-outline-variant rounded-full relative">
<div class="absolute left-0 right-[30%] h-full bg-primary rounded-full"></div>
<div class="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full cursor-pointer"></div>
<div class="absolute right-[30%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full cursor-pointer"></div>
</div>
</div>
<div class="flex items-center gap-2">
<input class="w-full bg-surface border border-outline-variant rounded p-2 text-body-sm normal-case text-center focus:ring-1 focus:ring-primary focus:border-primary" type="number" value="100"/>
<span class="text-outline-variant">-</span>
<input class="w-full bg-surface border border-outline-variant rounded p-2 text-body-sm normal-case text-center focus:ring-1 focus:ring-primary focus:border-primary" type="number" value="1000"/>
</div>
</div>
<!-- Torque -->
<div class="mb-4">
<div class="flex justify-between items-center mb-4 cursor-pointer">
<span class="font-bold text-on-surface">Крутящий момент (Нм)</span>
<span class="material-symbols-outlined text-outline">expand_less</span>
</div>
<div class="px-2 mb-4">
<div class="h-1 bg-outline-variant rounded-full relative">
<div class="absolute left-[10%] right-[20%] h-full bg-primary rounded-full"></div>
<div class="absolute left-[10%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full cursor-pointer"></div>
<div class="absolute right-[20%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full cursor-pointer"></div>
</div>
</div>
<div class="flex items-center gap-2">
<input class="w-full bg-surface border border-outline-variant rounded p-2 text-body-sm normal-case text-center focus:ring-1 focus:ring-primary focus:border-primary" type="number" value="100"/>
<span class="text-outline-variant">-</span>
<input class="w-full bg-surface border border-outline-variant rounded p-2 text-body-sm normal-case text-center focus:ring-1 focus:ring-primary focus:border-primary" type="number" value="800"/>
</div>
</div>
<button class="w-full bg-surface border border-primary text-primary font-bold py-3 rounded hover:bg-primary hover:text-white transition-colors normal-case tracking-normal">
                    Apply Filters
                </button>
</aside>
<!-- Product Grid Area -->
<div class="flex-1 flex flex-col gap-8">
<!-- Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Product Card 1 -->
<div class="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col hover:shadow-[0_4px_20px_rgba(0,62,123,0.1)] transition-shadow duration-300">
<div class="flex justify-start mb-2">
<span class="bg-[#e6f4ea] text-[#1e8e3e] text-technical-label px-2 py-1 rounded font-bold">В наличии</span>
</div>
<div class="w-full h-48 bg-surface-container-low rounded-lg mb-4 flex items-center justify-center p-4">
<img class="object-contain h-full w-full" data-alt="High quality studio photograph of an industrial agricultural PTO shaft (cardan shaft) lying diagonally on a pristine white background. The shaft is constructed of heavy-duty black steel with protective ribbed plastic covers. Professional lighting highlights the metallic textures and robust engineering. Clean, corporate, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWudONorVzC2VKHmQrwlFUfiE583KPsxFfkYkmOe7JJmDNGZp6DZUW5RUw5vEKWE60Dc8CVdD41sUzrWTGRomKM6Ejb2SnL2dAlsUQamuMVsCBc2-grr7iiWlPi_R46SBM8Gw20PlrEJINl7FmFCE6MwCDpPb3zTH6PHC9gEqIYESDfeIY1uw8yJt4gjlm_HLFtB0hWbjMbqXoGH2EvLCY_Go4gSX_DGxbv_VztuedKi9Ql8ccNeTi0YdRsCenfzU-AyxU9bR5vMsT"/>
</div>
<h3 class="font-body-md text-body-md font-semibold text-on-surface mb-2 leading-tight">Вал карданный 8 шлицов, L=710мм, 460Нм</h3>
<div class="text-headline-md font-bold text-on-surface mb-4">от 12 500 ₽</div>
<div class="mt-auto flex flex-col gap-2">
<button class="w-full bg-primary text-white font-bold py-2 rounded hover:bg-[#002b57] transition-colors">В корзину</button>
<button class="w-full bg-transparent border border-outline-variant text-on-surface font-semibold py-2 rounded hover:border-primary hover:text-primary transition-colors">Подобрать аналог</button>
</div>
</div>
<!-- Product Card 2 -->
<div class="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col hover:shadow-[0_4px_20px_rgba(0,62,123,0.1)] transition-shadow duration-300">
<div class="flex justify-start mb-2">
<span class="bg-[#e6f4ea] text-[#1e8e3e] text-technical-label px-2 py-1 rounded font-bold">В наличии</span>
</div>
<div class="w-full h-48 bg-surface-container-low rounded-lg mb-4 flex items-center justify-center p-4">
<img class="object-contain h-full w-full" data-alt="High quality studio photograph of an industrial agricultural PTO shaft (cardan shaft) lying diagonally on a pristine white background. The shaft is constructed of heavy-duty black steel with protective ribbed plastic covers. Professional lighting highlights the metallic textures and robust engineering. Clean, corporate, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH4dl8nsFt-nmfadEhhaTgesxYvQo_EWyrzz5MZop8FN4eCr6yg_PZGl32Of6YHflfecVhAjaNG-Yp3w1zVCpYexZO55gQcCjXkCmzX45xDP5pG4PDnWs1ziVMd6uvMusn-ZwfjIlXDXV2l9fPxh2Jj_TWfKti5X2Y4lyypskPKVWmRCExK3tP14t39br3im9zAN1xIydM92_TsHfbUYbGNXApotZ2UKCN5ftMDL3DUJyXmgpfj5SJtdmJkWov-VbZR7WtzozPJQej"/>
</div>
<h3 class="font-body-md text-body-md font-semibold text-on-surface mb-2 leading-tight">Вал карданный 8 шлицов, L=810мм, 460Нм</h3>
<div class="text-headline-md font-bold text-on-surface mb-4">от 13 200 ₽</div>
<div class="mt-auto flex flex-col gap-2">
<button class="w-full bg-primary text-white font-bold py-2 rounded hover:bg-[#002b57] transition-colors">В корзину</button>
<button class="w-full bg-transparent border border-outline-variant text-on-surface font-semibold py-2 rounded hover:border-primary hover:text-primary transition-colors">Подобрать аналог</button>
</div>
</div>
<!-- Product Card 3 -->
<div class="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col hover:shadow-[0_4px_20px_rgba(0,62,123,0.1)] transition-shadow duration-300">
<div class="flex justify-start mb-2">
<span class="bg-[#e6f4ea] text-[#1e8e3e] text-technical-label px-2 py-1 rounded font-bold">В наличии</span>
</div>
<div class="w-full h-48 bg-surface-container-low rounded-lg mb-4 flex items-center justify-center p-4">
<img class="object-contain h-full w-full" data-alt="High quality studio photograph of an industrial agricultural PTO shaft (cardan shaft) lying diagonally on a pristine white background. The shaft is constructed of heavy-duty black steel with protective ribbed plastic covers. Professional lighting highlights the metallic textures and robust engineering. Clean, corporate, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLn3CWXDourG5ClQcWpKI4mnf8J87PwnZQAKFEGGsRuP6hcMhCfzZ_lRix-LaOtaWVe5VQml_k8mx74KkU44sAOuYe_PpJ_spU8PyOiiW4zUFfqwFgJSlQO_5miUBzfiA8H-BYJH_Yh7klEnNLcZjbhzpkrdpV-1Dn3-HBdvANK7Lu43Kd_uy8KNNlDsAjq9gHoNrrLGjVsYHNz1azLxXP0XpbMZ-tzA3Fucq6MDqgL4JRP_UMVyWIT1-Lq7oi83sumNDNahDLBpRC"/>
</div>
<h3 class="font-body-md text-body-md font-semibold text-on-surface mb-2 leading-tight">Вал карданный 8 шлицов, L=1010мм, 460Нм</h3>
<div class="text-headline-md font-bold text-on-surface mb-4">от 14 500 ₽</div>
<div class="mt-auto flex flex-col gap-2">
<button class="w-full bg-primary text-white font-bold py-2 rounded hover:bg-[#002b57] transition-colors">В корзину</button>
<button class="w-full bg-transparent border border-outline-variant text-on-surface font-semibold py-2 rounded hover:border-primary hover:text-primary transition-colors">Подобрать аналог</button>
</div>
</div>
<!-- Product Card 4 -->
<div class="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col hover:shadow-[0_4px_20px_rgba(0,62,123,0.1)] transition-shadow duration-300">
<div class="flex justify-start mb-2">
<span class="bg-[#e6f4ea] text-[#1e8e3e] text-technical-label px-2 py-1 rounded font-bold">В наличии</span>
</div>
<div class="w-full h-48 bg-surface-container-low rounded-lg mb-4 flex items-center justify-center p-4">
<img class="object-contain h-full w-full" data-alt="High quality studio photograph of an industrial agricultural PTO shaft (cardan shaft) lying diagonally on a pristine white background. The shaft is constructed of heavy-duty black steel with protective ribbed plastic covers. Professional lighting highlights the metallic textures and robust engineering. Clean, corporate, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClEk8mrvN--NGjRyt2OKcuFW-QGse9Fec9XJO6MWMEDCLCV4p21I2OsYqBRr4Fyv04AiMVchbzyDfhOQKSVOqyQ2rOSQtjDKzKgarAX2LmtvrzDlkAnozN3O-zDOLfMZXjsICZJ-4h3xl_W8yJQtokbLxLysPG8m6JhpfOGz-danET9F5U3SdHz1Dcup0ux4Q4w68saVbX2co3H-b1L0_Hq7zozmMmOp1yfmno_r7GbVeIBSJt6CnJFBAWrMea-ECGDgLkpNh-CSLQ"/>
</div>
<h3 class="font-body-md text-body-md font-semibold text-on-surface mb-2 leading-tight">Вал карданный 6 шлицов, L=710мм, 210Нм</h3>
<div class="text-headline-md font-bold text-on-surface mb-4">от 9 500 ₽</div>
<div class="mt-auto flex flex-col gap-2">
<button class="w-full bg-primary text-white font-bold py-2 rounded hover:bg-[#002b57] transition-colors">В корзину</button>
<button class="w-full bg-transparent border border-outline-variant text-on-surface font-semibold py-2 rounded hover:border-primary hover:text-primary transition-colors">Подобрать аналог</button>
</div>
</div>
<!-- Product Card 5 -->
<div class="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col hover:shadow-[0_4px_20px_rgba(0,62,123,0.1)] transition-shadow duration-300">
<div class="flex justify-start mb-2">
<span class="bg-[#e6f4ea] text-[#1e8e3e] text-technical-label px-2 py-1 rounded font-bold">В наличии</span>
</div>
<div class="w-full h-48 bg-surface-container-low rounded-lg mb-4 flex items-center justify-center p-4">
<img class="object-contain h-full w-full" data-alt="High quality studio photograph of an industrial agricultural PTO shaft (cardan shaft) lying diagonally on a pristine white background. The shaft is constructed of heavy-duty black steel with protective ribbed plastic covers. Professional lighting highlights the metallic textures and robust engineering. Clean, corporate, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEbE3vYVz3BaHMIFgKDFyVzQtWTfQTykfAUgmvN2PfUSgm3r5524Vz6c1JKW6DrCeWG6YKcRcQQ-FAzyds-nSqFVGoA5FbT7n7UodrQflh9q15G0X8Ip_B_3wWNIIwLfdk4RpNyZW4UqYw4b_gdzqA-tMCEgdty2iQahbtYXOz7zrB36E6EIP513VS9YMoSSVDHfE10ZO-DdhqCpvcdcg6caQCTLMbH-dsC6d9Juevl3Ef-fJ9ivuWZ7yG_QujZnBkf3s00GH6OzeY"/>
</div>
<h3 class="font-body-md text-body-md font-semibold text-on-surface mb-2 leading-tight">Вал карданный 6 шлицов, L=810мм, 210Нм</h3>
<div class="text-headline-md font-bold text-on-surface mb-4">от 10 200 ₽</div>
<div class="mt-auto flex flex-col gap-2">
<button class="w-full bg-primary text-white font-bold py-2 rounded hover:bg-[#002b57] transition-colors">В корзину</button>
<button class="w-full bg-transparent border border-outline-variant text-on-surface font-semibold py-2 rounded hover:border-primary hover:text-primary transition-colors">Подобрать аналог</button>
</div>
</div>
<!-- Product Card 6 -->
<div class="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col hover:shadow-[0_4px_20px_rgba(0,62,123,0.1)] transition-shadow duration-300 opacity-70">
<div class="flex justify-start mb-2">
<span class="bg-surface-container-high text-on-surface-variant text-technical-label px-2 py-1 rounded font-bold">Под заказ</span>
</div>
<div class="w-full h-48 bg-surface-container-low rounded-lg mb-4 flex items-center justify-center p-4 grayscale">
<img class="object-contain h-full w-full opacity-60" data-alt="High quality studio photograph of an industrial agricultural PTO shaft (cardan shaft) lying diagonally on a pristine white background. The shaft is constructed of heavy-duty black steel with protective ribbed plastic covers. Professional lighting highlights the metallic textures and robust engineering. Clean, corporate, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMLprJxCaD8sOoi-r9GqKXolMzaoXZTEiazC8zkvT5xejOxR0Dl6hR58lPj5_xKdEZTRav01YJ1hXFRDjDzGtguX1AHjvtKl4uRi9Nc0TTtMV30VSkORs9vs7TLLveTVfScRhwNP6svNX0wmXw8ebtOe87R45bU1u5oXJDS0d1kIroZBPRZgqA61ySTck_y0dPTKk9jwqdS-uNhfqLI_MvmXEFXGsIti2_lNAARMPybNrS2TRbIYlV0qqlhtpcVze7GQf-xhOLep5L"/>
</div>
<h3 class="font-body-md text-body-md font-semibold text-on-surface mb-2 leading-tight">Вал карданный 21 шлиц, L=1010мм, 800Нм</h3>
<div class="text-headline-md font-bold text-on-surface mb-4">от 22 500 ₽</div>
<div class="mt-auto flex flex-col gap-2">
<button class="w-full bg-surface-variant text-on-surface-variant font-bold py-2 rounded cursor-not-allowed">В корзину</button>
<button class="w-full bg-transparent border border-outline-variant text-on-surface font-semibold py-2 rounded hover:border-primary hover:text-primary transition-colors">Подобрать аналог</button>
</div>
</div>
</div>
<!-- Conversion Banner -->
<div class="bg-[#34a853] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg mt-8 text-white relative overflow-hidden">
<div class="absolute -right-10 -bottom-10 opacity-20 pointer-events-none">
<span class="material-symbols-outlined text-[200px]">support_agent</span>
</div>
<div class="flex items-center gap-6 z-10">
<div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
<span class="material-symbols-outlined text-[48px] filled text-white">chat</span>
</div>
<div>
<h3 class="font-headline-lg-mobile md:font-headline-lg font-bold mb-2 leading-tight">Не нашли нужный вал?</h3>
<p class="font-body-lg text-white/90">Пришлите фото шильдика в WhatsApp, и наши инженеры подберут аналог.</p>
</div>
</div>
<button class="bg-white text-[#34a853] font-bold py-4 px-8 rounded-xl shadow-md hover:bg-surface-bright transition-colors whitespace-nowrap z-10 w-full md:w-auto text-lg">
                        Подобрать аналог
                    </button>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container-highest dark:bg-inverse-surface text-on-surface dark:text-inverse-on-surface font-body-sm text-body-sm w-full mt-12 border-t border-outline-variant dark:border-outline flat no shadows">
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-margin-mobile md:px-margin-desktop py-12 max-w-max-width mx-auto">
<div class="flex flex-col gap-4">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-on-surface dark:text-inverse-on-surface text-[24px]">agriculture</span>
<span class="font-headline-sm text-headline-sm text-on-surface dark:text-inverse-on-surface font-bold">AgroParts Pro</span>
</div>
<p class="text-on-surface-variant dark:text-surface-variant max-w-xs">
                    Industrial grade agricultural components. Precision engineering for reliable field performance.
                </p>
<div class="mt-4 text-on-surface-variant dark:text-surface-variant">
                    © 2024 Industrial Agro Systems. Technical Reliability Guaranteed.
                </div>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-bold text-on-surface dark:text-inverse-on-surface uppercase tracking-wider text-technical-label mb-2">Navigation</h4>
<nav class="flex flex-col gap-3">
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">OEM Cross-Reference</a>
<a class="text-secondary dark:text-secondary-fixed font-bold hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Catalog</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Compatibility</a>
</nav>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-bold text-on-surface dark:text-inverse-on-surface uppercase tracking-wider text-technical-label mb-2">Support</h4>
<nav class="flex flex-col gap-3">
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Contact Support</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Warehouse Locations</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Shipping Policy</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors" href="#">Privacy Policy</a>
</nav>
</div>
</div>
</footer>
</body></html>