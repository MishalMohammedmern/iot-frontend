"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const HeroComponent = ({ heroData }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const { language} = useSelector((state) => state.language);

    useEffect(() => {

        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, heroData.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroData.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gray-900">

            <div className="relative w-full h-full ">
                {heroData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-105'
                            }`}
                    >

                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide?.sliders?.url})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4B2615]/68 via-[#4B2615]/28 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4B2615]/60 via-transparent to-[#4B2615]/20"></div>
                        </div>
                        <div className="relative z-20 flex items-center justify-between h-full ">
                            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    <div className="space-y-6 mt-5 lg:mt-0">
                                        <h1 className="text-[30px]  md:text-[44px] 2xl:text-[54px] font-bold text-white leading-tight">
                                           {language === "ar" ? slide.ar_title : slide.title} 
                                        </h1>
                                        <p className="md:text-[20px] text-[16px] 2xl:text-[26px] text-white/80 leading-relaxed">
                                            {language === "ar" ? slide.ar_description : slide.description}
                                        </p>
                                    </div>

                                    <button className="group bg-white hover:bg-gray-100 text-gray-900 lg:px-8 px-4 py-4 rounded-[16px] font-semibold transition-all duration-300 shadow-2xl hover:shadow-white/20 lg:hover:scale-105">
                                        <span className="flex items-center  text-[#4B2615]">
                                            <span>Read More</span>
                                        </span>
                                    </button>
                                </div>
                                <div className="flex justify-center lg:justify-end">

                                    <div className="md:w-88 md:h-96 2xl:w-[400px] w-[220px] h-[250px] overflow-hidden shadow-2xl transition-transform duration-500">
                                        <Image
                                            src={slide?.person_img?.url}
                                            alt="Professional"
                                            className="w-full h-full object-fit"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <button
                onClick={prevSlide}
                className="absolute left-12 top-1/2 -translate-y-1/2 z-30  text-white p-3 rounded-full transition-all duration-300 hidden lg:block "
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-12 top-1/2 -translate-y-1/2 z-30  text-white p-3 rounded-full    transition-all duration-300 hidden lg:block"
            >
                <ChevronRight size={24} />
            </button>

            <div className="absolute left-16 top-2/3 -translate-y-1/2 z-30 lg:flex flex-col space-y-4 hidden ">
                {heroData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-white'
                            : 'bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3 lg:hidden">
                {heroData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-white scale-125'
                            : 'bg-white/40 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>


        </div>
    );
};

export default HeroComponent;