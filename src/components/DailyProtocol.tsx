
import { useState } from "react";
import { Search, Utensils, Target, Dumbbell, Moon, CheckCircle, Plus, Power, Check } from "lucide-react";

export const DailyProtocol = () => {
  const [scannedFood, setScannedFood] = useState<string | null>(null);
  const [showQuitModal, setShowQuitModal] = useState(false);

  const quickActions = [
    { icon: Target, label: "Set Goal", color: "bg-black" },
    { icon: Dumbbell, label: "Quick Workout", color: "bg-black" },
    { icon: Utensils, label: "Log Meal", color: "bg-black" },
    { icon: Moon, label: "Sleep Tracker", color: "bg-black" },
  ];

  const dailyProgress = [
    { task: "Morning Hydration", description: "Drink 500ml of water upon waking", completed: false },
    { task: "Skincare Routine", description: "Complete morning skincare regimen", completed: true },
    { task: "Workout Session", description: "30-45 minutes of physical activity", completed: false },
  ];

  const shortcuts = [
    { name: "Gym Routine", icon: Dumbbell, color: "bg-black" },
    { name: "Meal Plan", icon: Utensils, color: "bg-black" },
    { name: "Sleep Schedule", icon: Moon, color: "bg-black" },
    { name: "Goals", icon: Target, color: "bg-black" },
  ];

  const quitOptions = [
    "Smoking",
    "Drinking",
    "Porn",
    "Procrastinating", 
    "Lack of Consistency",
    "Social Media Addiction",
    "Junk Food",
    "Negative Thinking"
  ];

  const handleFoodScan = () => {
    // Simulate food scanning
    setScannedFood("Apple - 95 calories");
    setTimeout(() => setScannedFood(null), 3000);
  };

  const toggleTaskCompletion = (index: number) => {
    // This would normally update state, but for demo purposes we'll just log
    console.log(`Toggling task ${index}`);
  };

  return (
    <div className="p-6 space-y-6 relative">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Ask me a question?"
          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>

      {/* Header with Icons */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Daily Protocol</h2>
          <p className="text-gray-600">Stay on track with your goals</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowQuitModal(true)}
            className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
          >
            <Power className="w-6 h-6" />
          </button>
          <button
            onClick={handleFoodScan}
            className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-lg relative"
          >
            <Utensils className="w-6 h-6" />
            {scannedFood && (
              <div className="absolute top-16 right-0 bg-white border border-gray-200 rounded-lg p-3 shadow-lg whitespace-nowrap z-10">
                <p className="text-sm font-medium">{scannedFood}</p>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <button key={index} className={`${action.color} text-white p-4 rounded-xl flex items-center space-x-3 hover:opacity-90 transition-opacity`}>
              <action.icon className="w-5 h-5" />
              <span className="font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Daily Progress - Checkbox Style */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Progress</h3>
        <div className="space-y-4">
          {dailyProgress.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
              <button
                onClick={() => toggleTaskCompletion(index)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  item.completed 
                    ? 'bg-black border-black text-white' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {item.completed && <Check className="w-4 h-4" />}
              </button>
              <div className="flex-1">
                <h4 className={`font-medium ${item.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                  {item.task}
                </h4>
                <p className={`text-sm ${item.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shortcuts */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Shortcuts</h3>
        <div className="grid grid-cols-2 gap-3">
          {shortcuts.map((shortcut, index) => (
            <button key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className={`${shortcut.color} p-2 rounded-lg`}>
                <shortcut.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900">{shortcut.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quit Section Modal */}
      {showQuitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Quit Section</h3>
              <button
                onClick={() => setShowQuitModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Power className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">Choose what you want to quit:</p>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {quitOptions.map((option, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowQuitModal(false)}
              className="w-full mt-4 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
