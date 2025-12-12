import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  TreePine, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Award,
  Phone,
 
  Star,
  Compass,
  Palette,
  Shield,

} from 'lucide-react';
import { useFetch } from '@/hooks/useFatch';
import type { IService } from '@/types/index.trypes';
import LoadingPage from '../LoadingPage/LoadingPage';
import ServiceCard from '@/components/ServiceCard';
import { Helmet } from 'react-helmet';





const ArchitecturalDesignPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const {data:services,isLoading}=useFetch<IService>('https://aadymart-backend.onrender.com/api/architectural-design')
  // Hero slider images - architectural projects
  const heroImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop"
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
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const processSteps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consultation',
      description: 'Initial meeting to understand your vision and requirements'
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Concept Design',
      description: 'Creative conceptualization and preliminary design development'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Development',
      description: 'Detailed drawings, 3D models, and material specifications'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Final Delivery',
      description: 'Complete construction documents and project support'
    }
  ];
if(isLoading){
  return <LoadingPage></LoadingPage>
}
  return (
    <>
 <Helmet>
        <title>Architectural Design | Aady Group </title>
        <meta
          name="description"
          content="Professional architectural design services in Bangladesh. Get expert building, planning, and design solutions with Aady Group ."
        />
        <meta
          name="keywords"
          content="Architectural Design, Building Design, Interior,Aady Group , Bangladesh"
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
              Architectural Design
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Transforming visions into architectural masterpieces with innovative design solutions
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
              { icon: <Building2 className="w-8 h-8" />, number: '300+', label: 'Projects Completed' },
              { icon: <Users className="w-8 h-8" />, number: '250+', label: 'Happy Clients' },
              { icon: <Award className="w-8 h-8" />, number: '12+', label: 'Years Experience' },
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

      {/* Design Process Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Our Design Process
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: '#C8102E' }}
            ></div>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#222222' }}>
              A systematic approach to creating exceptional architectural solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div 
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 -translate-y-1/2"
                    style={{ backgroundColor: '#F7F7F7' }}
                  ></div>
                )}
                
                <div 
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 relative z-10"
                  style={{ backgroundColor: '#F7F7F7', color: '#C8102E' }}
                >
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Services Grid */}
      <section className="py-20 px-6" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Our Architectural Services
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: '#C8102E' }}
            ></div>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#222222' }}>
              Comprehensive architectural solutions for every project type and scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
           <ServiceCard api='architectural-design' service={service} key={index}></ServiceCard>
            ))}
          </div>
        </div>
      </section>

  

      {/* Why Choose Us Section */}
      <section className="py-20" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Why Choose Our Architecture Firm
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#222222' }}>
              Combining creativity, functionality, and sustainability in every design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Award-Winning Designs',
                description: 'Recognized excellence in architectural innovation and design quality across multiple project categories.'
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Licensed Professionals',
                description: 'Team of licensed architects and engineers ensuring compliance with all building codes and regulations.'
              },
              {
                icon: <TreePine className="w-12 h-12" />,
                title: 'Sustainable Solutions',
                description: 'Environmentally conscious designs incorporating green building practices and energy-efficient systems.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#C8102E', color: '#FFFFFF' }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's transform your architectural vision into reality with our expert design team
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

export default ArchitecturalDesignPage;