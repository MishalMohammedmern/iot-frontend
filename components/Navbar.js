"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 300);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleClickOutside = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-40 text-white transition-all duration-300 ${
                isScrolled ? "bg-[#4B2615] shadow-lg" : "bg-transparent"
            }`}>
                <div className="flex items-center justify-between lg:px-2  relative container mx-auto">

                    <Link href="/" className="font-bold text-lg z-50">
                        <Image src="/logo.png" alt="" className="md:w-28 w-20" width={200} height={200} />
                    </Link>

                    <div className="hidden lg:flex items-center gap-6 xl:text-lg">
                        <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
                        <Link href="/about" className="hover:text-yellow-300 transition">About Us</Link>
                        <div className="relative">
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className="flex items-center gap-1 hover:text-yellow-300 transition"
                            >
                                Services
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${
                                        isServicesOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                        </div>
                        <Link href="/team" className="hover:text-yellow-300 transition">Our Team</Link>
                        <Link href="/blogs" className="hover:text-yellow-300 transition">Blogs</Link>
                        <Link href="/contact" className="hover:text-yellow-300 transition">Contact Us</Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <Search className="cursor-pointer hover:text-yellow-300 transition" />
                        <div className="relative">
                            <select className="bg-transparent rounded px-2 py-1 text-sm cursor-pointer border border-transparent hover:border-yellow-300 transition">
                                <option value="en" className="text-black">EN</option>
                                <option value="ar" className="text-black">AR</option>
                            </select>
                        </div>
                        <button className="border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-black transition">
                            Book Appointment
                        </button>
                    </div>


                    <div className="flex lg:hidden items-center gap-4">
                        <Search className="cursor-pointer hover:text-yellow-300 transition" size={20} />
                        <div className="relative">
                            <select className="bg-transparent rounded px-2 py-1 text-xs cursor-pointer">
                                <option value="en" className="text-black">EN</option>
                                <option value="ar" className="text-black">AR</option>
                            </select>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMobileMenuOpen(!isMobileMenuOpen);
                            }}
                            className="p-2 hover:bg-white/10 rounded-lg transition z-50 relative "
                        >
                            {isMobileMenuOpen ? (
                                <X className=" relative z-50" size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>

  
                    {isServicesOpen && (
                        <div className="hidden  absolute left-0 top-[80%] w-full bg-[#4B2615] text-white rounded-lg shadow-lg lg:grid grid-cols-3 gap-6 p-6 z-40">
                            {services.map((service, idx) => (
                                <Link
                                    key={idx}
                                    href={`/services/${idx}`}
                                    className="hover:text-yellow-300 transition py-1 text-sm"
                                >
                                    {service}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
     


            <div className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-[#4B2615] text-white transform transition-transform duration-300 z-40 lg:hidden overflow-y-auto ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                <div className="p-6 pt-24">

                    <div className="space-y-4">
                        <Link 
                            href="/" 
                            className="block text-lg hover:text-yellow-300 transition py-2 border-b border-white/10"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        
                        <Link 
                            href="/about" 
                            className="block text-lg hover:text-yellow-300 transition py-2 border-b border-white/10"
                            onClick={closeMobileMenu}
                        >
                            About Us
                        </Link>
                        <div className="border-b border-white/10">
                            <button
                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                className="flex items-center justify-between w-full text-lg hover:text-yellow-300 transition py-2"
                            >
                                Services
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform ${
                                        isMobileServicesOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isMobileServicesOpen && (
                                <div className="pl-4 pb-4 space-y-2 max-h-60 overflow-y-auto">
                                    {services.map((service, idx) => (
                                        <Link
                                            key={idx}
                                            href={`/services/${idx}`}
                                            className="block text-sm text-gray-300 hover:text-yellow-300 transition py-1"
                                            onClick={closeMobileMenu}
                                        >
                                            {service}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        <Link 
                            href="/team" 
                            className="block text-lg hover:text-yellow-300 transition py-2 border-b border-white/10"
                            onClick={closeMobileMenu}
                        >
                            Our Team
                        </Link>
                        
                        <Link 
                            href="/blogs" 
                            className="block text-lg hover:text-yellow-300 transition py-2 border-b border-white/10"
                            onClick={closeMobileMenu}
                        >
                            Blogs
                        </Link>
                        
                        <Link 
                            href="/contact" 
                            className="block text-lg hover:text-yellow-300 transition py-2 border-b border-white/10"
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className="mt-8">
                        <button 
                            className="w-full border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition text-lg font-medium"
                            onClick={closeMobileMenu}
                        >
                            Book Appointment
                        </button>
                    </div>

                   
                </div>
            </div>
        </>
    );
}