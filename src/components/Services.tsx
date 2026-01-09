import React, { useState, useEffect, useRef } from 'react';
import { Wrench, Smartphone, FileText, Package, Zap, Battery, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before starting animations
          setTimeout(() => {
            setIsVisible(true);
          }, 200);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Wrench,
      title: t('services.iron.title'),
      description: t('services.iron.desc'),
      color: 'bg-orange-50 text-orange-600 border-orange-200',
      details: t('services.iron.details'),
      priceRange: t('services.iron.priceRange'),
      items: t('services.iron.items')
    },
    {
      icon: Smartphone,
      title: t('services.ewaste.title'),
      description: t('services.ewaste.desc'),
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      details: t('services.ewaste.details'),
      priceRange: t('services.ewaste.priceRange'),
      items: t('services.ewaste.items')
    },
    {
      icon: FileText,
      title: t('services.paper.title'),
      description: t('services.paper.desc'),
      color: 'bg-yellow-50 text-yellow-600 border-yellow-200',
      details: t('services.paper.details'),
      priceRange: t('services.paper.priceRange'),
      items: t('services.paper.items')
    },
    {
      icon: Package,
      title: t('services.plastic.title'),
      description: t('services.plastic.desc'),
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      details: t('services.plastic.details'),
      priceRange: t('services.plastic.priceRange'),
      items: t('services.plastic.items')
    },
    {
      icon: Zap,
      title: t('services.appliances.title'),
      description: t('services.appliances.desc'),
      color: 'bg-red-50 text-red-600 border-red-200',
      details: t('services.appliances.details'),
      priceRange: t('services.appliances.priceRange'),
      items: t('services.appliances.items')
    },
    {
      icon: Battery,
      title: t('services.batteries.title'),
      description: t('services.batteries.desc'),
      color: 'bg-green-50 text-green-600 border-green-200',
      details: t('services.batteries.details'),
      priceRange: t('services.batteries.priceRange'),
      items: t('services.batteries.items')
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`relative py-20 overflow-hidden transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      style={{
        backgroundColor: '#e1fcae',
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Plus Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(0, 0, 0, 0.1) 20px,
            rgba(0, 0, 0, 0.1) 40px
          )`
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(0, 0, 0, 0.05) 20px,
            rgba(0, 0, 0, 0.05) 40px
          )`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`} style={{
            transitionDelay: isVisible ? '300ms' : '0ms',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {t('services.title')}
          </h2>
          <p className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-700 border border-gray-100 hover:border-emerald-200 group ${isVisible
                  ? 'opacity-100 translate-y-0 scale-100 rotate-0'
                  : 'opacity-0 translate-y-16 scale-95 rotate-1'
                }`}
              style={{
                transitionDelay: isVisible ? `${600 + (index * 200)}ms` : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-500 ${service.color} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`} style={{
                  transitionDelay: isVisible ? `${800 + (index * 200)}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                <service.icon size={24} className="sm:hidden" />
                <service.icon size={32} className="hidden sm:block" />
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold text-gray-900 mb-2 transition-all duration-600 ${language === 'bn' ? 'font-bengali' : ''} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`} style={{
                  transitionDelay: isVisible ? `${900 + (index * 200)}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}>
                {service.title}
              </h3>
              <p className={`text-sm sm:text-base text-gray-600 transition-all duration-600 ${language === 'bn' ? 'font-bengali' : ''} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`} style={{
                  transitionDelay: isVisible ? `${1000 + (index * 200)}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}>
                {service.description}
              </p>
              <div className={`mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{
                  transitionDelay: isVisible ? `${1100 + (index * 200)}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}>
                <button
                  onClick={() => setSelectedService(index)}
                  className={`text-emerald-600 hover:text-emerald-700 font-medium text-xs sm:text-sm flex items-center gap-1 transition-all duration-300 ${language === 'bn' ? 'font-bengali' : ''}`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {language === 'bn' ? 'আরও জানুন' : 'Learn More'}
                  <span className="transition-transform group-hover:translate-x-1 duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl ${services[selectedService].color} flex items-center justify-center`}>
                {React.createElement(services[selectedService].icon, { size: 32 })}
              </div>
              <div>
                <h3 className={`text-2xl font-bold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {services[selectedService].title}
                </h3>
                <p className={`text-gray-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {services[selectedService].description}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              {/* Details */}
              <div>
                <h4 className={`text-lg font-semibold text-gray-900 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {language === 'bn' ? 'বিস্তারিত' : 'Details'}
                </h4>
                <p className={`text-gray-700 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {services[selectedService].details}
                </p>
              </div>

              {/* Price Range */}
              <div>
                <h4 className={`text-lg font-semibold text-gray-900 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {language === 'bn' ? 'দামের পরিসর' : 'Price Range'}
                </h4>
                <p className={`text-emerald-600 font-medium ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {services[selectedService].priceRange}
                </p>
              </div>

              {/* Items We Accept */}
              <div>
                <h4 className={`text-lg font-semibold text-gray-900 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {language === 'bn' ? 'যা আমরা গ্রহণ করি' : 'Items We Accept'}
                </h4>
                <p className={`text-gray-700 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {services[selectedService].items}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfyj1SX03JhxIVkXJ5D-IitcYoDkDTM46stZYtD0URkrI1-vA/viewform?embedded=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium text-center"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {language === 'bn' ? 'পিকআপ বুক করুন' : 'Book Pickup'}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;