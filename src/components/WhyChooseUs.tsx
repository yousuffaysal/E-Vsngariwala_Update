import React, { useState, useEffect, useRef } from 'react';
import { Home, DollarSign, Leaf, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 200);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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

  const features = [
    {
      category: language === 'bn' ? 'সেবা' : 'Service',
      date: language === 'bn' ? 'জানুয়ারি 2025' : 'January 2025',
      title: t('whyChooseUs.doorstep.title'),
      description: t('whyChooseUs.doorstep.description'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center',
      color: 'bg-emerald-600',
      icon: Home
    },
    {
      category: language === 'bn' ? 'মূল্য' : 'Pricing',
      date: language === 'bn' ? 'জানুয়ারি 2025' : 'January 2025',
      title: t('whyChooseUs.rates.title'),
      description: t('whyChooseUs.rates.description'),
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center',
      color: 'bg-blue-600',
      icon: DollarSign
    },
    {
      category: language === 'bn' ? 'পরিবেশ' : 'Environment',
      date: language === 'bn' ? 'জানুয়ারি 2025' : 'January 2025',
      title: t('whyChooseUs.eco.title'),
      description: t('whyChooseUs.eco.description'),
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center',
      color: 'bg-green-600',
      icon: Leaf
    },
    {
      category: language === 'bn' ? 'বিশ্বাস' : 'Trust',
      date: language === 'bn' ? 'জানুয়ারি 2025' : 'January 2025',
      title: t('whyChooseUs.trusted.title'),
      description: t('whyChooseUs.trusted.description'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center',
      color: 'bg-indigo-600',
      icon: Shield
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`} style={{
            transitionDelay: isVisible ? '300ms' : '0ms',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {t('whyChooseUs.title')}
          </h2>
          <p className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('whyChooseUs.subtitle')}
          </p>
        </div>

        {/* Article Preview Cards - 2x2 Grid with Alternating Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0; // Even index = image top, Odd index = image bottom

            return (
              <article
                key={index}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-16 scale-95'
                  }`}
                style={{
                  transitionDelay: isVisible ? `${500 + (index * 200)}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {isEven ? (
                  // Even cards: Image top, Text bottom
                  <>
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-2xl border-2 m-3 sm:m-4" style={{ borderColor: '#e1fcae' }}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6" style={{ backgroundColor: '#e1fcae' }}>
                      {/* Category and Date */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <span className={`inline-block ${feature.color} text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full`}>
                          {feature.category}
                        </span>
                        <span className={`text-xs sm:text-sm text-gray-500 ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {feature.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-300 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-gray-600 leading-relaxed text-xs sm:text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {feature.description}
                      </p>
                    </div>
                  </>
                ) : (
                  // Odd cards: Text top, Image bottom
                  <>
                    {/* Content */}
                    <div className="p-4 sm:p-6" style={{ backgroundColor: '#e1fcae' }}>
                      {/* Category and Date */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <span className={`inline-block ${feature.color} text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full`}>
                          {feature.category}
                        </span>
                        <span className={`text-xs sm:text-sm text-gray-500 ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {feature.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-300 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-gray-600 leading-relaxed text-xs sm:text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-b-2xl border-2 m-3 sm:m-4" style={{ borderColor: '#e1fcae' }}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-800 ease-out ${isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
          }`} style={{
            transitionDelay: isVisible ? '1200ms' : '0ms',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
          <a
            href="https://wa.me/8801759251523"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {t('whyChooseUs.cta')}
            <ArrowRight size={18} className="sm:hidden" />
            <ArrowRight size={20} className="hidden sm:block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
