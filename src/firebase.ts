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

        if (docSnap.exists()) {
          const data = docSnap.data();
          const hero = data.heroSection;

          // Отримуємо зображення
          const keys = ['image', 'image1', 'image2', 'image3', 'image4'];
          const imgUrls = await Promise.all(
            keys.map(k => {
              const path = hero.images[k];
              const imgRef = ref(storage, path.replace('gs://sabsusshop.appspot.com/', 'HomePageHeroSection/'));
              return getDownloadURL(imgRef);
            })
          );
          setImages(imgUrls);

          // Отримуємо текст довіри для поточної мови
          const lng = localStorage.getItem('i18nextLng') || 'en';
          const translation = hero.translations?.[lng]?.trustText || '';
          setTrustText(translation);
        }
      } catch (err: any) {
        console.error("Помилка отримання даних з Firebase:", error);
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
};

export const usePartnersBannerData = () => {
  const [data, setData] = useState<PartnersBannerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartnersBanner = async () => {
      try {
        const docRef = doc(db, "content", "7BChHRBrC6O4kAHjqnwH");
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          setError("Документ не знайдено");
          setLoading(false);
          return;
        }

        const partnersBanner = docSnap.data().partnersBanner;
        if (
          !partnersBanner ||
          !Array.isArray(partnersBanner.carousels) ||
          !Array.isArray(partnersBanner.partners)
        ) {
          setError("Структура partnersBanner не відповідає очікуваній");
          setLoading(false);
          return;
        }

        // Функція конвертації gs:// посилання у https://
        const convertGsUrlToHttps = async (gsUrl: string): Promise<string> => {
          // Видаляємо gs://, бо ref приймає шлях від кореня
          const path = gsUrl.replace('gs://sabsusshop.firebasestorage.app/', '');
          const storageRef = ref(storage, path);
          return getDownloadURL(storageRef);
        };

        // Конвертуємо всі carousels imageUrl
        const carouselsHttps: CarouselItem[] = await Promise.all(
          partnersBanner.carousels.map(async (item: CarouselItem) => ({
            id: item.id,
            link: item.link,
            imageUrl: await convertGsUrlToHttps(item.imageUrl),
          }))
        );

        // Конвертуємо partners масив (gs:// strings) в https:// масив
        const partnersHttps: string[] = await Promise.all(
          partnersBanner.partners.map((gsUrl: string) => convertGsUrlToHttps(gsUrl))
        );

        setData({
          carousels: carouselsHttps,
          partners: partnersHttps,
        });
      } catch (err: any) {
        setError("Помилка при завантаженні: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPartnersBanner();
  }, []);

  return { data, loading, error };
};
