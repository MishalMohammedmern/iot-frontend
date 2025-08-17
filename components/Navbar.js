"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { setLanguage } from "@/redux/slice/languageSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { language, direction } = useSelector((state) => state.language);

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const services = [
    "Legal Consultation Services",
    "Foreign Investment Services",
    "Contracts",
    "Notarization",
    "Insurance",
    "… and Defense in All Cases",
    "Banks and Financial Institutions",
    "Corporate Governance Services",
    "Companies Liquidation",
    "Internal Regulations for Companies",
    "Services for Companies and Institutions",
    "Arbitration",
    "Intellectual Property",
    "Corporate Restructuring and Reorganization",
    "Establishing National and Foreign Companies",
    "Commercial Agencies",
    "Supporting Vision 2030",
    "Estates",
    "Team Service", // special team service
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };

  // handle typing for suggestions
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const matches = services.filter((service) =>
      service.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(matches);
  };

  const handleSuggestionClick = (service) => {
    const slug = service.toLowerCase().replace(/ /g, "-").replace(/[&…]/g, "");


    if (service.toLowerCase().includes("team")) {
      router.push("/team-services");
    } else {
      router.push(`/services/${slug}`);
    }

    setSearchQuery("");
    setSuggestions([]);
    setShowSearch(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    if (searchQuery.toLowerCase().includes("team")) {
      router.push("/team-service");
    } else {
      const match = services.find((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (match) {
        handleSuggestionClick(match);
      } else {
        alert("No matching service found!");
      }
    }
    setSearchQuery("");
    setSuggestions([]);
    setShowSearch(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 text-white transition-all duration-300 ${isScrolled ? "bg-[#4B2615] shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between lg:px-2 relative container mx-auto">
          <Link href="/" className="font-bold text-lg z-50">
            <Image
              src="/logo.png"
              alt=""
              className="md:w-28 w-20"
              width={200}
              height={200}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:text-lg">
            <Link href="/" className="hover:text-yellow-300 transition">
              {language === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <Link href="/about" className="hover:text-yellow-300 transition">
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
            <Link href="/team" className="hover:text-yellow-300 transition">
              {language === "ar" ? "فريقنا" : "Our Team"}
            </Link>
            <Link href="/blogs" className="hover:text-yellow-300 transition">
              {language === "ar" ? "المدونات" : "Blogs"}
            </Link>
            <Link href="/contact" className="hover:text-yellow-300 transition">
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4 relative">
            {showSearch ? (
              <form
                onSubmit={handleSearchSubmit}
                className="flex flex-col relative"
              >
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="px-2 py-1 rounded text-white border border-white w-64"
                />
                {suggestions.length > 0 && (
                  <ul className="absolute top-full left-0 w-full bg-white text-black rounded shadow mt-1 max-h-60 overflow-y-auto z-50">
                    {suggestions.map((s, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleSuggestionClick(s)}
                        className="px-2 py-1 cursor-pointer hover:bg-gray-200"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                <button type="submit" className="hidden">
                  Search
                </button>
              </form>
            ) : (
              <Search
                onClick={() => setShowSearch(true)}
                className="cursor-pointer hover:text-yellow-300 transition"
              />
            )}

            <div className="relative">
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-transparent rounded px-2 py-1 text-sm cursor-pointer border border-transparent hover:border-yellow-300 transition"
              >
                <option value="en" className="text-black">
                  EN
                </option>
                <option value="ar" className="text-black">
                  AR
                </option>
              </select>
            </div>
            <button className="border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-black transition">
              {language === "ar" ? "حجز موعد" : "Book Appointment"}
            </button>
          </div>
          <div className="flex lg:hidden items-center gap-4">
            <Search className="cursor-pointer hover:text-yellow-300 transition" size={20} />
            <div className="relative">
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-transparent rounded px-2 py-1 text-xs cursor-pointer"
              >
                <option value="en" className="text-black">
                  EN
                </option>
                <option value="ar" className="text-black">
                  AR
                </option>
              </select>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="p-2 hover:bg-white/10 rounded-lg transition z-50 relative"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isServicesOpen && (
            <div className="hidden absolute left-0 top-[80%] w-full bg-[#4B2615] text-white rounded-lg shadow-lg lg:grid grid-cols-3 gap-6 p-6 z-40">
              {services.map((service, idx) => {
                const slug = service
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[&…]/g, "");

                return (
                  <Link
                    key={idx}
                    href={`/services/${slug}`}
                    onClick={() => setIsServicesOpen(false)} // ✅ Close dropdown
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
    </>
  );
}
