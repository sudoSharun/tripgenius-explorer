
import { useState } from "react";
import { Check, Loader2, MapPin, Plane, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type TravelTone = "Adventure" | "Relaxation" | "Family" | "Honeymoon";

const TripPlanner = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelTone, setTravelTone] = useState<TravelTone>("Adventure");
  const [budget, setBudget] = useState([5000]);
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [loading, setLoading] = useState(false);

  const popularDestinations = [
    "Paris, France",
    "Tokyo, Japan",
    "New York, USA",
    "Rome, Italy",
    "Sydney, Australia",
  ];

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
          <CardTitle className="text-3xl font-bold text-teal">Design Your Perfect Journey</CardTitle>
          <CardDescription>Let AI craft your ideal travel experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Destination Selection */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Departing From</Label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter city"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="pl-10 h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-coral focus:ring-coral transition-all duration-300"
                />
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Traveling To</Label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter destination"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="pl-10 h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-coral focus:ring-coral transition-all duration-300"
                />
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Date Range Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Travel Dates</Label>
            <div className="grid md:grid-cols-2 gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12",
                      !dateRange.from && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {dateRange.from ? format(dateRange.from, "PPP") : "Start date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={dateRange.from}
                    onSelect={(date) => setDateRange({ ...dateRange, from: date })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12",
                      !dateRange.to && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {dateRange.to ? format(dateRange.to, "PPP") : "End date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={dateRange.to}
                    onSelect={(date) => setDateRange({ ...dateRange, to: date })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Budget Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-medium text-gray-700">Budget (USD)</Label>
              <span className="text-lg font-semibold text-coral">${budget[0].toLocaleString()}</span>
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
                  "h-auto py-4 px-6 transition-all duration-300",
                  travelTone === style && "bg-coral hover:bg-coral/90"
                )}
                onClick={() => setTravelTone(style as TravelTone)}
              >
                {style}
                {travelTone === style && <Check className="ml-2 h-4 w-4" />}
              </Button>
            ))}
          </div>

          {/* Generate Button */}
          <Button
            size="lg"
            disabled={!from || !to || !dateRange.from || !dateRange.to || loading}
            onClick={handleGenerateItinerary}
            className="w-full bg-gradient-to-r from-coral to-coral/80 hover:from-coral/90 hover:to-coral/70 text-white rounded-xl py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:hover:scale-100"
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
        </CardContent>
      </Card>
    </div>
  );
};

export default TripPlanner;
