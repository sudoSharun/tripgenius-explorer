
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
        <CardTitle className="text-4xl md:text-5xl font-bold text-teal mb-4 leading-tight">
          Where Will Your Next
          <br />
          <span className="text-coral">Adventure Take You?</span>
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Let AI craft your perfect journey, tailored just for you
        </CardDescription>
      </div>
    </CardHeader>
  );
};

export default TripHeader;
