import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesSlider = () => {
  const services = [
    {
      name: 'Event Solutions',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center',
      description: 'Complete event planning and management services'
    },
    {
      name: 'Architectural Design',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&crop=center',
      description: 'Professional architectural and design solutions'
    },
    {
      name: 'Electric & Electronics',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&crop=center',
      description: 'Electric installation and electronic services'
    },
    {
      name: 'Advertising',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      description: 'Creative advertising and marketing solutions'
    },
    {
      name: 'Office Stationery',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&crop=center',
      description: 'Complete office supplies and stationery'
    },
    {
      name: 'Tour & Travel',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&crop=center',
      description: 'Travel planning and tour packages'
    },
    {
      name: 'Car Rent',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop&crop=center',
      description: 'Vehicle rental and transportation services'
    },
    {
      name: 'Notary Public',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&crop=center',
      description: 'Official notary and documentation services'
    },
    {
      name: 'Consultancy',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center',
      description: 'Professional consulting and advisory services'
    },
    {
      name: 'Web Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center',
      description: 'Modern web development and digital solutions'
    }
  ];

  // Simple slider state management
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const getSlidesPerView = () => {
    // This is for display logic, actual responsive behavior handled by CSS
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const getVisibleSlides = () => {
    const slidesPerView = getSlidesPerView();
    const slides = [];
    
    for (let i = 0; i < slidesPerView; i++) {
      const index = (currentSlide + i) % services.length;
      slides.push(services[index]);
    }
    
    return slides;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo  <span className='text-red-600'>Gallery</span></h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A visual journey through the services we proudly deliver. Quality, passion, and precision — all captured here
        </p>
      </div>

      {/* Slider Container */}
      <div 
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 p-6"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides */}
        <div className="flex transition-transform duration-500 ease-in-out">
          {/* Large screens: 3 slides */}
          <div className="hidden lg:flex w-full gap-6">
            {getVisibleSlides().map((service, index) => (
              <div key={`lg-${currentSlide}-${index}`} className="flex-1">
                <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 h-80 group">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    loading='lazy'
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50  transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                    <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">{service.name}</h3>
                
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Medium screens: 2 slides */}
          <div className="hidden md:flex lg:hidden w-full gap-6">
            {getVisibleSlides().slice(0, 2).map((service, index) => (
              <div key={`md-${currentSlide}-${index}`} className="flex-1">
                <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 h-80 group">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    loading='lazy'
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50  transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-3 drop-shadow-lg">{service.name}</h3>
                
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Small screens: 1 slide */}
          <div className="flex md:hidden w-full">
            <div className="w-full">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-80 group">
                <img 
                  src={services[currentSlide].image} 
                  alt={services[currentSlide].name}
                  loading='lazy'
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                  <h3 className="text-xl font-bold mb-3 drop-shadow-lg">{services[currentSlide].name}</h3>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>


    </div>
  );
};

export default ServicesSlider;