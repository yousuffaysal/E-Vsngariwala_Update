import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const testimonials = [
    {
      name: language === 'bn' ? 'জোসেফ রেয়েস' : 'Joseph Reyes',
      company: language === 'bn' ? 'ভার্ডে অ্যান্ড কো. এর প্রতিষ্ঠাতা' : 'Founder of Verde & Co.',
      quote: language === 'bn' ? 
        'ভাঙারিওয়ালার সাথে কাজ করা সত্যিই প্রশান্তিদায়ক ছিল। যদি আপনি একটি টেকসই ব্র্যান্ড হন এবং এমন একটি ডিজাইন পার্টনার খুঁজছেন যারা আসলেই বুঝতে পারে — ভাঙারিওয়ালা সেই এক।' :
        'Working with Vangariwala was a breath of fresh air. If you\'re a sustainable brand looking for a design partner that actually gets it — Vangariwala is the one.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      name: language === 'bn' ? 'সারা আহমেদ' : 'Sarah Ahmed',
      company: language === 'bn' ? 'গ্রিন টেক সলিউশনসের সিইও' : 'CEO of Green Tech Solutions',
      quote: language === 'bn' ? 
        'ভাঙারিওয়ালার পেশাদার সেবা এবং প্রতিযোগিতামূলক দাম আমাদের ব্যবসায়িক লক্ষ্য অর্জনে সাহায্য করেছে। তাদের দল খুবই সহায়ক এবং নির্ভরযোগ্য।' :
        'Vangariwala\'s professional service and competitive pricing have helped us achieve our business goals. Their team is very helpful and reliable.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      name: language === 'bn' ? 'মোহাম্মদ করিম' : 'Mohammad Karim',
      company: language === 'bn' ? 'ইকো রিসাইক্লিং লিমিটেডের পরিচালক' : 'Director of Eco Recycling Ltd',
      quote: language === 'bn' ? 
        'আমরা ভাঙারিওয়ালার সাথে কয়েক বছর ধরে কাজ করছি। তাদের পরিবেশবান্ধব পদ্ধতি এবং সৎ ব্যবসায়িক অনুশীলন আমাদের খুবই পছন্দ।' :
        'We have been working with Vangariwala for several years. We really appreciate their eco-friendly approach and honest business practices.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      name: language === 'bn' ? 'রোকসানা খান' : 'Roksana Khan',
      company: language === 'bn' ? 'সাসটেইনেবল লিভিং ইনিশিয়েটিভের প্রতিষ্ঠাতা' : 'Founder of Sustainable Living Initiative',
      quote: language === 'bn' ? 
        'ভাঙারিওয়ালা শুধু স্ক্র্যাপ সংগ্রহ করে না, তারা পরিবেশ রক্ষায়ও অবদান রাখে। তাদের সাথে কাজ করা আমাদের জন্য গর্বের বিষয়।' :
        'Vangariwala doesn\'t just collect scrap, they also contribute to environmental protection. It\'s a privilege to work with them.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      name: language === 'bn' ? 'আহমেদ হাসান' : 'Ahmed Hassan',
      company: language === 'bn' ? 'ইন্ডাস্ট্রিয়াল ওয়েস্ট ম্যানেজমেন্টের প্রধান' : 'Head of Industrial Waste Management',
      quote: language === 'bn' ? 
        'ভাঙারিওয়ালার দক্ষতা এবং পেশাদারিত্ব আমাদের শিল্প বর্জ্য ব্যবস্থাপনায় নতুন মাত্রা এনেছে। তাদের সেবা অসাধারণ।' :
        'Vangariwala\'s expertise and professionalism have brought a new dimension to our industrial waste management. Their service is outstanding.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      name: language === 'bn' ? 'ফাতেমা খাতুন' : 'Fatema Khatun',
      company: language === 'bn' ? 'রিসাইক্লিং সেন্টার অফ ঢাকার ম্যানেজার' : 'Manager of Recycling Center of Dhaka',
      quote: language === 'bn' ? 
        'ভাঙারিওয়ালার সাথে আমাদের অংশীদারিত্ব আমাদের কেন্দ্রের দক্ষতা ৪০% বৃদ্ধি করেছে। তাদের প্রযুক্তি এবং পদ্ধতি সত্যিই চমৎকার।' :
        'Our partnership with Vangariwala has increased our center\'s efficiency by 40%. Their technology and methods are truly remarkable.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      name: language === 'bn' ? 'রাজু আহমেদ' : 'Raju Ahmed',
      company: language === 'bn' ? 'মেটাল ওয়ার্কস লিমিটেডের মালিক' : 'Owner of Metal Works Limited',
      quote: language === 'bn' ? 
        'ভাঙারিওয়ালার ন্যায্য দাম এবং সময়মতো পিকআপ সেবা আমাদের ব্যবসাকে নতুন উচ্চতায় নিয়ে গেছে। আমরা তাদের সেবায় খুবই সন্তুষ্ট।' :
        'Vangariwala\'s fair pricing and timely pickup service have taken our business to new heights. We are very satisfied with their service.',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      name: language === 'bn' ? 'নাসরিন সুলতানা' : 'Nasrin Sultana',
      company: language === 'bn' ? 'ই-ওয়েস্ট সলিউশনসের প্রতিষ্ঠাতা' : 'Founder of E-Waste Solutions',
      quote: language === 'bn' ? 
        'ভাঙারিওয়ালার পরিবেশবান্ধব পদ্ধতি এবং নিরাপদ ই-ওয়েস্ট নিষ্পত্তি আমাদের পরিবেশ সুরক্ষা লক্ষ্যে পৌঁছাতে সাহায্য করেছে।' :
        'Vangariwala\'s eco-friendly approach and safe e-waste disposal have helped us achieve our environmental protection goals.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      name: language === 'bn' ? 'ইমরান হোসেন' : 'Imran Hossain',
      company: language === 'bn' ? 'কনস্ট্রাকশন কোম্পানির সিইও' : 'CEO of Construction Company',
      quote: language === 'bn' ? 
        'আমাদের নির্মাণ প্রকল্প থেকে বিপুল পরিমাণ লোহা-ইস্পাত বর্জ্য সৃষ্টি হয়। ভাঙারিওয়ালা সবসময় সঠিক সময়ে এসে সেগুলো সংগ্রহ করে নেয়।' :
        'Our construction projects generate huge amounts of iron-steel waste. Vangariwala always comes at the right time to collect them.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      name: language === 'bn' ? 'সালমা বেগম' : 'Salma Begum',
      company: language === 'bn' ? 'গ্রিন এনার্জি ইনিশিয়েটিভের পরিচালক' : 'Director of Green Energy Initiative',
      quote: language === 'bn' ? 
        'ভাঙারিওয়ালার সাথে কাজ করে আমরা বুঝতে পেরেছি যে বর্জ্য ব্যবস্থাপনা কতটা গুরুত্বপূর্ণ। তারা আমাদের টেকসই ভবিষ্যত গড়তে সাহায্য করছে।' :
        'Working with Vangariwala has made us realize how important waste management is. They are helping us build a sustainable future.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

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
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} style={{
          transitionDelay: isVisible ? '300ms' : '0ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 lg:mb-0">
              <span className={`text-xs sm:text-sm text-gray-500 ${language === 'bn' ? 'font-bengali' : ''}`}>
                ({String(currentTestimonial + 1).padStart(2, '0')} {language === 'bn' ? 'প্রশংসাপত্র' : 'Testimonials'})
              </span>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {language === 'bn' ? 'ক্লায়েন্টরা কী বলেন' : 'What clients say.'}
              </h2>
            </div>
            <p className={`text-sm sm:text-base lg:text-lg text-gray-500 max-w-md ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 
                'আমরা আবেগপ্রবণ পরিবর্তনকারীদের সাথে কাজ করি। আমাদের সাথে কাজ করার বিষয়ে তারা কী বলেন তা এখানে।' :
                'We work with passionate change makers. Here\'s what they say about working with us.'
              }
            </p>
          </div>
          
          {/* Separator Line */}
          <div className="w-full h-px bg-gray-900"></div>
        </div>

        {/* Testimonial Card */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`} style={{
          transitionDelay: isVisible ? '500ms' : '0ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
              {/* Client Photo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={current.image} 
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Star Rating */}
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-4 sm:mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={16} className="sm:hidden text-gray-900 fill-current" />
                    <Star key={i} size={20} className="hidden sm:block text-gray-900 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-relaxed mb-6 sm:mb-8 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  "{current.quote}"
                </blockquote>

                {/* Client Info */}
                <div>
                  <h4 className={`text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 ${language === 'bn' ? 'font-bengali' : ''}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {current.name}
                  </h4>
                  <p className={`text-sm sm:text-base lg:text-lg text-gray-500 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {current.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className={`flex justify-center lg:justify-end mt-6 sm:mt-8 transition-all duration-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{
          transitionDelay: isVisible ? '700ms' : '0ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} className="sm:hidden" />
              <ChevronLeft size={20} className="hidden sm:block" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} className="sm:hidden" />
              <ChevronRight size={20} className="hidden sm:block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
