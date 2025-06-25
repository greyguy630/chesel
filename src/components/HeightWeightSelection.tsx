
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

interface HeightWeightSelectionProps {
  onComplete: (data: { height: string; weight: string; unit: string }) => void;
  onBack: () => void;
}

export const HeightWeightSelection = ({ onComplete, onBack }: HeightWeightSelectionProps) => {
  const [isMetric, setIsMetric] = useState(false);
  const [selectedHeight, setSelectedHeight] = useState<string>("");
  const [selectedWeight, setSelectedWeight] = useState<string>("");

  // Imperial height options (2ft to 8ft)
  const imperialHeights = [
    "2 ft 3 in", "2 ft 4 in", "2 ft 5 in", "2 ft 6 in", "2 ft 7 in", "2 ft 8 in", "2 ft 9 in", "2 ft 10 in", "2 ft 11 in",
    "3 ft 0 in", "3 ft 1 in", "3 ft 2 in", "3 ft 3 in", "3 ft 4 in", "3 ft 5 in", "3 ft 6 in", "3 ft 7 in", "3 ft 8 in", "3 ft 9 in", "3 ft 10 in", "3 ft 11 in",
    "4 ft 0 in", "4 ft 1 in", "4 ft 2 in", "4 ft 3 in", "4 ft 4 in", "4 ft 5 in", "4 ft 6 in", "4 ft 7 in", "4 ft 8 in", "4 ft 9 in", "4 ft 10 in", "4 ft 11 in",
    "5 ft 0 in", "5 ft 1 in", "5 ft 2 in", "5 ft 3 in", "5 ft 4 in", "5 ft 5 in", "5 ft 6 in", "5 ft 7 in", "5 ft 8 in", "5 ft 9 in", "5 ft 10 in", "5 ft 11 in",
    "6 ft 0 in", "6 ft 1 in", "6 ft 2 in", "6 ft 3 in", "6 ft 4 in", "6 ft 5 in", "6 ft 6 in", "6 ft 7 in", "6 ft 8 in", "6 ft 9 in", "6 ft 10 in", "6 ft 11 in",
    "7 ft 0 in", "7 ft 1 in", "7 ft 2 in", "7 ft 3 in", "7 ft 4 in", "7 ft 5 in", "7 ft 6 in", "7 ft 7 in", "7 ft 8 in", "7 ft 9 in", "7 ft 10 in", "7 ft 11 in",
    "8 ft 0 in"
  ];

  // Imperial weight options (up to 700 lb)
  const imperialWeights = Array.from({ length: 583 }, (_, i) => `${i + 118} lb`);

  // Metric height options (70cm to 244cm approximately)
  const metricHeights = Array.from({ length: 175 }, (_, i) => `${i + 70} cm`);

  // Metric weight options (up to 318 kg approximately)
  const metricWeights = Array.from({ length: 265 }, (_, i) => `${i + 54} kg`);

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
            Height & weight
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

        {/* Height and Weight Selectors */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Height Column */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Height</h3>
            <div className="max-h-80 overflow-y-auto space-y-1">
              {currentHeights.map((height) => (
                <button
                  key={height}
                  onClick={() => setSelectedHeight(height)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                    selectedHeight === height
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {height}
                </button>
              ))}
            </div>
          </div>

          {/* Weight Column */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Weight</h3>
            <div className="max-h-80 overflow-y-auto space-y-1">
              {currentWeights.map((weight) => (
                <button
                  key={weight}
                  onClick={() => setSelectedWeight(weight)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                    selectedWeight === weight
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>
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
