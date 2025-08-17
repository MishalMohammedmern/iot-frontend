"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import React from "react";

const translations = {
  en: {
    back: "back",
    title: "Legal Consultation Services",
    description:
      "Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients needs and offer the best legal solutions in various cases and legal fields. We provide our legal consultations services as follows:",
    generalTitle: "General Legal Consultations",
    generalDescription:
      "At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws.",
    corporateTitle: "Corporate Legal Consultations",
    corporateDescription:
      "We at the Law Firm understand the importance of legal consultations for companies in building and enhancing their businesses.",
    corporateAdvisory: "Our advisory services about:",
    corporateList: [
      "Establishing and registering companies.",
      "All kinds of contracts and agreements.",
      "Commercial disputes.",
      "Compliance with local and international laws and regulations.",
    ],
    individualTitle: "Individual Legal Consultations",
    individualDescription: "Law Firm offers customized advisory services for individuals, including:",
    individualList: [
      "Family issues such as divorce, alimony, and custody.",
      "Real estate matters like buying, selling, and renting properties.",
      "Employment issues such as hiring and wrongful termination.",
      "Criminal cases and defending personal rights.",
    ],
    closing:
      "At Law Firm, we aim to provide the best legal services to ensure your rights and offer effective legal solutions. Contact us today to receive professional and comprehensive legal consultation.",
  },
  ar: {
    back: "رجوع",
    title: "خدمات الاستشارات القانونية",
    description:
      "يعتبر مكتب المحاماة من المكاتب القانونية الرائدة التي تقدم خدمات استشارية متميزة للأفراد والشركات على حد سواء. مهمتنا هي تقديم دعم قانوني شامل ومتخصص لتلبية احتياجات عملائنا وتقديم أفضل الحلول القانونية في مختلف القضايا والمجالات القانونية. نحن نقدم خدمات الاستشارات القانونية الخاصة بنا على النحو التالي:",
    generalTitle: "الاستشارات القانونية العامة",
    generalDescription:
      "في مكتب المحاماة، نقدم استشارات قانونية شاملة تغطي جميع الجوانب القانونية التي قد يواجهها عملاؤنا في حياتهم اليومية أو أنشطتهم التجارية. هدفنا هو تقديم نصائح قانونية دقيقة استنادًا إلى فهم عميق للقوانين المحلية والدولية.",
    corporateTitle: "الاستشارات القانونية للشركات",
    corporateDescription:
      "نحن في مكتب المحاماة ندرك أهمية الاستشارات القانونية للشركات في بناء وتعزيز أعمالهم.",
    corporateAdvisory: "تشمل خدماتنا الاستشارية حول:",
    corporateList: [
      "تأسيس وتسجيل الشركات.",
      "جميع أنواع العقود والاتفاقيات.",
      "النزاعات التجارية.",
      "الامتثال للقوانين واللوائح المحلية والدولية.",
    ],
    individualTitle: "الاستشارات القانونية للأفراد",
    individualDescription: "يقدم مكتب المحاماة خدمات استشارية مخصصة للأفراد، بما في ذلك:",
    individualList: [
      "قضايا الأسرة مثل الطلاق والنفقة والحضانة.",
      "المسائل العقارية مثل شراء وبيع وتأجير العقارات.",
      "قضايا التوظيف مثل التعيين والفصل غير القانوني.",
      "القضايا الجنائية والدفاع عن الحقوق الشخصية.",
    ],
    closing:
      "نهدف في مكتب المحاماة إلى تقديم أفضل الخدمات القانونية لضمان حقوقك وتقديم حلول قانونية فعالة. تواصل معنا اليوم للحصول على استشارة قانونية شاملة ومهنية.",
  },
};

const LegalConsultationServices = () => {
  const router = useRouter();
  const { language } = useSelector((state) => state.language);
  const t = translations[language] || translations.en;
  const isRTL = language === "ar";

  return (
    <div
      className={`w-full mx-auto p-6 container bg-white ${
        isRTL ? "text-right" : "text-left"
      }`}
    >

      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="/arrow.png" className={language === "ar" ? "rotate-180" : ""} alt="" width={10} height={10} />
        <h6>{t.back}</h6>
      </div>


      <h1 className="text-[42px] font-semibold text-[#4B2615] mb-6 mt-10">
        {t.title}
      </h1>

      <p className="text-[#1E1E1E] leading-relaxed mb-8">{t.description}</p>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#4B2615] mb-4">{t.generalTitle}</h2>
        <div className={`${language === "ar" ? "border-r-4" : "border-l-4"} border-[#D9D9D99C] p-4 rounded-r-lg`}>
          <div className="flex items-start">
            <div className="w-6 h-4 rounded-sm bg-[#4B2615] mt-2 mr-3"></div>
            <p className="text-gray-700 leading-relaxed">{t.generalDescription}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#4B2615] mb-4">{t.corporateTitle}</h2>
        <div className={`${language === "ar" ? "border-r-4" : "border-l-4"} border-[#D9D9D99C] p-4 rounded-r-lg`}>
          <div className="flex items-start mb-4">
            <div className="w-4 h-4 rounded-sm bg-[#4B2615] mt-2 mr-3"></div>
            <p className="text-gray-700 leading-relaxed">{t.corporateDescription}</p>
          </div>
          <div className="ml-5">
            <p className="text-gray-700 font-medium mb-3">{t.corporateAdvisory}</p>
            <ul className="space-y-2 text-gray-600">
              {t.corporateList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-400 mr-2">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#4B2615] mb-4">{t.individualTitle}</h2>
        <div className={`${language === "ar" ? "border-r-4" : "border-l-4"} border-[#D9D9D99C] p-4 rounded-r-lg`}>
          <div className="flex items-start mb-4">
            <div className="w-4 h-4 rounded-sm bg-[#4B2615] mt-2 mr-3"></div>
            <p className="text-gray-700 leading-relaxed">{t.individualDescription}</p>
          </div>
          <div className="ml-5">
            <ul className="space-y-2 text-gray-600">
              {t.individualList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-400 mr-2">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">{t.closing}</p>
    </div>
  );
};

export default LegalConsultationServices;
