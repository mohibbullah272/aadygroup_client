import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, LoaderIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'react-toastify';
import bg from '../../assets/prithiviraj-a-iVymbcRRbF0-unsplash.jpg'
const SignUpPage = () => {
    const [loading,setLoading]=useState(false)
    const {googleLogin,createAccount,verificationViaEmail}=useAuth()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()
 const handleGoogleLogin=async()=>{
  await  googleLogin()
  navigate('/')
  
 }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmit=async(e:any)=>{
    e.preventDefault()
   const email = e.target.email.value 
   const password = e.target.password.value
try {
  setLoading(true)
  const userCredential = await createAccount(email, password);
    const user = userCredential.user;

    if (user) {
      await verificationViaEmail();
      toast.info("Verification email sent. Please check your inbox. 📩");
    }

console.log(user)
} catch (error) {
  toast.error('something went wrong ! try again later')
  console.log(error)
}finally{
setLoading(false)
e.target.reset()
setFormData({
    email: '',
    password: ''
})
toast.success('Signup complete successfully')
navigate('/')
}
 
}
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const inputFocusVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={{ backgroundImage: `url(${bg})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center" ,
    backgroundSize:"cover"}} className="min-h-screen flex items-center justify-center px-4 py-8">
      <motion.div
        animate={containerVariants}
        className="w-full max-w-md"
      >
        {/* Header Section */}
        <motion.div animate={itemVariants} className="text-center mb-5">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-100 mb-3"
            animate={itemVariants}
          >
            Create Account
          </motion.h1>
          
          <motion.p 
            className="text-gray-200 text-base md:text-lg leading-relaxed"
            animate={itemVariants}
          >
            Join us today to explore more amazing features and connect with our community
          </motion.p>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          animate={itemVariants}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-sm"
        >
          <div className="space-y-6">
            <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <motion.div animate={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-2">
                Email Address
              </label>
              <motion.div 
                className="relative"
                animate={inputFocusVariants}
                whileFocus="focus"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>
            </motion.div>

            {/* Password Field */}
            <motion.div animate={itemVariants}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-100 mb-2">
                Password
              </label>
              <motion.div 
                className="relative"
                animate={inputFocusVariants}
                whileFocus="focus"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </motion.div>
            </motion.div>

            {/* Sign Up Button */}
            <motion.button
              type="submit"
              animate={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full mx-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 mt-4 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
           {loading?<LoaderIcon className='animate-spin w-full mx-auto '></LoaderIcon>:<span>Create Account</span>}
            </motion.button>
            </form>


            {/* Divider */}
            <motion.div animate={itemVariants} className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 mb-4 text-gray-100">or continue with</span>
              </div>
            </motion.div>

            {/* Google Login Button */}
            <motion.button
            onClick={handleGoogleLogin}
              type="button"
              animate={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-4 rounded-lg border border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </motion.button>
          </div>
          <p className="text-gray-100 p-3">
            Already have an account?{' '}
            <Link 
          to={'/signin'}
              className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-200"
            
            >
              Sign in
            </Link>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default SignUpPage;