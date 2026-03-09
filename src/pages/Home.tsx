import React from 'react';

import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import GallerySection from '../components/home/GallerySection';
import ReviewsSection from '../components/home/ReviewsSection';
import ContactSection from '../components/home/ContactSection';

const Home: React.FC = () => {
    return (
        <div className="w-full min-h-screen">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <GallerySection />
            <ReviewsSection />
            <ContactSection />
        </div>
    );
};

export default Home;
