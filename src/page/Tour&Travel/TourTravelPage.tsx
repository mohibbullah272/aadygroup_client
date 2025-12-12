import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Users, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Award,
  Phone,

  Globe,
  Compass,
  Luggage,


} from 'lucide-react';
import { useFetch } from '@/hooks/useFatch';
import type { IService } from '@/types/index.trypes';
import LoadingPage from '../LoadingPage/LoadingPage';
import ServiceCard from '@/components/ServiceCard';
import { Helmet } from 'react-helmet';



interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

interface Testimonial {
  id: string;
  review: string;
  rating: number;
}

const TourTravelPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const {data:services,isLoading}=useFetch<IService>('https://aadymart-backend.onrender.com/api/tour-travel')
  // Hero slider images - travel themed
  const heroImages = [
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1200&h=600&fit=crop"
  ];

 

  // Gallery images
  const galleryImages: GalleryImage[] = [
    { id: '1', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop', title: 'Beach Resorts', category: 'beach' },
    { id: '2', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=200&fit=crop', title: 'Mountain Trekking', category: 'mountain' },
    { id: '3', url: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=300&h=200&fit=crop', title: 'Cultural Sites', category: 'cultural' },
    { id: '4', url: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=300&h=200&fit=crop', title: 'Wildlife Safari', category: 'wildlife' }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      id: '1',
  
      review: 'The Himalayan trek was life-changing! Excellent guides and breathtaking views.',
      rating: 5
   
    },
    {
      id: '2',
   
      review: 'Our beach getaway exceeded all expectations. The resorts were luxurious!',
      rating: 4
    
    },
    {
      id: '3',

      review: 'Cultural tour gave us deep insights into local traditions. Highly recommended!',
      rating: 5
 
    }
  ];
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleBookNow = () => {
    setShowConfirmation(true);
  };

  const confirmBooking = () => {

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
         <Helmet>
        <title> Best Tour & Travel Packages in Bangladesh | Aady Group </title>
        <meta
          name="description"
          content="Discover Bangladesh with Aady Group  expert tour planners. We offer customized holiday packages, hotel bookings, and guided tours for unforgettable experiences."
        />
        <meta
          name="keywords"
          content="tour packages, travel agency, Bangladesh tourism, holiday packages, hotel booking, Aady Group "
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
            <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-pulse">
              Discover The World
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Curated travel experiences that create unforgettable memories
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
              { icon: <MapPin className="w-8 h-8" />, number: '50+', label: 'Destinations' },
              { icon: <Users className="w-8 h-8" />, number: '15K+', label: 'Happy Travelers' },
              { icon: <Award className="w-8 h-8" />, number: '18+', label: 'Years Experience' },
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

      {/* Tour Packages Grid */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Our Tour Packages
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: '#C8102E' }}
            ></div>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#222222' }}>
              Carefully crafted travel experiences for every type of adventurer
            </p>
          </div>

        
   

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((tour:IService,index:any) => (
          <ServiceCard api='tour-travel' service={tour} key={index}></ServiceCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Why Travel With Us
            </h2>
            <p className="text-xl" style={{ color: '#222222' }}>
              Exceptional service and unforgettable experiences at every destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass className="w-12 h-12" />,
                title: 'Expert Guides',
                description: 'Our knowledgeable local guides provide unique insights into each destination.'
              },
              {
                icon: <Luggage className="w-12 h-12" />,
                title: 'Hassle-Free',
                description: 'We handle all logistics so you can focus on enjoying your journey.'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'Sustainable Travel',
                description: 'We prioritize eco-friendly practices and support local communities.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-xl" style={{ backgroundColor: '#FFFFFF' }}>
                <div 
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#C8102E', color: '#FFFFFF' }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW DESIGN ELEMENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Traveler Stories
            </h2>
            <p className="text-xl" style={{ color: '#222222' }}>
              Hear from our happy travelers about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="p-8 rounded-xl relative"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.review}"</p>
         
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Travel Gallery
            </h2>
            <p className="text-xl" style={{ color: '#222222' }}>
              Moments captured from our travelers' unforgettable journeys
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
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us craft your perfect travel experience with personalized itineraries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
    onClick={handleBookNow}
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#FFFFFF', color: '#C8102E' }}
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Contact Travel Expert
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

export default TourTravelPage;