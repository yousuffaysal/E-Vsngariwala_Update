import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3800024/pexels-photo-3800024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('hero.title')}
          </h1>
          
          <p className={`text-base sm:text-lg md:text-xl text-emerald-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <a 
              href="https://wa.me/8801883144539" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-white border border-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 text-sm sm:text-base ${language === 'bn' ? 'font-bengali' : ''}`}
            >
              <Phone size={18} className="sm:hidden" />
              <Phone size={20} className="hidden sm:block" />
              {t('hero.phone')}
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-lime-400 mb-1 sm:mb-2">24/7</div>
              <div className={`text-emerald-100 text-sm sm:text-base ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' ? 'সেবা উপলব্ধ' : 'Service Available'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-lime-400 mb-1 sm:mb-2">
                {language === 'bn' ? 'একই দিন' : 'Same Day'}
              </div>
              <div className={`text-emerald-100 text-sm sm:text-base ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' ? 'পিকআপ' : 'Pickup'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-lime-400 mb-1 sm:mb-2">
                {language === 'bn' ? 'সেরা দাম' : 'Best Price'}
              </div>
              <div className={`text-emerald-100 text-sm sm:text-base ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' ? 'গ্যারান্টি' : 'Guaranteed'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#e1fcae] to-transparent"></div>
    </section>
  );
};

export default Hero;