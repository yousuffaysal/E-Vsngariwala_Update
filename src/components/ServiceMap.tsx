import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServiceMap: React.FC = () => {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            // Delay map loading for dramatic effect
            setTimeout(() => {
              setMapLoaded(true);
            }, 500);
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

  const cities = [
    { name: t('map.dhaka'), x: '55%', y: '45%', major: true },
    { name: t('map.chittagong'), x: '75%', y: '60%', major: true },
    { name: t('map.sylhet'), x: '80%', y: '25%', major: false },
    { name: t('map.rajshahi'), x: '25%', y: '35%', major: false },
    { name: t('map.khulna'), x: '35%', y: '70%', major: false },
    { name: t('map.barisal'), x: '50%', y: '80%', major: false }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-1200 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`} style={{
          transitionDelay: isVisible ? '300ms' : '0ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {t('map.title')}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('map.subtitle')}
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
        }`} style={{
          transitionDelay: isVisible ? '500ms' : '0ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <div className="relative bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 overflow-hidden shadow-lg">
            {/* Accurate Bangladesh Map SVG */}
            <div className={`relative w-full h-96 mx-auto transition-all duration-800 ease-out ${
              mapLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} style={{
              transitionDelay: mapLoaded ? '200ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Accurate Bangladesh outline with proper shape */}
                <path 
                  d="M60 80 L70 75 L85 70 L100 65 L115 60 L130 55 L145 50 L160 48 L175 45 L190 42 L205 40 L220 38 L235 36 L250 35 L265 34 L280 33 L295 32 L310 31 L325 30 L340 29 L355 28 L370 27 L380 28 L385 30 L390 35 L395 40 L400 45 L400 55 L398 65 L395 75 L390 85 L385 95 L380 105 L375 115 L370 125 L365 135 L360 145 L355 155 L350 165 L345 175 L340 185 L335 195 L330 205 L325 215 L320 225 L315 235 L310 245 L305 255 L300 265 L295 275 L290 285 L285 295 L280 300 L275 300 L270 295 L265 290 L260 285 L255 280 L250 275 L245 270 L240 265 L235 260 L230 255 L225 250 L220 245 L215 240 L210 235 L205 230 L200 225 L195 220 L190 215 L185 210 L180 205 L175 200 L170 195 L165 190 L160 185 L155 180 L150 175 L145 170 L140 165 L135 160 L130 155 L125 150 L120 145 L115 140 L110 135 L105 130 L100 125 L95 120 L90 115 L85 110 L80 105 L75 100 L70 95 L65 90 L60 85 L55 80 L50 75 L45 70 L40 65 L35 60 L30 55 L25 50 L20 45 L15 40 L10 35 L5 30 L0 25 L0 15 L5 10 L10 5 L15 0 L25 0 L35 5 L45 10 L55 15 L60 20 L65 25 L70 30 L75 35 L80 40 L85 45 L90 50 L95 55 L100 60 L105 65 L110 70 L115 75 L120 80 Z" 
                  fill="url(#mapGradient)" 
                  stroke="#90EE90" 
                  strokeWidth="1"
                />
                
                {/* Major rivers - Padma, Jamuna, Meghna */}
                <path 
                  d="M80 120 Q120 110 160 115 Q200 120 240 125 Q280 130 320 135"
                  stroke="#ADD8E6" 
                  strokeWidth="2" 
                  fill="none" 
                  opacity="0.7"
                />
                <path 
                  d="M100 140 Q140 135 180 140 Q220 145 260 150 Q300 155 340 160"
                  stroke="#ADD8E6" 
                  strokeWidth="1.5" 
                  fill="none" 
                  opacity="0.7"
                />
                <path 
                  d="M120 160 Q160 165 200 170 Q240 175 280 180 Q320 185 360 190"
                  stroke="#ADD8E6" 
                  strokeWidth="1.5" 
                  fill="none" 
                  opacity="0.7"
                />
                
                {/* Delta region rivers */}
                <path 
                  d="M200 180 Q220 185 240 190 Q260 195 280 200 Q300 205 320 210 Q340 215 360 220"
                  stroke="#ADD8E6" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.6"
                />
                <path 
                  d="M220 190 Q240 195 260 200 Q280 205 300 210 Q320 215 340 220"
                  stroke="#ADD8E6" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.6"
                />
                <path 
                  d="M240 200 Q260 205 280 210 Q300 215 320 220"
                  stroke="#ADD8E6" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.6"
                />
                
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#90EE90', stopOpacity: 0.9 }} />
                    <stop offset="50%" style={{ stopColor: '#98FB98', stopOpacity: 0.7 }} />
                    <stop offset="100%" style={{ stopColor: '#F0FFF0', stopOpacity: 0.3 }} />
                  </linearGradient>
                  
                  {/* Glow effect for cities */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              {/* City Markers */}
              {cities.map((city, index) => (
                <div 
                  key={index}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-700 ease-out ${
                    mapLoaded 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-0'
                  }`}
                  style={{ 
                    left: city.x, 
                    top: city.y,
                    transitionDelay: mapLoaded ? `${800 + (index * 200)}ms` : '0ms',
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <div className={`relative ${city.major ? 'w-8 h-8' : 'w-5 h-5'} rounded-full ${city.major ? 'bg-emerald-600' : 'bg-teal-500'} shadow-lg border-2 border-white`}>
                    <div className={`absolute inset-0 rounded-full ${city.major ? 'bg-emerald-400' : 'bg-teal-300'} animate-ping opacity-60`}></div>
                    <div className={`absolute inset-1 rounded-full ${city.major ? 'bg-emerald-300' : 'bg-teal-200'} animate-pulse`}></div>
                  </div>
                  
                  {/* City Label */}
                  <div className={`absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap ${language === 'bn' ? 'font-bengali' : ''} scale-95 group-hover:scale-100`}>
                    <div className="text-sm font-medium">{city.name}</div>
                    <div className={`text-xs text-gray-300 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'সেবা উপলব্ধ' : 'Service Available'}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              ))}
              
              {/* Service coverage indicator */}
              <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md transition-all duration-800 ease-out ${
                mapLoaded 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-8 scale-95'
              }`} style={{
                transitionDelay: mapLoaded ? '1200ms' : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  <span className={`text-xs text-gray-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'প্রধান শহর' : 'Major Cities'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className={`text-xs text-gray-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'অন্যান্য এলাকা' : 'Other Areas'}
                  </span>
                </div>
              </div>
            </div>

            {/* Service Areas List */}
            <div className={`mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-800 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{
              transitionDelay: isVisible ? '1000ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}>
              {cities.map((city, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2 text-gray-700 transition-all duration-600 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${1200 + (index * 100)}ms` : '0ms',
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  <MapPin size={16} className="text-emerald-600" />
                  <span className={`text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>{city.name}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`text-center mt-8 transition-all duration-800 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`} style={{
              transitionDelay: isVisible ? '1400ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}>
              <p className={`text-gray-600 mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' ? 'আপনার এলাকায় সেবা উপলব্ধ না থাকলে আমাদের জানান' : 'Don\'t see your area? Let us know!'}
              </p>
              <a 
                href="https://wa.me/8801883144539" 
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 ${language === 'bn' ? 'font-bengali' : ''}`} 
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {language === 'bn' ? 'নতুন এলাকার অনুরোধ করুন' : 'Request New Area'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;