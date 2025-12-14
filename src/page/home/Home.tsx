import Banner from "@/page/home/banner/Banner";
import OurService from "./ourService/OurService";
import ServicesSlider from "@/page/home/photo_gallery/PhotoGallery";
import FAQAccordion from "@/page/home/faq/Faq";
import FeedbackSection from "@/page/home/feedbacksection/FeedbackSection";
import OurGoalsSection from "./our_Goal_Section/OurGoalSection";
import bg from '../../assets/pawel-czerwinski-M40QnK-PXkI-unsplash.jpg'


const Home = () => {
//   popular service ,photo Gallery , feedback , our Goal, faq, footer ,

    return (
        <div>
       <Banner></Banner>
        <div ><OurService></OurService></div>
        <ServicesSlider></ServicesSlider>
        <OurGoalsSection></OurGoalsSection>
        <FeedbackSection></FeedbackSection>

   <div style={{ backgroundImage: `url(${bg})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center" ,
    backgroundSize:"cover"}} >      <FAQAccordion></FAQAccordion>   </div>
    
        </div>
    );
};

export default Home;