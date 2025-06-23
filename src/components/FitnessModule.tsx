
import { useState } from "react";
import { Upload, Camera, Target } from "lucide-react";

export const FitnessModule = () => {
  const [step, setStep] = useState<'upload' | 'goal' | 'results'>('upload');

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

  // Results view
  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Physique Analysis</h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Score Card */}
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
    </div>
  );
};
