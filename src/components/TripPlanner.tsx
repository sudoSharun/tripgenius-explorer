
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DateRange } from "react-day-picker";
import TripHeader from "./trip/TripHeader";
import DestinationInputs from "./trip/DestinationInputs";
import DateSelector from "./trip/DateSelector";
import BudgetSelector from "./trip/BudgetSelector";
import TravelStyleSelector from "./trip/TravelStyleSelector";
import TripSummary from "./trip/TripSummary";
import GenerateButton from "./trip/GenerateButton";
import type { TravelTone } from "./trip/TravelStyleSelector";

const TripPlanner = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelTone, setTravelTone] = useState<TravelTone>("Adventure");
  const [budget, setBudget] = useState([5000]);
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [unlimited, setUnlimited] = useState(false);
  const [customBudget, setCustomBudget] = useState("");

  const handleGenerateItinerary = () => {
    setLoading(true);
    // TODO: Implement itinerary generation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const showSummary = Boolean(from || to || date?.from || budget[0] !== 5000 || travelTone !== "Adventure");

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl">
        <TripHeader />
        <CardContent className="space-y-8">
          <DestinationInputs
            from={from}
            to={to}
            setFrom={setFrom}
            setTo={setTo}
          />
          <DateSelector date={date} setDate={setDate} />
          <BudgetSelector
            budget={budget}
            setBudget={setBudget}
            unlimited={unlimited}
            setUnlimited={setUnlimited}
            customBudget={customBudget}
            setCustomBudget={setCustomBudget}
          />
          <TravelStyleSelector
            travelTone={travelTone}
            setTravelTone={setTravelTone}
          />
        </CardContent>

        <TripSummary
          from={from}
          to={to}
          date={date}
          budget={budget}
          unlimited={unlimited}
          travelTone={travelTone}
          shouldShow={showSummary}
        />

        <GenerateButton
          loading={loading}
          disabled={!from || !to || !date?.from || !date?.to || loading}
          onClick={handleGenerateItinerary}
        />
      </Card>
    </div>
  );
};

export default TripPlanner;
