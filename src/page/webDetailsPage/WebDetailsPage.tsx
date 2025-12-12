
import { useFetch } from '@/hooks/useSingleFetch';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


import LoadingPage from '../LoadingPage/LoadingPage';

interface WebDevelopmentService {
  id: string;
  title: string;
  description: string;
  image: string;
  basePrice: number;
  technologies: string[];
}

const WebDevelopmentDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

const {data:service,isLoading}=useFetch<WebDevelopmentService>(`https://aadymart-backend.onrender.com/api/web-development`,id as string)

  const handleBookNow = () => setShowConfirmation(true);
  const cancelBooking = () => setShowConfirmation(false);

  const confirmBooking = () => {
    const phoneNumber = '+8801886967825'; // Replace with actual number
    const message = `I'm interested in your ${service?.title} service (ID: ${id})`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setShowConfirmation(false);
  };

  if (isLoading) {
    return <LoadingPage></LoadingPage>
  }


  if (!service) {
    return null; // This case should be covered by the error state
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="bg-[#F7F7F7] rounded-lg overflow-hidden shadow-md h-full">
              <img
                src={service.image}
                alt={service.title}
                loading='lazy'
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/800x500?text=Web+Development';
                }}
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              {service.title}
            </h1>
            
            <p className="text-[#222222] mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Technologies We Use
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-[#F7F7F7] text-[#1A1A1A] px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#F9D342] rounded-full mr-2"></span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                Pricing
              </h3>
              <p className="text-[#222222]">
                <span className="text-[#C8102E] font-bold">
                  Starting from {service.basePrice.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  (final price depends on project requirements)
                </span>
              </p>
            </div>

            <button
              onClick={handleBookNow}
              className="bg-[#C8102E] hover:bg-[#A00D26] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
              Confirm Redirect
            </h3>
            <p className="text-[#222222] mb-6">
              You'll be redirected to WhatsApp to discuss your project. Continue?
            </p>
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
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDevelopmentDetailsPage;