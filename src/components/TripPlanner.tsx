
import { useState } from "react";
import { Check, Loader2, MapPin, Plane, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

type TravelTone = "Adventure" | "Relaxation" | "Family" | "Honeymoon";

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

  const handleGenerateItinerary = () => {
    setLoading(true);
    // TODO: Implement itinerary generation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-teal mb-2">Design Your Perfect Journey</CardTitle>
          <CardDescription className="text-gray-600">Let AI craft your ideal travel experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Destination Selection */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Departing From</Label>
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="Enter city"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="pl-10 h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-coral focus:ring-coral transition-all duration-300 group-hover:border-coral/50"
                />
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-hover:text-coral transition-colors duration-300" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Traveling To</Label>
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="Enter destination"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="pl-10 h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-coral focus:ring-coral transition-all duration-300 group-hover:border-coral/50"
                />
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-hover:text-coral transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Date Range Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Travel Dates</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-12 bg-white/50 backdrop-blur-sm border-gray-200 hover:border-coral/50 transition-all duration-300",
                    !date && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Select your travel dates</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <CalendarComponent
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Budget Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-medium text-gray-700">Budget (USD)</Label>
              <span className="text-lg font-semibold text-coral transition-all duration-300">
                ${budget[0].toLocaleString()}
              </span>
            </div>
            <Slider
              value={budget}
              onValueChange={setBudget}
              max={20000}
              step={100}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>$20,000</span>
            </div>
          </div>

          {/* Travel Style Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Adventure", "Relaxation", "Family", "Honeymoon"].map((style) => (
              <Button
                key={style}
                variant={travelTone === style ? "default" : "outline"}
                className={cn(
                  "h-auto py-4 px-6 transition-all duration-300 hover:scale-105",
                  travelTone === style 
                    ? "bg-gradient-to-r from-coral to-coral/80 text-white shadow-lg hover:shadow-xl" 
                    : "hover:border-coral/50"
                )}
                onClick={() => setTravelTone(style as TravelTone)}
              >
                {style}
                {travelTone === style && (
                  <Check className="ml-2 h-4 w-4 animate-fade-in" />
                )}
              </Button>
            ))}
          </div>
        </CardContent>

        {/* Trip Summary */}
        {(from || to || date?.from || budget[0] !== 5000 || travelTone !== "Adventure") && (
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
                      {format(date.from, "MMM dd")} - {date.to ? format(date.to, "MMM dd, yyyy") : "..."}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-coral" />
                  <span>{travelTone} Style</span>
                </div>
              </div>
            </div>
          </CardContent>
        )}

        <CardFooter className="pt-4">
          {/* Generate Button */}
          <Button
            size="lg"
            disabled={!from || !to || !date?.from || !date?.to || loading}
            onClick={handleGenerateItinerary}
            className="w-full bg-gradient-to-r from-coral to-coral/80 hover:from-coral/90 hover:to-coral/70 text-white rounded-xl py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Creating Your Perfect Itinerary...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate My Dream Trip
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TripPlanner;
