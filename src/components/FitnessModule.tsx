
import { useState } from "react";
import { Upload, Camera, Target, Calendar, TrendingUp, Award } from "lucide-react";

export const FitnessModule = () => {
  const [step, setStep] = useState<'upload' | 'goal' | 'results'>('results');

  const weeklyPlan = [
    { day: "Mon", workout: "Push Day", duration: "45 min", completed: true },
    { day: "Tue", workout: "Pull Day", duration: "40 min", completed: true },
    { day: "Wed", workout: "Legs", duration: "50 min", completed: false },
    { day: "Thu", workout: "Push Day", duration: "45 min", completed: false },
    { day: "Fri", workout: "Pull Day", duration: "40 min", completed: false },
    { day: "Sat", workout: "Cardio", duration: "30 min", completed: false },
    { day: "Sun", workout: "Rest", duration: "0 min", completed: false },
  ];

  const performanceMetrics = [
    { metric: "Strength Gain", value: "+12%", trend: "up" },
    { metric: "Body Fat", value: "-2.3%", trend: "down" },
    { metric: "Muscle Mass", value: "+1.8kg", trend: "up" },
    { metric: "Endurance", value: "+15%", trend: "up" },
  ];

  const handleUpload = () => {
    setStep('goal');
  };

  const handleGoalSelect = () => {
    setStep('results');
  };

  if (step === 'upload') {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-full">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">Fitness Analysis</h2>
            <p className="text-gray-600">
              To begin, upload a clear, full-body physique photograph. Ensure lighting is consistent.
            </p>
          </div>

          <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-gray-400 transition-all duration-300">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Drop your photo here or click to browse</p>
            <button
              onClick={handleUpload}
              className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200"
            >
              Upload Physique
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'goal') {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-full">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">Define Goal Vector</h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Upload a reference photo of your goal physique.</p>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-medium transition-colors">
                  Upload Goal Image
                </button>
              </div>

              <div className="text-center text-gray-500 font-medium">OR</div>

              <div className="space-y-3">
                <p className="text-gray-600 text-center">Select a primary objective:</p>
                <div className="space-y-2">
                  <button
                    onClick={handleGoalSelect}
                    className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200"
                  >
                    Build Muscle
                  </button>
                  <button
                    onClick={handleGoalSelect}
                    className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200"
                  >
                    Lose Fat
                  </button>
                  <button
                    onClick={handleGoalSelect}
                    className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200"
                  >
                    Improve Definition
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results view with enhanced features
  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Fitness Dashboard</h2>
      </div>

      {/* Weekly Plan */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">This Week's Plan</h3>
        </div>
        <div className="space-y-2">
          {weeklyPlan.map((day, index) => (
            <div key={index} className={`flex items-center justify-between p-3 rounded-xl ${
              day.completed ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                  day.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {day.day}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{day.workout}</div>
                  <div className="text-sm text-gray-600">{day.duration}</div>
                </div>
              </div>
              {day.completed && <Award className="w-5 h-5 text-green-500" />}
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1">{metric.metric}</div>
              <div className={`text-xl font-bold ${
                metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'
              }`}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Original Score Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Physique Score</h3>
        <div className="text-4xl font-bold text-black mb-2">58</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-black h-2 rounded-full" style={{ width: '58%' }}></div>
        </div>
      </div>

      {/* Analysis Cards */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Critique</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Your upper body shows strong development, but a slight asymmetry is noted in the lats. Leanness is adequate but could be improved by 2-3% to reveal greater abdominal definition...
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Action Plan: Workout Protocol</h3>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>• Add 2 sets of unilateral lat pulldowns</li>
          <li>• Increase cardio by 15 minutes, 3x per week</li>
          <li>• Focus on mind-muscle connection in chest exercises</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Action Plan: Supplement Stack</h3>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>• Creatine: 5g daily</li>
          <li>• L-Carnitine: 2g pre-workout</li>
          <li>• Whey protein: 25g post-workout</li>
        </ul>
      </div>
    </div>
  );
};
