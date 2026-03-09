import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(nextLang);
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.services'), path: '/#services' },
        { name: t('nav.about'), path: '/#about' },
        { name: t('nav.gallery'), path: '/#gallery' },
        { name: t('nav.contact'), path: '/#contact' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? 'bg-[#0a0a0c]/90 backdrop-blur-xl shadow-2xl border-b border-white/5 py-3'
                        : 'bg-transparent py-5'
                    }`}
                dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl md:text-3xl font-heading font-black tracking-wider text-white flex items-center gap-0" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                        <span className="text-shimmer">ONE</span>CARS
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-6 text-sm font-bold tracking-wide">
                            {navLinks.map((link, idx) => {
                                const isActive = location.pathname === (link.path.startsWith('/#') ? '/' : link.path);
                                return (
                                    <li key={idx}>
                                        {link.path.startsWith('/#') && location.pathname === '/' ? (
                                            <a href={link.path.replace('/', '')} style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }} className={`transition-colors relative group ${isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
                                                {link.name}
                                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                            </a>
                                        ) : (
                                            <Link to={link.path.startsWith('/#') ? '/' : link.path} style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }} className={`transition-colors relative group ${isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
                                                {link.name}
                                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="flex items-center gap-4 border-l border-white/30 pl-6 rtl:border-r rtl:border-l-0 rtl:pr-6 md:ml-2">
                            <button onClick={toggleLanguage} className="text-white font-bold hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-sm" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }} aria-label="Toggle Language">
                                <Globe size={18} />
                                <span className="uppercase">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                            </button>

                            <button onClick={toggleTheme} className="text-white font-bold hover:text-[#D4AF37] transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }} aria-label="Toggle Theme">
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>

                            <a
                                href="#contact"
                                className="hidden lg:inline-flex px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-white text-sm font-bold uppercase tracking-wider rounded-sm transition-all shadow-lg hover:shadow-[#D4AF37]/20 hover:-translate-y-0.5"
                            >
                                {t('nav.bookNow')}
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={toggleLanguage} className="text-white font-bold hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-sm" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                            <span className="uppercase font-bold">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                        </button>
                        <button onClick={toggleTheme} className="text-white font-bold hover:text-[#D4AF37] transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="text-white font-bold hover:text-[#D4AF37] transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: i18n.language === 'ar' ? '-100%' : '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: i18n.language === 'ar' ? '-100%' : '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-white dark:bg-[#080d15] flex flex-col pointer-events-auto"
                        dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                    >
                        <div className="flex justify-between items-center p-6 border-b border-black/10 dark:border-white/10">
                            <Link to="/" className="text-2xl font-heading font-bold text-black dark:text-white flex gap-1" onClick={() => setMobileMenuOpen(false)}>
                                <span className="text-shimmer">ONE</span>CARS
                            </Link>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                <X size={32} />
                            </button>
                        </div>
                        <nav className="flex-1 flex flex-col py-8 px-6 overflow-y-auto">
                            <ul className="flex flex-col gap-6 text-xl tracking-wide">
                                {navLinks.map((link, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <a
                                            href={link.path.startsWith('/#') && location.pathname === '/' ? link.path.replace('/', '') : link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-black/80 dark:text-white/80 hover:text-amber-800 dark:text-[#D4AF37] dark:hover:text-amber-800 dark:text-[#D4AF37] transition-colors block pb-4 border-b border-black/5 dark:border-white/5"
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-8 flex flex-col gap-4">
                                <a
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full text-center py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white font-bold uppercase tracking-wider rounded-sm shadow-lg"
                                >
                                    {t('nav.bookNow')}
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
