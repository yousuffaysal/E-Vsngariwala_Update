import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Stats: React.FC = () => {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            // Animate numbers
            const finalNumbers = [10000, 95, 100, 20];
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const interval = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              const easeOut = 1 - Math.pow(1 - progress, 3);

              setAnimatedNumbers(
                finalNumbers.map(num => Math.floor(num * easeOut))
              );

              if (currentStep >= steps) {
                clearInterval(interval);
                setAnimatedNumbers(finalNumbers);
              }
            }, stepDuration);
          }, 300);
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

  const stats = [
    {
      number: t('stats.pickups'),
      label: t('stats.pickups.label'),
      color: 'from-emerald-400 to-teal-500'
    },
    {
      number: t('stats.satisfaction'),
      label: t('stats.satisfaction.label'),
      color: 'from-blue-400 to-cyan-500'
    },
    {
      number: t('stats.collectors'),
      label: t('stats.collectors.label'),
      color: 'from-purple-400 to-pink-500'
    },
    {
      number: t('stats.cities'),
      label: t('stats.cities.label'),
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-20 relative overflow-hidden transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      style={{
        background: 'linear-gradient(135deg, #0f766e 0%, #065f46 25%, #047857 50%, #059669 75%, #10b981 100%)',
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lime-400 via-yellow-300 to-transparent"></div>
        <div
          className="absolute inset-0 bg-repeat opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse ${isVisible ? 'opacity-30' : 'opacity-0'
                }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`} style={{
            transitionDelay: isVisible ? '500ms' : '0ms',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {t('stats.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ease-out ${isVisible
                  ? 'opacity-100 translate-y-0 scale-100 rotate-0'
                  : 'opacity-0 translate-y-16 scale-95 rotate-2'
                }`}
              style={{
                transitionDelay: isVisible ? `${800 + (index * 200)}ms` : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 mb-4 transform group-hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl`}>
                <div className={`text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-600 ${language === 'bn' ? 'font-bengali' : ''} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`} style={{
                    transitionDelay: isVisible ? `${1000 + (index * 200)}ms` : '0ms',
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}>
                  {index === 0 && `${animatedNumbers[0].toLocaleString()}+`}
                  {index === 1 && `${animatedNumbers[1]}%`}
                  {index === 2 && `${animatedNumbers[2]}+`}
                  {index === 3 && `${animatedNumbers[3]}+`}
                </div>
              </div>
              <h3 className={`text-lg font-semibold text-lime-100 transition-all duration-600 ${language === 'bn' ? 'font-bengali' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{
                  transitionDelay: isVisible ? `${1200 + (index * 200)}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}>
                {stat.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`} style={{
            transitionDelay: isVisible ? '1600ms' : '0ms',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
          <a
            href="https://wa.me/8801759251523"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-lime-400 text-emerald-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-lime-300 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ${language === 'bn' ? 'font-bengali' : ''}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {language === 'bn' ? 'আজই শুরু করুন' : 'Get Started Today'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;