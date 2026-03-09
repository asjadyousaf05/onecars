import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <h1 className="text-8xl md:text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] to-[#B8860B] mb-4">
                404
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading tracking-wider text-black dark:text-white mb-2 transition-colors">
                Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8 transition-colors">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white font-bold tracking-wider uppercase rounded-sm hover:-translate-y-1 transition-all shadow-lg hover:shadow-[#D4AF37]/20"
            >
                {t('common.backHome')}
            </Link>
        </div>
    );
};

export default NotFound;
