import Main from "@/layout/Main";
import { lazyWithRetry } from "@/hooks/lazyWithRetry";
import AboutUs from '@/page/aboutUs/AboutUs';
const AdvertisingServicesPage = lazyWithRetry(() => import("@/page/advertising/AdvertisingServicesPage"))
const ArchitecturalDesignPage = lazyWithRetry(() => import("@/page/architectureDesign/ArchitecturalDesignPage"))
const CarRentalPage = lazyWithRetry(() => import("@/page/carRental/CarRentalPage"))
const ConsultancyServicesPage = lazyWithRetry(() => import("@/page/Consultancy/ConsultancyPage"))
const DashboardLayout = lazyWithRetry(() => import("@/layout/dashboard/DashboardLayout"))
import ContactPage from "@/page/contact/ContactPage" 
import Dashboard from "@/page/DashboardOverview/Dashboard"
import ServiceDetailsPage from  "@/page/details/Details"
const ElectricalElectronicsPage = lazyWithRetry(() => import("@/page/electricalAndElctronics/ElectricalElectronicsPage"));
const ErrorPage = lazyWithRetry(() => import("@/page/errorPage/ErrorPage")) 
const EventSolutionsPage = lazyWithRetry(() => import("@/page/event/EventSolutionsPage")) ;
import Home from "@/page/home/Home";
import LoginPage from "@/page/login/LoginPage"
const ManageAdvertise = lazyWithRetry(() => import("@/page/ManageService/ManageAdvertise"))
const ManageArchDesign = lazyWithRetry(() => import("@/page/ManageService/ManageArchDesign"))
const ManageCarRent = lazyWithRetry(() => import("@/page/ManageService/ManageCarRent"))
const ManageConsultancy = lazyWithRetry(() => import("@/page/ManageService/ManageConsultancy")) 
const ManageElectric = lazyWithRetry(() => import("@/page/ManageService/ManageElectric")) 
const ManageEvent = lazyWithRetry(() => import("@/page/ManageService/ManageEvent")) 
const ManageNotaryPublic = lazyWithRetry(() => import("@/page/ManageService/ManageNotaryPublic")) 
const ManageOffice = lazyWithRetry(() => import("@/page/ManageService/ManageOffice")) 
const ManageTour = lazyWithRetry(() => import("@/page/ManageService/ManageTour")) 
const ManageWebDevelopment = lazyWithRetry(() => import("@/page/ManageService/ManageWebDevelopment")) 
const NotaryPublicPage = lazyWithRetry(() => import("@/page/notary_public/NotaryPublicPage")) 
const OfficeStationaryPage = lazyWithRetry(() => import("@/page/office_Stationary/office_stationary")) 
import SignUpPage from "@/page/signUp/SignUp"
const TourTravelPage = lazyWithRetry(() => import("@/page/Tour&Travel/TourTravelPage")) 
const WebDevelopmentDetailsPage = lazyWithRetry(() => import("@/page/webDetailsPage/WebDetailsPage"))
const WebDevelopmentPage = lazyWithRetry(() => import("@/page/webService/webDevelopementPage"))  ;
import { Suspense } from 'react';
import { createBrowserRouter } from "react-router";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingPage from "@/page/LoadingPage/LoadingPage";
import ManageIT from "@/page/ManageService/ManageIT";
import ITSupportServicesPage from "@/page/IT-Support/IT-Support";
import ManageBlog from "@/page/ManageService/ManageBlog";
import Blogs from "@/page/blogs/blogs";
import BlogDetails from "@/page/blog-details/BlogDetails";
import ManageHotel from "@/page/ManageService/ManageHotel";
import HotelResortServicesPage from "@/page/hotel/hotelServicePage";
const ManageUser =lazyWithRetry(()=>import("@/page/ManageService/ManageUser")) 

const lazyLoad = (Component:any) => (
  <ErrorBoundary fallback={`Failed to load component`}>
    <Suspense fallback={<LoadingPage></LoadingPage>}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: lazyLoad(AboutUs)
            },
            {
                path: '/contact',
                element: lazyLoad(ContactPage)
            },
            {
                path: '/blogs',
                element: lazyLoad(Blogs)
            },
            {
                path: '/blog/:id',
                element: lazyLoad(BlogDetails)
            },
            {
                path: '/services/IT-Support',
                element: lazyLoad(ITSupportServicesPage)
            },
            {
                path: '/services/event-solutions',
                element: lazyLoad(EventSolutionsPage)
            },
            {
                path: '/services/architectural-design',
                element: lazyLoad(ArchitecturalDesignPage)
            },
            {
                path: '/services/electric-electronics',
                element: lazyLoad(ElectricalElectronicsPage)
            },
            {
                path: '/services/advertising',
                element: lazyLoad(AdvertisingServicesPage)
            },
            {
                path: '/services/office-stationery',
                element: lazyLoad(OfficeStationaryPage)
            },
            {
                path: '/services/tour-travel',
                element: lazyLoad(TourTravelPage)
            },
            {
                path: "/services/car-rent",
                element: lazyLoad(CarRentalPage)
            },
            {
                path: '/services/notary-public',
                element: lazyLoad(NotaryPublicPage)
            },
            {
                path: '/services/consultancy',
                element: lazyLoad(ConsultancyServicesPage)
            },
            {
                path: '/services/hotel_resort',
                element: lazyLoad(HotelResortServicesPage)
            },
            {
                path: "/services/web-development",
                element: lazyLoad(WebDevelopmentPage)
            },
            {
                path: "/details/:api/:id",
                element: lazyLoad(ServiceDetailsPage)
            },
            {
                path: '/details/web/:id',
                element: lazyLoad(WebDevelopmentDetailsPage)
            }
        ]),
    },
    {
        path: '/signup',
        element: lazyLoad(SignUpPage)
    },
    {
        path: '/signin',
        element: lazyLoad(LoginPage)
    },
    {
        path: '/dashboard',
        element: lazyLoad(DashboardLayout),
        children: ([
            {
                index: true,
                element: lazyLoad(Dashboard)
            },
            {
                path: '/dashboard/manage-services/event-solution',
                element: lazyLoad(ManageEvent)
            },
            {
                path: '/dashboard/manage-services/architectural-design',
                element: lazyLoad(ManageArchDesign)
            },
            {
                path: '/dashboard/manage-services/electric-electronics',
                element: lazyLoad(ManageElectric)
            },
            {
                path: '/dashboard/manage-services/advertising',
                element: lazyLoad(ManageAdvertise)
            },
            {
                path: '/dashboard/manage-services/office-stationery',
                element: lazyLoad(ManageOffice)
            },
            {
                path: '/dashboard/manage-services/tour-travel',
                element: lazyLoad(ManageTour)
            },
            {
                path: '/dashboard/manage-services/car-rent',
                element: lazyLoad(ManageCarRent)
            },
            {
                path: '/dashboard/manage-services/notary-public',
                element: lazyLoad(ManageNotaryPublic)
            },
            {
                path: '/dashboard/manage-services/consultancy',
                element: lazyLoad(ManageConsultancy)
            },
            {
                path: '/dashboard/manage-services/web-development',
                element: lazyLoad(ManageWebDevelopment)
            },
            {
                path: '/dashboard/manage-services/IT-Support',
                element: lazyLoad(ManageIT)
            },
            {
                path: '/dashboard/manage-services/hotel_resort',
                element: lazyLoad(ManageHotel)
            },
            {
                path: '/dashboard/manage-blogs',
                element: lazyLoad(ManageBlog)
            },
            {
                path: '/dashboard/manage-user',
                element: lazyLoad(ManageUser)
            }
        ])
    }
])

export default router;