import axios from 'axios';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',

        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage] = useState('');

    // Animation variants
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const fadeInLeft = {
        initial: { opacity: 0, x: -60 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 }
    };

    const fadeInRight = {
        initial: { opacity: 0, x: 60 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const scaleIn = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 }
    };



    const contactInfo = [
        {
            icon: "📍",
            title: "Our Location",
            details: ["Taltala, Agargaon, Sher-E- Banglanagar, Dhaka-1207 Bangladesh."],
            color: "text-red-700"
        },
        {
            icon: "📞",
            title: "Phone Numbers",
            details: ["01511-661-545", "01611-210-192"],
            color: "text-blue-600"
        },
        {
            icon: "✉️",
            title: "Email Address",
            details: ["aadymart@gamil.com", "groupaady@gmail.com"],
            color: "text-green-600"
        },

    ];

    const handleInputChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e:any) => {
       
        e.preventDefault();
        setIsSubmitting(true);
        try {
         const data =  await axios.post(`https://aadymart-backend.onrender.com/api/send`,formData)
         if(data?.data?.success === true){
            toast.success('Thanks For your Message ! We will Response it soon')
         }
           console.log(data)
        } catch (error) {
            toast.error('something went wrong')
        }finally{
            setIsSubmitting(false)
            setFormData({
                email:'',
                message:"",
                name:'',
                subject:""
            })
        }
       
 
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="text-white py-20 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1 
                        className="text-5xl text-gray-900 font-bold mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Contact <motion.span 
                            className="text-red-600"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                        >
                    Aady Group 
                        </motion.span>
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-950 opacity-90 max-w-3xl mx-auto mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 0.9, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Ready to start your project? Get in touch with us today. 
                        We're here to help bring your vision to life with our comprehensive services.
                    </motion.p>
                    <motion.div 
                        className="w-24 h-1 bg-yellow-400 mx-auto"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                    />
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="py-16 px-6 bg-gray-50">
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
                            Get In Touch
                        </motion.h2>
                        <motion.p 
                            className="text-gray-600 max-w-2xl mx-auto"
                            animate={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            We're always ready to help. Reach out to us through any of the following channels.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        animate={stagger}
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center"
                                animate={scaleIn}
                                whileHover={{ 
                                    y: -8,
                                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div 
                                    className="text-4xl mb-4"
                                    whileHover={{ 
                                        scale: 1.2, 
                                        rotate: [0, -10, 10, 0] 
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {info.icon}
                                </motion.div>
                                <h3 className={`font-bold text-lg mb-3 ${info.color}`}>
                                    {info.title}
                                </h3>
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600 text-sm mb-1">
                                        {detail}
                                    </p>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Form and Map Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            animate={fadeInRight}
                        >
                            <motion.h3 
                                className="text-2xl font-bold text-gray-900 mb-6"
                                animate={fadeInUp}
                            >
                                Visit Our Office
                            </motion.h3>
                            
                            <motion.div 
                                className="bg-gray-50 p-6 rounded-lg mb-6"
                                animate={fadeInUp}
                                whileHover={{ 
                                    boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)" 
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <h4 className="font-bold text-lg text-red-700 mb-4">Head Office</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="text-red-700 mr-3 mt-1">📍</span>
                                        <div>
                                            <p className="font-medium text-gray-900">Address</p>
<p className="text-gray-600">300 Feet Lake Point, ICCB Corner, Kuril, Bashundhara,</p>
                                <p className="text-gray-600">Dhaka, Bangladesh.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                            <span className="text-blue-600 mr-3">📞</span>
                                        <div>
                                        <p className='font-medium'>Phone</p>

 <p className="text-gray-600">01511-661-545</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-green-600 mr-3">✉️</span>
                                        <div>
                                            <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">groupaady@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="bg-gray-50 p-6 rounded-lg mb-6"
                                animate={fadeInUp}
                                whileHover={{ 
                                    boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)" 
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <h4 className="font-bold text-lg text-red-700 mb-4">Corporate Office</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="text-red-700 mr-3 mt-1">📍</span>
                                        <div>
                                            <p className="font-medium text-gray-900">Address</p>
<p className="text-gray-600">Taltala,  Agargaon,  Sher-E- Banglanagar, Dhaka-1207 Bangladesh</p>
                            
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-blue-600 mr-3"><FaWhatsapp className='text-green-600'/></span>
                                        <div>
                                            <p className='font-medium'>WhatsApp</p>
                                        <p className="text-gray-600">01611-210-192</p>


                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-green-600 mr-3">✉️</span>
                                        <div>
                                            <p className="font-medium text-gray-900">Email</p>
                                            <p className="text-gray-600">aadymart@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mock Map */}
                 

                    
                        </motion.div>
                    

                        {/* Office Information & Map */}
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            animate={fadeInLeft}
                        >
                            <motion.h3 
                                className="text-2xl font-bold text-gray-900 mb-6"
                                animate={fadeInUp}
                            >
                                Send Us a Message
                            </motion.h3>
                            
                            {submitMessage && (
                                <motion.div 
                                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                >
                                    {submitMessage}
                                </motion.div>
                            )}

                            <motion.form 
                                onSubmit={handleSubmit} 
                                className="space-y-6"
                                animate={stagger}
                            >
                                <motion.div 
                                    className="grid md:grid-cols-2 gap-4"
                                    animate={fadeInUp}
                                >
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <motion.input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-300"
                                            whileFocus={{ scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                         Subject
                                        </label>
                                        <motion.input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-300"
                                            whileFocus={{ scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        />
                                    </div>
                                </motion.div>

                                <motion.div animate={fadeInUp}>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <motion.input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-300"
                                        whileFocus={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                </motion.div>

                           

                                <motion.div animate={fadeInUp}>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Message *
                                    </label>
                                    <motion.textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                       
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-300 resize-vertical"
                                        whileFocus={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-red-700 text-white py-4 px-6 rounded-lg font-bold hover:bg-red-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    animate={fadeInUp}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {isSubmitting ? (
                                        <motion.span
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="inline-block mr-2"
                                        >
                                            ⏳
                                        </motion.span>
                                    ) : null}
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </motion.form>
                        </motion.div>
                    </div>
                </div>
            </section>

          
      
        </div>
    );
};

export default ContactPage;