# Quick Start Guide

## Первый запуск

1. **Установите зависимости:**
   ```bash
   npm install
   ```

2. **Создайте файл `.env.local`** (опционально, для аналитики):
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Запустите dev-сервер:**
   ```bash
   npm run dev
   ```

4. **Откройте браузер:**
   ```
   http://localhost:3000
   ```

## Что нужно настроить перед продакшеном

### 1. Контактная информация
Обновите в файлах:
- `app/contact/page.tsx` - email, телефон, адрес
- `components/Footer.tsx` - контакты в футере

### 2. Email интеграция
Настройте отправку писем в:
- `app/api/contact/route.ts` - форма контактов
- `app/api/quote/route.ts` - форма запроса котировки

Рекомендуемые сервисы: Resend, SendGrid, Mailgun

### 3. Домен
Обновите домен в:
- `app/sitemap.ts` - замените `baseUrl`
- `app/robots.ts` - замените URL sitemap

### 4. Изображения
Добавьте изображения в папку `public/`:
- `hero_home.webp` - главная страница
- `hero_lane.webp` - страница Europe→Canada
- `service_ocean.webp` - услуга Ocean Freight
- `service_air.webp` - услуга Air Freight
- `service_road.webp` - услуга Road Freight
- `about_team.webp` - страница About

### 5. Favicon
Добавьте `favicon.ico` в папку `public/`

### 6. Google Analytics (опционально)
1. Создайте GA4 property
2. Добавьте Measurement ID в `.env.local`

## Сборка для продакшена

```bash
npm run build
npm start
```

## Деплой

### Vercel (рекомендуется)
1. Push в GitHub
2. Импортируйте проект в Vercel
3. Добавьте переменные окружения
4. Деплой автоматический

### Другие платформы
Любая платформа, поддерживающая Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Self-hosted

## Структура страниц

✅ Все страницы созданы согласно ТЗ:
- `/` - Главная
- `/europe-to-canada` - Торговый маршрут
- `/services` - Список услуг
- `/services/ocean-freight` - Морские перевозки
- `/services/air-freight` - Авиаперевозки
- `/services/road-freight` - Автоперевозки
- `/services/customs-support` - Таможенная поддержка
- `/about` - О компании
- `/contact` - Контакты
- `/request-a-quote` - Запрос котировки
- `/privacy-policy` - Политика конфиденциальности
- `/cookie-policy` - Политика cookies
- `/terms` - Условия использования

## Технологии

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Google Analytics 4 (опционально)

## Поддержка

При возникновении вопросов обращайтесь к разработчику.


