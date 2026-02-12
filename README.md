# Тестовый сайт React

Простой React сайт для тестирования деплоя.

## Установка

### Windows PowerShell

Если npm не распознаётся в PowerShell, используйте один из способов:

**Способ 1: Использовать скрипт (рекомендуется)**
```powershell
.\start.ps1
```

**Способ 2: Обновить PATH вручную**
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
npm install
```

**Способ 3: Использовать обычную командную строку (cmd)**
```cmd
npm install
```

## Разработка

### Windows PowerShell

**Способ 1: Использовать скрипт (рекомендуется)**
```powershell
.\start.ps1
```

**Способ 2: Обновить PATH и запустить**
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
npm run dev
```

**Способ 3: Использовать обычную командную строку (cmd)**
```cmd
npm run dev
```

Сайт будет доступен по адресу http://localhost:3000

## Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут в папке `dist/`

## Просмотр собранной версии

```bash
npm run preview
```

## Деплой

После выполнения `npm run build`, папку `dist/` можно загрузить на любой хостинг:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- И другие статические хостинги
