"use client"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Twitter, Facebook, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { postSubscribe } from '@/apiServices/apiServices';

const Footer = () => {
    const { language } = useSelector((state) => state.language);
    const [subscriptionStatus, setSubscriptionStatus] = useState(null); // 'success', 'error', 'duplicate', null
    const [isLoading, setIsLoading] = useState(false);

    // Translation object
    const translations = {
        en: {
            emailPlaceholder: "Email",
            subscribe: "Subscribe",
            subscribing: "Subscribing...",
            contacts: "Contacts",
            about: "About",
            ourStrategy: "Our Strategy",
            ourAdvantages: "Our Advantages",
            socialResponsibility: "Social Responsibility",
            ourServices: "Our Services",
            copyright: "© 2024 . All rights reserved.",
            // Validation and status messages
            emailRequired: "Email is required",
            emailInvalid: "Please enter a valid email address",
            subscribeSuccess: "Successfully subscribed ",
            subscribeError: "This email is already subscribed!",
            subscribeDuplicate: "This email is already subscribed!",
            networkError: "Network error. Please check your connection."
        },
        ar: {
            emailPlaceholder: "البريد الإلكتروني",
            subscribe: "اشتراك",
            subscribing: "جاري الاشتراك...",
            contacts: "جهات الاتصال",
            about: "حول",
            ourStrategy: "استراتيجيتنا",
            ourAdvantages: "مزايانا",
            socialResponsibility: "المسؤولية الاجتماعية",
            ourServices: "خدماتنا",
            copyright: "© 2024 . جميع الحقوق محفوظة.",
            // Validation and status messages
            emailRequired: "البريد الإلكتروني مطلوب",
            emailInvalid: "يرجى إدخال بريد إلكتروني صالح",
            subscribeSuccess: "تم الاشتراك بنجاح في نشرتنا الإخبارية!",
            subscribeError: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
            subscribeDuplicate: "هذا البريد الإلكتروني مشترك بالفعل!",
            networkError: "خطأ في الشبكة. يرجى التحقق من اتصالك."
        }
    };

    const t = translations[language] || translations.en;
    const isRTL = language === 'ar';

    // Formik validation schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email(t.emailInvalid)
            .required(t.emailRequired)
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            await handleSubscribe(values.email, resetForm);
        }
    });

    const handleSubscribe = async (email, resetForm) => {
        setIsLoading(true);
        setSubscriptionStatus(null);

        try {
            // Prepare subscription data in the required format
            const subscriptionData = {
                data: {
                    mail: email
                }
            };

            // Call your postSubscribe API
            const result = await postSubscribe(subscriptionData);
            console.log('Subscription successful:', result);
            
            setSubscriptionStatus('success');
            resetForm();
            
            // Clear status after 5 seconds
            setTimeout(() => {
                setSubscriptionStatus(null);
            }, 5000);

        } catch (error) {
            console.error('Subscription error:', error);
            
            // Check if it's a duplicate email error
            if (error.message.includes('duplicate') || error.message.includes('already') || 
                error.response?.status === 400 || error.response?.data?.message?.includes('already')) {
                setSubscriptionStatus('duplicate');
            } else {
                setSubscriptionStatus('error');
            }
            
            // Clear status after 5 seconds
            setTimeout(() => {
                setSubscriptionStatus(null);
            }, 5000);
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusMessage = () => {
        switch (subscriptionStatus) {
            case 'success':
                return (
                    <div className="flex items-center gap-2 text-green-400 text-sm mt-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>{t.subscribeSuccess}</span>
                    </div>
                );
            case 'duplicate':
                return (
                    <div className="flex items-center gap-2 text-yellow-400 text-sm mt-2">
                        <AlertCircle className="w-4 h-4" />
                        <span>{t.subscribeDuplicate}</span>
                    </div>
                );
            case 'error':
                return (
                    <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                        <AlertCircle className="w-4 h-4" />
                        <span>{t.subscribeError}</span>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <footer className="text-white w-full" style={{ backgroundColor: '#4B2615' }}>
            <div className="border-b border-white/20 py-6 w-full container mx-auto">
                <div className={`w-full mx-auto flex flex-col md:flex-row justify-end items-center gap-6 container ${isRTL ? 'md:justify-start' : ''}`}>

                    <div className="flex flex-col items-center gap-2">
                        <form onSubmit={formik.handleSubmit} className="flex items-center gap-4">
                            <div className="flex bg-white p-1 rounded-lg">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t.emailPlaceholder}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    disabled={isLoading}
                                    className={`px-4 py-2 border-0 text-gray-900 bg-white focus:outline-none ${isRTL ? 'text-right rounded-r-md' : 'rounded-l-md'} ${
                                        formik.touched.email && formik.errors.email 
                                            ? 'border-2 border-red-500' 
                                            : ''
                                    }`}
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !formik.isValid}
                                    className="px-4 py-2 rounded-md font-medium transition-colors duration-200 text-white relative disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    style={{ backgroundColor: '#4B2615' }}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>{t.subscribing}</span>
                                        </>
                                    ) : (
                                        t.subscribe
                                    )}
                                </button>
                            </div>
                        </form>
                        
                        {/* Validation Error */}
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-400 text-sm">
                                {formik.errors.email}
                            </div>
                        )}
                        
                        {/* Status Messages */}
                        {getStatusMessage()}
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <a
                            href="/contacts"
                            className="text-white hover:text-gray-300 transition-colors duration-200"
                        >
                            {t.contacts}
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
                <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <nav className={`flex flex-wrap gap-8 text-white justify-center ${isRTL ? 'md:order-2' : ''}`}>
                        <a
                            href="/about"
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            {t.about}
                        </a>
                        <a
                            href="/our-strategy"
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            {t.ourStrategy}
                        </a>
                        <a
                            href="/our-advantages"
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            {t.ourAdvantages}
                        </a>
                        <a
                            href="/social-responsibility"
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            {t.socialResponsibility}
                        </a>
                        <a
                            href="/our-services"
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            {t.ourServices}
                        </a>
                    </nav>

                    {/* Copyright */}
                    <div className={`text-white text-sm ${isRTL ? 'md:order-1' : ''}`}>
                        {t.copyright}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;