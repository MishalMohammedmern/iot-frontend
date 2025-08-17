"use client";
import { useSelector } from "react-redux";
import SubscriptionForm from "./footer/SubscriptionForm";
import SocialLinks from "./footer/SocialLinks";
import FooterLinks from "./footer/FooterLinks";


const Footer = () => {
  const { language } = useSelector((state) => state.language);

  const translations = {
    en: {
      emailPlaceholder: "Email",
      subscribe: "Subscribe",
      subscribing: "Subscribing...",
      contacts: "Contacts",
      about: "About",
      ourStrategy: "Our Strategy",
      ourAdvantages: "Our Advantages",
      socialResponsibility: "Social Responsibility",
      ourServices: "Our Services",
      copyright: "© 2024 . All rights reserved.",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      subscribeSuccess: "Successfully subscribed",
      subscribeError: "This email is already subscribed!",
      subscribeDuplicate: "This email is already subscribed!",
      networkError: "Network error. Please check your connection.",
    },
    ar: {
      emailPlaceholder: "البريد الإلكتروني",
      subscribe: "اشتراك",
      subscribing: "جاري الاشتراك...",
      contacts: "جهات الاتصال",
      about: "حول",
      ourStrategy: "استراتيجيتنا",
      ourAdvantages: "مزايانا",
      socialResponsibility: "المسؤولية الاجتماعية",
      ourServices: "خدماتنا",
      copyright: "© 2024 . جميع الحقوق محفوظة.",
      emailRequired: "البريد الإلكتروني مطلوب",
      emailInvalid: "يرجى إدخال بريد إلكتروني صالح",
      subscribeSuccess: "تم الاشتراك بنجاح في نشرتنا الإخبارية!",
      subscribeError: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      subscribeDuplicate: "هذا البريد الإلكتروني مشترك بالفعل!",
      networkError: "خطأ في الشبكة. يرجى التحقق من اتصالك.",
    },
  };

  const t = translations[language] || translations.en;
  const isRTL = language === "ar";

  return (
    <footer className="text-white w-full" style={{ backgroundColor: "#4B2615" }}>
      <div className="border-b border-white/20 py-6 w-full container mx-auto">
        <div className={`w-full mx-auto flex flex-col md:flex-row justify-end items-center gap-6 container ${isRTL ? "md:justify-start" : ""}`}>
          <SubscriptionForm language={language} translations={translations} />
          <div className="flex items-center gap-6">
            <a href="/contacts" className="text-white hover:text-gray-300 transition">{t.contacts}</a>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="py-6 container mx-auto">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <FooterLinks language={language} translations={translations} />
          <div className={`text-white text-sm ${isRTL ? "md:order-1" : ""}`}>{t.copyright}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
