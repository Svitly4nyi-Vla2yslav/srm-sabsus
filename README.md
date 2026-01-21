# Audit Fix TODO (sabsus.shop)

Цей файл описує список робіт після клієнтського аудиту. Пріоритети:

- **P0** — ламає UX/конверсію або блокує користувача
- **P1** — SEO/A11y база (щоб сайт існував для Google і людей)
- **P2** — швидкість/контент/полірування

---

## P0 — UX / Navigation (критично)

- [ ] **Fix: мобільне меню (бургер) не має “зависати” поверх сайту**

  - [ ] Закривати меню при зміні маршруту (route change)
  - [ ] Закривати меню при кліку на бекдроп (порожня зона overlay)
  - [ ] Закривати меню по `Esc`
  - [ ] Відновлювати `body { overflow }` у 100% випадків (без “залипання”)
  - [ ] Автоматично закривати меню при переході на десктоп брейкпоінт (≥1440px)

- [ ] **Fix: Dropdown “Service” не має перекривати контент і не має жити своїм життям**
  - [ ] Закривати dropdown при зміні маршруту
  - [ ] Закривати dropdown при кліку поза меню
  - [ ] Прибрати конфлікт “клік відкриває dropdown” vs “клік веде на /service”

### Acceptance (P0)

- [ ] На мобілці: відкрив бургер → перейшов по лінку → меню закрилось, скрол працює.
- [ ] На мобілці: відкрив бургер → натиснув поза меню → закрилось.
- [ ] На десктопі: dropdown не перекриває контент довше, ніж треба; сам не відкривається.

---

## P1 — SEO

### 1) Статика для індексації (200 OK)
- [ ] `/robots.txt` існує (200 OK, text/plain)
  - `curl -I https://sabsus.shop/robots.txt`
- [ ] `/sitemap.xml` існує (200 OK, xml)
  - `curl -I https://sabsus.shop/sitemap.xml`
- [ ] OG-assets віддаються як файли, не SPA-html:
  - `curl -I https://sabsus.shop/og/image.png` -> `Content-Type: image/png`
- [ ] (Якщо Firebase/SPA rewrites) додані винятки, щоб `/robots.txt`, `/sitemap.xml`, `/og/*` НЕ віддавали `/index.html`

### 2) Превʼю в месенджерах (Telegram/WhatsApp)
- [ ] `og:image` абсолютний URL + реальний файл
- [ ] `og:image:type` відповідає формату (`image/png` для .png)
- [ ] `og:image:width=1200`, `og:image:height=630`, `og:image:alt`
- [ ] Twitter: `twitter:card=summary_large_image`, `twitter:image`, `twitter:title`, `twitter:description`
- [ ] Cache busting при змінах: `?v=1 -> ?v=2` (месенджери кешують агресивно)

### 3) Базові meta в `index.html` (fallback)
- [ ] `<title>` + `meta description` є (для головної)
- [ ] `canonical` вказано (без hash)

### 4) Унікальні title/description по сторінках (SPA)
- [ ] Head-менеджмент під React 19 через Unhead (`@unhead/react`)
- [ ] `title + description + canonical` для:
  - `/home`, `/service`, `/about`, `/pricing`, `/contact`
  - `service/*` сторінок
- [ ] (Важливо) месенджери JS не виконують: унікальні OG для кожної сторінки працюватимуть тільки з SSR/пререндером

### 5) canonical + hreflang
- [ ] Canonical генерується з `pathname` (без hash)
- [ ] `hreflang` додаємо ТІЛЬКИ якщо є різні URL для мов (наприклад `/de/...`, `/en/...`)
  - Якщо URL однаковий, hreflang не дає користі

### 6) Валідація
- [ ] Lighthouse SEO не деградує
- [ ] Перевірка OG кешу: Telegram `@webpagebot` або лінк з `?v=...`


### 1) Indexing essentials (статичні файли, 200 OK)

- [ ] `/robots.txt` існує і віддається як статичний файл (200 OK, text/plain)
  - Перевірка: `curl -I https://sabsus.shop/robots.txt`
