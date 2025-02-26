
import {
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const TripHeader = () => {
  return (
    <CardHeader className="text-center space-y-4 relative overflow-hidden pb-8">
      <div className="relative animate-fade-up">
        <CardTitle className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-teal">
          Craft Your Dream Adventure
        </CardTitle>
        <CardDescription className="text-base text-gray-600">
          Tell us your travel desires—we'll handle the magic.
          <br />
          Personalized itineraries, zero stress.
        </CardDescription>
      </div>
    </CardHeader>
  );
};

export default TripHeader;
