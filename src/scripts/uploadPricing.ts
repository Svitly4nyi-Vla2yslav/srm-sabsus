import { doc, setDoc } from "firebase/firestore";
import en from "../../public/locales/en/pricing.json";
import { db } from "../firebase";

/**
 * Оновлює лише partnersBanner у фіксованому документі content, використовуючи англійський pricing.json.
 * Запис виконується з merge=true, тому інші поля документа не видаляються.
 * @returns Promise, що завершується після запису або після журналювання перехопленої помилки.
 * @sideEffects Виконує запис у Firestore та виводить результат у console.
 */
export const uploadPricingToFirestore = async () => {
  try {
    const pricingDocRef = doc(db, "content", "7BChHRBrC6O4kAHjqnwH");

    await setDoc(
      pricingDocRef,
      {
        partnersBanner: {
          carousels: en.partnersBanner.carousels, // ✅ без []
          partners: en.partnersBanner.partners     // ✅ без []
        },
      },
      { merge: true }
    );

    console.log("✅ Pricing data uploaded successfully.");
  } catch (error) {
    console.error("❌ Error uploading pricing:", error);
  }
};
