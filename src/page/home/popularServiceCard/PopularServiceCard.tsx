import { ArrowRight } from "lucide-react";
import { Card,  CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
import { Link } from "react-router";


interface CardProps {
  item: {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
    path:string;

  };
}

const PopularServiceCard = ({ item }: CardProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer h-full"
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        transform: 'translateY(0)',
      }}
    >
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full  object-cover  transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
     
       
      </div>

      {/* Service Content */}
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
          {item.title}
        </CardTitle>
        
        <CardDescription className="text-gray-600 mb-4 line-clamp-2">
          {item.description}
        </CardDescription>

      
        

        {/* Action Button */}
      <Link to={item.path}>
      <button 
          className="w-full py-3 rounded-lg bg-red-600 text-white hover:bg-gray-300 font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
     
        >
          <span>View More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
      </CardContent>
    </Card>
  );
};

export default PopularServiceCard;