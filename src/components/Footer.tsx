import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
              <img
                src="https://ik.imagekit.io/2lax2ytm2/PHOTO-2026-01-09-12-21-07-removebg-preview.png"
                alt="E-Vangariwala Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <span className={`font-bold text-lg sm:text-xl lg:text-2xl ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                E-Vangariwala
              </span>
            </div>
            <p className={`text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook size={18} className="sm:hidden" />
                <Facebook size={20} className="hidden sm:block" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter size={18} className="sm:hidden" />
                <Twitter size={20} className="hidden sm:block" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram size={18} className="sm:hidden" />
                <Instagram size={20} className="hidden sm:block" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className={`font-semibold text-base sm:text-lg mb-3 sm:mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('footer.services.title')}
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className={`text-sm sm:text-base text-gray-300 hover:text-emerald-400 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.services.pickup')}
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm sm:text-base text-gray-300 hover:text-emerald-400 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.services.pricing')}
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm sm:text-base text-gray-300 hover:text-emerald-400 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.services.materials')}
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm sm:text-base text-gray-300 hover:text-emerald-400 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.services.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={`font-semibold text-base sm:text-lg mb-3 sm:mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('footer.company.title')}
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className={`text-sm sm:text-base text-gray-300 hover:text-emerald-400 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.company.about')}
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm sm:text-base text-gray-300 hover:text-emerald-400 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.company.careers')}
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm sm:text-base text-gray-300 hover:text-emerald-400 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.company.blog')}
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm sm:text-base text-gray-300 hover:text-emerald-400 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.company.press')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`font-semibold text-base sm:text-lg mb-3 sm:mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('footer.contact.title')}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Phone size={14} className="sm:hidden text-emerald-400" />
                <Phone size={16} className="hidden sm:block text-emerald-400" />
                <a
                  href="https://wa.me/8801759251523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm sm:text-base text-gray-300 hover:text-emerald-400 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}
                >
                  {t('footer.contact.phone')}
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Mail size={14} className="sm:hidden text-emerald-400" />
                <Mail size={16} className="hidden sm:block text-emerald-400" />
                <span className="text-sm sm:text-base text-gray-300">{t('footer.contact.email')}</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <MapPin size={14} className="sm:hidden text-emerald-400" />
                <MapPin size={16} className="hidden sm:block text-emerald-400" />
                <span className={`text-sm sm:text-base text-gray-300 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.contact.address')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className={`text-xs sm:text-sm text-gray-400 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;