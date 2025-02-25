
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

interface GenerateButtonProps {
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}

const GenerateButton = ({ loading, disabled, onClick }: GenerateButtonProps) => {
  return (
    <CardFooter className="pt-4">
      <Button
        size="lg"
        disabled={disabled}
        onClick={onClick}
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
  );
};

export default GenerateButton;
