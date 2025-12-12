
import PopularServiceCard from "@/page/home/popularServiceCard/PopularServiceCard";


const OurService = () => {

    const cardItems = [
        {
          "id": 1,
          "title": "Event Solutions",
          "description": "Professional event planning and management for all types of occasions.",
          "icon": "🎉",
          "image": "https://i.pinimg.com/736x/4c/b3/27/4cb327e2c6ce15d59d7996c37ea78ca2.jpg?auto=format&fit=crop&w=600&q=50?_gl=1*8hslyy*_ga*MTMyOTE3MDQ0NS4xNzUyMTY0MTk3*_ga_8JE65Q40S6*czE3NTMyNTI0MzkkbzYkZzEkdDE3NTMyNTI0ODEkajE4JGwwJGgw",
          "path":"/services/event-solutions"
        },
        {
          "id": 2,
          "title": "Architectural Design",
          "description": "Innovative and sustainable building design tailored to your vision.",
          "icon": "🏗️",
          "image": "https://i.pinimg.com/736x/03/d7/70/03d7704dad409f8713915bcee69314b1.jpg?auto=format&fit=crop&w=600&q=50?_gl=1*10llz62*_ga*MTMyOTE3MDQ0NS4xNzUyMTY0MTk3*_ga_8JE65Q40S6*czE3NTMyNTI0MzkkbzYkZzEkdDE3NTMyNTI1NDkkajM5JGwwJGgw",
          "path":"/services/architectural-design"
        },
        {
          "id": 3,
          "title": "Tour & Travel",
          "description": "Custom travel packages, visa support, and unforgettable experiences.",
          "icon": "✈️",
          "image": "https://i.pinimg.com/1200x/03/36/fe/0336fe305bf8f4ce87cc6f8e28c1bb8e.jpg?auto=format&fit=crop&w=600&q=50?_gl=1*1e24gih*_ga*MTMyOTE3MDQ0NS4xNzUyMTY0MTk3*_ga_8JE65Q40S6*czE3NTMyNTI0MzkkbzYkZzEkdDE3NTMyNTI2MDQkajU5JGwwJGgw",
          "path":"/services/event-solutions"
        },
        {
          "id": 4,
          "title": "Car Rent",
          "description": "Reliable and affordable vehicle rental for personal or business needs.",
          "icon": "🚗",
          "image": "https://i.pinimg.com/1200x/f9/81/3f/f9813f284b90b2bfd7cd4c6425582350.jpg?auto=format&fit=crop&w=600&q=50?_gl=1*lz63a*_ga*MTMyOTE3MDQ0NS4xNzUyMTY0MTk3*_ga_8JE65Q40S6*czE3NTMyNTI0MzkkbzYkZzEkdDE3NTMyNTI2NDUkajE4JGwwJGgw",
          "path":"/services/car-rent"
        },
        {
          "id": 5,
          "title": "Web Development",
          "description": "Modern, responsive websites and web apps built to perform.",
          "icon": "💻",
          "image": "https://i.pinimg.com/736x/9a/14/af/9a14af8ea8f41da2f546e7be0ae5ae92.jpg?auto=format&fit=crop&w=600&q=50?_gl=1*11a66na*_ga*MTMyOTE3MDQ0NS4xNzUyMTY0MTk3*_ga_8JE65Q40S6*czE3NTMyNTI0MzkkbzYkZzEkdDE3NTMyNTI2ODYkajQyJGwwJGgw",
          "path":"/services/web-development"
        },
        {
          "id": 6,
          "title": "Advertising",
          "description": "Creative marketing solutions across digital and print platforms.",
          "icon": "📢",
          "image": "https://i.pinimg.com/736x/28/2b/22/282b22fd393876d6ddd2276e8be2f748.jpg?auto=format&fit=crop&w=600&q=50?_gl=1*mpd14v*_ga*MTMyOTE3MDQ0NS4xNzUyMTY0MTk3*_ga_8JE65Q40S6*czE3NTMyNTI0MzkkbzYkZzEkdDE3NTMyNTI3NDckajU5JGwwJGgw",
          "path":"/services/advertising"
        }
      ] 
    return (
        <div  className="my-20 max-w-7xl py-5 mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 text-center">Our <span className="text-red-600">Service</span></h3>
            <p className="text-lg text-gray-600 max-w-2xl text-center mx-auto">
            Discover our comprehensive range of professional services designed to meet all your business needs
        </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10  md:px-7 px-3 ">
                {
                    cardItems.map(item=><PopularServiceCard key={item.id} item={item}></PopularServiceCard>)
                }
            </div>
        </div>
    );
};

export default OurService;