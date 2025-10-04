# Деплой на GitHub Pages

## 🚀 Налаштування

### 1. **Сборка проекта**
```bash
npm run build:gh-pages
```

### 2. **Структура файлов для деплоя**
После сборки в папке `dist/` должны быть:
- `index.html`
- `assets/` (CSS, JS, изображения)
- `.nojekyll` (пустой файл)
- `404.html`

### 3. **Настройки GitHub Pages**
В настройках репозитория:
- **Source**: Deploy from a branch
- **Branch**: `main` (или ваша основная ветка)
- **Folder**: `/docs` или `/dist`

## 🔧 Альтернативные способы деплоя

### **Способ 1: GitHub Actions (рекомендуется)**
Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build:gh-pages
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### **Способ 2: Ручной деплой**
1. Выполните `npm run build:gh-pages`
2. Скопируйте содержимое папки `dist/` в ветку `gh-pages`
3. Или используйте GitHub CLI:
```bash
gh repo deploy-source dist
```

## ⚠️ Важные моменты

### **Базовый путь**
В `vite.config.ts` установлен:
```typescript
base: process.env.NODE_ENV === 'production' ? '/windows-landing/' : '/'
```

### **Роутинг**
Используется `wouter` с базовым путем для GitHub Pages:
```typescript
const basePath = BASE_URL;
<Router base={basePath}>
```

### **404 обработка**
Создан `404.html` для правильной работы GitHub Pages с SPA.

## 🐛 Решение проблем

### **Проблема: Страница не загружается**
- Проверьте, что файл `.nojekyll` присутствует
- Убедитесь, что базовый путь правильный
- Проверьте консоль браузера на ошибки

### **Проблема: Роутинг не работает**
- Убедитесь, что `base` в `vite.config.ts` правильный
- Проверьте, что `Router` использует правильный `basePath`

### **Проблема: 404 ошибки**
- Убедитесь, что `404.html` скопирован в папку сборки
- Проверьте настройки GitHub Pages

## 📝 Проверка деплоя

После деплоя проверьте:
1. ✅ Главная страница загружается
2. ✅ Навигация работает
3. ✅ Изображения и стили загружаются
4. ✅ Форма контактов работает
5. ✅ Адаптивность на мобильных устройствах

## 🔗 Полезные ссылки

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Base Path](https://vitejs.dev/config/shared-options.html#base)
- [SPA Routing on GitHub Pages](https://github.com/rafgraph/spa-github-pages)
