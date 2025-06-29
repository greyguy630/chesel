
import { Calendar, Clock, CheckCircle } from "lucide-react";

export const DailyTasks = () => {
  const todaysTasks = [
    { 
      task: "Apply Vitamin C Serum", 
      module: "Skin Care", 
      time: "Morning", 
      completed: true,
      icon: "🍊"
    },
    { 
      task: "Push Day Workout", 
      module: "Fitness", 
      time: "4:00 PM", 
      completed: false,
      icon: "💪"
    },
    { 
      task: "Evening Moisturizer", 
      module: "Skin Care", 
      time: "10:00 PM", 
      completed: false,
      icon: "🌙"
    },
    { 
      task: "Beard Oil Application", 
      module: "Grooming", 
      time: "Evening", 
      completed: false,
      icon: "🧔"
    },
    { 
      task: "Posture Check", 
      module: "Presence", 
      time: "Throughout day", 
      completed: false,
      icon: "👑"
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Calendar className="w-5 h-5 text-gray-700" />
        <h3 className="text-lg font-semibold text-gray-900">What to do today</h3>
      </div>
      
      <div className="space-y-3">
        {todaysTasks.map((task, index) => (
          <div key={index} className={`flex items-center justify-between p-3 rounded-xl border ${
            task.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center space-x-3">
              <span className="text-lg">{task.icon}</span>
              <div>
                <div className={`font-medium ${task.completed ? 'text-green-800' : 'text-gray-900'}`}>
                  {task.task}
                </div>
                <div className="text-sm text-gray-600">{task.module} • {task.time}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {task.completed ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <Clock className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <div className="text-sm text-gray-600">
          {todaysTasks.filter(t => t.completed).length} of {todaysTasks.length} completed
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className="bg-black h-2 rounded-full transition-all duration-300" 
            style={{ width: `${(todaysTasks.filter(t => t.completed).length / todaysTasks.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
