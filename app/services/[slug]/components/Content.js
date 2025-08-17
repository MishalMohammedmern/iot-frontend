"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const LegalConsultationServices = () => {
      const router = useRouter();

    return (
        <div className="w-full mx-auto p-6 bg-white container ">
            <div className=' flex items-center gap-3 cursor-pointer' onClick={() => router.push("/")} >
                <Image src="/arrow.png" alt='' width={10} height={10} />
                <h6>back</h6>
            </div>
            <h1 className="text-[42px] font-semibold text-[#4B2615] mb-6 mt-10">
                Legal Consultation Services
            </h1>

            <p className="text-[#1E1E1E] leading-relaxed mb-8">
                Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients needs and offer the best legal solutions in various cases and legal fields. we provide our legal consultations services as a follow:
            </p>

            <div className="mb-8">
                <h2 className="text-xl font-bold text-[#4B2615] mb-4">
                    General Legal Consultations
                </h2>
                <div className=" border-l-4 border-[#D9D9D99C] p-4 rounded-r-lg">
                    <div className="flex items-start">
                        <div className="w-6 h-4 rounded-sm bg-[#4B2615] mt-2 mr-3 "></div>
                        <p className="text-gray-700 leading-relaxed">
                            At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold text-[#4B2615] mb-4">
                    Corporate Legal Consultations
                </h2>
                <div className="border-l-4 border-[#D9D9D99C] p-4 rounded-r-lg">
                    <div className="flex items-start mb-4">
                        <div className="w-4 h-4 rounded-sm bg-[#4B2615] mt-2 mr-3 "></div>
                        <p className="text-gray-700 leading-relaxed">
                            We at the Law Firm understand the importance of legal consultations for companies in building and enhancing their businesses.
                        </p>
                    </div>
                    <div className="ml-5">
                        <p className="text-gray-700 font-medium mb-3">Our advisory services about:</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-gray-400 mr-2">-</span>
                                <span>Establishing and registering companies.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-400 mr-2">-</span>
                                <span>All kinds of contracts and agreements.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-400 mr-2">-</span>
                                <span>Commercial disputes.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-400 mr-2">-</span>
                                <span>Compliance with local and international laws and regulations.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold text-[#4B2615] mb-4">
                    Individual Legal Consultations
                </h2>
                <div className=" border-l-4 border-[#D9D9D99C] p-4 rounded-r-lg">
                    <div className="flex items-start mb-4">
                        <div className="w-4 h-4 rounded-sm bg-[#4B2615] mt-2 mr-3 "></div>
                        <p className="text-gray-700 leading-relaxed">
                            Law Firm offers customized advisory services for individuals, including:
                        </p>
                    </div>
                    <div className="ml-5">
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-gray-400 mr-2">-</span>
                                <span>Family issues such as divorce, alimony, and custody.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-400 mr-2">-</span>
                                <span>Real estate matters like buying, selling, and renting properties.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-400 mr-2">-</span>
                                <span>Employment issues such as hiring and wrongful termination.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-400 mr-2">-</span>
                                <span>Criminal cases and defending personal rights.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
                At Law Firm, we aim to provide the best legal services to ensure your rights and offer effective legal solutions. Contact us today to receive professional and comprehensive legal consultation.
            </p>
        </div>
    );
};

export default LegalConsultationServices;
