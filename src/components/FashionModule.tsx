import { useState } from "react";
import { Upload, Search, Sparkles, Palette, Eye, Shirt } from "lucide-react";

export const FashionModule = () => {
  const [mode, setMode] = useState<'select' | 'review' | 'results' | 'scanner' | 'care-results'>('select');

  const styleAnalysis = [
    { category: "Color Harmony", score: 88, feedback: "Excellent color coordination" },
    { category: "Fit Assessment", score: 76, feedback: "Good fit, minor adjustments needed" },
    { category: "Style Consistency", score: 92, feedback: "Cohesive personal style" },
    { category: "Occasion Appropriateness", score: 84, feedback: "Well-suited for the context" },
  ];

  const fabricCareData = {
    fabric: "Cotton Blend (60% Cotton, 40% Polyester)",
    washTemp: "30°C / 86°F",
    dryMethod: "Tumble dry low",
    ironTemp: "Medium heat",
    bleach: "Do not bleach",
    dryClean: "Not required",
    careInstructions: [
      "Turn inside out before washing",
      "Wash with similar colors",
      "Remove promptly from dryer",
      "Iron while slightly damp for best results",
      "Store on hangers to prevent wrinkles"
    ]
  };

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

            <button
              onClick={() => setMode('scanner')}
              className="w-full bg-white border border-gray-200 rounded-2xl p-6 text-left hover:bg-gray-50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M3 12h18M3 18h18"/>
                    <circle cx="6" cy="6" r="1"/>
                    <circle cx="6" cy="12" r="1"/>
                    <circle cx="6" cy="18" r="1"/>
                    <path d="M12 6v12"/>
                    <path d="M18 6v12"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Fabric Care Scanner</h3>
                  <p className="text-sm text-gray-600">Scan clothing tags for care instructions</p>
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

  if (mode === 'scanner') {
    return (
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Fabric Care Scanner</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18"/>
                <circle cx="6" cy="6" r="1"/>
                <circle cx="6" cy="12" r="1"/>
                <circle cx="6" cy="18" r="1"/>
                <path d="M12 6v12"/>
                <path d="M18 6v12"/>
              </svg>
            </div>
            <p className="text-gray-600 mb-4">Scan Clothing Tag</p>
            <p className="text-sm text-gray-500 mb-6">Point your camera at the care label</p>
            <button
              onClick={() => setMode('care-results')}
              className="bg-black text-white px-6 py-3 rounded-xl font-medium"
            >
              Start Scanning
            </button>
          </div>

          <button
            onClick={() => setMode('select')}
            className="w-full text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
          >
            Back to Options
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'care-results') {
    return (
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Fabric Care Guide</h2>
        </div>

        {/* Fabric Information */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Fabric Composition</h3>
          <p className="text-gray-700 font-medium">{fabricCareData.fabric}</p>
        </div>

        {/* Care Instructions Grid */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Care Instructions</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1">Wash Temperature</div>
              <div className="text-lg font-bold text-black">{fabricCareData.washTemp}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1">Drying Method</div>
              <div className="text-lg font-bold text-black">{fabricCareData.dryMethod}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1">Iron Temperature</div>
              <div className="text-lg font-bold text-black">{fabricCareData.ironTemp}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1">Bleach</div>
              <div className="text-lg font-bold text-black">{fabricCareData.bleach}</div>
            </div>
          </div>
        </div>

        {/* Detailed Care Tips */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h3m12 0h3m-9 6c.5 0 1-.5 1-1V7c0-.5-.5-1-1-1s-1 .5-1 1v4c0 .5.5 1 1 1z"/>
              <path d="M21 12H3"/>
              <path d="M12 3v2m0 14v2"/>
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Care Tips</h3>
          </div>
          <ul className="text-gray-600 text-sm space-y-2">
            {fabricCareData.careInstructions.map((instruction, index) => (
              <li key={index}>• {instruction}</li>
            ))}
          </ul>
        </div>

        {/* Dry Cleaning Info */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Care</h3>
          <p className="text-gray-600 text-sm">
            <strong>Dry Cleaning:</strong> {fabricCareData.dryClean}
          </p>
        </div>

        <button
          onClick={() => setMode('select')}
          className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
        >
          Scan Another Item
        </button>
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

  // Results view with enhanced style analysis
  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Style Analysis</h2>
      </div>

      {/* Overall Score */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Overall Style Score</h3>
        <div className="text-4xl font-bold text-black mb-2">82</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-black h-2 rounded-full" style={{ width: '82%' }}></div>
        </div>
      </div>

      {/* Detailed Style Analysis */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Palette className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Style Breakdown</h3>
        </div>
        <div className="space-y-4">
          {styleAnalysis.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">{item.category}</span>
                <span className="text-sm font-bold text-black">{item.score}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-gray-700 to-black h-2 rounded-full" 
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Elements Analysis */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Eye className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Visual Impact</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-600 mb-1">Silhouette</div>
            <div className="text-lg font-bold text-black">A+</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-600 mb-1">Proportions</div>
            <div className="text-lg font-bold text-black">B+</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-600 mb-1">Color Balance</div>
            <div className="text-lg font-bold text-black">A</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-600 mb-1">Accessories</div>
            <div className="text-lg font-bold text-black">B</div>
          </div>
        </div>
      </div>

      {/* Original sections */}
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
  );
};
