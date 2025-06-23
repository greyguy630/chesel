
import { useState } from "react";
import { CheckCircle, Target, Zap } from "lucide-react";

export const DailyProtocol = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-full">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">Today's Protocol</h2>
          <p className="text-gray-600">Fitness & Presence</p>
        </div>

        {/* Mission Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
          <div className="space-y-4">
            {/* Task 1 - Fitness */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">Fitness Protocol</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your analysis indicates a slight pectoral imbalance. Add one additional set of incline dumbbell press to your next workout.
                </p>
              </div>
            </div>

            {/* Task 2 - Presence */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">Presence Protocol</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  In your next phone call, consciously lower your vocal pitch by 10%. Project authority.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Button */}
        <button
          onClick={handleComplete}
          disabled={isCompleted}
          className={`w-full py-4 px-6 rounded-2xl font-medium transition-all duration-200 ${
            isCompleted
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
              : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95'
          }`}
        >
          {isCompleted ? (
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Completed Today</span>
            </div>
          ) : (
            'Mark as Complete'
          )}
        </button>

        {isCompleted && (
          <div className="text-center">
            <p className="text-sm text-green-600 font-medium">
              Great job! Come back tomorrow for your next protocol.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
