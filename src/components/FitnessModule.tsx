
import { useState } from "react";
import { Upload, Camera, Target, Calendar, TrendingUp, Award, DollarSign, Utensils, Pill } from "lucide-react";

export const FitnessModule = () => {
  const [step, setStep] = useState<'upload-current' | 'upload-goal' | 'results'>('upload-current');
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null);
  const [goalPhoto, setGoalPhoto] = useState<string | null>(null);

  const weeklyPlan = [
    { day: "Mon", workout: "Push Day (Chest, Shoulders, Triceps)", duration: "45 min", exercises: ["Bench Press 4x8", "Shoulder Press 3x10", "Tricep Dips 3x12"], completed: true },
    { day: "Tue", workout: "Pull Day (Back, Biceps)", duration: "40 min", exercises: ["Pull-ups 4x6", "Barbell Rows 3x10", "Bicep Curls 3x12"], completed: true },
    { day: "Wed", workout: "Legs & Core", duration: "50 min", exercises: ["Squats 4x10", "Deadlifts 3x8", "Plank 3x60s"], completed: false },
    { day: "Thu", workout: "Push Day", duration: "45 min", exercises: ["Incline Press 4x8", "Lateral Raises 3x12", "Close-grip Press 3x10"], completed: false },
    { day: "Fri", workout: "Pull Day", duration: "40 min", exercises: ["Lat Pulldowns 4x10", "Cable Rows 3x12", "Hammer Curls 3x10"], completed: false },
    { day: "Sat", workout: "Cardio & Abs", duration: "30 min", exercises: ["HIIT Cardio 20min", "Russian Twists 3x20", "Mountain Climbers 3x30"], completed: false },
    { day: "Sun", workout: "Active Recovery", duration: "20 min", exercises: ["Light Walk", "Stretching", "Foam Rolling"], completed: false },
  ];

  const supplementStack = [
    { name: "Whey Protein", dosage: "25g post-workout", cost: "$0.80/day", benefit: "Muscle recovery & growth" },
    { name: "Creatine Monohydrate", dosage: "5g daily", cost: "$0.15/day", benefit: "Strength & power increase" },
    { name: "L-Carnitine", dosage: "2g pre-workout", cost: "$0.50/day", benefit: "Fat burning support" },
    { name: "Multivitamin", dosage: "1 tablet daily", cost: "$0.30/day", benefit: "Overall health support" },
  ];

  const dietPlan = [
    {
      meal: "Breakfast",
      time: "7:00 AM",
      foods: ["3 whole eggs + 2 egg whites", "1 cup oatmeal", "1 banana", "1 tbsp almond butter"],
      calories: 520,
      protein: "28g",
      cost: "$2.50"
    },
    {
      meal: "Mid-Morning Snack",
      time: "10:00 AM",
      foods: ["Greek yogurt (200g)", "1 tbsp honey", "Mixed berries"],
      calories: 280,
      protein: "20g",
      cost: "$1.80"
    },
    {
      meal: "Lunch",
      time: "1:00 PM",
      foods: ["150g chicken breast", "1 cup brown rice", "Mixed vegetables", "Olive oil (1 tbsp)"],
      calories: 650,
      protein: "45g",
      cost: "$3.20"
    },
    {
      meal: "Pre-Workout",
      time: "4:00 PM",
      foods: ["1 apple", "1 tbsp peanut butter"],
      calories: 190,
      protein: "4g",
      cost: "$0.80"
    },
    {
      meal: "Post-Workout",
      time: "6:00 PM",
      foods: ["Protein shake", "1 banana"],
      calories: 250,
      protein: "25g",
      cost: "$1.20"
    },
    {
      meal: "Dinner",
      time: "8:00 PM",
      foods: ["150g salmon", "Sweet potato (200g)", "Green salad", "Avocado (1/2)"],
      calories: 580,
      protein: "35g",
      cost: "$4.50"
    }
  ];

  const totalDailyCosts = {
    food: dietPlan.reduce((sum, meal) => sum + parseFloat(meal.cost.replace('$', '')), 0),
    supplements: supplementStack.reduce((sum, supp) => sum + parseFloat(supp.cost.replace('$', '').split('/')[0]), 0),
  };

  const handleCurrentPhotoUpload = () => {
    // Simulate photo upload
    setCurrentPhoto("current-photo-uploaded");
    setStep('upload-goal');
  };

  const handleGoalPhotoUpload = () => {
    // Simulate photo upload
    setGoalPhoto("goal-photo-uploaded");
    setStep('results');
  };

  if (step === 'upload-current') {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-full">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">Upload Current Photo</h2>
            <p className="text-gray-600">
              Take a clear, full-body photo in good lighting. This will help us analyze your current physique.
            </p>
          </div>

          <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-gray-400 transition-all duration-300">
            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Take or upload your current photo</p>
            <button
              onClick={handleCurrentPhotoUpload}
              className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200"
            >
              Upload Current Photo
            </button>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>📸 Tips: Stand straight, good lighting, minimal clothing for accurate analysis</p>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'upload-goal') {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-full">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">Upload Goal Photo</h2>
            <p className="text-gray-600">
              Upload a reference photo of your desired physique or body goal.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-700 text-sm font-medium">Current photo uploaded ✓</span>
            </div>
          </div>

          <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-gray-400 transition-all duration-300">
            <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Upload your goal physique photo</p>
            <button
              onClick={handleGoalPhotoUpload}
              className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200"
            >
              Upload Goal Photo
            </button>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>🎯 This helps us create a personalized transformation plan</p>
          </div>
        </div>
      </div>
    );
  }

  // Results view with comprehensive plan
  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Your Transformation Plan</h2>
        <p className="text-gray-600">Based on your current and goal photos</p>
      </div>

      {/* Photos Analysis */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Photo Analysis</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
              <Camera className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-sm font-medium">Current Photo</p>
          </div>
          <div className="text-center">
            <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
              <Target className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-sm font-medium">Goal Photo</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-blue-800">
            <strong>Analysis:</strong> To achieve your goal, focus on building lean muscle while reducing body fat by approximately 8-12%. Estimated timeline: 12-16 weeks with consistent effort.
          </p>
        </div>
      </div>

      {/* Weekly Workout Plan */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Dumbbell className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Customized Workout Plan</h3>
        </div>
        <div className="space-y-3">
          {weeklyPlan.map((day, index) => (
            <div key={index} className={`p-4 rounded-xl border ${
              day.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
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
              <div className="ml-11">
                <ul className="text-sm text-gray-600 space-y-1">
                  {day.exercises.map((exercise, idx) => (
                    <li key={idx}>• {exercise}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supplement Stack */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Pill className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Supplement Stack</h3>
        </div>
        <div className="space-y-3">
          {supplementStack.map((supplement, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex-1">
                <div className="font-medium text-gray-900">{supplement.name}</div>
                <div className="text-sm text-gray-600">{supplement.dosage}</div>
                <div className="text-xs text-blue-600">{supplement.benefit}</div>
              </div>
              <div className="text-right">
                <div className="font-medium text-green-600">{supplement.cost}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-green-50 rounded-xl">
          <div className="flex items-center justify-between">
            <span className="font-medium text-green-800">Daily Supplement Cost:</span>
            <span className="font-bold text-green-600">${totalDailyCosts.supplements.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Customized Diet Plan */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Utensils className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Customized Diet Plan</h3>
        </div>
        <div className="space-y-4">
          {dietPlan.map((meal, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{meal.meal}</h4>
                  <p className="text-sm text-gray-600">{meal.time}</p>
                </div>
                <div className="text-right text-sm">
                  <div className="font-medium text-gray-900">{meal.calories} cal</div>
                  <div className="text-gray-600">{meal.protein} protein</div>
                  <div className="text-green-600 font-medium">{meal.cost}</div>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                {meal.foods.map((food, idx) => (
                  <li key={idx}>• {food}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Summary */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <DollarSign className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Budget Summary</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-700">Daily Food Cost</span>
            <span className="font-medium text-gray-900">${totalDailyCosts.food.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-700">Daily Supplements</span>
            <span className="font-medium text-gray-900">${totalDailyCosts.supplements.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border border-blue-200">
            <span className="font-medium text-blue-800">Total Daily Cost</span>
            <span className="font-bold text-blue-600">${(totalDailyCosts.food + totalDailyCosts.supplements).toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200">
            <span className="font-medium text-green-800">Monthly Investment</span>
            <span className="font-bold text-green-600">${((totalDailyCosts.food + totalDailyCosts.supplements) * 30).toFixed(2)}</span>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>💡 This budget-friendly plan provides optimal nutrition for your transformation goals</p>
        </div>
      </div>

      {/* Progress Tracking */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Expected Progress</h3>
        <div className="text-4xl font-bold text-black mb-2">12-16 weeks</div>
        <p className="text-gray-600 mb-4">Estimated transformation timeline</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-black h-2 rounded-full" style={{ width: '15%' }}></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Week 2 of 16 - Stay consistent!</p>
      </div>
    </div>
  );
};
