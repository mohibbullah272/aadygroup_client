import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router';

interface Feedback {
  id: number;
  name: string;
  company: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

const FeedbackSection: React.FC = () => {
  const feedbackData: Feedback[] = [
    {
      id: 1,
      name: "MD : Ariful Islam",
      company: "TechCorp Solutions",
      service: "Event Solutions",
      rating: 5,
      comment: "Outstanding event management! They transformed our corporate retreat into an unforgettable experience. Every detail was perfectly executed, from venue selection to catering coordination.",
      date: "2025-01-15",
      avatar: "AI"
    },
    {
      id: 2,
      name: "Khondokar Azhar",
      company: "Urban Design Studio",
      service: "Architectural Design",
      rating: 5,
      comment: "Exceptional architectural vision and execution. They delivered innovative designs that perfectly balanced functionality with aesthetic appeal. Highly professional team.",
      date: "2025-06-22",
      avatar: "KA"
    },
    {
      id: 3,
      name: "Md : Shumon Ahmed",
      company: "NextGen Electronics",
      service: "Electric & Electronics",
      rating: 4,
      comment: "Reliable electric solutions for our manufacturing facility. Quick response time and quality workmanship. They handled complex installations with expertise.",
      date: "2025-02-03",
      avatar: "MD"
    },
    {
      id: 4,
      name: "Md : Atikur Rahman",
      company: "BrandVision Marketing",
      service: "Advertising",
      rating: 5,
      comment: "Creative advertising campaigns that exceeded our expectations! Our brand visibility increased by 300% within 3 months. Truly innovative marketing strategies.",
      date: "2025-02-10",
      avatar: "MD"
    },
    {
      id: 5,
      name: "Mrs : Najia Akter",
      company: "Corporate Headquarters",
      service: "Office Stationery",
      rating: 4,
      comment: "Comprehensive office supply solutions with excellent customer service. Timely deliveries and competitive pricing. They understand our business needs perfectly.",
      date: "2025-04-18",
      avatar: "NK"
    },
    {
      id: 6,
      name: "Md : Golam Rabbi",
      company: "Adventure Seekers Inc",
      service: "Tour & Travel",
      rating: 5,
      comment: "Amazing travel experiences organized flawlessly! From hotel bookings to guided tours, everything was seamless. Our clients were absolutely thrilled.",
      date: "2025-04-25",
      avatar: "MD"
    },
    {
      id: 7,
      name: "MD : Rabil Sharkar",
      company: "City Events Ltd",
      service: "Car Rent",
      rating: 4,
      comment: "Professional car rental service with a diverse fleet. Clean vehicles, fair pricing, and excellent customer support. Perfect for our corporate events.",
      date: "2025-03-05",
      avatar: "RS"
    },
    {
      id: 8,
      name: "MD : Joshim ",
      company: "Legal Associates",
      service: "Notary Public",
      rating: 5,
      comment: "Fast and reliable notary services. They made document authentication simple and stress-free. Professional service with attention to legal details.",
      date: "2025-03-12",
      avatar: "JM"
    },
    {
      id: 9,
      name: "Aysha Binte Anwar",
      company: "Business Growth Partners",
      service: "Consultancy",
      rating: 5,
      comment: "Strategic consultancy that transformed our business operations. Their insights and recommendations led to 40% efficiency improvement. Excellent ROI.",
      date: "2025-03-20",
      avatar: "ST"
    },
    {
      id: 10,
      name: "MD : Najmus Sakib",
      company: "Digital Innovations",
      service: "Web Development",
      rating: 5,
      comment: "Outstanding web development services! Modern, responsive design with excellent functionality. Our website traffic increased by 250% post-launch.",
      date: "2025-03-28",
      avatar: "NS"
    }
  ];

  const services = [
    "All Services",
    "Event Solutions",
    "Architectural Design", 
    "Electric & Electronics",
    "Advertising",
    "Office Stationery",
    "Tour & Travel",
    "Car Rent",
    "Notary Public",
    "Consultancy",
    "Web Development"
  ];

  const [selectedService, setSelectedService] = useState("All Services");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const filteredFeedback = selectedService === "All Services" 
    ? feedbackData 
    : feedbackData.filter(feedback => feedback.service === selectedService);

  const totalPages = Math.ceil(filteredFeedback.length / itemsPerPage);
  const currentFeedback = filteredFeedback.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getServiceColor = (service: string) => {
    const colors = {
      "Event Solutions": "bg-purple-100 text-purple-800",
      "Architectural Design": "bg-blue-100 text-blue-800",
      "Electric & Electronics": "bg-green-100 text-green-800",
      "Advertising": "bg-pink-100 text-pink-800",
      "Office Stationery": "bg-indigo-100 text-indigo-800",
      "Tour & Travel": "bg-orange-100 text-orange-800",
      "Car Rent": "bg-red-100 text-red-800",
      "Notary Public": "bg-gray-100 text-gray-800",
      "Consultancy": "bg-emerald-100 text-emerald-800",
      "Web Development": "bg-cyan-100 text-cyan-800"
    };
    return colors[service as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why businesses trust us across multiple service categories. 
            Real feedback from real clients who've experienced our commitment to excellence.
          </p>
        </div>

        {/* Service Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => {
                  setSelectedService(service);
                  setCurrentPage(0);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedService === service
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentFeedback.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-yellow-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {renderStars(feedback.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  {feedback.rating}.0
                </span>
              </div>

              {/* Service Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getServiceColor(feedback.service)}`}>
                  {feedback.service}
                </span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{feedback.comment}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                  {feedback.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-black text-sm">
                    {feedback.name}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {feedback.company}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(feedback.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              disabled={totalPages <= 1}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <span className="text-sm text-gray-600">
              Page {currentPage + 1} of {totalPages}
            </span>
            
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              disabled={totalPages <= 1}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Join Our Satisfied Clients?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the quality and reliability that has earned us these amazing reviews. 
            Let's discuss how we can help your business succeed.
          </p>
<Link to={'/contact'}>
<button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;