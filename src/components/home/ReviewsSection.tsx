import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ReviewsSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const reviews = [
        {
            name: isRtl ? 'أحمد الخارجي' : 'Ahmed Al-Kharji',
            rating: 5,
            text: isRtl
                ? 'خدمة رائعة بكل المقاييس. سيارتي لم تكن أبدًا بهذا الأداء الممتاز. أوصي بشدة بصيانة بانوراما الشاملة.'
                : 'Absolutely fantastic service. My car has never run better. Highly recommend their full service package.'
        },
        {
            name: isRtl ? 'سارة محمد' : 'Sarah Mohammed',
            rating: 5,
            text: isRtl
                ? 'الاهتمام بالتفاصيل لا مثيل له. طاقم محترف ومرفق مذهل حقًا.'
                : 'The attention to detail is just unmatched. Professional staff and beautiful facility.'
        },
        {
            name: isRtl ? 'فيصل الدوسري' : 'Faisal Al-Dosari',
            rating: 5,
            text: isRtl
                ? 'أحضرت سيارتي الرياضية للفحص. عملية شفافة جداً ونتائج ممتازة.'
                : 'Brought my sports car here for diagnostics. Very transparent process and excellent results.'
        },
    ];

    return (
        <section id="reviews" className="py-24 bg-white dark:bg-[#0a0a0c] border-t border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-300" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-shimmer text-expand font-bold tracking-widest uppercase text-sm mb-3">
                        {t('reviews.title')}
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-wide text-black dark:text-white mb-6 transition-colors">
                        Client Testimonials
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 overflow-hidden pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-gray-50 dark:bg-[#111111] border border-black/5 dark:border-white/5 rounded-xl p-8 relative mt-6 transition-colors shadow-sm dark:shadow-none"
                        >
                            <div className="absolute -top-6 left-8 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] w-12 h-12 rounded-full flex items-center justify-center text-[#04070a] shadow-lg">
                                <Quote size={20} fill="currentColor" />
                            </div>

                            <div className="flex gap-1 mb-6 mt-2 text-amber-800 dark:text-[#D4AF37]">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-light italic transition-colors">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-black/5 dark:border-white/5 pt-6 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center text-black dark:text-white font-bold font-heading transition-colors">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-black dark:text-white font-bold text-sm tracking-wide transition-colors">{review.name}</h4>
                                    <span className="text-gray-500 text-xs">Verified Customer</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
