
import {
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const TripHeader = () => {
  return (
    <CardHeader className="text-center space-y-4 relative overflow-hidden pb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-coral/5 to-teal/5 animate-gradient" />
      <div className="relative animate-fade-up">
        <CardTitle className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight bg-gradient-to-r from-teal via-coral to-teal bg-clip-text text-transparent">
          Craft Your Dream Adventure
          <br />
          with AI Precision
        </CardTitle>
        <CardDescription className="text-lg font-sans text-gray-600">
          Tell us your travel desires—we'll handle the magic.
          <br />
          Personalized itineraries, zero stress.
        </CardDescription>
      </div>
    </CardHeader>
  );
};

export default TripHeader;
