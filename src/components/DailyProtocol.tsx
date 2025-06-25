
import { useState } from "react";
import { Search, QrCode, Target, Dumbbell, Utensils, Moon, CheckCircle, Plus, X } from "lucide-react";

export const DailyProtocol = () => {
  const [scannedFood, setScannedFood] = useState<string | null>(null);
  const [showQuitModal, setShowQuitModal] = useState(false);

  const quickActions = [
    { icon: Target, label: "Set Goal", color: "bg-blue-500" },
    { icon: Dumbbell, label: "Quick Workout", color: "bg-green-500" },
    { icon: Utensils, label: "Log Meal", color: "bg-orange-500" },
    { icon: Moon, label: "Sleep Tracker", color: "bg-purple-500" },
  ];

  const dailyProgress = [
    { task: "Morning Routine", completed: true, time: "6:00 AM" },
    { task: "Workout", completed: true, time: "7:30 AM" },
    { task: "Healthy Breakfast", completed: false, time: "8:30 AM" },
    { task: "Work Focus Block", completed: false, time: "9:00 AM" },
  ];

  const shortcuts = [
    { name: "Gym Routine", icon: Dumbbell, color: "bg-red-500" },
    { name: "Meal Plan", icon: Utensils, color: "bg-green-500" },
    { name: "Sleep Schedule", icon: Moon, color: "bg-blue-500" },
    { name: "Goals", icon: Target, color: "bg-purple-500" },
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

      {/* Header with Quit Section Icon */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Daily Protocol</h2>
          <p className="text-gray-600">Stay on track with your goals</p>
        </div>
        <button
          onClick={() => setShowQuitModal(true)}
          className="p-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Food Scanner */}
      <div className="absolute top-6 right-6">
        <button
          onClick={handleFoodScan}
          className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
        >
          <QrCode className="w-6 h-6" />
        </button>
        {scannedFood && (
          <div className="absolute top-16 right-0 bg-white border border-gray-200 rounded-lg p-3 shadow-lg whitespace-nowrap z-10">
            <p className="text-sm font-medium">{scannedFood}</p>
          </div>
        )}
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

      {/* Daily Progress */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Progress</h3>
        <div className="space-y-3">
          {dailyProgress.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  item.completed ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  {item.completed && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
                <span className={`font-medium ${item.completed ? 'text-gray-600' : 'text-gray-900'}`}>
                  {item.task}
                </span>
              </div>
              <span className="text-sm text-gray-500">{item.time}</span>
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
                <X className="w-5 h-5" />
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
