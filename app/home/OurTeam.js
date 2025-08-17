"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Mail } from 'lucide-react';
import { useSelector } from 'react-redux';

const OurTeamComponent = ({ teamData }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const { language } = useSelector((state) => state.language);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxSlide = Math.max(0, teamData.length - slidesToShow);

    const nextSlide = () => {
        setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    };

    const translateX = -(currentSlide * (100 / slidesToShow));

    return (
        <section className="py-20 bg-gray-50">
            <div className="w-full container mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                        {language === "ar" ? "فريقنا" : "Our Team"}
                    </h2>
                    <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
                        {language === "ar" ? "لوريم إيبسوم هو ببساطة نص شكلي (أي غير واضح) يُستخدم في صناعة الطباعة والتنضيد. ظل لوريم إيبسوم النص الشكلي القياسي في هذه الصناعة منذ القرن السادس عشر." : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500"}
                        
                    </p>
                </div>
                <div className="relative ">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`absolute left-1 hidden top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full md:flex items-center justify-center transition-all duration-300 ${currentSlide === 0
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-[#4B2615] hover:bg-[#4B2615] hover:text-white shadow-lg '
                            }`}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide >= maxSlide}
                        className={`absolute hidden right-1 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full md:flex items-center justify-center transition-all duration-300 ${currentSlide >= maxSlide
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-[#4B2615] hover:bg-[#4B2615] hover:text-white shadow-lg hover:shadow-xl'
                            }`}
                    >
                        <ChevronRight size={20} />
                    </button>
                    <div className="overflow-hidden md:mx-16">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(${translateX}%)` }}
                        >
                            {teamData.map((member) => (
                                <div
                                    key={member.id}
                                    className="flex-shrink-0 md:px-4"
                                    style={{ width: `${100 / slidesToShow}%` }}
                                >
                                    <div className="overflow-hidden group">
                                        <div className="relative overflow-hidden">
                                            <div
                                                className="h-80  bg-center relative bg-cover"
                                                style={{ backgroundImage: `url(${member.image?.url})` }}
                                            >
                                            </div>
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="text-xl font-bold text-[#4B2615] mb-2">
                                               {language === "ar" ? member?.ar_name : member.name} 
                                            </h3>
                                            <p className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-4">
                                                {member.position}
                                            </p>
                                            <div className="flex justify-center space-x-4">
                                                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#4B2615] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200">
                                                    <MessageCircle size={16} />
                                                </button>
                                                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#4B2615] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200">
                                                    <Phone size={16} />
                                                </button>
                                                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#4B2615] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200">
                                                    <Mail size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>

                        <div className="md:flex justify-center mt-8 space-x-2 block ">
                            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-[#4B2615] scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeamComponent;