
import { Check, Globe2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type TravelTone = 
  | "Adventure"
  | "Relaxation"
  | "Family"
  | "Honeymoon"
  | "Solo Travel"
  | "Luxury Escape"
  | "Spiritual Retreat"
  | "Nature & Wildlife"
  | "Cultural & Historical"
  | "Wellness & Spa"
  | "Road Trip"
  | "Backpacking";

interface TravelStyleSelectorProps {
  travelTone: TravelTone;
  setTravelTone: (tone: TravelTone) => void;
}

const TravelStyleSelector = ({ travelTone, setTravelTone }: TravelStyleSelectorProps) => {
  const travelStyles: { type: TravelTone; icon: JSX.Element }[] = [
    { type: "Adventure", icon: <Globe2 className="w-4 h-4" /> },
    { type: "Relaxation", icon: <Star className="w-4 h-4" /> },
    { type: "Family", icon: <Star className="w-4 h-4" /> },
    { type: "Honeymoon", icon: <Star className="w-4 h-4" /> },
    { type: "Solo Travel", icon: <Star className="w-4 h-4" /> },
    { type: "Luxury Escape", icon: <Star className="w-4 h-4" /> },
    { type: "Spiritual Retreat", icon: <Star className="w-4 h-4" /> },
    { type: "Nature & Wildlife", icon: <Star className="w-4 h-4" /> },
    { type: "Cultural & Historical", icon: <Star className="w-4 h-4" /> },
    { type: "Wellness & Spa", icon: <Star className="w-4 h-4" /> },
    { type: "Road Trip", icon: <Star className="w-4 h-4" /> },
    { type: "Backpacking", icon: <Star className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-gray-700">Travel Style</Label>
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        {travelStyles.map(({ type, icon }) => (
          <Button
            key={type}
            variant={travelTone === type ? "default" : "outline"}
            className={cn(
              "h-auto py-2 px-4 whitespace-nowrap transition-all duration-300 hover:scale-105",
              travelTone === type 
                ? "bg-gradient-to-r from-coral to-coral/80 text-white shadow-lg hover:shadow-xl" 
                : "hover:border-coral/50"
            )}
            onClick={() => setTravelTone(type)}
          >
            {icon}
            <span className="ml-2">{type}</span>
            {travelTone === type && (
              <Check className="ml-2 h-4 w-4 animate-fade-in" />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TravelStyleSelector;
