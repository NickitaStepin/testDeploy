# Инструкция по загрузке в GitHub

## Вариант 1: Использовать скрипт (Рекомендуется)

Если Git установлен, просто запустите:
```powershell
.\deploy-to-github.ps1
```

## Вариант 2: Выполнить команды вручную

### Шаг 1: Убедитесь, что Git установлен

Проверьте:
```powershell
git --version
```

Если Git не установлен, скачайте с https://git-scm.com/download/win

### Шаг 2: Обновите PATH (если нужно)

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

### Шаг 3: Инициализируйте Git репозиторий

```powershell
git init
```

### Шаг 4: Добавьте все файлы

```powershell
git add .
```

### Шаг 5: Создайте коммит

```powershell
git commit -m "Initial commit: React test deployment site"
```

### Шаг 6: Добавьте remote репозиторий

```powershell
git remote add origin https://github.com/NickitaStepin/testDeploy.git
```

### Шаг 7: Переименуйте ветку в main (если нужно)

```powershell
git branch -M main
```

### Шаг 8: Загрузите в GitHub

```powershell
git push -u origin main
```

**Примечание:** При первом push GitHub может запросить авторизацию. Используйте:
- Personal Access Token (рекомендуется)
- Или GitHub CLI

## Если возникли проблемы

### Проблема: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/NickitaStepin/testDeploy.git
```

### Проблема: Требуется авторизация
1. Создайте Personal Access Token на GitHub:
   - Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token (classic)
   - Выберите права: `repo`
2. При push используйте токен вместо пароля

### Проблема: Git не найден
- Установите Git: https://git-scm.com/download/win
- Перезапустите PowerShell после установки
