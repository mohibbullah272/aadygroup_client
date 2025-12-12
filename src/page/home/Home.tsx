import Banner from "@/page/home/banner/Banner";
import OurService from "./ourService/OurService";
import ServicesSlider from "@/page/home/photo_gallery/PhotoGallery";
import FAQAccordion from "@/page/home/faq/Faq";
import FeedbackSection from "@/page/home/feedbacksection/FeedbackSection";
import OurGoalsSection from "./our_Goal_Section/OurGoalSection";



const Home = () => {
//   popular service ,photo Gallery , feedback , our Goal, faq, footer ,

    return (
        <div>
           <Banner></Banner>
        <div className="bg-gray-50"><OurService></OurService></div>
        <ServicesSlider></ServicesSlider>
        <OurGoalsSection></OurGoalsSection>
        <FeedbackSection></FeedbackSection>
        <FAQAccordion></FAQAccordion>
        </div>
    );
};

export default Home;