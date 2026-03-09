import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowDown } from 'lucide-react';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2500&auto=format&fit=crop',
        tagline: 'PRECISION. PERFORMANCE.',
    },
    {
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2500&auto=format&fit=crop',
        tagline: 'LUXURY. REDEFINED.',
    },
    {
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2500&auto=format&fit=crop',
        tagline: 'EXPERT. CARE.',
    },
];

const thumbnails = [
    'https://images.unsplash.com/photo-1471479917193-f00955256257?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562141961-b84d4f9af1ec?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop',
];

const HeroSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);

    // Auto-advance slides every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
            setProgress(0);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Progress bar
    useEffect(() => {
        setProgress(0);
        const timer = setInterval(() => {
            setProgress((p) => Math.min(p + 1, 100));
        }, 50);
        return () => clearInterval(timer);
    }, [current]);

    const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
    const next = () => setCurrent((c) => (c + 1) % slides.length);

    return (
        <section
            className="relative h-screen min-h-[700px] w-full flex items-stretch overflow-hidden bg-[#0a0a0c]"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            {/* ── Full-screen sliding background ── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease: 'easeInOut' }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={slides[current].image}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ filter: 'brightness(0.45) contrast(1.05)' }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* ── Gradient overlay ── */}
            <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
            <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

            {/* ── Main content split layout ── */}
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-center pt-28 pb-16 px-6 lg:px-16 gap-12 container mx-auto max-w-7xl">

                {/* LEFT – text block */}
                <div className="flex-1 flex flex-col justify-center">

                    {/* Slide tagline badge */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`tag-${current}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-shimmer text-expand text-xs font-bold tracking-[0.35em] uppercase mb-6"
                        >
                            {slides[current].tagline}
                        </motion.p>
                    </AnimatePresence>

                    {/* Main headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-white leading-[0.9] mb-8"
                    >
                        <span className="text-shimmer">ONE</span>
                        <br />
                        CARS
                        <br />
                        <span className="text-3xl sm:text-4xl md:text-5xl font-light text-white/60 tracking-widest">
                            {t('nav.services')}
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-md mb-10"
                    >
                        {t('hero.subtitle')} — {t('hero.marquee').split(' • ')[0]}
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs hover:bg-[#B8860B] transition-colors"
                        >
                            {t('hero.bookService')}
                            <ChevronRight size={16} />
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
                        >
                            {t('hero.exploreServices')}
                        </a>
                    </motion.div>

                    {/* Slide progress bar */}
                    <div className="mt-12 flex items-center gap-4">
                        <button onClick={prev} className="text-white/50 hover:text-white transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <div className="flex gap-2 items-center">
                            {slides.map((_, i) => (
                                <button key={i} onClick={() => setCurrent(i)} className="relative">
                                    <span className={`block h-0.5 transition-all duration-300 ${i === current ? 'w-10 bg-[#D4AF37]' : 'w-4 bg-white/30'}`} />
                                    {i === current && (
                                        <motion.span
                                            className="absolute inset-y-0 left-0 bg-[#D4AF37]/30 h-0.5"
                                            style={{ width: `${progress}%` }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                        <button onClick={next} className="text-white/50 hover:text-white transition-colors">
                            <ChevronRight size={20} />
                        </button>
                        <span className="text-white/30 text-xs font-mono ml-auto">
                            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* RIGHT – decorative image grid (hidden on mobile) */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="hidden lg:flex flex-col gap-4 w-72 xl:w-80 shrink-0"
                >
                    <div className="grid grid-cols-2 gap-4">
                        {thumbnails.slice(0, 2).map((src, i) => (
                            <div key={i} className="aspect-square overflow-hidden rounded-lg border border-white/10">
                                <img
                                    src={src}
                                    alt=""
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="aspect-video overflow-hidden rounded-lg border border-white/10">
                        <img
                            src={thumbnails[2]}
                            alt=""
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-lg border border-white/10">
                        <img
                            src={thumbnails[3]}
                            alt=""
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Stats strip */}
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        {[['15+', 'Years'], ['5K+', 'Cars'], ['100%', 'Trust']].map(([val, lbl]) => (
                            <div key={lbl} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
                                <p className="text-[#D4AF37] font-heading font-black text-lg leading-none">{val}</p>
                                <p className="text-white/50 text-[10px] uppercase tracking-widest mt-1">{lbl}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                >
                    <ArrowDown size={16} className="text-white/30" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
