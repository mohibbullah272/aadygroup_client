import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { useAuth } from '@/hooks/useAuth';
import useIsAdmin from '@/hooks/useIsAdmin';
import Swal from 'sweetalert2';
import logo from '../../assets/aady_group_logo.jpeg';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { user, logout } = useAuth();
  const { isAdmin } = useIsAdmin(user?.email as string);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const authLinks = [
    { path: '/signin', label: 'Sign In' },
    { path: '/signup', label: 'Sign Up' },
  ];

  const serviceCategories = [
    {
      title: "Events & Travel",
      services: [
        { path: '/services/event-solutions', label: 'Event Solutions' },
        { path: '/services/tour-travel', label: 'Tour & Travel' },
        { path: '/services/car-rent', label: 'Car Rent' },
        { path: '/services/hotel_resort', label: 'Hotel & Resort' },
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e:any) => {
      if (!e.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
      if (!e.target.closest('.services-menu-container') && window.innerWidth >= 1024) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const closeAllMenus = () => {
    setIsSidebarOpen(false);
    setIsServicesOpen(false);
    setIsUserMenuOpen(false);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Logged out!",
          text: "You have been logged out successfully.",
          icon: "success",
          confirmButtonColor: "#dc2626"
        });
        setIsUserMenuOpen(false);
      }
    });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group" onClick={closeAllMenus}>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover transition-transform duration-300 group-hover:scale-110" 
                  src={logo} 
                  alt="Aady Group Logo" 
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                Aady Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `relative px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 ${
                      isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-red-600 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* Services Dropdown */}
              <div className="relative services-menu-container">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 py-2 max-h-[calc(100vh-100px)] overflow-y-auto">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="px-2 py-2">
                        <div className="px-3 py-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                          {category.title}
                        </div>
                        {category.services.map((service) => (
                          <NavLink
                            key={service.path}
                            to={service.path}
                            onClick={closeAllMenus}
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                          >
                            {service.label}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Auth Section */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              {!user ? (
                <>
                  {authLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={`px-4 xl:px-5 py-2 xl:py-2.5 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                        link.label === 'Sign In' 
                          ? 'text-gray-700 hover:text-red-600 hover:bg-gray-50' 
                          : 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg'
                      }`}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </>
              ) : (
                <div className="relative user-menu-container">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 xl:gap-3 px-2 xl:px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-9 h-9 xl:w-10 xl:h-10 rounded-full object-cover border-2 border-gray-200 hover:border-red-600 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center border-2 border-gray-200 hover:border-red-600 transition-all duration-300">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </button>

                  {isUserMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsUserMenuOpen(false)} />
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-20">
                        <div className="p-4 bg-gradient-to-br from-red-50 to-white border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {user.displayName || 'User'}
                          </p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                        
                        <div className="p-2">
                          {isAdmin && (
                            <Link
                              to="/dashboard"
                              onClick={closeAllMenus}
                              className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                            >
                              <LayoutDashboard className="w-4 h-4" />
                              Dashboard
                            </Link>
                          )}
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                          >
                            <LogOut className="w-4 h-4" />
                            Logout
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col">
          
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link to="/" className="flex items-center gap-3" onClick={closeAllMenus}>
              <img 
                className="w-10 h-10 object-cover rounded-lg" 
                src={logo} 
                alt="Aady Group Logo" 
              />
              <span className="text-xl font-bold text-gray-900">
                Aady Group
              </span>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeAllMenus}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-red-600 bg-red-50' 
                        : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServicesOpen(!isServicesOpen);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="mt-1 pl-4 space-y-1">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="py-2">
                        <div className="px-4 py-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                          {category.title}
                        </div>
                        {category.services.map((service) => (
                          <NavLink
                            key={service.path}
                            to={service.path}
                            onClick={closeAllMenus}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                          >
                            {service.label}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Auth Section */}
              {!user ? (
                <div className="pt-4 space-y-2 border-t border-gray-200 mt-4">
                  {authLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={closeAllMenus}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 text-center ${
                        link.label === 'Sign In' 
                          ? 'text-gray-700 hover:text-red-600 hover:bg-gray-50' 
                          : 'bg-red-600 text-white hover:bg-red-700'
                      }`}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200 mt-4 space-y-2">
                  <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-red-50 to-white rounded-lg">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover border-2 border-red-200"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {user.displayName || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                  </div>
                  
                  {isAdmin && (
                    <Link
                      to="/dashboard"
                      onClick={closeAllMenus}
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      <LayoutDashboard className="w-5 h-5" />
                      Dashboard
                    </Link>
                  )}
                  
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;