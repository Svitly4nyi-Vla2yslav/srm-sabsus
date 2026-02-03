# SABSUS (SRM) — POS / CRM / Operations Platform (Marketing Website)

> **SABSUS** is a modern all-in-one platform concept for restaurants, cafés, bakeries, dark kitchens and retail: POS, CRM, staff operations, inventory, analytics, marketing, integrations and scalable workflows.
>
> This repository contains the **marketing website** (landing + service pages) built as a **React + TypeScript + Vite** SPA with SEO metadata, sitemap/robots support, OpenGraph images, and optional pre-rendering (react-snap) for better indexing.

---

## 🇺🇦 Українська

### Опис проєкту
**SABSUS (SRM)** — це маркетинговий вебсайт продукту, який позиціонується як **універсальна платформа для закладів харчування та ритейлу**: POS, CRM, аналітика, управління персоналом, склад/інвентар, маркетинг, інтеграції та масштабування.  
Цей репозиторій сфокусований **саме на сайті-презентації** (лендінг + сторінки сервісів), а не на внутрішній “адмінці” продукту.

Сайт створено як **SPA** на **React + TypeScript + Vite**, з акцентом на:
- швидку розробку та модульну структуру компонентів;
- мультимовність (i18next);
- SEO-метадані, OG/Twitter прев’ю, sitemap/robots;
- можливість пререндеру для SEO (react-snap), щоб сторінки типу `/service/*` віддавали не лише один `index.html`.

### Основні розділи сайту
- **Home** — головний лендінг із ключовим позиціонуванням та перевагами.
- **Service** — огляд напрямків платформи та переходи на деталізацію.
- **Service pages** (підсторінки) — сторінки з конкретними блоками:
  - Customer Experience
  - POS & Staff Operations
  - Kitchen & Fulfillment
  - Inventory & Warehousing
  - Analytics & Management
  - Marketing & Customization
  - Integration & Scaling
- **About** — опис підходу/команди/бачення.
- **Pricing** — пакети/ціноутворення (SaaS та White-label).
- **Contact** — форма/контактні дані/CTA.

### Ключові можливості (як задум продукту, відображений на сайті)
- POS для продажів та операцій у точках.
- CRM: база клієнтів, лояльність, сегментація.
- Управління персоналом: ролі, зміни, зарплата, контроль доступу.
- Склад/інвентар: облік, списання, закупівлі, мінімальні залишки.
- Аналітика: продажі, прибуток, топ-позиції, менеджмент показників.
- Маркетинг: акції, промокоди, комунікації, white-label бренд.
- Інтеграції: доставка, платежі, зовнішні сервіси.
- Масштабування: кілька локацій, єдині процеси, стандартизація.

### Технології
- **React 19 + TypeScript**
- **Vite**
- **React Router**
- **i18next** (мультимовність)
- UI бібліотеки: **MUI / Antd** (частково)
- Анімації: **Framer Motion**, **AOS**, **Swiper**
- Візуальні/3D елементи: **Spline / Three.js** (важкі модулі, завантажуються обережно)
- Безпека/санітизація: **DOMPurify**
- SEO head management: **@unhead/react**
- Деплой: **Netlify** (redirects/headers)

### Структура та деплой (коротко)
- SPA fallback через Netlify redirects: всі маршрути ведуть на `/index.html`.
- Під SEO використовується:
  - `robots.txt`
  - `sitemap.xml`
  - OpenGraph прев’ю (`/og/*`)
  - canonical + meta tags у `index.html` і/або на рівні сторінок.
- Для SEO пререндеру можливе використання **react-snap**, щоб кожен маршрут мав статичний HTML у `dist/`.

### Цільова аудиторія
- Власники ресторанів/кафе/пекарень/дарк-кітченів
- Мережі з кількома локаціями
- Ритейл точки, яким потрібні POS + аналітика + CRM
- Команди, що хочуть white-label рішення

---

## 🇷🇺 Русский

