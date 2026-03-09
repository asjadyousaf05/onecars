import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceLayoutProps {
    id: string;
    titleKey: string;
    shortDesc: string;
    image: string;
    detailedDesc: string;
    includesList: string[];
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
    titleKey,
    shortDesc,
    image,
    detailedDesc,
    includesList
}) => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const { scrollYProgress } = useScroll();
    const yPos = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <div className="min-h-screen bg-[#0a0a0c] pt-28 pb-20" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-6 lg:px-12">
                <Link to="/#services" className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-800 dark:text-[#D4AF37] transition-colors mb-10 group">
                    <span className="transform transition-transform group-hover:-translate-x-1 group-hover:rtl:translate-x-1">
                        {isRtl ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
                    </span>
                    <span className="font-medium tracking-wide">{t('common.backHome')}</span>
                </Link>

                <div className="flex flex-col lg:flex-row gap-16 relative items-start">

                    {/* Left Side: Sticky Content */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-auto flex flex-col pt-4 z-20">
                        <motion.div
                            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-black tracking-wide text-white mb-6 leading-tight">
                                {t(titleKey)}
                            </h1>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10">
                                {shortDesc}
                            </p>

                            <a
                                href="/#contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors"
                            >
                                {t('nav.bookNow')}
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side: Scrolling Content */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-2xl overflow-hidden border border-white/5 relative aspect-video bg-[#111111]"
                        >
                            <motion.img
                                style={{ y: yPos, scale: 1.1 }}
                                src={image}
                                alt={t(titleKey)}
                                className="w-full h-full object-cover origin-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#04070a] via-[#04070a]/20 to-transparent"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                            className="mt-12 bg-[#111111] p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden"
                        >
                            <h3 className="text-2xl font-heading font-bold text-white tracking-widest uppercase mb-6 relative inline-block">
                                Service Overview
                                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#D4AF37]"></span>
                            </h3>

                            <p className="text-gray-300 text-lg leading-relaxed mb-12">
                                {detailedDesc}
                            </p>

                            <div className="bg-[#181818] rounded-xl p-8 border border-white/5 relative">
                                <h3 className="text-xl font-bold text-white tracking-wide mb-8 z-10 relative">
                                    {t('services.includes')}
                                </h3>

                                <ul className="space-y-4 z-10 relative">
                                    {includesList.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.15 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-black/50 border border-white/5 hover:border-white/10 hover:bg-black transition-colors group"
                                        >
                                            <CheckCircle2 className="text-amber-800 dark:text-[#D4AF37] mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" size={20} />
                                            <span className="text-gray-300">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout;
