import { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { useAuth } from '@/hooks/useAuth';
import Swal from 'sweetalert2'
import useIsAdmin from '@/hooks/useIsAdmin';
import logo from '../../assets/aady_group_logo.jpeg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const {user,logout}=useAuth()
  const {isAdmin }=useIsAdmin(user?.email as string)

  // Main navigation links
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact Us' },
  ];

  // Authentication links
  const authLinks = [
    { path: '/signin', label: 'Sign In' },
    { path: '/signup', label: 'Sign Up' },
  ];

  // Service dropdown items grouped by category
  const serviceCategories = [
    {
      title: "Events & Travel",
      services: [
        { path: '/services/event-solutions', label: 'Event Solutions' },
        { path: '/services/tour-travel', label: 'Tour & Travel' },
        { path: '/services/car-rent', label: 'Car Rent' },
        { path: '/services/hotel-resort', label: 'Hotel & Resort' },
      ]
    },
    {
      title: "Technology",
      services: [
        { path: '/services/IT-Support', label: 'IT Support' },
        { path: '/services/web-development', label: 'Web Development' },
        { path: '/services/electric-electronics', label: 'Electric & Electronics' },
      ]
    },
    {
      title: "Business Services",
      services: [
        { path: '/services/consultancy', label: 'Consultancy' },
        { path: '/services/advertising', label: 'Advertising' },
        { path: '/services/office-stationery', label: 'Office Stationery' },
        { path: '/services/notary-public', label: 'Notary Public' },
      ]
    },

    {
      title: "Design",
      services: [
        { path: '/services/architectural-design', label: 'Architectural Design' },
      ]
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserDropdown = () => setOpen(!open);

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
    }
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesHovered(false);
    }, 200); // Small delay to prevent accidental close
    setServicesTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesHovered(false);
    }, 200);
    setServicesTimeout(timeout);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout=()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to logout?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0596f0",
      cancelButtonColor: "#f01405",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
        Swal.fire({
          title: "logged out!",
          text: "You're  has been logged out.",
          icon: "success"
        });
      }
    });
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl flex items-center justify-center gap-3 fancy_font text-gray-900 font-medium hover:text-red-600 transition-colors duration-200">
              <img className='w-12 h-10 object-cover' src={logo} alt="logo" />
              <span>Aady Group </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Main Navigation Links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-gray-800 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-red-600' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Modern Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="flex items-center text-gray-800 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Services
                <ChevronDown 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isServicesHovered ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {/* Modern Floating Dropdown */}
              <div 
                className={`absolute -left-80 transform -translate-x-1/2 mt-6 w-[800px] bg-white border border-gray-200 rounded-xl shadow-2xl transition-all duration-300 ${
                  isServicesHovered 
                    ? 'opacity-100 visible translate-y-0 scale-100' 
                    : 'opacity-0 invisible -translate-y-4 scale-95'
                }`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                {/* Arrow indicator */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>
                
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-8">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-100 pb-2">
                          {category.title}
                        </h3>
                        <div className="space-y-2">
                          {category.services.map((service) => (
                            <NavLink
                              key={service.path}
                              to={service.path}
                              className="block text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 group"
                            >
                              <span className="group-hover:translate-x-1 transition-transform duration-200">
                                {service.label}
                              </span>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
     
                </div>
              </div>
            </div>

            {/* Authentication Links */}
            {!user ? (
              <div className="flex items-center space-x-4">
                {authLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      `px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        link.label === 'Sign In' 
                          ? `text-gray-800 hover:text-red-600 ${isActive ? 'text-red-600' : ''}` 
                          : 'bg-red-600 text-white hover:bg-red-700'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            ) : (  
              <div className='flex items-center gap-3'>
                <div className="relative">
                  <div onClick={toggleUserDropdown} className="cursor-pointer">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        loading='lazy'
                        className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-red-500 transition-colors duration-200"
                      />
                    ) : (
                      <User className="w-10 h-10 rounded-full border-2 border-gray-300 p-1 hover:border-red-500 transition-colors duration-200" />
                    )}
                  </div>

                  {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50">
                      <div className="p-2">
                        <div className="px-3 py-2 text-sm text-gray-600 border-b border-gray-100">
                          {user.displayName || user.email}
                        </div>
                        {isAdmin && (
                          <Link 
                            to="/dashboard" 
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded-md transition-colors duration-200"
                            onClick={() => setOpen(false)}
                          >
                            Dashboard
                          </Link>
                        )}
                        <button
                          onClick={() => {
                            handleLogout();
                            setOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-50 hover:text-red-600 rounded-md transition-colors duration-200"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-red-600 focus:outline-none focus:text-red-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Unchanged */}
      <div className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 bg-white space-y-1">
          {/* Main Navigation Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  isActive 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-gray-800 hover:text-red-600 hover:bg-gray-50'
                }`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setIsServicesHovered(!isServicesHovered)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              Services
              <ChevronDown 
                className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesHovered ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {/* Mobile Dropdown Content */}
            <div className={`pl-4 transition-all duration-200 ${
              isServicesHovered ? 'max-h-96 opacity-100 grid grid-cols-2 gap-2 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              {serviceCategories.flatMap(category => category.services).map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Authentication Links */}
          {!user ? (
            <div className="pt-4 border-t border-gray-200">
              {authLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      link.label === 'Sign In' 
                        ? `text-gray-800 hover:text-red-600 hover:bg-gray-50 ${isActive ? 'text-red-600 bg-red-50' : ''}` 
                        : 'bg-red-600 text-white hover:bg-red-700 mt-2'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          ) : (
            <div className='md:hidden m-3 flex items-center gap-3'>
              <div className="relative">
                <div onClick={toggleUserDropdown} className="cursor-pointer">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      loading='lazy'
                      className="w-10 h-10 rounded-full border-2 border-gray-300"
                    />
                  ) : (
                    <User className="w-10 h-10 rounded-full border-2 border-gray-300 p-1" />
                  )}
                </div>
          
                {open && (
                  <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50">
                    <ul className="py-2">
                      {isAdmin && (
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
                        </li>
                      )}
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                        <a onClick={handleLogout}>Logout</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;