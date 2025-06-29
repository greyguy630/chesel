import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

interface HeightWeightSelectionProps {
  onComplete: (data: { height: string; weight: string; unit: string }) => void;
  onBack: () => void;
}

export const HeightWeightSelection = ({ onComplete, onBack }: HeightWeightSelectionProps) => {
  const [isMetric, setIsMetric] = useState(false);
  const [selectedHeightFeet, setSelectedHeightFeet] = useState(5);
  const [selectedHeightInches, setSelectedHeightInches] = useState(6);
  const [selectedHeightCm, setSelectedHeightCm] = useState(170);
  const [selectedWeight, setSelectedWeight] = useState(isMetric ? 70 : 120);

  // Generate weight values
  const imperialWeights = Array.from({ length: 200 }, (_, i) => i + 80);
  const metricWeights = Array.from({ length: 150 }, (_, i) => i + 30);

  // Generate height values
  const feetOptions = [3, 4, 5, 6, 7, 8];
  const inchesOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const cmOptions = Array.from({ length: 121 }, (_, i) => i + 120);

  const handleContinue = () => {
    let heightString = "";
    if (isMetric) {
      heightString = `${selectedHeightCm}cm`;
    } else {
      heightString = `${selectedHeightFeet}'${selectedHeightInches}"`;
    }

    onComplete({
      height: heightString,
      weight: `${selectedWeight}${isMetric ? 'kg' : 'lb'}`,
      unit: isMetric ? 'metric' : 'imperial'
    });
  };

  const ScrollSelector = ({ 
    values, 
    selectedValue, 
    onValueChange, 
    unit 
  }: { 
    values: number[], 
    selectedValue: number, 
    onValueChange: (value: number) => void,
    unit: string 
  }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-x-0 top-1/2 h-12 -mt-6 bg-gray-100 rounded-lg border-2 border-gray-200 z-10 pointer-events-none" />
          <div className="flex flex-col items-center py-20">
            {values.map((value, index) => {
              const isSelected = value === selectedValue;
              const distance = Math.abs(values.indexOf(selectedValue) - index);
              const opacity = Math.max(0.3, 1 - distance * 0.2);
              const scale = isSelected ? 1 : Math.max(0.7, 1 - distance * 0.1);
              
              return (
                <button
                  key={value}
                  onClick={() => onValueChange(value)}
                  className={`py-2 px-4 transition-all duration-200 ${
                    isSelected ? 'text-black font-semibold text-lg' : 'text-gray-500'
                  }`}
                  style={{
                    opacity,
                    transform: `scale(${scale})`,
                  }}
                >
                  {value} {unit}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

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
            onCheckedChange={(checked) => {
              setIsMetric(checked);
              if (checked) {
                setSelectedWeight(70);
              } else {
                setSelectedWeight(120);
              }
            }}
            className="data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-300"
          />
          <span className={`text-lg font-medium ml-4 ${isMetric ? 'text-gray-900' : 'text-gray-400'}`}>
            Metric
          </span>
        </div>

        {/* Height and Weight Selectors */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Height Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Height</h3>
            {isMetric ? (
              <ScrollSelector
                values={cmOptions}
                selectedValue={selectedHeightCm}
                onValueChange={setSelectedHeightCm}
                unit="cm"
              />
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <ScrollSelector
                    values={feetOptions}
                    selectedValue={selectedHeightFeet}
                    onValueChange={setSelectedHeightFeet}
                    unit="ft"
                  />
                </div>
                <div>
                  <ScrollSelector
                    values={inchesOptions}
                    selectedValue={selectedHeightInches}
                    onValueChange={setSelectedHeightInches}
                    unit="in"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Weight Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Weight</h3>
            <ScrollSelector
              values={isMetric ? metricWeights : imperialWeights}
              selectedValue={selectedWeight}
              onValueChange={setSelectedWeight}
              unit={isMetric ? "kg" : "lb"}
            />
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-6 pb-8">
        <button
          onClick={handleContinue}
          className="w-full py-4 px-6 rounded-full text-lg font-medium bg-black text-white hover:bg-gray-800 transition-all duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};