// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { useTranslation } from "react-i18next";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const useHeroContent = () => {
  const [images, setImages] = useState<string[]>([]);
  const [trustText, setTrustText] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const docRef = doc(db, 'content', '7BChHRBrC6O4kAHjqnwH');
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          setError('Документ не знайдено');
          return;
        }

        const data = docSnap.data();
        const hero = data?.heroSection;
        const imageKeys = ['image', 'image1', 'image2', 'image3', 'image4'];

        if (!hero || !hero.images) {
          console.warn('hero або hero.images відсутні');
          return;
        }

        const imgUrls = await Promise.all(
          imageKeys.map(async (k) => {
            const path = hero.images[k];
            if (!path) return null;

            try {
              const imgRef = ref(storage, path.replace('gs://sabsusshop.appspot.com/', 'HomePageHeroSection/'));
              return await getDownloadURL(imgRef);
            } catch (e) {
              console.warn(`Не вдалося завантажити зображення ${k}:`, e);
              return null;
            }
          })
        );

        const filtered = imgUrls.filter(Boolean) as string[];
        setImages(filtered);

        const lng = localStorage.getItem('i18nextLng') || 'en';
        const translation = hero.translations?.[lng]?.trustText || '';
        setTrustText(translation);

      } catch (err: any) {
        console.error("Помилка отримання даних з Firebase:", err);
        setError(err.message || 'Помилка при завантаженні');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroContent();
  }, []);

  return { images, trustText, loading, error };
};

interface Stat {
  description: string;
  value: string;
}

export const useSwipperStats = () => {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const docRef = doc(db, 'content', '7BChHRBrC6O4kAHjqnwH');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const swipper = data.swipperStats;

          const lng = localStorage.getItem('i18nextLng') || 'en';
          const currentStats = swipper.translations?.[lng]?.stats || [];

          setStats(currentStats);
        }
      } catch (err: any) {
        console.error("Помилка при отриманні swiper stats:", error);
        setError(err.message || 'Помилка при завантаженні');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
};

export interface FeedbackItem {
  id: string;
  name: string;
  position: string;
  text: string;
  avatarUrl: string;
  iconUrl: string;
}

export const useFeedback = () => {
  const [items, setItems] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const docRef = doc(db, 'content', '7BChHRBrC6O4kAHjqnwH');
        const snap = await getDoc(docRef);

        if (!snap.exists()) {
          setLoading(false);
          return;
        }

        const data = snap.data();
        const section = data.feedbackSection;
        const lng = localStorage.getItem('i18nextLng') || 'en';
        const arr = section.translations?.[lng] || [];

        const full = await Promise.all(
          arr.map(async (it: any) => {
            const { avatar, icon, text, name, position, id } = it;
            const aRef = ref(storage, avatar);
            const iRef = ref(storage, icon);
            const [avatarUrl, iconUrl] = await Promise.all([
              getDownloadURL(aRef),
              getDownloadURL(iRef),
            ]);
            return { id, name, position, text, avatarUrl, iconUrl };
          })
        );

        setItems(full);
      } catch (err: any) {
        console.error('Помилка fetchFeedback:', err);
        setError(err.message || 'Помилка при завантаженні');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  return { items, loading, error };
};


export const usePricingData = (isMonthly: boolean) => {
  const { i18n } = useTranslation();
  const [pricingData, setPricingData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricing = async () => {
      setLoading(true);
      try {
        const lang = i18n.language || 'en'; // ru / en / es
        const period = isMonthly ? 'monthly' : 'annually';

        const pricingRef = doc(db, 'content', '7BChHRBrC6O4kAHjqnwH');
        const pricingSnap = await getDoc(pricingRef);

        if (!pricingSnap.exists()) throw new Error('Дані не знайдені');

        const translations = pricingSnap.data()?.pricing?.translations;
        if (!translations || !translations[lang])
          throw new Error(`Немає перекладу для мови ${lang}`);

        const plans = translations[lang][period];
        if (!plans) throw new Error('Немає планів');

        setPricingData(plans);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Помилка при завантаженні');
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, [isMonthly, i18n.language]);

  return { pricingData, loading, error };
};


type CarouselItem = {
  id: number;
  imageUrl: string; // gs:// посилання, які потрібно замінити на https://
  link: string;
};

type PartnersBannerData = {
  carousels: CarouselItem[];
  partners: string[]; // масив gs:// посилань
  trustedText: string; // текст з перекладами
};

export const usePartnersBannerData = () => {
  const [data, setData] = useState<PartnersBannerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { i18n } = useTranslation(); // Додаємо хук для мультимовності

  useEffect(() => {
    const fetchPartnersBanner = async () => {
      try {
        const docRef = doc(db, "content", "7BChHRBrC6O4kAHjqnwH");
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          setError("Document not found");
          setLoading(false);
          return;
        }

        const partnersBanner = docSnap.data().partnersBanner;
        if (!partnersBanner) {
          setError("Invalid partners banner structure");
          setLoading(false);
          return;
        }

        // Отримуємо поточну мову
        const currentLanguage = i18n.language || 'en';

        // Функція для безпечного отримання URL
        const getValidImageUrl = async (gsUrl: string): Promise<string | null> => {
          if (!gsUrl || !gsUrl.startsWith('gs://')) return null;
          
          try {
            const path = gsUrl.replace('gs://sabsusshop.appspot.com/', '');
            if (!path) return null;
            
            const storageRef = ref(storage, path);
            return await getDownloadURL(storageRef);
          } catch (err) {
            console.error('Error converting image URL:', gsUrl, err);
            return null;
          }
        };

        // Обробка каруселі
        const carouselsPromises = partnersBanner.carousels?.map(async (item: any) => {
          const imageUrl = await getValidImageUrl(item.imageUrl);
          return imageUrl ? { ...item, imageUrl } : null;
        }) || [];

        // Обробка партнерів
        const partnersPromises = partnersBanner.partners?.map(getValidImageUrl) || [];

        const [carouselsResults, partnersResults] = await Promise.all([
          Promise.all(carouselsPromises),
          Promise.all(partnersPromises)
        ]);

        // Фільтруємо null значення
        const carousels = carouselsResults.filter(Boolean) as CarouselItem[];
        const partners = partnersResults.filter(Boolean) as string[];

        // Отримуємо текст для поточної мови
        const trustedText = partnersBanner.trustedText?.[currentLanguage] || 
                          partnersBanner.trustedText?.en || 
                          null;

        setData({
          carousels,
          partners,
          trustedText
        });
      } catch (err: any) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchPartnersBanner();
  }, [i18n.language]); // Додаємо залежність від мови

  return { data, loading, error };
};

export const useVideoContent = (deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop') => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchVideoContent = async () => {
      try {
        const docRef = doc(db, "content", "7BChHRBrC6O4kAHjqnwH");
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) throw new Error("Документ не знайдено");

        const data = docSnap.data();
        const videosSection = data.videos;

        // Отримуємо посилання для поточного пристрою та мови
        const currentLanguage = i18n.language || "en";
        const videoPath = videosSection[`${currentLanguage}_${deviceType}`] || 
                         videosSection[currentLanguage];

        if (!videoPath) throw new Error(`Відео не знайдено`);

        const path = videoPath.replace("gs://sabsusshop.appspot.com/", "");
        const videoRef = ref(storage, path);
        const url = await getDownloadURL(videoRef);

        setVideoUrl(url);
      } catch (err: any) {
        console.error("Помилка отримання відео:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoContent();
  }, [i18n.language, deviceType]);

  return { videoUrl, loading, error };
};