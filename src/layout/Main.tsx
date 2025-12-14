
import ScrollToTop from "@/components/scrollControll/scrollToTop";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet } from "react-router";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen flex flex-col mt-10 justify-center">


            <ScrollToTop></ScrollToTop>

  <Outlet />
            </div>

           <Footer></Footer>
        </div>
    );
};

export default Main;