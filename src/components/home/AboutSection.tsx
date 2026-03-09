import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <section id="about" className="py-24 bg-white dark:bg-[#0a0a0c] relative overflow-hidden transition-colors duration-300" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden border-2 border-[#D4AF37]/30 p-2">
                                <img
                                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop"
                                    alt="Luxury mechanic service"
                                    className="w-full h-full object-cover rounded-tl-[90px] rounded-br-[90px] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className={`absolute bottom-10 ${isRtl ? '-left-6' : '-right-6'} bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 p-6 rounded-2xl shadow-xl flex items-center gap-4 transition-colors`}
                            >
                                <div className="bg-[#D4AF37]/20 p-3 rounded-full text-amber-800 dark:text-[#D4AF37]">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h4 className="text-amber-800 dark:text-[#D4AF37] font-bold text-2xl">15+</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap transition-colors">{t('about.stats.years').replace('15+ ', '')}</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-1/2"
                    >
                        <h3 className="text-shimmer text-expand font-bold tracking-widest uppercase text-sm mb-3">
                            {t('nav.about')}
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-heading font-black tracking-wide text-black dark:text-white mb-6 leading-tight transition-colors">
                            {t('about.title')}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 transition-colors">
                            {t('about.description')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                                <CheckCircle2 className="text-amber-800 dark:text-[#D4AF37] flex-shrink-0" size={24} />
                                <span className="text-black dark:text-white font-medium transition-colors">{t('about.stats.years')}</span>
                            </div>
                            <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                                <Users className="text-amber-800 dark:text-[#D4AF37] flex-shrink-0" size={24} />
                                <span className="text-black dark:text-white font-medium transition-colors">{t('about.stats.cars')}</span>
                            </div>
                        </div>

                        <a
                            href="#services"
                            className="inline-flex px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold uppercase tracking-widest text-xs hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        >
                            {t('hero.exploreServices')}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
