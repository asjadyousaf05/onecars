import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ServiceLayout from '../components/ServiceLayout';

const ServicePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const servicesData: Record<string, any> = {
        'diagnostics': {
            titleKey: 'services.diagnostics',
            shortDesc: isRtl
                ? 'تشخيص متقدم بالكمبيوتر باستخدام أحدث التقنيات لاكتشاف أي أعطال أو مشكلات محتملة في سيارتك الفاخرة بشكل دقيق.'
                : 'Advanced computer diagnostics utilizing state-of-the-art technology to accurately pinpoint any faults or potential issues in your luxury vehicle.',
            image: "https://images.unsplash.com/photo-1632731809051-5121699f41b2?w=1600&auto=format&fit=crop",
            detailedDesc: isRtl
                ? 'يقوم الفنيون المعتمدون لدينا بإجراء فحص شامل للأنظمة الإلكترونية لسيارتك. من خلال أدوات التشخيص المتقدمة، نضمن قراءة دقيقة لكل بيانات المحرك وناقل الحركة، مما يسمح بحل المشكلات بكفاءة عالية وبدون تخمين.'
                : 'Our certified technicians run a comprehensive scan of your vehicle\'s electronic systems. Utilizing OEM-level diagnostic tools, we ensure a highly accurate reading of every engine and transmission metric, allowing for efficient, guess-free troubleshooting.',
            includesList: isRtl ? [
                'قراءة وتحليل رموز الأعطال (OBD II)',
                'فحص المستشعرات والأنظمة الإلكترونية',
                'مراقبة أداء المحرك في الوقت الفعلي',
                'اختبار أنظمة الانبعاثات والتحكم بالطاقة',
                'تقديم تقرير مفصل للعميل مع التوصيات'
            ] : [
                'Read and clear fault codes (OBD II)',
                'Inspection of sensors and electronic modules',
                'Real-time engine performance monitoring',
                'Testing of emissions and powertrain control systems',
                'Detailed customer report with recommendations'
            ]
        },
        'oil-fluids': {
            titleKey: 'services.oil',
            shortDesc: isRtl
                ? 'خدمة تغيير الزيوت والسوائل المتميزة للحفاظ على برودة وتشحيم وأداء محرك سيارتك في أفضل حالاته.'
                : 'Premium oil and fluid replacement services to keep your engine cool, lubricated, and performing at its absolute best.',
            image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&auto=format&fit=crop",
            detailedDesc: isRtl
                ? 'تعتبر الزيوت والسوائل شريان الحياة لسيارتك. نقدم خدمة تغيير الزيت باستخدام أفضل أنواع الزيوت التخليقية الموصى بها من المصنع، بالإضافة إلى فحص جميع السوائل الأساسية لضمان عمل السيارة بسلاسة تامة وحماية الأجزاء الداخلية من التآكل.'
                : 'Fluids are the lifeblood of your vehicle. We provide synthetic oil changes using factory-recommended premium oils, alongside a thorough inspection and top-up of all essential fluids to ensure perfect thermal management and protection against internal wear.',
            includesList: isRtl ? [
                'تغيير زيت المحرك باستخدام زيوت تخليقية 100%',
                'استبدال فلتر الزيت الأصلي',
                'فحص وتعبئة سائل الفرامل وسائل التبريد',
                'فحص زيت ناقل الحركة وسائل التوجيه',
                'فحص ضغط وتآكل الإطارات مجاناً'
            ] : [
                'Engine oil change using 100% synthetic oils',
                'Replacement with OEM-quality oil and cabin filters',
                'Inspection and top-up of brake fluid & coolant',
                'Transmission and power steering fluid check',
                'Complimentary tire pressure and tread inspection'
            ]
        },
        'brakes': {
            titleKey: 'services.brakes',
            shortDesc: isRtl
                ? 'صيانة وضبط أنظمة الفرامل لتحقيق أعلى معايير الأمان والسلامة لك ولعائلتك أثناء القيادة.'
                : 'Comprehensive maintenance and tuning of your braking system to ensure the highest safety standards for you on the road.',
            image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1600&auto=format&fit=crop",
            detailedDesc: isRtl
                ? 'سلامتك هي أولويتنا. تشمل خدمة أنظمة الفرامل فحصًا دقيقًا للأقمشة والهوبات، واستبدال الأجزاء التالفة بقطع غيار أصلية لضمان استجابة فورية للفرامل ومنع أصوات الصرير المزعجة، لتجربة قيادة آمنة وواثقة.'
                : 'Your safety is our priority. Our brake services include a meticulous inspection of pads and rotors, replacing worn components with high-performance OEM parts to guarantee instantaneous stopping power and eliminate annoying squeaks, providing a safe and confident driving experience.',
            includesList: isRtl ? [
                'فحص سماكة أقمشة (فحمات) الفرامل',
                'خرط أو استبدال الهوبات (أقراص الفرامل)',
                'فحص وتغيير سائل الفرامل لإزالة الرطوبة',
                'تشحيم دبابيس الفرامل والملاقط (الكاليبر)',
                'اختبار الطريق لضمان استجابة الفرامل'
            ] : [
                'Measurement of brake pad thickness and wear',
                'Resurfacing or replacement of brake rotors/discs',
                'Brake fluid flush and bleed to remove moisture',
                'Lubrication of caliper guide pins and hardware',
                'Post-service road test for braking response'
            ]
        },
        'transmissions': {
            titleKey: 'services.transmission',
            shortDesc: isRtl ? 'صيانة وإصلاح نواقل الحركة الأوتوماتيكية واليدوية لتغيير سرعات سلس وقيادة مريحة.' : 'Maintenance and repair of automatic and manual transmissions for smooth gear shifting and comfortable driving.',
            image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=1600&auto=format&fit=crop",
            detailedDesc: isRtl ? 'ناقل الحركة هو قلب الأداء الديناميكي لسيارتك. نحن نقدم صيانة متخصصة تشمل الفحص والتصليح التام لضمان استمرارية أداء ناقل الحركة بكل سلاسة وهدوء.' : 'The transmission is the heart of your car\'s dynamic performance. We offer specialized maintenance and complete repair to ensure the continuity of the transmission\'s performance smoothly and quietly.',
            includesList: isRtl ? ['فحص زيت ناقل الحركة والمستوى', 'تنظيف الفلتر والمغناطيس الداخلي', 'برمجة كمبيوتر القير (TCU)'] : ['Transmission fluid check and level adjustment', 'Filter and internal magnet cleaning', 'TCU (Transmission Control Unit) Programming']
        },
        'ac-systems': {
            titleKey: 'services.ac',
            shortDesc: isRtl ? 'صيانة شاملة لنظام التكييف لضمان هواء بارد ومنعش حتى في أقسى الظروف الصيفية.' : 'Comprehensive AC system maintenance to ensure cold and fresh air even in the harshest summer conditions.',
            image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1600&auto=format&fit=crop",
            detailedDesc: isRtl ? 'نحن ندرك أهمية التكييف المثالي في منطقتنا. نقدم خدمات شحن الفريون وإصلاح التسريبات وتنظيف الثلاجة الداخلية لضمان تبريد ممتاز وهواء صحي داخل المقصورة.' : 'We understand the importance of perfect air conditioning in our region. We provide Freon charging, leak repair, and internal evaporator cleaning to ensure excellent cooling and healthy air inside the cabin.',
            includesList: isRtl ? ['فحص النظام بجهاز لكشف التسرب', 'استبدال فلتر هواء المقصورة', 'تنظيف الثلاجة ومجاري الهواء', 'إعادة شحن غاز الفريون الأصلي'] : ['System check with a leak detection device', 'Cabin air filter replacement', 'AC evaporator and air duct cleaning', 'Original Freon gas recharge']
        },
        'full-service': {
            titleKey: 'services.full',
            shortDesc: isRtl ? 'صيانة شاملة من الصدام للصدام تعيد سيارتك الفاخرة إلى حالة الوكالة.' : 'Bumper-to-bumper full service that restores your luxury vehicle to factory-like condition.',
            image: "https://images.unsplash.com/photo-1503375837264-58ebbb370217?w=1600&auto=format&fit=crop",
            detailedDesc: isRtl ? 'صيانة كاملة تشمل فحص 150 نقطة في سيارتك. من المحرك إلى الفرامل والكهرباء والأنظمة التقنية، لضمان استمتاعك بسيارة آمنة وموثوقة تتفوق على توقعاتك.' : 'Complete service including a 150-point inspection covering the engine, brakes, electrical, and tech systems, ensuring you enjoy a safe, reliable car that exceeds expectations.',
            includesList: isRtl ? ['فحص جميع أجزاء السيارة بـ 150 نقطة', 'تغيير جميع الفلاتر والزيوت والسوائل', 'البرمجة والتحديث الشامل لجميع الأنظمة', 'غسيل وتلميع دقيق للسيارة', 'تقرير صيانة وضمان شامل للمحرك والقير'] : ['150-point comprehensive vehicle inspection', 'Complete oil, filter, and fluid changes', 'Software updates and full system programming', 'Detailed car wash and polishing', 'Maintenance report and comprehensive engine/transmission warranty']
        }
    };

    if (!id || !servicesData[id]) {
        return <Navigate to="/*" replace />;
    }

    const service = servicesData[id];

    return <ServiceLayout id={id} {...service} />;
};

export default ServicePage;
