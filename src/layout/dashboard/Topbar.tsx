interface TopbarProps {
    setSidebarOpen: (open: boolean) => void;
  }
  
  const Topbar = ({ setSidebarOpen }: TopbarProps) => {
    return (
      <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow-sm">
        <button
          type="button"
          className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C8102E] lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex-1 px-4 flex justify-between items-center">
          <div className="flex-1 flex">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>
     
        </div>
      </div>
    );
  };
  
  export default Topbar;