### Описание проекта
**SABSUS (SRM)** — это маркетинговый сайт продукта, позиционируемого как **единая платформа для ресторанов, кафе, пекарен, dark kitchens и ритейла**: POS, CRM, аналитика, персонал, склад/инвентарь, маркетинг, интеграции и масштабирование.  
Данный репозиторий содержит именно **презентационный сайт** (лендинг + страницы сервисов), а не внутреннюю админ-панель продукта.

Сайт реализован как **SPA** на **React + TypeScript + Vite** с упором на:
- компонентный подход и масштабируемую архитектуру;
- многоязычность (i18next);
- SEO-метаданные, OG/Twitter превью, sitemap/robots;
- опциональный пререндеринг (react-snap) для лучшей индексации страниц `/service/*`.

### Основные разделы сайта
- **Home** — главный лендинг и позиционирование.
- **Service** — обзор направлений платформы.
- **Service pages** — подробные страницы по направлениям:
  - Customer Experience
  - POS & Staff Operations
  - Kitchen & Fulfillment
  - Inventory & Warehousing
  - Analytics & Management
  - Marketing & Customization
  - Integration & Scaling
- **About** — видение/команда/подход.
- **Pricing** — тарифы (SaaS и White-label).
- **Contact** — контакты и CTA.

### Основные возможности (концепт продукта, отраженный на сайте)
- POS для продаж и операций.
- CRM: клиенты, лояльность, сегментация.
- Персонал: роли, смены, зарплаты, доступы.
- Склад/инвентарь: учет, списания, закупки.
- Аналитика: показатели продаж, управление и отчеты.
- Маркетинг: акции, промокоды, коммуникации, white-label.
- Интеграции: доставка, оплаты, внешние сервисы.
- Масштабирование: несколько локаций, единые стандарты.

### Технологии
- **React 19 + TypeScript**
- **Vite**
- **React Router**
- **i18next**
- UI: **MUI / Antd**
- Анимации: **Framer Motion**, **AOS**, **Swiper**
- 3D/визуал: **Spline / Three.js**
- Безопасность: **DOMPurify**
- SEO head: **@unhead/react**
- Деплой: **Netlify**

### SEO и деплой
- SPA fallback через Netlify redirects (`/* -> /index.html`).
- `robots.txt`, `sitemap.xml`, OpenGraph изображения.
- Возможен **react-snap** пререндер, чтобы каждая страница имела статический HTML.

### ЦА
- рестораны/кафе/пекарни/dark kitchens
- сети и франшизы
- ритейл точки
- компании, которым нужно white-label решение

---

## 🇩🇪 Deutsch

### Projektbeschreibung
**SABSUS (SRM)** ist eine Marketing-Website für ein Produkt, das als **All-in-One Plattform** für Restaurants, Cafés, Bäckereien, Dark Kitchens und Retail positioniert wird: POS, CRM, Analytics, Personal-/Schichtverwaltung, Inventory/Warenlager, Marketing, Integrationen und Skalierung.  
Dieses Repository enthält die **Marketing-/Landing-Website** (Landing + Service-Seiten), nicht das interne Admin-System.

Die Website ist als **SPA** mit **React + TypeScript + Vite** gebaut und fokussiert auf:
- skalierbare Komponentenstruktur;
- Mehrsprachigkeit (i18next);
- SEO-Metadaten, OpenGraph/Twitter Cards, sitemap/robots;
- optionales Pre-Rendering (react-snap), damit Routen wie `/service/*` für Suchmaschinen statisches HTML erhalten.

### Website-Bereiche
- **Home** — Haupt-Landing und Value Proposition.
- **Service** — Überblick über Funktionsbereiche.
- **Service pages** — Detailseiten pro Bereich:
  - Customer Experience
  - POS & Staff Operations
  - Kitchen & Fulfillment
  - Inventory & Warehousing
  - Analytics & Management
  - Marketing & Customization
  - Integration & Scaling
