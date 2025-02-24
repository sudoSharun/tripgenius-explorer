
import { useState } from "react";
import { Check, Loader2, MapPin, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

type TravelTone = "Adventure" | "Relaxation" | "Family" | "Honeymoon";

const TripPlanner = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelTone, setTravelTone] = useState<TravelTone>("Adventure");
  const [budget, setBudget] = useState([5000]);
  const [duration, setDuration] = useState("7");
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
    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-teal mb-6">Plan Your Perfect Trip</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">From</label>
          <Select value={from} onValueChange={setFrom}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select departure city" />
            </SelectTrigger>
            <SelectContent>
              {popularDestinations.map((city) => (
                <SelectItem key={city} value={city}>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-coral" />
                    {city}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">To</label>
          <Select value={to} onValueChange={setTo}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              {popularDestinations.map((city) => (
                <SelectItem key={city} value={city}>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-coral" />
                    {city}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {to && (
        <Card className="mb-8 bg-white/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle>Destination Preview</CardTitle>
            <CardDescription>Get a quick overview of your destination</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                  alt="Destination preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{to}</h3>
                <p className="text-sm text-gray-600">
                  A beautiful destination with rich culture and stunning landscapes. Perfect for
                  creating unforgettable memories.
                </p>
                <div className="text-sm text-gray-600">
                  <p>🌡️ Current Weather: 22°C (72°F)</p>
                  <p>💰 Average daily budget: $150-$300</p>
                  <p>⭐ Must visit: Local attractions and hidden gems</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Travel Tone</label>
          <Select value={travelTone} onValueChange={(value) => setTravelTone(value as TravelTone)}>
            <SelectTrigger>
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              {["Adventure", "Relaxation", "Family", "Honeymoon"].map((tone) => (
                <SelectItem key={tone} value={tone}>
                  {tone}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Budget (USD): ${budget[0]}
          </label>
          <Slider
            value={budget}
            onValueChange={setBudget}
            max={20000}
            step={100}
            className="py-4"
          />
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Duration (Days)</label>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              {["3", "5", "7", "10", "14", "21"].map((days) => (
                <SelectItem key={days} value={days}>
                  {days} days
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          disabled={!from || !to || loading}
          onClick={handleGenerateItinerary}
          className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-lg"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating Itinerary...
            </>
          ) : (
            <>
              <Plane className="mr-2 h-5 w-5" />
              Generate My Itinerary
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default TripPlanner;
