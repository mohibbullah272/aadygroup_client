import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Phone,
  Lightbulb,
  Globe,
} from 'lucide-react';
import { useFetch } from '@/hooks/useFatch';
import type { IService } from '@/types/index.trypes';
import ServiceCard from '@/components/ServiceCard';
import LoadingPage from '../LoadingPage/LoadingPage';
import { Helmet } from 'react-helmet';



interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

const ConsultancyServicesPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {data:services,isLoading}=useFetch<IService>('https://aadymart-backend.onrender.com/api/consultancy')

  // Hero slider images
  const heroImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=600&fit=crop"
  ];



  // Gallery images
  const galleryImages: GalleryImage[] = [
    { id: '1', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop', title: 'Strategy Session', category: 'business' },
    { id: '2', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop', title: 'Team Workshop', category: 'management' },
    { id: '3', url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=300&h=200&fit=crop', title: 'Technology Discussion', category: 'tech' },
    { id: '4', url: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&h=200&fit=crop', title: 'Marketing Planning', category: 'marketing' }
  ];
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
     <Helmet >
        <title>Expert Business & IT Consultancy | Aady Group </title>
        <meta
          name="description"
          content="Drive growth with Aady Group  professional consultancy services in Bangladesh. We provide strategic business advice, IT consulting, and management solutions."
        />
        <meta
          name="keywords"
          content="business consultancy, IT consulting, management consulting, strategic advice, Bangladesh, Aady Group "
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
              Professional Consultancy
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert guidance to transform your business and achieve sustainable growth
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
              { icon: <Briefcase className="w-8 h-8" />, number: '500+', label: 'Clients Served' },
              { icon: <Lightbulb className="w-8 h-8" />, number: '1K+', label: 'Projects Completed' },
              { icon: <Globe className="w-8 h-8" />, number: '25+', label: 'Industries Covered' },
              { icon: <Star className="w-8 h-8" />, number: '4.8', label: 'Average Rating' }
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

      {/* Consultancy Services Grid */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Our Consultancy Services
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: '#C8102E' }}
            ></div>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#222222' }}>
              Specialized consulting solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
            <ServiceCard api='consultancy' service={service} key={index}></ServiceCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Our Work in Action
            </h2>
            <p className="text-xl" style={{ color: '#222222' }}>
              Real-world consulting engagements and client collaborations
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our expert consultants are ready to help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
      onClick={handleBookNow}
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#FFFFFF', color: '#C8102E' }}
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Schedule Consultation
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

export default ConsultancyServicesPage;