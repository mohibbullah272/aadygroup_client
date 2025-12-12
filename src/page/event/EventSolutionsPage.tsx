import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Users, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Award,
  Phone,
  ArrowRight
} from 'lucide-react';


import type { IService } from '@/types/index.trypes';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useFetch } from '@/hooks/useFatch';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';




interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

const EventSolutionsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleBookNow = () => {
    setShowConfirmation(true);
  };

  const confirmBooking = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/+8801611210192?text=I%20would%20like%20to%20book%20your%20service', '_blank');
    setShowConfirmation(false);
  };

  const cancelBooking = () => {
    setShowConfirmation(false);
  };

  
  const {data:services,isLoading}=useFetch<IService>("https://aadymart-backend.onrender.com/api/event")



  // Hero slider images
  const heroImages = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=600&fit=crop"
  ];


  // Gallery images
  const galleryImages: GalleryImage[] = [
    { id: '1', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop', title: 'Corporate Conference', category: 'corporate' },
    { id: '2', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=200&fit=crop', title: 'Wedding Ceremony', category: 'wedding' },
    { id: '3', url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=200&fit=crop', title: 'Birthday Celebration', category: 'party' },
    { id: '4', url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop', title: 'Live Concert', category: 'entertainment' }
  ];

  // Auto-slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  if(isLoading){
    return <LoadingPage></LoadingPage>
  }

  return (

    <>
     <Helmet>
        <title>Premier Event Management Company | Aady Group </title>
        <meta
          name="description"
          content=" From corporate events to private weddings, Aady Group  handles all event planning and management in Bangladesh. We create memorable and seamless experiences."
        />
        <meta
          name="keywords"
          content="event management, wedding planning, corporate events, event planners, Bangladesh, Aady Group "
        />
      </Helmet>


    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: index === currentSlide ? 1 : 0,
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-3xl md:text-7xl font-bold mb-6 animate-pulse">
              Event Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Creating unforgettable experiences with professional event management
            </p>
  
          </div>
        </div>

        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index === currentSlide ? '#C8102E' : 'rgba(255, 255, 255, 0.5)'
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Calendar className="w-8 h-8" />, number: '500+', label: 'Events Organized' },
              { icon: <Users className="w-8 h-8" />, number: '10K+', label: 'Happy Clients' },
              { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Years Experience' },
              { icon: <Star className="w-8 h-8" />, number: '4.9', label: 'Average Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#C8102E', color: '#FFFFFF' }}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Our Event Services
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: '#C8102E' }}
            ></div>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#222222' }}>
              From intimate gatherings to grand celebrations, we bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service:IService, index) => (
              <div
                key={service._id}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: hoveredCard === service._id 
                    ? '0 25px 50px rgba(0, 0, 0, 0.2)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transform: hoveredCard === service._id ? 'translateY(-10px)' : 'translateY(0)',
                  animationDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredCard(service._id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading='lazy'
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
               
             
                </div>

                {/* Service Content */}
                <div className="p-6 ">
                  <h3 className="text-xl  font-bold mb-3" style={{ color: '#1A1A1A' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: '#F7F7F7', color: '#222222' }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Reviews */}
                

                  {/* Action Button */}
      <Link to={`/details/event/${service._id}`}>
      
      <button 
                    className="w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    style={{
                      backgroundColor: hoveredCard === service._id ? '#C8102E' : '#F7F7F7',
                      color: hoveredCard === service._id ? '#FFFFFF' : '#1A1A1A'
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
      </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Event Gallery
            </h2>
            <p className="text-xl" style={{ color: '#222222' }}>
              Glimpses of our successful events and celebrations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading='lazy'
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #C8102E 0%, #A00E26 100%)'
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our experienced team create an unforgettable experience for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
     onClick={handleBookNow}
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#FFFFFF', color: '#C8102E' }}
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now
            </button>
          </div>
        </div>
      </section>
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Confirmation</h3>
            <p className="text-[#222222] mb-6">This will redirect you to another site. Are you sure?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelBooking}
                className="px-4 py-2 border border-[#1A1A1A] text-[#1A1A1A] rounded hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="px-4 py-2 bg-[#C8102E] text-white rounded hover:bg-[#A00D26] transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default EventSolutionsPage;