"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TestimonialComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Mohammed Saif",
            title: "CEO/Company",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
            quote: "With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered."
        },
        {
            id: 2,
            name: "Sarah Johnson",
            title: "CTO/TechCorp",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
            quote: "The professional service and attention to detail exceeded our expectations. Every step of the process was handled with care and expertise."
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="w-full min-h-screen bg-[#4B2615] text-white px-8 py-16 mb-8">
            <div className="w-full container mx-auto">
                <div className="md:mb-16">
                    <h2 className="lg:text-[44px] text-[30px] font-bold mb-6">What our clients are saying</h2>
                    <p className=" lg:text-lg text-[16px] leading-relaxed max-w-2xl opacity-60">
                        Our clients range from individual investors, to local, international as well as fortune 500 companies.Our clients range from individual investors, to local, international as well as fortune 500 companies.
                    </p>
                </div>
                <div className=" py-8 ">
                    <div className="flex md:flex-row flex-col gap-8 md:items-start items-center lg:h-[500px]">
                        <div className="flex-shrink-0 ">
                            <div className="w-full  ">
                                <Image
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    className="w-full lg:h-full object-cover h-[300px]"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between h-full">
                            <div>
                                <blockquote className="lg:text-[24px] md:text-[20px] text-[18px] leading-relaxed mb-8 text-amber-50  md:w-[80%] opacity-[60%]">
                                    {currentTestimonial.quote}
                                </blockquote>
                            </div>

                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="md:text-[24px] text-[18px] font-bold text-white mb-1">
                                        {currentTestimonial.name}
                                    </h3>
                                    <p className="text-white">
                                        {currentTestimonial.title}
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