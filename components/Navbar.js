"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { setLanguage } from "@/redux/slice/languageSlice";
import SearchBar from "./navbar/SearchBar";
import LanguageSelector from "./navbar/LanguageSelector";
import MobileMenu from "./navbar/MobileMenu";
import { services } from "@/constants/data";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { language, direction } = useSelector((state) => state.language);

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 text-white transition-all duration-300 ${isScrolled ? "bg-[#4B2615] shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between lg:px-2 relative container mx-auto">

        <Link href="/" className="font-bold text-lg z-50">
          <Image
            src="/logo.png"
            alt="logo"
            className="md:w-28 w-20"
            width={200}
            height={200}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:text-lg relative">
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
                className={`transition-transform ${isServicesOpen ? "rotate-180" : ""
                  }`}
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


        <div className="hidden lg:flex items-center gap-4 relative">
          {showSearch ? (
            <SearchBar setShowSearch={setShowSearch} />
          ) : (
            <Search
              onClick={() => setShowSearch(true)}
              className="cursor-pointer hover:text-yellow-300 transition"
            />
          )}

          <LanguageSelector
            language={language}
            onChange={(lang) => dispatch(setLanguage(lang))}
          />

          <button className="border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-black transition">
            {language === "ar" ? "حجز موعد" : "Book Appointment"}
          </button>
        </div>


        <div className="flex lg:hidden items-center gap-4">

          <LanguageSelector
            language={language}
            onChange={(lang) => dispatch(setLanguage(lang))}
            small
          />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition z-50 relative"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <MobileMenu
            language={language}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
        {isServicesOpen && (
          <div className="absolute left-0 top-[80%] w-full bg-[#4B2615] text-white rounded-lg shadow-lg grid grid-cols-3 gap-6 p-6 z-40">
            {services.map((service, idx) => {
              const slug = service
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[&…]/g, "");
              return (
                <Link
                  key={idx}
                  href={
                    service.toLowerCase().includes("team")
                      ? "/team-services"
                      : `/services/${slug}`
                  }
                  onClick={() => setIsServicesOpen(false)}
                  className="hover:text-yellow-300 transition py-1 text-sm"
                >
                  {service}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
