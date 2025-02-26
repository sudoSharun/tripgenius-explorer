
import { Plane, MapPin, Calendar, Wallet, Sparkles } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { TravelTone } from "./TravelStyleSelector";

interface TripSummaryProps {
  from: string;
  to: string;
  date: DateRange | undefined;
  budget: number[];
  unlimited: boolean;
  travelTone: TravelTone;
  shouldShow: boolean;
}

const TripSummary = ({ from, to, date, budget, unlimited, travelTone, shouldShow }: TripSummaryProps) => {
  if (!shouldShow) return null;

  return (
    <CardContent className="border-t border-gray-100 pt-6">
      <div className="bg-gray-50/50 backdrop-blur-sm rounded-xl p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-700">Trip Summary</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {from && (
            <div className="flex items-center gap-2">
              <Plane className="h-4 w-4 text-coral" />
              <span>From: {from}</span>
            </div>
          )}
          {to && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-coral" />
              <span>To: {to}</span>
            </div>
          )}
          {date?.from && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-coral" />
              <span>
                {format(date.from, "MMM dd")} -{" "}
                {date.to ? format(date.to, "MMM dd, yyyy") : "..."}
              </span>
            </div>
          )}
          {(unlimited || budget[0] !== 5000) && (
            <div className="flex items-center gap-2">
              <Wallet className="h-4 w-4 text-coral" />
              <span>
                {unlimited ? "Unlimited Budget" : `Budget: $${budget[0].toLocaleString()}`}
              </span>
            </div>
          )}
          {travelTone !== "Adventure" && (
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-coral" />
              <span>{travelTone} Style</span>
            </div>
          )}
        </div>
      </div>
    </CardContent>
  );
};

export default TripSummary;
