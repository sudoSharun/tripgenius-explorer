
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sand py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sand/10" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 animate-fade-up">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 mb-6">
            <MapPin className="w-4 h-4 text-coral mr-2" />
            <span className="text-sm font-medium text-teal">AI-Powered Travel Planning</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-teal leading-tight">
            AI-Powered Trip Planning
            <br />
            <span className="text-coral">Made Just for You!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Personalized itineraries with smart recommendations, budget tracking, and hassle-free booking—all in one place.
          </p>
          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => navigate("/plan-trip")}
            >
              Plan Your Trip Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
