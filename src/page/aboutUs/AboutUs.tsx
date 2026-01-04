import { motion } from 'framer-motion';
import { Link } from 'react-router';
import {Helmet} from "react-helmet";
import { FaEnvelope, FaIndustry, FaLocationArrow, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { MoveRight } from 'lucide-react';
import bg from '../../assets/lukas-blazek-EWDvHNNfUmQ-unsplash.jpg'
import bg2 from '../../assets/pawel-czerwinski-M40QnK-PXkI-unsplash.jpg'
const AboutUs = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  const services = [
    {
      title: "IT-Support",
      description: "Comprehensive technical support solutions for businesses of all sizes",
      icon: "🌐",
    },
    {
      title: "Event Solutions",
      description: "Complete event planning and management services for corporate and personal celebrations.",
      icon: "🎉",
    },
    {
      title: "Architectural Design",
      description: "Innovative architectural solutions from concept to completion for residential and commercial projects.",
      icon: "🏗️",
    },
    {
      title: "Electric & Electronics",
      description: "Professional electric installations, repairs, and electronic system solutions.",
      icon: "⚡",
    },
    {
      title: "Advertising",
      description: "Creative advertising campaigns and marketing solutions to boost your brand visibility.",
      icon: "📢",
    },
    {
      title: "Office Stationery",
      description: "Complete range of office supplies and stationery products for your business needs.",
      icon: "📋",
    },
    {
      title: "Tour & Travel",
      description: "Comprehensive travel planning services for domestic and international destinations.",
      icon: "✈️",
    },
    {
      title: "Car Rent",
      description: "Reliable car rental services with a fleet of well-maintained vehicles for all occasions.",
      icon: "🚗",
    },
    {
      title: "Notary Public",
      description: "Certified notary services for document authentication and legal verification needs.",
      icon: "📜",
    },
    {
      title: "Consultancy",
      description: "Expert business consultancy services to help optimize your operations and growth strategies.",
      icon: "💼",
    },
    {
      title: "Web Development",
      description: "Modern web development solutions including responsive websites and web applications.",
      icon: "💻",
    },
    {
      title: "Hotel & Resorts",
      description: "Premium accommodation and hospitality services with luxury amenities and exceptional guest care.",
      icon: "🏨",
    },
  ];

  const stats = [
    { number: "18+", label: "Years of Excellence" },
    { number: "1000+", label: "Happy Clients" },
    { number: "10", label: "Service Categories" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <>
    <Helmet>
      <title>Aady Group  | About Us</title>
    </Helmet>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About <motion.span
              className="text-red-700"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
            >
           Aady Group 
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Your trusted partner for comprehensive business solutions since 2007,
            serving clients with excellence from the heart of Puran Dhaka.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-yellow-400 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              animate={fadeInLeft}
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                animate={fadeInUp}
              >
                Our Journey
              </motion.h2>
              <motion.p
                className="text-gray-600 mb-6 leading-relaxed"
                animate={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                Founded in <strong className="text-red-700">2007</strong> in the historic area of
                <strong className="text-red-700"> Puran Dhaka</strong>, Aady Group  began with a simple
                vision: to provide reliable, comprehensive business solutions under one roof.
              </motion.p>
              <motion.p
                className="text-gray-600 mb-6 leading-relaxed"
                animate={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                What started as a small venture has grown into a trusted name, offering diverse
                services that cater to both individual and corporate needs. Our deep roots in
                Puran Dhaka have given us invaluable insights into local business requirements
                while maintaining global standards.
              </motion.p>
              <motion.p
                className="text-gray-600 leading-relaxed"
                animate={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                Over <strong className="text-red-700">18 years</strong> of dedicated service,
                we have built lasting relationships with our clients by consistently delivering
                quality solutions that drive success.
              </motion.p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-8 rounded-lg"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              animate={fadeInRight}
            >
              <motion.div
                className="grid grid-cols-2 gap-6"
                animate={stagger}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    animate={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-red-700 mb-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{
        backgroundImage:`url(${bg})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
      }}  className="md:bg-fixed bg-scroll will-change-transform py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            animate={stagger}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-700"
              animate={fadeInLeft}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our Honorable Chairman
              </motion.h3>
              <motion.p
                className="text-gray-600 text-xl font-bold leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
       Mohammad Ibrahim Khalil 
              </motion.p>
              <motion.p
               className="text-gray-600 flex items-center gap-2  font-semibold leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
              >
         
                <FaIndustry></FaIndustry>
Aady Group 
              </motion.p>
              <motion.p
               className="text-gray-600 flex items-center gap-2  font-semibold leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
              >
         
                <FaIndustry></FaIndustry>
Aady Mart Bangladesh 
              </motion.p>
              <motion.p
               className="text-gray-600 flex items-center  gap-2  font-semibold leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
              >
               <FaEnvelope></FaEnvelope>
               aadymart@gmail.com
       
              </motion.p>
              <motion.p
               className="text-gray-600 flex items-center gap-2  font-semibold leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
              >
               <FaEnvelope></FaEnvelope>
               groupaady@gmail.com
           
              </motion.p>
              <motion.div
               className="text-gray-600 flex items-center  gap-2  font-semibold leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
              >
       
          <FaWhatsapp className='text-green-600'/>
          <p className='flex flex-col '>
          <span>01811-661-545</span>

          </p>
              </motion.div>

              <motion.div
               className="text-gray-600 flex items-center gap-2  font-semibold leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
              >
                   <FaPhone></FaPhone>
   
          <p className='flex flex-col '>
   <span>01711-210-192</span>

          </p>
              </motion.div>

              <motion.div
               className="text-gray-600 flex items-center gap-2  font-semibold leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
              >
               <FaLocationArrow className='text-xl'></FaLocationArrow>
   
          <p>
          300 Feet Lake Point, ICCB Corner, Kuril, Bashundhara,

Dhaka, Bangladesh.

          </p>
              </motion.div>


            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-yellow-400"
              animate={fadeInRight}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
             Subsidiary Organization
              </motion.h3>

              <motion.p
                className="text-gray-600 text-xl flex items-center gap-2 my-2 font-bold leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >

<MoveRight/>  <Badge className='bg-gray-700 py-2 px-4 '> Jalrang </Badge>

              </motion.p>
              <motion.p
                className="text-gray-600 text-xl flex items-center gap-2 my-2 font-bold leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >

<MoveRight/>  <Badge className='bg-gray-700 py-2 px-3 '>  Aady Associate </Badge>

              </motion.p>
              <motion.p
                className="text-gray-600 text-xl flex items-center gap-2 my-2 font-bold leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >

<MoveRight/>  <Badge className='bg-gray-700 py-2 px-4'>  Master Dotcom </Badge>

              </motion.p>
              <motion.p
                className="text-gray-600 text-xl flex items-center gap-2 my-2 font-bold leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <MoveRight/>   <Badge className='bg-gray-700 py-2 px-5 '>Ahona Ful Kutir </Badge>

              </motion.p>
              
              <motion.p
                className="text-gray-600 text-xl my-2 flex items-center gap-2 font-bold leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                             <MoveRight/>    <Badge className='bg-gray-700 py-2 px-4 '>  Aady Digital Solutions </Badge>


              </motion.p>
         
              <motion.p
                className="text-gray-600 text-xl flex items-center gap-2 font-bold leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
           <MoveRight/>  <Badge className='bg-gray-700 py-2 px-5 '> Aady Mart Bangladesh </Badge>


              </motion.p>
                   
              <motion.p
                className="text-gray-600 text-xl mt-2 flex items-center gap-2 font-bold leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
           <MoveRight/>  <Badge className='bg-gray-700 py-2 px-7 '> M I K Tourist & Resorts </Badge>


              </motion.p>

              <motion.p
                className="text-gray-600 text-xl mt-2 flex items-center gap-2 font-bold leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
           <MoveRight/>  <Badge className='bg-gray-700 py-2 px-5 '> Anonto Event Management </Badge>


              </motion.p>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            animate={fadeInUp}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              animate={fadeInUp}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              animate={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              From event planning to web development, we offer a comprehensive range
              of services designed to meet all your business and personal needs.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            animate={stagger}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-red-700 group cursor-pointer"
                animate={scaleIn}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <motion.h4
                  className="font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  {service.title}
                </motion.h4>
                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundImage: `url(${bg2})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center" ,
    backgroundSize:"cover"}}  className="md:bg-fixed will-change-transform bg-scroll text-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-12"
          >
            <h2
              className="text-3xl font-bold mb-4"
        
            >
              Why Choose Aady Group ?
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
            >
              With nearly two decades of experience, we bring unmatched expertise
              and dedication to every project we undertake.
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 gap-8"
           
          >
            {[
              {
                icon: "🏆",
                title: "Proven Experience",
                description: "18+ years of consistent service delivery and client satisfaction across multiple industry verticals.",
              },
              {
                icon: "🤝",
                title: "One-Stop Solution",
                description: "Multiple services under one roof, ensuring convenience and seamless coordination for all your needs.",
              },
              {
                icon: "💎",
                title: "Quality Commitment",
                description: "Unwavering commitment to quality and customer satisfaction in every service we provide.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center"
               
              >
                <div
                  className="w-16 h-16   rounded-full flex items-center justify-center mx-auto mb-4"
               
                >
                  <motion.span
                    className="text-2xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.icon}
                  </motion.span>
                </div>
                <motion.h4
                  className="font-bold text-xl mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {item.title}
                </motion.h4>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mt-5 mx-auto text-center text-gray-900">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the Aady Group  difference. Let us handle your service needs
            while you focus on what matters most to your business.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
<Link to={'/contact'}>
<motion.button
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact Us Today
            </motion.button>
</Link>
 <Link to={'/services/event-solutions'}>
 <motion.button
              className="border-2 border-white text-gray-600 px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              View Our Services
            </motion.button>
 </Link>
          </motion.div>
        </div>
      </section>

 
    </div>
    </>
  );
};

export default AboutUs;