
import { useState } from "react";
import { Upload, Search, Sparkles } from "lucide-react";

export const FashionModule = () => {
  const [mode, setMode] = useState<'select' | 'review' | 'results'>('select');

  if (mode === 'select') {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-full">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">Fashion Intelligence</h2>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setMode('review')}
              className="w-full bg-white border border-gray-200 rounded-2xl p-6 text-left hover:bg-gray-50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Outfit Review</h3>
                  <p className="text-sm text-gray-600">Get a critical score on your current outfit</p>
                </div>
              </div>
            </button>

            <button className="w-full bg-white border border-gray-200 rounded-2xl p-6 text-left hover:bg-gray-50 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Outfit Finder</h3>
                  <p className="text-sm text-gray-600">Identify items in a photo</p>
                </div>
              </div>
            </button>

            <button className="w-full bg-white border border-gray-200 rounded-2xl p-6 text-left hover:bg-gray-50 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Personal Stylist</h3>
                  <p className="text-sm text-gray-600">Get an outfit suggestion for an occasion</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'review') {
    return (
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Outfit Review</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Upload Your Outfit</p>
            <button className="bg-black text-white px-6 py-3 rounded-xl font-medium">
              Choose Photo
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Specify Occasion</h3>
            <input
              type="text"
              placeholder="e.g., Board Meeting, Casual Weekend, etc."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          <button
            onClick={() => setMode('results')}
            className="w-full bg-black text-white py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-200"
          >
            Analyze Outfit
          </button>
        </div>
      </div>
    );
  }

  // Results view
  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Outfit Analysis</h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Score</h3>
          <div className="text-4xl font-bold text-black mb-2">82</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-black h-2 rounded-full" style={{ width: '82%' }}></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stylist's Critique</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Excellent color coordination and fit. The navy blazer pairs well with your complexion. Consider a more structured shoe for formal occasions.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Enhancement Protocol</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Swap the leather belt for a woven one to add texture</li>
            <li>• Consider a pocket square for added sophistication</li>
            <li>• Oxford shoes would elevate the overall look</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
