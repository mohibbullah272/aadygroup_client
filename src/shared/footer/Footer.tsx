import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  const services = [
  {  label:"IT-Support", to:'/services/IT-Support'},
  {  label: "Tour & Travel", to:'/services/tour-travel'},
  {  label:"Event Solutions", to:'/services/event-solutions'},
  {   label: "Office Stationery ",to:'/services/office-stationery'},
  { label: "Architectural Design", to:'/services/architectural-design'},
{   label: "Advertising",to:'/services/advertising'},
{   label: "Electric & Electronics",to:'/services/electric-electronics'},
{   label: "Hotel & Resorts",to:'/services/hotel_resort'}
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4 text-[#F9D342]">Aady Group </h3>
            <p className="mb-4 text-gray-300">
              Providing comprehensive solutions across multiple industries to meet all your business and personal needs.
            </p>

          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-[#F9D342]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to={'/'} className="text-gray-300 hover:text-[#F9D342] transition-colors">Home</Link></li>
              <li><Link to={'/about'} className="text-gray-300 hover:text-[#F9D342] transition-colors">About Us</Link></li>
          
           
              <li><Link to={'/contact'} className="text-gray-300 hover:text-[#F9D342] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-[#F9D342]">Our Top Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.to} className="text-gray-300 hover:text-[#F9D342] transition-colors">{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-[#F9D342]">Contact Us</h3>
            <ul className="space-y-3">
            <span className='text-yellow-300 flex items-center  font-medium '>    <FaMapMarkerAlt className="mt-1 mr-1 text-[#F9D342]" />Head Office</span>
              <li className="flex items-start">
             
 <span className="text-gray-300">300 Feet Lake Point, ICCB Corner, Kuril, Bashundhara,

Dhaka, Bangladesh.</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-[#F9D342]" />
            <p className='flex flex-col '>  
            01511-661-545</p>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#F9D342]" />
                <span className="text-gray-300 ">groupaady@gmail.com</span>
              </li>
              <span className='text-yellow-300 flex  items-center  font-medium '>    <FaMapMarkerAlt className="mt-1 mr-1 text-[#F9D342]" />Corporate Office</span>              <li className="flex items-start">
            
                <span className="text-gray-300">Taltala,  Agargaon,  Sher-E- Banglanagar, Dhaka -1207 Bangladesh.</span>
              </li>
            <li className="flex items-center">
            <FaWhatsapp className='text-green-600'/>
            <p className='flex flex-col ml-2'>  
              01611-210-192</p>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#F9D342]" />
                <span className="text-gray-300">aadymart@gmail.com</span>
              </li>
               
              <li className="flex items-center">
                <FaClock className="mr-3 text-[#F9D342]" />
                <span className="text-gray-300"> 24/7 Support</span>
              </li>
        
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aady Group . All rights reserved.
          </p>
     
        </div>
      </div>
    </footer>
  );
};

export default Footer;