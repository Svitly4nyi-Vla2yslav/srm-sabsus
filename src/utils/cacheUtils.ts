// utils/cacheUtils.ts
const CACHE_PREFIX = 'media_cache_';
const CACHE_EXPIRATION_DAYS = 7;

export const fetchWithCache = async (url: string): Promise<string> => {
  const cacheKey = CACHE_PREFIX + url;
  const cachedItem = localStorage.getItem(cacheKey);

  if (cachedItem) {
    const { data, timestamp, isVideo } = JSON.parse(cachedItem);
    
    // Check if cache is still valid
    if (Date.now() - timestamp < CACHE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000) {
      if (isVideo) {
        // For video, use the video URL directly
        return data;
      } else {
        // For images, return base64-encoded data
        return data;
      }
    }

    // Remove expired cache
    localStorage.removeItem(cacheKey);
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // For images
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
    // For video
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

// Clean up expired cache items
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

// Run cleanup on initialization
cleanupCache();
