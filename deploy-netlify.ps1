# Скрипт для деплоя на Netlify через CLI
# Обновляет PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "Проверка Netlify CLI..." -ForegroundColor Yellow
try {
    $netlifyVersion = netlify --version
    Write-Host "Netlify CLI найден: $netlifyVersion" -ForegroundColor Green
} catch {
    Write-Host "Netlify CLI не установлен!" -ForegroundColor Red
    Write-Host "Установите через: npm install -g netlify-cli" -ForegroundColor Yellow
    Write-Host "Или используйте веб-интерфейс: https://www.netlify.com/" -ForegroundColor Cyan
    exit 1
}

Write-Host "`nСборка проекта..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Ошибка при сборке проекта!" -ForegroundColor Red
    exit 1
}

Write-Host "`nДеплой на Netlify..." -ForegroundColor Yellow
Write-Host "Выберите опцию:" -ForegroundColor Cyan
Write-Host "1. Деплой для предпросмотра (draft)" -ForegroundColor White
Write-Host "2. Продакшн деплой (production)" -ForegroundColor White

$choice = Read-Host "Введите 1 или 2"

if ($choice -eq "1") {
    Write-Host "`nДеплой для предпросмотра..." -ForegroundColor Yellow
    netlify deploy
} elseif ($choice -eq "2") {
    Write-Host "`nПродакшн деплой..." -ForegroundColor Yellow
    netlify deploy --prod
} else {
    Write-Host "Неверный выбор. Используется продакшн деплой." -ForegroundColor Yellow
    netlify deploy --prod
}

Write-Host "`n✅ Деплой завершён!" -ForegroundColor Green
