import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1503375837264-58ebbb370217?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop"
];

const GallerySection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <section id="gallery" className="py-24 bg-white dark:bg-[#0a0a0c] border-t border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-300" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-shimmer text-expand font-bold tracking-widest uppercase text-sm mb-3">
                        {t('nav.gallery')}
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-wide text-black dark:text-white mb-6 transition-colors">
                        {t('gallery.title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/10 cursor-pointer shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-500 z-10"></div>
                            <img
                                src={img}
                                alt={`Workshop detail ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl z-20 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
