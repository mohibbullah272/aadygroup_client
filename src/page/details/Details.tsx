import { useFetch } from '@/hooks/useSingleFetch';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

type Service = {
  id: string;
  image?: string;
  title?: string;
  description?: string;
  features?: string[];
  minPrice?: number;
  maxPrice?: number;
};

const ServiceDetailsPage = () => {
  const { id, api } = useParams<{ id: string; api: string }>();
  
  const { data: service, isLoading } = useFetch<Service>(
    `https://aadymart-backend.onrender.com/api/${api}`,
    id as string
  );
  
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

  // Helper function to truncate text for meta descriptions
  const truncateDescription = (text: string, maxLength: number = 160) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Generate keywords from service data
  const generateKeywords = () => {
    const baseKeywords = ['aadymart', 'service', 'bangladesh', 'professional'];
    const serviceKeywords = service?.title?.toLowerCase().split(' ') || [];
    const featureKeywords = service?.features?.flatMap(feature => 
      feature.toLowerCase().split(' ')
    ) || [];
    
    return [...new Set([...baseKeywords, ...serviceKeywords, ...featureKeywords])].join(', ');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C8102E]"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Service Not Found</h2>
          <p className="text-[#222222]">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  const pageUrl = `https://aadymart.com/services/${api}/${id}`;
  const truncatedDesc = truncateDescription(service.description || '');
  const keywords = generateKeywords();

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{service.title} | Aady Group  Services</title>
        <meta name="description" content={truncatedDesc} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Aady Group " />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={service.title || 'Aady Group  Service'} />
        <meta property="og:description" content={truncatedDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="service" />
        <meta property="og:site_name" content="Aady Group " />
        {service.image && <meta property="og:image" content={service.image} />}
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title || 'Aady Group  Service'} />
        <meta name="twitter:description" content={truncatedDesc} />
        {service.image && <meta name="twitter:image" content={service.image} />}
        <meta name="twitter:site" content="@aadymart" />
        <meta name="twitter:creator" content="@aadymart" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "image": service.image,
            "provider": {
              "@type": "Organization",
              "name": "Aadymart",
              "url": "https://www.aadymart.xyz"
            },
            "areaServed": "Bangladesh",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Service Offers",
              "itemListElement": [{
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": service.minPrice,
                  "maxPrice": service.maxPrice,
                  "priceCurrency": "BDT"
                }
              }]
            }
          })}
        </script>

        {/* Preload critical image for better performance */}
        {service.image && (
          <link rel="preload" as="image" href={service.image} />
        )}
      </Helmet>

      {/* Main Content */}
      <div className="min-h-screen bg-white">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8 text-wrap">
            {/* Left Column - Service Image */}
            <div className="lg:w-1/2">
              <div className="bg-[#F7F7F7] rounded-lg overflow-hidden shadow-md">
                <img
                  src={service.image || 'https://via.placeholder.com/800x500'}
                  alt={service.title}
                  loading='lazy'
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column - Service Details */}
            <div className="lg:w-1/2 text-wrap">
              <h1 className="text-3xl md:text-4xl font-bold text-wrap text-[#1A1A1A] mb-4">{service.title}</h1>
              
              <p className="text-[#222222] mb-6 text-wrap leading-relaxed">{service.description}</p>
              
              {/* Features List */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {service.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#F9D342] mr-2">✓</span>
                      <span className="text-[#222222]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Pricing</h3>
                <p className="text-[#222222]">
                  {service.minPrice && service.maxPrice ? (
                    <>
                      <span className="text-[#C8102E] font-bold">
                        {service.minPrice} tk - {service.maxPrice} tk
                      </span>
                      <span className="text-sm text-gray-500 ml-2">(price varies based on requirements)</span>
                    </>
                  ) : (
                    <span className="text-[#C8102E] font-bold">Contact us for pricing</span>
                  )}
                </p>
              </div>

              {/* Book Now Button */}
              <button
                onClick={handleBookNow}
                className="bg-[#C8102E] hover:bg-[#A00D26] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Confirmation Dialog */}
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

export default ServiceDetailsPage;