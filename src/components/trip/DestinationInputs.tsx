
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DestinationInputsProps {
  from: string;
  to: string;
  setFrom: (value: string) => void;
  setTo: (value: string) => void;
}

const DestinationInputs = ({ from, to, setFrom, setTo }: DestinationInputsProps) => {
  return (
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
  );
};

export default DestinationInputs;