- **About** — Vision/Ansatz/Team.
- **Pricing** — Pakete (SaaS & White-label).
- **Contact** — Kontakt/CTA.

### Produkt-Konzept (über die Website kommuniziert)
- POS für Verkauf & tägliche Abläufe.
- CRM: Kunden, Loyalität, Segmentierung.
- Staff Ops: Rollen, Schichten, Payroll-Logik, Zugriffssteuerung.
- Inventory: Bestand, Abschreibungen, Einkauf.
- Analytics: KPI-Dashboard, Reports, Management-Insights.
- Marketing: Kampagnen, Coupons, White-label Branding.
- Integrationen: Delivery, Payments, externe Services.
- Skalierung: Multi-Location, standardisierte Prozesse.

### Tech-Stack
- **React 19 + TypeScript**
- **Vite**
- **React Router**
- **i18next**
- UI: **MUI / Antd**
- Animation: **Framer Motion**, **AOS**, **Swiper**
- Visual/3D: **Spline / Three.js**
- Security: **DOMPurify**
- SEO head: **@unhead/react**
- Deployment: **Netlify**

### SEO / Deployment Hinweise
- SPA-Fallback via Netlify Redirects (`/* -> /index.html`).
- `robots.txt`, `sitemap.xml`, OG-Bilder.
- Optional: **react-snap** Pre-Rendering für bessere Indexierung.

### Zielgruppe
- Gastronomie-Betriebe, Dark Kitchens
- Ketten & Franchise
- Retail-Standorte
- White-label-Partner

---

## 🇬🇧 English

### Project overview
**SABSUS (SRM)** is a marketing website for a product concept positioned as an **all-in-one platform** for restaurants, cafés, bakeries, dark kitchens, and retail: POS, CRM, analytics, staff operations, inventory/warehousing, marketing, integrations, and scaling.  
This repository focuses on the **public marketing site** (landing + service pages), not the internal admin dashboard.

The website is a **React + TypeScript + Vite** SPA built with:
- a modular, scalable component structure;
- i18n via i18next;
- SEO metadata, OpenGraph/Twitter previews, sitemap/robots;
- optional pre-rendering (react-snap) so routes like `/service/*` can provide static HTML for search engines.

### Site sections
- **Home** — main landing and positioning.
- **Service** — overview of platform areas.
- **Service pages** — dedicated pages for each area:
  - Customer Experience
  - POS & Staff Operations
  - Kitchen & Fulfillment
  - Inventory & Warehousing
  - Analytics & Management
  - Marketing & Customization
  - Integration & Scaling
- **About** — vision and approach.
- **Pricing** — packages (SaaS + White-label).
- **Contact** — contact and CTA.

### Key capabilities (product concept reflected by the site)
- POS for daily operations and sales.
- CRM: customers, loyalty, segmentation.
- Staff operations: roles, shifts, payroll logic, access control.
- Inventory & warehousing: stock tracking, purchasing, write-offs.
- Analytics: dashboards, KPIs, management insights.
- Marketing: promotions, coupons, communication, white-label branding.
- Integrations: delivery, payments, external services.
- Scaling: multi-location support and standardized workflows.

### Tech stack
- **React 19 + TypeScript**
- **Vite**
- **React Router**
- **i18next**
- UI: **MUI / Antd**
- Animations: **Framer Motion**, **AOS**, **Swiper**
- Visual/3D: **Spline / Three.js**
- Security: **DOMPurify**
- SEO head management: **@unhead/react**
- Deployment: **Netlify**

### SEO & deployment notes
- SPA fallback via Netlify redirects (`/* -> /index.html`).
- Includes `robots.txt`, `sitemap.xml`, OG images.
- Optional **react-snap** pre-rendering can generate static HTML per route for better indexing.

### Target audience
- restaurants, cafés, bakeries, dark kitchens
- multi-location chains and franchises
- retail businesses needing POS + CRM + analytics
- partners looking for a white-label solution

---

## Repository quickstart (optional)
```bash
npm install
npm run dev
npm run build
npm run preview
