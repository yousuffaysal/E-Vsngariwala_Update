import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'bn';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.solutions': 'Solutions',
    'nav.contact': 'Contact',
    'nav.bookPickup': 'Book Pickup',
    
    // Hero
    'hero.title': 'Turn Your Scrap into Cash—Fast Pickup in Dhaka & Across Bangladesh',
    'hero.subtitle': 'Professional scrap collection service with verified collectors. Get the best prices for your iron, steel, e-waste, paper, and more. Same-day pickup available.',
    'hero.cta': 'Book Pickup Now',
    'hero.phone': 'Call: +880 1883-144539',
    
    // Services
    'services.title': 'What We Buy',
    'services.subtitle': 'We collect all types of scrap materials at competitive prices',
    'services.iron.title': 'Iron & Steel',
    'services.iron.desc': 'Old iron, steel items, construction materials',
    'services.ewaste.title': 'E-Waste',
    'services.ewaste.desc': 'Computers, phones, electronics, cables',
    'services.paper.title': 'Paper & Cardboard',
    'services.paper.desc': 'Newspapers, books, cardboard boxes',
    'services.plastic.title': 'Plastic Items',
    'services.plastic.desc': 'Bottles, containers, plastic furniture',
    'services.appliances.title': 'Appliances',
    'services.appliances.desc': 'Old ACs, fridges, washing machines',
    'services.batteries.title': 'Batteries',
    'services.batteries.desc': 'Car batteries, UPS batteries, dry cells',
    
    // Service Details
    'services.iron.details': 'We collect all types of iron and steel scrap including old construction materials, household items, and industrial waste. Our team ensures proper handling and transportation.',
    'services.iron.priceRange': '৳25-45 per kg',
    'services.iron.items': 'Steel rods, iron pipes, old gates, construction materials, household iron items, industrial scrap',
    
    'services.ewaste.details': 'Electronic waste collection with data security guarantee. We ensure all electronic devices are properly recycled and data is securely destroyed.',
    'services.ewaste.priceRange': '৳50-500 per item',
    'services.ewaste.items': 'Computers, laptops, mobile phones, tablets, printers, monitors, cables, chargers',
    
    'services.paper.details': 'We collect all types of paper waste for recycling. Clean and dry paper gets better rates. We ensure environmentally friendly disposal.',
    'services.paper.priceRange': '৳8-15 per kg',
    'services.paper.items': 'Newspapers, books, magazines, cardboard boxes, office paper, packaging materials',
    
    'services.plastic.details': 'Plastic waste collection for recycling. We accept various types of plastic materials and ensure they are processed responsibly.',
    'services.plastic.priceRange': '৳12-25 per kg',
    'services.plastic.items': 'Plastic bottles, containers, furniture, packaging materials, industrial plastic waste',
    
    'services.appliances.details': 'Large appliance collection with proper handling. We ensure safe transportation and responsible recycling of all components.',
    'services.appliances.priceRange': '৳200-2000 per item',
    'services.appliances.items': 'Refrigerators, air conditioners, washing machines, ovens, microwaves, water heaters',
    
    'services.batteries.details': 'Battery collection with proper disposal methods. We ensure hazardous materials are handled safely and recycled appropriately.',
    'services.batteries.priceRange': '৳30-150 per kg',
    'services.batteries.items': 'Car batteries, UPS batteries, laptop batteries, mobile batteries, dry cells',
    
    // Stats
    'stats.title': 'Why Choose Vangariwala?',
    'stats.pickups': '10,000+',
    'stats.pickups.label': 'Successful Pickups',
    'stats.satisfaction': '95%',
    'stats.satisfaction.label': 'Customer Satisfaction',
    'stats.collectors': '100+',
    'stats.collectors.label': 'Verified Collectors',
    'stats.cities': '20+',
    'stats.cities.label': 'Cities Covered',
    
    // Map
    'map.title': 'Service Areas Across Bangladesh',
    'map.subtitle': 'We provide scrap collection services in major cities and towns across Bangladesh',
    'map.dhaka': 'Dhaka',
    'map.chittagong': 'Chittagong',
    'map.sylhet': 'Sylhet',
    'map.rajshahi': 'Rajshahi',
    'map.khulna': 'Khulna',
    'map.barisal': 'Barisal',
    
    // Footer
    'footer.tagline': 'Making scrap valuable, one pickup at a time.',
    'footer.services.title': 'Services',
    'footer.services.pickup': 'Book Pickup',
    'footer.services.pricing': 'Pricing Guide',
    'footer.services.materials': 'Materials We Buy',
    'footer.services.contact': 'Contact Us',
    'footer.company.title': 'Company',
    'footer.company.about': 'About Vangariwala',
    'footer.company.careers': 'Careers',
    'footer.company.blog': 'Blog',
    'footer.company.press': 'Press',
    'footer.contact.title': 'Contact',
    'footer.contact.phone': '+880 1883-144539',
    'footer.contact.email': 'info@vangariwala.com',
    'footer.contact.address': 'Dhaka, Bangladesh',
    'footer.rights': '© 2025 E-Vangariwala. All rights reserved.',
    
    // Sticky CTA
    'sticky.cta': 'Book Pickup',
    
    // Why Choose Us
    'whyChooseUs.title': 'Why Choose E-Vangariwala?',
    'whyChooseUs.subtitle': 'Experience the most convenient and reliable scrap collection service in Bangladesh',
    'whyChooseUs.doorstep.title': 'Doorstep Pickup',
    'whyChooseUs.doorstep.description': 'Schedule your scrap pickup and we\'ll come directly to your home or office.',
    'whyChooseUs.rates.title': 'Best Scrap Rates',
    'whyChooseUs.rates.description': 'Get the highest value for your scrap with instant cash or digital payment.',
    'whyChooseUs.eco.title': 'Eco-Friendly Recycling',
    'whyChooseUs.eco.description': 'We ensure all scrap is recycled responsibly to protect the environment.',
    'whyChooseUs.trusted.title': 'Trusted Across Dhaka & Bangladesh',
    'whyChooseUs.trusted.description': 'Thousands of happy customers rely on us for safe and fast scrap collection.',
    'whyChooseUs.cta': 'Book Pickup Now',
    
    // Call to Action
    'cta.contact': 'CONTACT',
    'cta.title': 'Let\'s Shape the Future of Clean Energy Together',
    'cta.getInTouch': 'Get In Touch'
  },
  bn: {
    // Header
    'nav.services': 'সেবাসমূহ',
    'nav.pricing': 'দাম',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.solutions': 'সমাধান',
    'nav.contact': 'যোগাযোগ',
    'nav.bookPickup': 'পিকআপ বুক করুন',
    
    // Hero
    'hero.title': 'আপনার স্ক্র্যাপকে নগদে রূপান্তর করুন—ঢাকা ও সারাদেশে দ্রুত পিকআপ',
    'hero.subtitle': 'যাচাইকৃত সংগ্রহকারীদের সাথে পেশাদার স্ক্র্যাপ সংগ্রহ সেবা। আপনার লোহা, ইস্পাত, ই-বর্জ্য, কাগজ এবং আরও অনেক কিছুর জন্য সেরা দাম পান। একই দিনে পিকআপ উপলব্ধ।',
    'hero.cta': 'এখনই পিকআপ বুক করুন',
    'hero.phone': 'ফোন: +৮৮০ ১৮৮৩-১৪৪৫৩৯',
    
    // Services
    'services.title': 'আমরা যা কিনি',
    'services.subtitle': 'প্রতিযোগিতামূলক দামে সব ধরনের স্ক্র্যাপ সামগ্রী সংগ্রহ করি',
    'services.iron.title': 'লোহা ও ইস্পাত',
    'services.iron.desc': 'পুরানো লোহা, ইস্পাত সামগ্রী, নির্মাণ সামগ্রী',
    'services.ewaste.title': 'ই-বর্জ্য',
    'services.ewaste.desc': 'কম্পিউটার, ফোন, ইলেকট্রনিক্স, ক্যাবল',
    'services.paper.title': 'কাগজ ও কার্ডবোর্ড',
    'services.paper.desc': 'সংবাদপত্র, বই, কার্ডবোর্ড বক্স',
    'services.plastic.title': 'প্ল্যাস্টিক সামগ্রী',
    'services.plastic.desc': 'বোতল, পাত্র, প্ল্যাস্টিক আসবাব',
    'services.appliances.title': 'যন্ত্রপাতি',
    'services.appliances.desc': 'পুরানো এসি, ফ্রিজ, ওয়াশিং মেশিন',
    'services.batteries.title': 'ব্যাটারি',
    'services.batteries.desc': 'গাড়ির ব্যাটারি, ইউপিএস ব্যাটারি, শুকনো কোষ',
    
    // Service Details
    'services.iron.details': 'আমরা সব ধরনের লোহা ও ইস্পাত স্ক্র্যাপ সংগ্রহ করি যার মধ্যে পুরানো নির্মাণ সামগ্রী, গৃহস্থালি জিনিস এবং শিল্প বর্জ্য অন্তর্ভুক্ত। আমাদের দল সঠিক হ্যান্ডলিং এবং পরিবহন নিশ্চিত করে।',
    'services.iron.priceRange': 'প্রতি কেজি ৳২৫-৪৫',
    'services.iron.items': 'ইস্পাত রড, লোহার পাইপ, পুরানো গেট, নির্মাণ সামগ্রী, গৃহস্থালি লোহার জিনিস, শিল্প স্ক্র্যাপ',
    
    'services.ewaste.details': 'ডেটা সুরক্ষা গ্যারান্টি সহ ইলেকট্রনিক বর্জ্য সংগ্রহ। আমরা নিশ্চিত করি যে সব ইলেকট্রনিক ডিভাইস সঠিকভাবে রিসাইকেল হয় এবং ডেটা নিরাপদে ধ্বংস করা হয়।',
    'services.ewaste.priceRange': 'প্রতি আইটেম ৳৫০-৫০০',
    'services.ewaste.items': 'কম্পিউটার, ল্যাপটপ, মোবাইল ফোন, ট্যাবলেট, প্রিন্টার, মনিটর, ক্যাবল, চার্জার',
    
    'services.paper.details': 'রিসাইক্লিংয়ের জন্য আমরা সব ধরনের কাগজের বর্জ্য সংগ্রহ করি। পরিষ্কার এবং শুকনো কাগজের দাম বেশি। আমরা পরিবেশবান্ধব নিষ্পত্তি নিশ্চিত করি।',
    'services.paper.priceRange': 'প্রতি কেজি ৳৮-১৫',
    'services.paper.items': 'সংবাদপত্র, বই, ম্যাগাজিন, কার্ডবোর্ড বক্স, অফিস কাগজ, প্যাকেজিং সামগ্রী',
    
    'services.plastic.details': 'রিসাইক্লিংয়ের জন্য প্ল্যাস্টিক বর্জ্য সংগ্রহ। আমরা বিভিন্ন ধরনের প্ল্যাস্টিক সামগ্রী গ্রহণ করি এবং সেগুলো দায়িত্বের সাথে প্রক্রিয়াকরণ নিশ্চিত করি।',
    'services.plastic.priceRange': 'প্রতি কেজি ৳১২-২৫',
    'services.plastic.items': 'প্ল্যাস্টিক বোতল, পাত্র, আসবাব, প্যাকেজিং সামগ্রী, শিল্প প্ল্যাস্টিক বর্জ্য',
    
    'services.appliances.details': 'সঠিক হ্যান্ডলিং সহ বড় যন্ত্রপাতি সংগ্রহ। আমরা নিরাপদ পরিবহন এবং সব উপাদানের দায়িত্বশীল রিসাইক্লিং নিশ্চিত করি।',
    'services.appliances.priceRange': 'প্রতি আইটেম ৳২০০-২০০০',
    'services.appliances.items': 'রেফ্রিজারেটর, এয়ার কন্ডিশনার, ওয়াশিং মেশিন, ওভেন, মাইক্রোওয়েভ, ওয়াটার হিটার',
    
    'services.batteries.details': 'সঠিক নিষ্পত্তি পদ্ধতি সহ ব্যাটারি সংগ্রহ। আমরা নিশ্চিত করি যে বিপজ্জনক পদার্থ নিরাপদে হ্যান্ডল করা হয় এবং সঠিকভাবে রিসাইকেল করা হয়।',
    'services.batteries.priceRange': 'প্রতি কেজি ৳৩০-১৫০',
    'services.batteries.items': 'গাড়ির ব্যাটারি, ইউপিএস ব্যাটারি, ল্যাপটপ ব্যাটারি, মোবাইল ব্যাটারি, শুকনো কোষ',
    
    // Stats
    'stats.title': 'কেন ভাঙারিওয়ালা বেছে নেবেন?',
    'stats.pickups': '১০,০০০+',
    'stats.pickups.label': 'সফল পিকআপ',
    'stats.satisfaction': '৯৫%',
    'stats.satisfaction.label': 'গ্রাহক সন্তুষ্টি',
    'stats.collectors': '১০০+',
    'stats.collectors.label': 'যাচাইকৃত সংগ্রহকারী',
    'stats.cities': '২০+',
    'stats.cities.label': 'শহর কভারেজ',
    
    // Map
    'map.title': 'বাংলাদেশ জুড়ে সেবা এলাকা',
    'map.subtitle': 'বাংলাদেশের প্রধান শহর ও জেলায় স্ক্র্যাপ সংগ্রহ সেবা প্রদান করি',
    'map.dhaka': 'ঢাকা',
    'map.chittagong': 'চট্টগ্রাম',
    'map.sylhet': 'সিলেট',
    'map.rajshahi': 'রাজশাহী',
    'map.khulna': 'খুলনা',
    'map.barisal': 'বরিশাল',
    
    // Footer
    'footer.tagline': 'এক পিকআপে স্ক্র্যাপকে মূল্যবান করে তুলছি।',
    'footer.services.title': 'সেবাসমূহ',
    'footer.services.pickup': 'পিকআপ বুক করুন',
    'footer.services.pricing': 'দামের গাইড',
    'footer.services.materials': 'যা কিনি',
    'footer.services.contact': 'যোগাযোগ',
    'footer.company.title': 'প্রতিষ্ঠান',
    'footer.company.about': 'ভাঙারিওয়ালা সম্পর্কে',
    'footer.company.careers': 'ক্যারিয়ার',
    'footer.company.blog': 'ব্লগ',
    'footer.company.press': 'প্রেস',
    'footer.contact.title': 'যোগাযোগ',
    'footer.contact.phone': '+৮৮০ ১৮৮৩-১৪৪৫৩৯',
    'footer.contact.email': 'info@vangariwala.com',
    'footer.contact.address': 'ঢাকা, বাংলাদেশ',
    'footer.rights': '© ২০২৫ ই-ভাঙারিওয়ালা। সকল অধিকার সংরক্ষিত।',
    
    // Sticky CTA
    'sticky.cta': 'পিকআপ বুক করুন',
    
    // Why Choose Us
    'whyChooseUs.title': 'কেন ই-ভাঙারিওয়ালা বেছে নেবেন?',
    'whyChooseUs.subtitle': 'বাংলাদেশের সবচেয়ে সুবিধাজনক এবং নির্ভরযোগ্য স্ক্র্যাপ সংগ্রহ সেবার অভিজ্ঞতা নিন',
    'whyChooseUs.doorstep.title': 'দরজায় পিকআপ',
    'whyChooseUs.doorstep.description': 'আপনার স্ক্র্যাপ পিকআপের সময় নির্ধারণ করুন এবং আমরা সরাসরি আপনার বাড়ি বা অফিসে আসব।',
    'whyChooseUs.rates.title': 'সেরা স্ক্র্যাপ দাম',
    'whyChooseUs.rates.description': 'তাত্ক্ষণিক নগদ বা ডিজিটাল পেমেন্টের মাধ্যমে আপনার স্ক্র্যাপের জন্য সর্বোচ্চ মূল্য পান।',
    'whyChooseUs.eco.title': 'পরিবেশবান্ধব রিসাইক্লিং',
    'whyChooseUs.eco.description': 'আমরা পরিবেশ রক্ষার জন্য সব স্ক্র্যাপকে দায়িত্বের সাথে রিসাইকেল করি।',
    'whyChooseUs.trusted.title': 'ঢাকা ও বাংলাদেশ জুড়ে বিশ্বস্ত',
    'whyChooseUs.trusted.description': 'হাজার হাজার খুশি গ্রাহক নিরাপদ এবং দ্রুত স্ক্র্যাপ সংগ্রহের জন্য আমাদের উপর নির্ভর করেন।',
    'whyChooseUs.cta': 'এখনই পিকআপ বুক করুন',
    
    // Call to Action
    'cta.contact': 'যোগাযোগ',
    'cta.title': 'আসুন একসাথে পরিষ্কার শক্তির ভবিষ্যৎ গড়ি',
    'cta.getInTouch': 'যোগাযোগ করুন'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en');
  };
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};