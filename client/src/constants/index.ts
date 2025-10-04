// Константы приложения
export const APP_CONFIG = {
  // Контактная информация
  PHONE_NUMBER: import.meta.env.VITE_PHONE_NUMBER || "+38 (093) 977-72-79",
  PHONE_NUMBER_2: import.meta.env.VITE_PHONE_NUMBER_2 || null,
  EMAIL: import.meta.env.VITE_EMAIL || "urijarsenal@gmail.com",
  ADDRESS: import.meta.env.VITE_ADDRESS || "м. Миколаїв, вул. Центральна, 107/1, 6-й поверх, офіс 631",
  
  // Социальные сети
  FACEBOOK_URL: import.meta.env.VITE_FACEBOOK_URL || null,
  INSTAGRAM_URL: import.meta.env.VITE_INSTAGRAM_URL || null,
  TELEGRAM_URL: import.meta.env.VITE_TELEGRAM_URL || null,
  VIBER_URL: import.meta.env.VITE_VIBER_URL || "viber://chat?number=%2B380939777279",
  
  // Настройки приложения
  BASE_URL: import.meta.env.BASE_URL || '/',
  IS_PRODUCTION: import.meta.env.PROD,
} as const;

// Экспорт отдельных констант для удобства
export const {
  PHONE_NUMBER,
  PHONE_NUMBER_2,
  EMAIL,
  ADDRESS,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TELEGRAM_URL,
  VIBER_URL,
  BASE_URL,
  IS_PRODUCTION,
} = APP_CONFIG;
