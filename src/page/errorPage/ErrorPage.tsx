
import { Home, ArrowLeft,  HelpCircleIcon } from 'lucide-react';
import { Link } from 'react-router';




const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* 404 Large Text */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-gray-100 leading-none select-none">
            404
          </h1>
          <div className="relative -mt-16 md:-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h2>
          </div>
        </div>

        {/* Development Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="bg-red-100 p-6 rounded-full">
              <HelpCircleIcon className="h-12 w-12 text-red-600" />
            </div>
          </div>
        </div>





        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>


      </div>
    </div>
  );
};

export default ErrorPage;