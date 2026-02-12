# Скрипт для загрузки проекта в GitHub
# Обновляет PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "Проверка Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "Git найден: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ОШИБКА: Git не установлен или не найден в PATH!" -ForegroundColor Red
    Write-Host "Установите Git с https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Host "`nИнициализация Git репозитория..." -ForegroundColor Yellow
if (Test-Path .git) {
    Write-Host "Git репозиторий уже инициализирован" -ForegroundColor Green
} else {
    git init
    Write-Host "Git репозиторий инициализирован" -ForegroundColor Green
}

Write-Host "`nДобавление файлов..." -ForegroundColor Yellow
git add .

Write-Host "`nСоздание коммита..." -ForegroundColor Yellow
git commit -m "Initial commit: React test deployment site"

Write-Host "`nДобавление remote репозитория..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/NickitaStepin/testDeploy.git

Write-Host "`nЗагрузка в GitHub..." -ForegroundColor Yellow
Write-Host "Используется ветка: main" -ForegroundColor Cyan
git branch -M main
git push -u origin main

Write-Host "`n✅ Проект успешно загружен в GitHub!" -ForegroundColor Green
Write-Host "Репозиторий: https://github.com/NickitaStepin/testDeploy" -ForegroundColor Cyan
