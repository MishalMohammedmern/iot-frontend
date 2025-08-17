import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { services } from "@/constants/data";

export default function MobileMenu({ language, onClose }) {
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[#4B2615] text-white flex flex-col p-6 gap-6 z-40">
      <Link href="/" onClick={onClose} className="hover:text-yellow-300 transition">
        {language === "ar" ? "الرئيسية" : "Home"}
      </Link>
      <Link href="/#about" onClick={onClose} className="hover:text-yellow-300 transition">
        {language === "ar" ? "من نحن" : "About Us"}
      </Link>

      <div>
        <button
          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
          className="flex items-center gap-1 hover:text-yellow-300 transition"
        >
          {language === "ar" ? "الخدمات" : "Services"}
          <ChevronDown
            size={16}
            className={`transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isMobileServicesOpen && (
          <div className="ml-4 mt-2 flex flex-col gap-2">
            {services.map((service, idx) => {
              const slug = service.toLowerCase().replace(/ /g, "-").replace(/[&…]/g, "");
              return (
                <Link
                  key={idx}
                  href={service.toLowerCase().includes("team") ? "/team-services" : `/services/${slug}`}
                  onClick={onClose}
                  className="hover:text-yellow-300 transition text-sm"
                >
                  {service}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <Link href="/#our-team" onClick={onClose} className="hover:text-yellow-300 transition">
        {language === "ar" ? "فريقنا" : "Our Team"}
      </Link>
      <Link href="/#blogs" onClick={onClose} className="hover:text-yellow-300 transition">
        {language === "ar" ? "المدونات" : "Blogs"}
      </Link>
      <Link href="/#contact" onClick={onClose} className="hover:text-yellow-300 transition">
        {language === "ar" ? "تواصل معنا" : "Contact Us"}
      </Link>

      <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
        {language === "ar" ? "حجز موعد" : "Book Appointment"}
      </button>
    </div>
  );
}
