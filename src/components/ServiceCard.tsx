import { useState } from 'react';
import type { IService } from '../types/index.trypes';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface ServiceCardProps {
  service: IService;
  api:string;
}

const ServiceCard = ({ service ,api}: ServiceCardProps) => {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    return (
        <div
        key={service._id}
        className="group relative bg-white/5 backdrop-blur-sm overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer"
        style={{
          backgroundColor: '',
          boxShadow: hoveredCard === service._id 
            ? '0 25px 50px rgba(0, 0, 0, 0.2)' 
            : '0 10px 30px rgba(0, 0, 0, 0.1)',
          transform: hoveredCard === service._id ? 'translateY(-10px)' : 'translateY(0)',
          animationDelay: `${2 * 100}ms`
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
              {service.features.slice(0, 2).map((feature, idx) => (
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
<Link to={`/details/${api}/${service._id}`}>
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
    );
};

export default ServiceCard;