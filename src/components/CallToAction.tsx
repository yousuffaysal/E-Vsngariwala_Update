import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CallToAction: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#e1fcae' }}>
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

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Contact Button */}
        <div className="mb-8">
          <button className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
            {t('cta.contact')}
          </button>
        </div>

        {/* Main Heading */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {t('cta.title')}
        </h2>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/8801759251523"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
          >
            {t('cta.getInTouch')}
          </a>

          <a
            href="https://wa.me/8801759251523"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
