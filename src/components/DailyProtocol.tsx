
import { useState } from "react";
import { CheckCircle, Target, Zap, Camera, Scan, TrendingUp, Activity, Utensils, Clock, Play } from "lucide-react";

export const DailyProtocol = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  const handleComplete = () => {
    setIsCompleted(true);
  };

  const handleFoodScan = () => {
    setShowScanner(true);
    // Simulate scanning process
    setTimeout(() => {
      setScanResult({
        food: "Grilled Chicken Breast",
        calories: 185,
        protein: 35,
        carbs: 0,
        fat: 4
      });
      setShowScanner(false);
    }, 2000);
  };

  const quickActions = [
    { icon: Camera, label: "Quick Scan", action: handleFoodScan },
    { icon: Activity, label: "Log Workout", action: () => {} },
    { icon: Target, label: "Set Goal", action: () => {} },
    { icon: TrendingUp, label: "Progress", action: () => {} },
  ];

  const shortcuts = [
    { icon: Scan, label: "Face Analysis", module: "body" },
    { icon: Activity, label: "Workout Plan", module: "fitness" },
    { icon: Target, label: "Style Check", module: "fashion" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Food Scanner */}
      <div className="flex justify-end">
        <button
          onClick={handleFoodScan}
          className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-200"
        >
          <Utensils className="w-5 h-5" />
        </button>
      </div>

      {/* Scanner Modal */}
      {showScanner && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 m-4 text-center">
            <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
              <Scan className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-600">Scanning food...</p>
          </div>
        </div>
      )}

      {/* Scan Result */}
      {scanResult && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{scanResult.food}</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-black">{scanResult.calories}</div>
              <div className="text-gray-600">Calories</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Protein</span>
                <span className="font-medium">{scanResult.protein}g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Carbs</span>
                <span className="font-medium">{scanResult.carbs}g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fat</span>
                <span className="font-medium">{scanResult.fat}g</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Daily Progress */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Progress</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Fitness Goals</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div className="bg-black h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-sm font-medium">75%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Nutrition Tracking</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div className="bg-gray-700 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <span className="text-sm font-medium">60%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Style Optimization</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div className="bg-gray-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-sm font-medium">85%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <action.icon className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-900">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Shortcuts */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Shortcuts</h3>
        <div className="space-y-2">
          {shortcuts.map((shortcut, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <shortcut.icon className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-900">{shortcut.label}</span>
              </div>
              <Play className="w-4 h-4 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Original Protocol Section */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Today's Protocol</h2>
        <p className="text-gray-600">Fitness & Presence</p>
      </div>

      {/* Mission Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="space-y-4">
          {/* Task 1 - Fitness */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Zap className="w-4 h-4 text-gray-600" />
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
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Target className="w-4 h-4 text-gray-600" />
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
            ? 'bg-green-500 text-white'
            : 'bg-black text-white hover:bg-gray-800'
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
  );
};
