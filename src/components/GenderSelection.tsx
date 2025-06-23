
interface GenderSelectionProps {
  onGenderSelect: (gender: string) => void;
}

export const GenderSelection = ({ onGenderSelect }: GenderSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 pointer-events-none" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-bl from-indigo-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-sm space-y-8 relative z-10">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
            Select Profile
          </h1>
          <p className="text-gray-600">
            Choose your profile to personalize your experience
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onGenderSelect('male')}
            className="w-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span className="text-white text-2xl font-semibold">M</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Male</h3>
            <p className="text-gray-600 text-sm">
              Tailored analysis and recommendations for male physique
            </p>
          </button>

          <button
            onClick={() => onGenderSelect('female')}
            className="w-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-200 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span className="text-white text-2xl font-semibold">F</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Female</h3>
            <p className="text-gray-600 text-sm">
              Tailored analysis and recommendations for female physique
            </p>
          </button>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            This selection cannot be changed after confirmation
          </p>
        </div>
      </div>
    </div>
  );
};
