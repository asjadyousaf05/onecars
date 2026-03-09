import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <footer className="bg-gray-100 dark:bg-[#04070a] pt-16 pb-8 border-t border-black/5 dark:border-white/5 transition-colors duration-300" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

                    {/* Brand Info */}
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="text-3xl font-heading font-bold tracking-wider text-black dark:text-white transition-colors">
                            <span className="text-shimmer">ONE</span>CARS
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-4 transition-colors">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex space-x-4 space-x-reverse:rtl rtl:space-x-reverse mt-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all text-gray-500 dark:text-gray-400">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all text-gray-500 dark:text-gray-400">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all text-gray-500 dark:text-gray-400">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-black dark:text-white font-heading text-xl mb-6 tracking-wide relative inline-block transition-colors">
                            {t('nav.services')}
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#D4AF37]"></span>
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 flex flex-col items-start gap-1 transition-colors">
                            <li><Link to="/services/diagnostics" className="hover:text-amber-800 dark:text-[#D4AF37] transition-colors">{t('services.diagnostics')}</Link></li>
                            <li><Link to="/services/oil-fluids" className="hover:text-amber-800 dark:text-[#D4AF37] transition-colors">{t('services.oil')}</Link></li>
                            <li><Link to="/services/brakes" className="hover:text-amber-800 dark:text-[#D4AF37] transition-colors">{t('services.brakes')}</Link></li>
                            <li><Link to="/services/transmissions" className="hover:text-amber-800 dark:text-[#D4AF37] transition-colors">{t('services.transmission')}</Link></li>
                            <li><Link to="/services/ac-systems" className="hover:text-amber-800 dark:text-[#D4AF37] transition-colors">{t('services.ac')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-black dark:text-white font-heading text-xl mb-6 tracking-wide relative inline-block transition-colors">
                            {t('contact.title')}
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#D4AF37]"></span>
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 transition-colors">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-amber-800 dark:text-[#D4AF37] mt-0.5 flex-shrink-0" size={18} />
                                <span>Riyadh, Saudi Arabia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-amber-800 dark:text-[#D4AF37] flex-shrink-0" size={18} />
                                <span dir="ltr">+966 50 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-amber-800 dark:text-[#D4AF37] flex-shrink-0" size={18} />
                                <span>info@onecars.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-black dark:text-white font-heading text-xl mb-6 tracking-wide relative inline-block transition-colors">
                            {t('contact.hours')}
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#D4AF37]"></span>
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 transition-colors">
                            <li className="flex items-start gap-3">
                                <Clock className="text-amber-800 dark:text-[#D4AF37] mt-0.5 flex-shrink-0" size={18} />
                                {i18n.language === 'en' ? (
                                    <div>
                                        <span className="block text-black dark:text-white font-medium mb-1 transition-colors">Sat - Thu</span>
                                        8:00 AM - 10:00 PM
                                    </div>
                                ) : (
                                    <div>
                                        <span className="block text-black dark:text-white font-medium mb-1 transition-colors">السبت - الخميس</span>
                                        8:00 صباحاً - 10:00 مساءً
                                    </div>
                                )}
                            </li>
                            <li className="flex items-start gap-3 mt-4">
                                <Clock className="text-gray-500 mt-0.5 flex-shrink-0" size={18} />
                                {i18n.language === 'en' ? (
                                    <div>
                                        <span className="block text-gray-500 dark:text-gray-400 font-medium mb-1 transition-colors">Friday</span>
                                        Closed
                                    </div>
                                ) : (
                                    <div>
                                        <span className="block text-gray-500 dark:text-gray-400 font-medium mb-1 transition-colors">الجمعة</span>
                                        مغلق
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-500 transition-colors">
                    <p>&copy; {new Date().getFullYear()} OneCars. {t('footer.rights')}</p>
                    <p className="flex items-center gap-1">
                        {t('footer.developedBy')}
                        <span className="text-amber-800 dark:text-[#D4AF37]">Ahmed Ali</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
