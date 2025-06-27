
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { RotatingDiscSelector } from "./RotatingDiscSelector";

interface HeightWeightSelectionProps {
  onComplete: (data: { height: string; weight: string; unit: string }) => void;
  onBack: () => void;
}

export const HeightWeightSelection = ({ onComplete, onBack }: HeightWeightSelectionProps) => {
  const [isMetric, setIsMetric] = useState(false);
  const [selectedHeight, setSelectedHeight] = useState<string>("");
  const [selectedWeight, setSelectedWeight] = useState<string>("");

  // Generate weight values
  const imperialWeights = Array.from({ length: 583 }, (_, i) => `${i + 118}`);
  const metricWeights = Array.from({ length: 91 }, (_, i) => `${i + 30}`);

  // Generate height values
  const imperialHeights = [];
  for (let ft = 3; ft <= 8; ft++) {
    for (let inch = 0; inch < 12; inch++) {
      if (ft === 8 && inch > 0) break; // Stop at 8'0"
      imperialHeights.push(`${ft}'${inch}"`);
    }
  }
  
  const metricHeights = Array.from({ length: 101 }, (_, i) => `${i + 120}`);

  const handleContinue = () => {
    if (selectedHeight && selectedWeight) {
      onComplete({
        height: selectedHeight,
        weight: selectedWeight,
        unit: isMetric ? 'metric' : 'imperial'
      });
    }
  };

  const currentHeights = isMetric ? metricHeights : imperialHeights;
  const currentWeights = isMetric ? metricWeights : imperialWeights;
  const heightUnit = isMetric ? 'Height (cm)' : 'Height';
  const weightUnit = isMetric ? 'Weight (kg)' : 'Weight (lbs)';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        
        {/* Progress bar */}
        <div className="flex-1 mx-8">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div className="bg-gray-400 h-1 rounded-full w-2/3"></div>
          </div>
        </div>
        
        {/* Language selector */}
        <div className="flex items-center space-x-1">
          <span className="text-xs">🇺🇸</span>
          <span className="text-sm font-medium text-gray-900">EN</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8 flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Height & Weight
          </h1>
          <p className="text-gray-600">
            This will be used to calibrate your custom plan.
          </p>
        </div>

        {/* Unit Toggle */}
        <div className="flex items-center justify-center mb-8">
          <span className={`text-lg font-medium mr-4 ${!isMetric ? 'text-gray-900' : 'text-gray-400'}`}>
            Imperial
          </span>
          <Switch
            checked={isMetric}
            onCheckedChange={setIsMetric}
            className="data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-300"
          />
          <span className={`text-lg font-medium ml-4 ${isMetric ? 'text-gray-900' : 'text-gray-400'}`}>
            Metric
          </span>
        </div>

        {/* Rotating Disc Selectors */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          <RotatingDiscSelector
            values={currentWeights}
            unit={weightUnit}
            onValueChange={setSelectedWeight}
            initialValue={selectedWeight}
          />
          
          <RotatingDiscSelector
            values={currentHeights}
            unit={heightUnit}
            onValueChange={setSelectedHeight}
            initialValue={selectedHeight}
          />
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-6 pb-8">
        <button
          onClick={handleContinue}
          disabled={!selectedHeight || !selectedWeight}
          className={`w-full py-4 px-6 rounded-full text-lg font-medium transition-all duration-200 ${
            selectedHeight && selectedWeight
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
