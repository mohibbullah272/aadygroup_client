import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, Users, Award,  Lightbulb, CheckCircle } from 'lucide-react';
import useLazyLoadWithSkeleton from '@/hooks/useLazyLoadWithSkeleton';
import Skeleton from '@/components/Skeleton';


interface Goal {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  category: string;
  metrics: string;
}

const OurGoalsSection: React.FC = () => {
  const [activeGoal, setActiveGoal] = useState(0);
  const [animatedProgress, setAnimatedProgress] = useState<number[]>([]);
  const [ref,loaded]=useLazyLoadWithSkeleton()
  const goals: Goal[] = [
    {
      id: 1,
      title: "Excellence in Every Service",
      description: "Deliver unparalleled quality across all our service categories, ensuring every client receives exceptional value and results that exceed expectations.",
      icon: <Award className="w-8 h-8" />,
      progress: 95,
      category: "Quality",
      metrics: "95% Client Satisfaction"
    },
    {
      id: 2,
      title: "Innovation-Driven Solutions",
      description: "Stay at the forefront of technology and creative solutions, constantly evolving our methodologies to provide cutting-edge services.",
      icon: <Lightbulb className="w-8 h-8" />,
      progress: 88,
      category: "Innovation",
      metrics: "88% Tech Implementation"
    },
    {
      id: 3,
      title: "Sustainable Growth",
      description: "Expand our reach while maintaining quality standards, targeting 50% growth in service delivery capacity over the next three years.",
      icon: <TrendingUp className="w-8 h-8" />,
      progress: 73,
      category: "Growth",
      metrics: "73% Growth Target"
    },
   
    {
      id: 5,
      title: "Client-Centric Approach",
      description: "Build lasting partnerships with our clients by understanding their unique needs and providing personalized solutions for every project.",
      icon: <Users className="w-8 h-8" />,
      progress: 91,
      category: "Relationships",
      metrics: "91% Client Retention"
    },
    {
      id: 6,
      title: "Industry Leadership",
      description: "Set new standards in service excellence and become the benchmark for quality in architectural design, event management, and consulting services.",
      icon: <Target className="w-8 h-8" />,
      progress: 67,
      category: "Leadership",
      metrics: "67% Market Position"
    }
  ];

  const keyObjectives = [
    "Achieve 99% client satisfaction across all service categories",
    "Expand to 15 new markets within the next 2 years",
    "Implement AI-driven solutions in 80% of our processes",
    "Reduce project delivery time by 30% while maintaining quality",
    "Build strategic partnerships with 50+ industry leaders",
    "Develop sustainable practices across all operations"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(goals.map(goal => goal.progress));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGoal((prev) => (prev + 1) % goals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  if (!loaded) {
    return (
      <div ref={ref}> 
        <Skeleton />
      </div>
    );
  }
  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Goals & <span className='text-red-600'> Vision</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're committed to transforming industries through exceptional service delivery, 
            innovative solutions, and unwavering dedication to client success across all our specialties.
          </p>
        </div>

        {/* Main Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Goal */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 h-full border border-red-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white mr-4">
                  {goals[activeGoal].icon}
                </div>
                <div>
                  <span className="text-sm font-medium text-red-600 uppercase tracking-wide">
                    {goals[activeGoal].category}
                  </span>
                  <h3 className="text-2xl font-bold text-black">
                    {goals[activeGoal].title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {goals[activeGoal].description}
              </p>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Progress</span>
                  <span className="text-sm font-bold text-red-600">
                    {goals[activeGoal].metrics}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-red-600 to-yellow-400 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${animatedProgress[activeGoal] || 0}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {goals.map((goal, index) => (
              <div
                key={goal.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeGoal === index
                    ? 'border-red-600 bg-red-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveGoal(index)}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  activeGoal === index ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {goal.icon}
                </div>
                <h4 className="font-bold text-black mb-2 text-lg">
                  {goal.title}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {goal.category}
                  </span>
                  <span className="text-sm font-bold text-red-600">
                    {goal.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Objectives */}
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8 text-center">
              Key Objectives for 2024-2026
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyObjectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

    

       
      </div>
    </section>
  );
};

export default OurGoalsSection;