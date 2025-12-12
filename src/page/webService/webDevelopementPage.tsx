import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Phone,
  ArrowRight,
  Monitor,
  Smartphone,
 
} from 'lucide-react';
import { useFetch } from '@/hooks/useFatch';

import LoadingPage from '../LoadingPage/LoadingPage';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

interface WebDevService {
  _id:string
  title:string,
  description:string,
  image:string,
  basePrice:number,
  technologies:string[]
}

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

const WebDevelopmentPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {data:services,isLoading}=useFetch<WebDevService>('https://aadymart-backend.onrender.com/api/web-development')
 
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  // Hero slider images
  const heroImages = [
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop"
  ];



  // Gallery images
  const galleryImages: GalleryImage[] = [
    { id: '1', url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop', title: 'Website Development', category: 'website' },
    { id: '2', url: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&h=200&fit=crop', title: 'E-Commerce Solution', category: 'ecommerce' },
    { id: '3', url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop', title: 'Web Application', category: 'webapp' },
    { id: '4', url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop', title: 'Mobile-First Design', category: 'mobile' }
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
        <title>Professional Web Development Service | Aady Group </title>
        <meta
          name="description"
          content="Create a powerful online presence with Aady Group  web development services in Bangladesh. We build responsive, SEO-friendly websites and e-commerce solutions."
        />
        <meta
          name="keywords"
          content="web development, website design, e-commerce website, SEO, web application, Bangladesh, Aady Group "
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
        <div className="absolute  inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-4xl md:text-7xl  font-bold mb-6 animate-pulse">
              Web Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8  opacity-90">
              Custom web solutions designed to elevate your digital presence
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
              { icon: <Code className="w-8 h-8" />, number: '200+', label: 'Websites Built' },
              { icon: <Monitor className="w-8 h-8" />, number: '50+', label: 'Web Applications' },
              { icon: <Smartphone className="w-8 h-8" />, number: '100%', label: 'Mobile Responsive' },
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

      {/* Web Development Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
              Our Web Development Services
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: '#C8102E' }}
            ></div>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#222222' }}>
              Comprehensive web solutions from simple sites to complex applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, index) => (
              <div
                key={service._id}
                className="group relative bg-white/30 backdrop-blur-sm overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer"
                style={{
                  backgroundColor: '',
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
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 2).map((feature, idx) => (
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

               

                  {/* Action Button */}
               <Link to={`/details/web/${service?._id}`}>
               
               <button 
                    className="w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    style={{
                      backgroundColor: hoveredCard === service._id ? '#C8102E' : '#F7F7F7',
                      color: hoveredCard === service._id ? '#FFFFFF' : '#1A1A1A'
                    }}
                  >
                    <span>view details</span>
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
              Our Development Portfolio
            </h2>
            <p className="text-xl" style={{ color: '#222222' }}>
              Examples of our web development projects and solutions
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
            Ready to Build Your Web Solution?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create something amazing together for your digital presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
  className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
  style={{ backgroundColor: '#FFFFFF', color: '#C8102E' }}
  onClick={() => {
  
    window.location.href = "tel:+8801886967825"; 

  }}
>
  <Phone className="w-5 h-5 inline mr-2" />
  Contact Our Developers
</button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default WebDevelopmentPage;