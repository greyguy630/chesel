import { ArrowLeft } from "lucide-react";
import { useState, useRef, useEffect } from "react";
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

  const IOSPicker = ({ 
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
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const itemHeight = 44;
    const visibleItems = 5;
    const containerHeight = visibleItems * itemHeight;

    useEffect(() => {
      if (containerRef.current) {
        const selectedIndex = values.indexOf(selectedValue);
        const scrollPosition = selectedIndex * itemHeight - (containerHeight / 2) + (itemHeight / 2);
        containerRef.current.scrollTop = Math.max(0, scrollPosition);
      }
    }, [selectedValue, values]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      if (isDragging) return;
      
      const scrollTop = e.currentTarget.scrollTop;
      const selectedIndex = Math.round((scrollTop + containerHeight / 2 - itemHeight / 2) / itemHeight);
      const clampedIndex = Math.max(0, Math.min(values.length - 1, selectedIndex));
      
      if (values[clampedIndex] !== selectedValue) {
        onValueChange(values[clampedIndex]);
      }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      setIsDragging(true);
      setStartY(e.touches[0].clientY);
      setScrollTop(containerRef.current?.scrollTop || 0);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      
      const deltaY = startY - e.touches[0].clientY;
      const newScrollTop = scrollTop + deltaY;
      containerRef.current.scrollTop = newScrollTop;
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const selectedIndex = Math.round((scrollTop + containerHeight / 2 - itemHeight / 2) / itemHeight);
        const clampedIndex = Math.max(0, Math.min(values.length - 1, selectedIndex));
        
        // Snap to the selected item
        const snapPosition = clampedIndex * itemHeight - (containerHeight / 2) + (itemHeight / 2);
        containerRef.current.scrollTo({
          top: Math.max(0, snapPosition),
          behavior: 'smooth'
        });
        
        onValueChange(values[clampedIndex]);
      }
    };

    return (
      <div className="relative">
        {/* Selection indicator */}
        <div 
          className="absolute left-0 right-0 bg-gray-100 border border-gray-200 rounded-lg pointer-events-none z-10"
          style={{
            top: `${(containerHeight - itemHeight) / 2}px`,
            height: `${itemHeight}px`,
          }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
        
        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="overflow-hidden"
          style={{ height: `${containerHeight}px` }}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div style={{ paddingTop: `${containerHeight / 2 - itemHeight / 2}px`, paddingBottom: `${containerHeight / 2 - itemHeight / 2}px` }}>
            {values.map((value, index) => {
              const isSelected = value === selectedValue;
              return (
                <div
                  key={value}
                  className={`flex items-center justify-center transition-all duration-200 ${
                    isSelected ? 'text-black font-semibold text-lg' : 'text-gray-400 text-base'
                  }`}
                  style={{ height: `${itemHeight}px` }}
                  onClick={() => onValueChange(value)}
                >
                  {value} {unit}
                </div>
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
              <IOSPicker
                values={cmOptions}
                selectedValue={selectedHeightCm}
                onValueChange={setSelectedHeightCm}
                unit="cm"
              />
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <IOSPicker
                    values={feetOptions}
                    selectedValue={selectedHeightFeet}
                    onValueChange={setSelectedHeightFeet}
                    unit="ft"
                  />
                </div>
                <div>
                  <IOSPicker
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
            <IOSPicker
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