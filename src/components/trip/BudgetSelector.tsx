
import { PlusCircle, MinusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface BudgetSelectorProps {
  budget: number[];
  setBudget: (budget: number[]) => void;
  unlimited: boolean;
  setUnlimited: (unlimited: boolean) => void;
  customBudget: string;
  setCustomBudget: (budget: string) => void;
}

const BudgetSelector = ({
  budget,
  setBudget,
  unlimited,
  setUnlimited,
  customBudget,
  setCustomBudget,
}: BudgetSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label className="text-sm font-medium text-gray-700">Budget</Label>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setUnlimited(!unlimited)}
          className="text-sm text-coral hover:text-coral/80"
        >
          {unlimited ? (
            <MinusCircle className="mr-2 h-4 w-4" />
          ) : (
            <PlusCircle className="mr-2 h-4 w-4" />
          )}
          {unlimited ? "Set Budget Limit" : "No Budget Limit"}
        </Button>
      </div>
      
      {!unlimited && (
        <>
          <div className="flex items-center gap-4">
            <Slider
              value={budget}
              onValueChange={setBudget}
              max={50000}
              step={100}
              className="flex-1"
            />
            <div className="relative w-32">
              <Input
                type="number"
                value={customBudget || budget[0]}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value)) {
                    setCustomBudget(e.target.value);
                    setBudget([value]);
                  }
                }}
                className="pl-6 text-right"
              />
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBudget([3000])}
              className="text-xs"
            >
              Budget
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBudget([10000])}
              className="text-xs"
            >
              Standard
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBudget([25000])}
              className="text-xs"
            >
              Luxury
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default BudgetSelector;
