
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface GenderSelectionProps {
  onGenderSelect: (gender: string) => void;
}

export const GenderSelection = ({ onGenderSelect }: GenderSelectionProps) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleContinue = () => {
    if (selectedGender) {
      onGenderSelect(selectedGender);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <button className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        
        {/* Progress bar */}
        <div className="flex-1 mx-8">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div className="bg-gray-400 h-1 rounded-full w-1/3"></div>
          </div>
        </div>
        
        {/* Language selector */}
        <div className="flex items-center space-x-1">
          <span className="text-xs">🇺🇸</span>
          <span className="text-sm font-medium text-gray-900">EN</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Choose your Gender
          </h1>
          <p className="text-gray-600">
            This will be used to calibrate your custom plan.
          </p>
        </div>

        {/* Gender Options */}
        <div className="space-y-4 mb-8">
          <button
            onClick={() => handleGenderSelect('male')}
            className={`w-full py-4 px-6 rounded-xl text-lg font-medium transition-all duration-200 ${
              selectedGender === 'male'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            Male
          </button>

          <button
            onClick={() => handleGenderSelect('female')}
            className={`w-full py-4 px-6 rounded-xl text-lg font-medium transition-all duration-200 ${
              selectedGender === 'female'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            Female
          </button>

          <button
            onClick={() => handleGenderSelect('other')}
            className={`w-full py-4 px-6 rounded-xl text-lg font-medium transition-all duration-200 ${
              selectedGender === 'other'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            Other
          </button>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-6 pb-8">
        <button
          onClick={handleContinue}
          disabled={!selectedGender}
          className={`w-full py-4 px-6 rounded-full text-lg font-medium transition-all duration-200 ${
            selectedGender
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