- [ ] `/sitemap.xml` існує і віддається як статичний файл (200 OK, text/xml або application/xml)
  - Перевірка: `curl -I https://sabsus.shop/sitemap.xml`
- [ ] Якщо SPA (Firebase/Netlify) зʼїдає статику: налаштовані винятки/rewrites для `/robots.txt`, `/sitemap.xml`, `/og/*` (щоб не віддавало index.html)

### 2) Social previews (Telegram/WhatsApp)

- [x] OG-картинка існує і віддається як картинка (не HTML)
  - Перевірка: `curl -I https://sabsus.shop/og/image.png` -> `Content-Type: image/png`
- [ ] `og:image:type` відповідає формату (`image/png` для .png)
- [ ] Додано `og:image:width`=1200, `og:image:height`=630, `og:image:alt`
- [ ] Twitter теги: `twitter:card`, `twitter:image`, `twitter:title`, `twitter:description`
- [ ] Cache-busting для месенджерів: міняємо URL при зміні превʼю (`?v=1 -> ?v=2`, або файл `image-v2.png`)

### 3) Базові meta теги (index.html)

- [ ] Дефолтний `<title>` і `meta description` у `index.html` (home fallback)
- [ ] `link rel="canonical"` у `index.html` (без hash)

### 4) Унікальні title/description по ключових сторінках

- [ ] Додано head-менеджмент у React 19 (НЕ react-helmet-async, бо він не підтримує React 19 офіційно)
  - Варіант A (рекомендовано): Unhead (`@unhead/react`)
  - Варіант B (ризиковано): react-helmet-async через `--legacy-peer-deps`
- [ ] `title` + `description` для: `/home`, `/service`, `/pricing`, `/about`, `/contact`, + service subpages

> Важливо: месенджери (Telegram/WhatsApp) не виконують JS.
> Тому унікальні теги по роутам для превʼю працюють тільки з SSR/пререндером.
> Для превʼю достатньо правильних OG тегів у index.html (як мінімум для головної).

### 5) canonical + hreflang (якщо мультимовність)

- [ ] `canonical` генерується без hash і без сміття
- [ ] `hreflang` доданий тільки якщо реально є різні URL для мов (наприклад `/de/...`, `/en/...`)
  - Якщо URL однаковий для всіх мов: hreflang не дає користі, краще не прикидатися.

### 6) Валідація

- [ ] Lighthouse SEO не деградує
- [ ] Перевірка OG: Telegram `@webpagebot` refresh або URL з `?v=...`

- [ ] Додати `/robots.txt` (статичний файл, 200 OK)
- [ ] Додати `/sitemap.xml` (статичний файл, 200 OK)
- [ ] Унікальні `<title>` і `meta description` для ключових сторінок
- [ ] OpenGraph теги (для превʼю в месенджерах)
- [ ] `canonical` + `hreflang` (якщо є мультимовність)

### Acceptance (SEO)

- [ ] `GET /robots.txt` → 200, контент правильний
- [ ] `GET /sitemap.xml` → 200, валідний XML

---

## P1 — Accessibility (A11y)

- [ ] Контраст тексту/кнопок під WCAG
- [ ] Базовий розмір тексту ≥ 16px
- [ ] 1×H1 на сторінку, далі H2/H3 по секціях
- [ ] `alt` для зображень/іконок (декоративні: `alt=""`)

---

## P2 — Performance

- [ ] Оптимізація зображень (WebP/AVIF), `loading="lazy"`
- [ ] Легший fallback для важких 3D/відео на мобільних
- [ ] Code splitting для важких секцій

---

## P2 — Content / Trust

- [ ] Переписати “загальні фрази” у конкретні вигоди
- [ ] Додати секцію довіри (логотипи, відгуки, інтеграції)
- [ ] Контакти видно не тільки у футері

---

## How to verify (швидка перевірка)

- [ ] Lighthouse: Perf / SEO / A11y
- [ ] Перевірити мобільний скрол після відкриття/закриття меню
- [ ] Перевірити `robots.txt` і `sitemap.xml` через `curl -I`
