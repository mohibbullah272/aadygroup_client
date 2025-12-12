import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from './NavDropdown';
import { LogOut } from 'lucide-react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
          <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center px-4">
             <Link to={'/'}>
             <h1 className="text-2xl fancy_font font-bold text-[#C8102E]">AADY_MART</h1>
             </Link>
            </div>
            
            {/* Navigation */}
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-[#C8102E] text-white'
                      : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Dashboard
              </NavLink>

         

              <NavDropdown
                title="Manage Services"
                open={servicesOpen}
                setOpen={setServicesOpen}
              >
                <NavLink
                  to="/dashboard/manage-services/event-solution"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Event Solution
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/architectural-design"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Architectural-Design
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/electric-electronics"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Electric-Electronics
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/IT-Support"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage IT-Support
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/advertising"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Advertising
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/office-stationery"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Office-Stationery
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/tour-travel"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Tour-Travel
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/car-rent"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Car-Rent
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/notary-public"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Notary-Public
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/consultancy"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Consultancy
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/web-development"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Web Development
                </NavLink>
              </NavDropdown>

              <NavLink
                to="/dashboard/manage-blogs"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-[#C8102E] text-white'
                      : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
           Manage Blogs
              </NavLink>
              <NavLink
                to="/dashboard/manage-user"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-[#C8102E] text-white'
                      : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                User Management
              </NavLink>
              <div className="border-2 border-gray-800"></div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-[#C8102E] text-white'
                      : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
            HOME
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-[#C8102E] text-white'
                      : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
          ABOUT
              </NavLink>
              <p className='text-xl font-bold hover:text-red-300 text-red-500 m-2 flex items-center gap-3'>Logout <LogOut></LogOut></p>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden transition duration-200 ease-in-out`}
      >
        <div className="flex flex-col w-64 h-full bg-white border-r border-gray-200">
          <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            {/* Logo and close button */}
            <div className="flex-shrink-0 flex items-center justify-between px-4">
             <Link to={'/'}>
             <h1 className="text-2xl font-bold fancy_font text-[#C8102E]">AADY_MART</h1>
             </Link>
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <svg
                  className="h-6 w-6 text-[#C8102E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            {/* Navigation (same as desktop) */}
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-[#C8102E] text-white'
                      : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Dashboard
              </NavLink>

       

              <NavDropdown
                title="Manage Services"
                open={servicesOpen}
                setOpen={setServicesOpen}
              >
                <NavLink
                  to="/dashboard/manage-services/event-solution"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Event Solution
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/architectural-design"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Architectural-Design
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/electric-electronics"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Electric-Electronics
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/IT-Support"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage IT-Support
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/advertising"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Advertising
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/office-stationery"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Office-Stationery
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/tour-travel"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Tour-Travel
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/car-rent"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Car-Rent
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/notary-public"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Notary-Public
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/consultancy"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Consultancy
                </NavLink>
                <NavLink
                  to="/dashboard/manage-services/web-development"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[#F9D342] text-[#1A1A1A]'
                        : 'text-gray-900 hover:bg-[#F9D342] hover:text-[#1A1A1A]'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Web Development
                </NavLink>
              </NavDropdown>

              <NavLink
                to="/dashboard/manage-blogs"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-[#C8102E] text-white'
                      : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
               Manage Blogs
              </NavLink>
              <NavLink
                to="/dashboard/manage-user"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-[#C8102E] text-white'
                      : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                User Management
              </NavLink>
              <div className="border-2 border-gray-800"></div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-[#C8102E] text-white'
                      : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
            HOME
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-[#C8102E] text-white'
                      : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
          ABOUT
              </NavLink>
              <p className='text-xl font-bold hover:text-red-300 text-red-500 m-2 flex items-center gap-3'>Logout <LogOut></LogOut></p>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;