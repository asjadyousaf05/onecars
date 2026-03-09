import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder form submission
        alert(isRtl ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0a0a0c] border-t border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-300" dir={isRtl ? 'rtl' : 'ltr'}>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-[#00BFFF] font-bold tracking-widest uppercase text-sm mb-3">
                        {t('nav.contact')}
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-wide text-black dark:text-white mb-6 transition-colors">
                        {t('contact.title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00BFFF] to-transparent mx-auto"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 bg-white dark:bg-[#111111] rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 shadow-md dark:shadow-none transition-colors">

                    {/* Contact Info container */}
                    <div className="w-full lg:w-1/3 bg-gray-100 dark:bg-[#181818] p-10 lg:p-12 relative overflow-hidden transition-colors">

                        <h3 className="text-2xl font-heading font-bold text-black dark:text-white tracking-widest uppercase mb-8 relative z-10 transition-colors">
                            {t('contact.title')}
                        </h3>

                        <ul className="space-y-8 relative z-10">
                            <li className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#00BFFF] flex-shrink-0 transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-black dark:text-white font-bold mb-1 text-sm tracking-widest uppercase transition-colors">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                                        123 Luxury Auto Street,<br />Riyadh, Saudi Arabia
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#00BFFF] flex-shrink-0 transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="text-black dark:text-white font-bold mb-1 text-sm tracking-widest uppercase transition-colors">Phone</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors" dir="ltr">+966 50 123 4567</p>
                                </div>
                            </li>

                            <li className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#00BFFF] flex-shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-black dark:text-white font-bold mb-1 text-sm tracking-widest uppercase transition-colors">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">info@onecars.com</p>
                                </div>
                            </li>

                            <li className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#00BFFF] flex-shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="text-black dark:text-white font-bold mb-1 text-sm tracking-widest uppercase transition-colors">{t('contact.hours')}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                                        {isRtl ? 'السبت - الخميس: 8ص - 10م' : 'Sat - Thu: 8:00 AM - 10:00 PM'} <br />
                                        {isRtl ? 'الجمعة: مغلق' : 'Friday: Closed'}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Form container */}
                    <div className="w-full lg:w-2/3 p-10 lg:p-12">
                        <h3 className="text-2xl font-heading font-bold text-black dark:text-white tracking-widest uppercase mb-8 transition-colors">
                            Send us a message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-600 dark:text-gray-400 text-sm font-bold tracking-widest uppercase mb-2 transition-colors">
                                        {t('contact.name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#00BFFF] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-600 dark:text-gray-400 text-sm font-bold tracking-widest uppercase mb-2 transition-colors">
                                        {t('contact.email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#00BFFF] transition-colors text-left"
                                        dir="ltr"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-600 dark:text-gray-400 text-sm font-bold tracking-widest uppercase mb-2 transition-colors">
                                    {t('contact.message')}
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#00BFFF] transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0077FF] hover:from-[#0077FF] hover:to-[#00BFFF] text-white font-bold uppercase tracking-widest rounded-sm hover:-translate-y-1 transition-all shadow-lg hover:shadow-[#00BFFF]/30 w-full sm:w-auto"
                            >
                                <Send size={18} />
                                <span>{t('contact.send')}</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-16 w-full h-[400px] border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg transition-colors">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14502.502958440079!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(60%) contrast(1.1) invert(90%) hue-rotate(180deg)' }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="OneCars Location Map"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
