import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const ServicesSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const services = [
        {
            id: 'diagnostics',
            image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop',
            titleKey: 'services.diagnostics'
        },
        {
            id: 'oil-fluids',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
            titleKey: 'services.oil'
        },
        {
            id: 'brakes',
            image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200&auto=format&fit=crop',
            titleKey: 'services.brakes'
        },
        {
            id: 'transmissions',
            image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200&auto=format&fit=crop',
            titleKey: 'services.transmission'
        },
        {
            id: 'ac-systems',
            image: 'https://images.unsplash.com/photo-1621501103258-1e06f3bfea3d?q=80&w=1200&auto=format&fit=crop',
            titleKey: 'services.ac'
        },
        {
            id: 'full-service',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
            titleKey: 'services.full'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section id="services" className="py-24 bg-gray-50 dark:bg-[#0a0a0c] border-t border-black/5 dark:border-white/5 relative transition-colors duration-300" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h3 className="text-shimmer text-expand font-bold tracking-widest uppercase text-sm mb-3">
                        {t('hero.exploreServices')}
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-wide text-black dark:text-white mb-6">
                        {t('services.title')}
                    </h2>
                    <div className="w-24 h-px bg-[#D4AF37] mx-auto opacity-70"></div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-none flex flex-col h-full relative overflow-hidden cursor-pointer"
                        >
                            <div className="h-56 w-full relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={t(service.titleKey)}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-heading font-bold text-black dark:text-white tracking-wide mb-4 relative z-10 transition-colors">
                                    {t(service.titleKey)}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow relative z-10 transition-colors">
                                    Premium care and maintenance for your luxury vehicle's {t(service.titleKey).toLowerCase()}, ensuring optimal performance.
                                </p>

                                <Link
                                    to={`/services/${service.id}`}
                                    className="inline-flex items-center gap-2 text-black dark:text-white font-semibold text-xs tracking-widest uppercase mt-auto group-hover:text-amber-800 dark:text-[#D4AF37] dark:group-hover:text-amber-800 dark:text-[#D4AF37] transition-colors relative z-10"
                                >
                                    {t('services.details')}
                                    {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
