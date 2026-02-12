# Скрипт для запуска dev сервера
# Обновляет PATH и запускает npm run dev

Write-Host "Обновление PATH..." -ForegroundColor Yellow
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "Проверка npm..." -ForegroundColor Yellow
$npmVersion = npm --version
Write-Host "npm версия: $npmVersion" -ForegroundColor Green

Write-Host "`nЗапуск dev сервера..." -ForegroundColor Yellow
Write-Host "Сайт будет доступен на http://localhost:3000`n" -ForegroundColor Green

npm run dev
