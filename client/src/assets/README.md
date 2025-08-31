# Assets Directory

Эта папка содержит все медиа файлы проекта.

## Структура папок

- `images/` - изображения (PNG, JPG, JPEG, GIF, WebP, ICO)
- `media/` - видео и аудио файлы (MP4, WebM, MP3, WAV)
- `icons/` - иконки (SVG, PNG)

## Использование

### Импорт в компонентах

```tsx
import logo from '@assets/images/logo.png';
import icon from '@assets/icons/menu.svg';
import video from '@assets/media/presentation.mp4';

// Использование
<img src={logo} alt="Логотип" />
<img src={icon} alt="Меню" />
<video src={video} controls />
```

### Алиас @assets

В конфигурации Vite настроен алиас `@assets`, который указывает на эту папку.
Это позволяет использовать короткие пути для импорта медиа файлов.

## Поддерживаемые форматы

- **Изображения**: PNG, JPG, JPEG, GIF, WebP, ICO, SVG
- **Видео**: MP4, WebM
- **Аудио**: MP3, WAV

## Оптимизация

При сборке проекта все медиа файлы автоматически оптимизируются и получают хеши в именах для кэширования.
