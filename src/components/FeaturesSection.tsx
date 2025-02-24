
import { Calendar, Map, Settings, Star } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Smart Recommendations",
    description: "AI-powered suggestions for attractions, restaurants, and activities based on your preferences.",
  },
  {
    icon: Calendar,
    title: "Custom Itineraries",
    description: "Personalized day-by-day plans that match your travel style and schedule.",
  },
  {
    icon: Star,
    title: "Local Insights",
    description: "Hidden gems and authentic experiences recommended by our AI and local experts.",
  },
  {
    icon: Settings,
    title: "Easy Customization",
    description: "Modify your itinerary anytime with our intuitive drag-and-drop interface.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
            Plan Your Perfect Trip
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform makes trip planning effortless with smart features designed to create your ideal travel experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-coral" />
              </div>
              <h3 className="text-xl font-semibold text-teal mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
