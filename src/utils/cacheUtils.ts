// utils/cacheUtils.ts
const CACHE_PREFIX = 'media_cache_';
const CACHE_EXPIRATION_DAYS = 7;

/**
 * Завантажує медіафайл і повторно використовує його локальну копію протягом семи днів.
 *
 * @param url — адреса зображення або відео.
 * @returns Для зображення — data URL, для відео чи невідомого формату — початкову адресу.
 * @sideEffects Читає та оновлює localStorage, виконує мережевий запит і журналює помилку завантаження.
 */
export const fetchWithCache = async (url: string): Promise<string> => {
  const cacheKey = CACHE_PREFIX + url;
  const cachedItem = localStorage.getItem(cacheKey);

  if (cachedItem) {
    const { data, timestamp, isVideo } = JSON.parse(cachedItem);
    
    // Запис придатний лише протягом налаштованого строку кешування.
    if (Date.now() - timestamp < CACHE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000) {
      if (isVideo) {
        // Для відео кеш містить початкову URL-адресу, а не вміст файла.
        return data;
      } else {
        // Зображення зберігається як data URL у форматі base64.
        return data;
      }
    }

    // Прострочений запис видаляється перед повторним завантаженням.
    localStorage.removeItem(cacheKey);
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Зображення перетворюється на data URL, щоб наступне читання не вимагало мережі.
    if (url.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
      const blob = await response.blob();
      const reader = new FileReader();

      return new Promise<string>((resolve, reject) => {
        reader.onloadend = () => {
          const base64data = reader.result as string;
          localStorage.setItem(cacheKey, JSON.stringify({
            data: base64data,
            timestamp: Date.now(),
            isVideo: false
          }));
          resolve(base64data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }
    // Для відео зберігається лише URL, тому браузер завантажує сам файл звичайним способом.
    else if (url.match(/\.(mp4|webm|ogg)$/i)) {
      localStorage.setItem(cacheKey, JSON.stringify({
        data: url,
        timestamp: Date.now(),
        isVideo: true
      }));
      return url;
    }
    
    return url;
  } catch (error) {
    console.error('Failed to fetch media:', error);
    return url;
  }
};

/**
 * Видаляє з localStorage прострочені медіазаписи цього застосунку.
 *
 * @returns Нічого не повертає.
 * @sideEffects Перебирає localStorage і видаляє записи з префіксом media_cache_ після семи днів.
 */
export const cleanupCache = () => {
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith(CACHE_PREFIX)) {
      const item = localStorage.getItem(key);
      if (item) {
        const { timestamp } = JSON.parse(item);
        if (Date.now() - timestamp > CACHE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000) {
          localStorage.removeItem(key);
        }
      }
    }
  });
};

// Очищення запускається під час імпорту модуля, ще до першого виклику fetchWithCache.
cleanupCache();
