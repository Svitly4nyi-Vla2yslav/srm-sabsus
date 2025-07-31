import { doc, setDoc } from "firebase/firestore";
import en from "../../public/locales/en/pricing.json";
import { db } from "../firebase";

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
