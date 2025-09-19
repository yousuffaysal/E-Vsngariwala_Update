import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img 
              src="https://res.cloudinary.com/duh7c5x99/image/upload/v1758233268/evangari_e764hp.png" 
              alt="E-Vangariwala Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
            <span className={`text-white font-bold text-lg sm:text-xl md:text-2xl ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              E-Vangariwala
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#services" className={`text-white hover:text-gray-300 transition-colors font-medium text-sm xl:text-base ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('nav.services')}
            </a>
            <a href="#pricing" className={`text-white hover:text-gray-300 transition-colors font-medium text-sm xl:text-base ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('nav.pricing')}
            </a>
            
            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className={`flex items-center space-x-1 text-white hover:text-gray-300 transition-colors font-medium text-sm xl:text-base ${language === 'bn' ? 'font-bengali' : ''}`}
              >
                <span>{t('nav.about')}</span>
                <ChevronDown size={14} className={`transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCompanyOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <a href="#about" className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {t('nav.about')}
                  </a>
                  <a href="#careers" className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'ক্যারিয়ার' : 'Careers'}
                  </a>
                  <a href="#news" className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'সংবাদ' : 'News'}
                  </a>
                </div>
              )}
            </div>
            
            <a href="#contact" className={`text-white hover:text-gray-300 transition-colors font-medium text-sm xl:text-base ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('nav.contact')}
            </a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors font-medium"
              aria-label="Toggle language"
            >
              <Globe size={16} className="sm:hidden" />
              <Globe size={18} className="hidden sm:block" />
              <span className="text-xs sm:text-sm font-medium">{language === 'en' ? 'বাং' : 'EN'}</span>
            </button>
            
            <a 
              href="https://wa.me/8801883144539" 
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex bg-black text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium flex items-center gap-1 sm:gap-2 text-xs sm:text-sm ${language === 'bn' ? 'font-bengali' : ''}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="hidden sm:inline">Pick-Up Call</span>
              <span className="sm:hidden">Call</span>
              <span className="text-sm sm:text-lg">→</span>
            </a>

            <button
              className="lg:hidden text-white p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} className="sm:hidden" /> : <Menu size={20} className="sm:hidden" />}
              {isMenuOpen ? <X size={24} className="hidden sm:block" /> : <Menu size={24} className="hidden sm:block" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm shadow-lg">
            <nav className="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-6">
              <a href="#services" className={`text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base py-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                {t('nav.services')}
              </a>
              <a href="#pricing" className={`text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base py-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                {t('nav.pricing')}
              </a>
              <a href="#about" className={`text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base py-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                {t('nav.about')}
              </a>
              <a href="#contact" className={`text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base py-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                {t('nav.contact')}
              </a>
              <a 
                href="https://wa.me/8801883144539" 
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-200 transition-colors font-medium text-center text-sm sm:text-base ${language === 'bn' ? 'font-bengali' : ''}`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Pick-Up Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;