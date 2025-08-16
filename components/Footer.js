"use client"
import { useState } from 'react';
import { Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        console.log('Subscribing email:', email);
        setEmail('');
    };

    return (
        <footer className="text-white w-full" style={{ backgroundColor: '#4B2615' }}>
            <div className="border-b border-white/20  py-6 w-full container mx-auto ">
                <div className="w-full mx-auto flex flex-col md:flex-row justify-end items-center gap-6 container ">

                    <div className="flex items-center gap-4">
                        <div className="flex bg-white p-1  rounded-lg">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-4 py-2 rounded-l-md border-0 text-gray-900 bg-white focus:outline-none  "
                            />
                            <button
                                onClick={handleSubscribe}
                                className="px-4 py-2 rounded-md font-medium transition-colors duration-200 text-white relative"
                                style={{ backgroundColor: '#4B2615' }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="/contacts"
                            className="text-white hover:text-gray-300 transition-colors duration-200"
                        >
                            Contacts
                        </a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 transition-colors duration-200 text-lg font-bold"
                                aria-label="Google Plus"
                            >
                                G+
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-6 container mx-auto">
                <div className=" mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <nav className="flex flex-wrap gap-8 text-white justify-center">
                        <a
                            href="/about"
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="/our-strategy"
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            Our Strategy
                        </a>
                        <a
                            href="/our-advantages"
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            Our Advantages
                        </a>
                        <a
                            href="/social-responsibility"
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            Social Responsibility
                        </a>
                        <a
                            href="/our-services"
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            Our Services
                        </a>
                    </nav>

                    {/* Copyright */}
                    <div className="text-white text-sm">
                        © 2024 . All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;