import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { services } from "@/constants/data";

export default function DesktopMenu({ language, isServicesOpen, setIsServicesOpen }) {
  return (
    <div className="hidden lg:flex items-center gap-6 xl:text-lg   ">
      <Link href="/" className="hover:text-yellow-300 transition">
        {language === "ar" ? "الرئيسية" : "Home"}
      </Link>
      <Link href="/#about" className="hover:text-yellow-300 transition">
        {language === "ar" ? "من نحن" : "About Us"}
      </Link>

      <div className="relative">
        <button
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className="flex items-center gap-1 hover:text-yellow-300 transition"
        >
          {language === "ar" ? "الخدمات" : "Services"}
          <ChevronDown
            size={16}
            className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
          />
        </button>

        
      </div>

      <Link href="/#our-team" className="hover:text-yellow-300 transition">
        {language === "ar" ? "فريقنا" : "Our Team"}
      </Link>
      <Link href="/#blogs" className="hover:text-yellow-300 transition">
        {language === "ar" ? "المدونات" : "Blogs"}
      </Link>
      <Link href="/#contact" className="hover:text-yellow-300 transition">
        {language === "ar" ? "تواصل معنا" : "Contact Us"}
      </Link>
    </div>
  );
}
