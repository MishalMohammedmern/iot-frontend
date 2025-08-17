"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const TestimonialComponent = ({ testimonialData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { language } = useSelector((state) => state.language);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
    };

    const currentTestimonial = testimonialData[currentIndex];

    return (
        <div className="w-full min-h-screen bg-[#4B2615] text-white px-8 py-16 mb-8">
            <div className="w-full container mx-auto">
                <div className="md:mb-16">
                    <h2 className="lg:text-[44px] text-[30px] font-bold mb-6">{language === "ar" ? "ماذا يقول عملاؤنا" : "What our clients are saying"}</h2>
                    <p className=" lg:text-lg text-[16px] leading-relaxed max-w-2xl opacity-60">
                        {language === "ar" ? "يتراوح نطاق عملائنا من المستثمرين الأفراد إلى الشركات المحلية والدولية وكذلك شركات فورتشن 500. يتراوح نطاق عملائنا من المستثمرين الأفراد إلى الشركات المحلية والدولية وكذلك شركات فورتشن 500." : "Our clients range from individual investors, to local, international as well as fortune 500 companies.Our clients range from individual investors, to local, international as well as fortune 500 companies."}
                    </p>
                </div>
                <div className=" py-8 ">
                    <div className="flex md:flex-row flex-col gap-8 md:items-start items-center lg:h-[500px]">
                        <div className="flex-shrink-0 ">
                            <div className="w-full  ">
                                <Image
                                    src={currentTestimonial.image.url}
                                    alt={currentTestimonial.name}
                                    className="w-full lg:h-[500px] lg:w-[500px] object-cover h-[300px]"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between h-full">
                            <div>
                                <blockquote className="lg:text-[24px] md:text-[20px] text-[18px] leading-relaxed mb-8 text-amber-50  md:w-[80%] opacity-[60%]">
                                    {language === "ar" ? currentTestimonial.ar_review : currentTestimonial.review}
                                </blockquote>
                            </div>

                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="md:text-[24px] text-[18px] font-bold text-white mb-1">
                                        {language === "ar" ? currentTestimonial.ar_name : currentTestimonial.name}
                                    </h3>
                                    <p className="text-white">
                                        {currentTestimonial.position}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={prevTestimonial}
                                        className="w-12 h-12 rounded-full bg-amber-800/50 hover:bg-amber-700/50 border border-amber-600/30 flex items-center justify-center transition-colors duration-200"
                                        aria-label="Previous testimonial"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-amber-200" />
                                    </button>

                                    <button
                                        onClick={nextTestimonial}
                                        className="w-12 h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
                                        aria-label="Next testimonial"
                                    >
                                        <ChevronRight className="w-5 h-5 text-amber-900" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TestimonialComponent