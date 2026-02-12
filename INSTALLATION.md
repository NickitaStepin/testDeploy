# Инструкция по установке Node.js

Node.js не установлен на вашем компьютере. Для работы с React проектом необходимо установить Node.js.

## Способ 1: Установка через официальный сайт (Рекомендуется)

1. Перейдите на официальный сайт Node.js: https://nodejs.org/
2. Скачайте LTS версию (рекомендуется для большинства пользователей)
3. Запустите установщик и следуйте инструкциям
4. **Важно**: При установке убедитесь, что выбрана опция "Add to PATH"
5. После установки перезапустите PowerShell или командную строку

## Способ 2: Установка через winget (Windows Package Manager)

Если у вас установлен winget, выполните в PowerShell:

```powershell
winget install OpenJS.NodeJS.LTS
```

## Проверка установки

После установки откройте новый терминал PowerShell и выполните:

```powershell
node --version
npm --version
```

Обе команды должны показать версии установленных программ.

## После установки Node.js

1. Перейдите в папку проекта:
   ```powershell
   cd D:\exampleFront
   ```

2. Установите зависимости:
   ```powershell
   npm install
   ```

3. Запустите проект:
   ```powershell
   npm run dev
   ```

## Альтернатива: Использование nvm-windows

Если вы хотите управлять несколькими версиями Node.js, можно установить nvm-windows:

1. Скачайте nvm-windows: https://github.com/coreybutler/nvm-windows/releases
2. Установите nvm-windows
3. Установите Node.js через nvm:
   ```powershell
   nvm install lts
   nvm use lts
   ```
