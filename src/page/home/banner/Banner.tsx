import  { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link} from 'react-router';
import { motion } from "motion/react"

import useLazyLoadWithSkeleton from '@/hooks/useLazyLoadWithSkeleton';
import Skeleton from '@/components/Skeleton';
import { Badge } from '@/components/ui/badge';

const Banner = () => {

 const [ref,loaded]=useLazyLoadWithSkeleton()
  const [currentSlide, setCurrentSlide] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  // Service data with images and titles
  const services = [
    {
      id: 1,
      title: 'Event Solutions',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      path: '/services/event-solutions'
    },
    {
      id: 2,
      title: 'Architectural Design',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
      path: '/services/architectural-design'
    },
    {
      id: 3,
      title: 'Electric & Electronics',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
      path: '/services/electrical-electronics'
    },
    {
      id: 4,
      title: 'Advertising',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      path: '/services/advertising'
    },
    {
      id: 5,
      title: 'Car Rent',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      path: '/services/car-rent'
    },
    {
      id: 6,
      title: 'Web Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      path: '/services/web-development'
    }
  ];


  
  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
      }, 4000);
    };

    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
      }, 4000);
    }
  };

  const goToSlide = (index:number) => {
    setCurrentSlide(index);
    resetInterval();
  };
  if (!loaded) {
    return (
      <div ref={ref}> 
        <Skeleton />
      </div>
    );
  }
  return (
    <section ref={ref} className="md:mt-20 flex items-center justify-center py-12 lg:py-0">
      <div  className=" px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center md:flex-row flex-col-reverse gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
   initial={{ x: -100, opacity: 0 }} 
   whileInView={{ x: 0, opacity: 1 }} 
   transition={{
     duration: 1,
     delay: 0.3,
     ease: [0, 0.71, 0.2, 1.01],
   }}
   viewport={{ once: true, amount: 0.5 }} 
          className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
         <div>Complete Event & IT Digital <span className='text-red-600'>Solutions </span>  </div>
           <Badge className='bg-yellow-400 backdrop-blur-lg text-gray-900'>Everything You Need, All in One Place.</Badge>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                We provide comprehensive solutions for all your business needs. From event management to web development, we've got you covered with professional expertise.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                to="/services/event-solutions"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>

    

          {/* Right Slider */}
          <motion.div
           initial={{ x: 100, opacity: 0 }} 
           whileInView={{ x: 0, opacity: 1 }} 
           transition={{
             duration: 1,
             delay: 0.3,
             ease: [0, 0.71, 0.2, 1.01],
           }}
           viewport={{ once: true, amount: 0.5 }} 
          className="order-1 lg:order-3">
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              
              {/* Slider Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {services.map((service) => (
                    <div key={service.id} className="min-w-full">
                        <Link to={service.path}>
                      <div className="relative group cursor-pointer">
                        <div className='bg-black opacity-30 inset-0  absolute'></div>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
                          <div className="w-16 h-1 bg-yellow-400 rounded-full"></div>
                        </div>
                      </div>
                        </Link>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-red-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Service Counter */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">
                  {currentSlide + 1} of {services.length} Services
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;