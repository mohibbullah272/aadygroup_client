import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router';

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ className = '' }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqData: FAQItem[] = [
    {
      id: 1,
      category: "General",
      question: "What types of services do you offer?",
      answer: "We provide a comprehensive range of services including Event Solutions, Architectural Design, Electric & Electronics, Advertising, Office Stationery, Tour & Travel, Car Rental, Notary Public services, Business Consultancy, and Web Development. Our goal is to be your one-stop solution for all business and personal needs."
    },
    {
      id: 2,
      category: "Event Solutions", 
      question: "What kind of events can you help organize?",
      answer: "We specialize in organizing corporate events, weddings, birthday parties, conferences, product launches, trade shows, and social gatherings. Our services include venue selection, catering, decoration, entertainment, photography, and complete event management from planning to execution."
    },
    {
      id: 3,
      category: "Architectural Design",
      question: "Do you provide both residential and commercial architectural services?",
      answer: "Yes, we offer comprehensive architectural design services for both residential and commercial projects. This includes house plans, office buildings, retail spaces, interior design, 3D modeling, structural planning, and construction supervision. We work with licensed architects to ensure all designs meet local building codes."
    },
    {
      id: 4,
      category: "Electric & Electronics",
      question: "What electric services do you provide?",
      answer: "Our electric services include residential and commercial wiring, electric installations, repairs and maintenance, panel upgrades, lighting solutions, security system installations, and electronics repair. All our electricians are certified and insured for your safety and peace of mind."
    },
    {
      id: 5,
      category: "Advertising",
      question: "What advertising and marketing services do you offer?",
      answer: "We provide complete advertising solutions including digital marketing, social media management, print advertising, billboard design, brochure creation, logo design, brand development, SEO services, Google Ads management, and marketing strategy consultation to help grow your business."
    },
    {
      id: 6,
      category: "Office Stationery",
      question: "Do you supply office stationery in bulk for businesses?",
      answer: "Absolutely! We supply office stationery and supplies in both retail and bulk quantities. Our inventory includes paper products, writing instruments, filing supplies, office furniture, computer accessories, and custom printed materials. We offer competitive pricing for bulk orders and regular supply contracts."
    },
    {
      id: 7,
      category: "Tour & Travel",
      question: "What travel services do you provide?",
      answer: "We offer complete travel solutions including domestic and international tour packages, flight and hotel bookings, visa assistance, travel insurance, customized itineraries, group tours, honeymoon packages, and 24/7 travel support. Our experienced team ensures you have memorable and hassle-free trips."
    },
    {
      id: 8,
      category: "Car Rent",
      question: "What types of vehicles are available for rent?",
      answer: "Our car rental fleet includes economy cars, sedans, SUVs, luxury vehicles, and commercial vehicles. We offer daily, weekly, and monthly rental options with or without drivers. All vehicles are well-maintained, insured, and regularly serviced for your safety and comfort."
    },
    {
      id: 9,
      category: "Notary Public",
      question: "What documents can you notarize?",
      answer: "As authorized notary public agents, we can notarize various documents including affidavits, power of attorney, property documents, contracts, educational certificates, identity verifications, and legal declarations. We ensure all notarizations comply with local laws and regulations."
    },
    {
      id: 10,
      category: "Consultancy",
      question: "What areas do you provide business consultancy in?",
      answer: "Our consultancy services cover business strategy, financial planning, market research, operational improvement, legal compliance, HR consulting, technology consulting, startup guidance, and growth planning. We work with experienced consultants across various industries to provide expert advice."
    },
    {
      id: 11,
      category: "Web Development",
      question: "What web development services do you offer?",
      answer: "We provide end-to-end web development services including website design and development, e-commerce solutions, mobile app development, content management systems, web hosting, domain registration, SEO optimization, website maintenance, and digital transformation consulting."
    },
    {
      id: 12,
      category: "General",
      question: "How can I get a quote for your services?",
      answer: "You can request a quote by contacting us through our website, phone, or email. We provide free consultations and detailed quotes based on your specific requirements. Our team will assess your needs and provide competitive pricing with transparent terms and conditions."
    },
    {
      id: 13,
      category: "General",
      question: "Do you provide services nationwide?",
      answer: "Yes, we provide services across the country. While our main office is located locally, we have partnerships and networks that allow us to serve clients nationwide. Some services may have location-specific requirements, which we'll discuss during consultation."
    },
    {
      id: 14,
      category: "General",
      question: "What are your payment terms and methods?",
      answer: "We accept various payment methods including cash, bank transfers, credit/debit cards, and digital payment platforms. Payment terms vary by service type - some require upfront payment, while others offer installment options. We'll provide clear payment terms with every quote."
    },
    {
      id: 15,
      category: "General",
      question: "Do you offer customer support after service completion?",
      answer: "Absolutely! We provide ongoing customer support and after-sales service for all our offerings. This includes warranty coverage where applicable, maintenance services, technical support, and assistance with any issues that may arise. Customer satisfaction is our top priority."
    }
  ];

  const toggleItem = (id: number): void => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const categories: string[] = [...new Set(faqData.map(item => item.category))];

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 py-12 ${className}`} style={{ backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="w-8 h-8 mr-3" style={{ color: '#C8102E' }} />
          <h2 className="text-4xl font-bold" style={{ color: '#1A1A1A' }}>Frequently Asked <span className='text-red-600'>Questions</span></h2>
        </div>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#222222' }}>
          Find answers to common questions about our services. Can't find what you're looking for? Contact us directly!
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category: string) => (
            <span 
              key={category}
              className="px-3 py-1 text-sm font-medium rounded-full"
              style={{ 
                backgroundColor: category === 'Event Solutions' || category === 'Advertising' ? '#F9D342' : '#F7F7F7',
                color: category === 'Event Solutions' || category === 'Advertising' ? '#1A1A1A' : '#222222'
              }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {faqData.map((item: FAQItem) => (
          <div 
            key={item.id} 
            className="rounded-lg shadow-md border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            style={{ 
              backgroundColor: '#FFFFFF',
              borderColor: '#F7F7F7'
            }}
          >
            {/* Question Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:transition-colors duration-200 focus:outline-none"
              style={{ 
                backgroundColor: openItems.has(item.id) ? '#F7F7F7' : '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                if (!openItems.has(item.id)) {
                  e.currentTarget.style.backgroundColor = '#F7F7F7';
                }
              }}
              onMouseLeave={(e) => {
                if (!openItems.has(item.id)) {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }
              }}
              aria-expanded={openItems.has(item.id)}
            >
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  
                </div>
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#1A1A1A' }}>
                  {item.question}
                </h3>
              </div>
              <div className="flex-shrink-0 ml-4">
                {openItems.has(item.id) ? (
                  <ChevronUp className="w-5 h-5" style={{ color: '#222222' }} />
                ) : (
                  <ChevronDown className="w-5 h-5" style={{ color: '#222222' }} />
                )}
              </div>
            </button>

            {/* Answer Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(item.id) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4">
                <div className="h-px mb-4" style={{ backgroundColor: '#F7F7F7' }}></div>
                <p className="leading-relaxed" style={{ color: '#222222' }}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <div className="rounded-xl p-8" style={{ backgroundColor: '#F7F7F7' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A' }}>Still have questions?</h3>
          <p className="mb-6" style={{ color: '#222222' }}>
            Our team is here to help! Get in touch with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link to={'/contact'}>
  <button 
              className="font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:opacity-90"
              style={{ 
                backgroundColor: '#C8102E',
                color: '#FFFFFF'
              }}
            >
              Contact Us
            </button>
  </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;