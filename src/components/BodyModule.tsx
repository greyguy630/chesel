
import { useState } from "react";
import { Upload, Camera, Scan, Eye, Droplets, Scissors, User } from "lucide-react";

interface BodyModuleProps {
  selectedGender: string | null;
}

export const BodyModule = ({ selectedGender }: BodyModuleProps) => {
  const [activeTab, setActiveTab] = useState('face');
  const [uploadState, setUploadState] = useState<'upload' | 'scanning' | 'results'>('results');

  const tabs = [
    { id: 'face', label: 'Face', icon: Eye },
    { id: 'skin', label: 'Skin', icon: Droplets },
    { id: 'hair', label: 'Hair', icon: Scissors },
    ...(selectedGender === 'male' ? [{ id: 'beard', label: 'Beard', icon: User }] : []),
  ];

  const scores = {
    face: { score: 76, details: [
      { metric: "Facial Symmetry", score: 82 },
      { metric: "Golden Ratio", score: 74 },
      { metric: "Jawline Definition", score: 68 },
      { metric: "Eye Area", score: 85 },
    ]},
    skin: { score: 68, details: [
      { metric: "Texture Quality", score: 72 },
      { metric: "Tone Evenness", score: 65 },
      { metric: "Hydration Level", score: 70 },
      { metric: "Clarity", score: 66 },
    ]},
    hair: { score: 84, details: [
      { metric: "Density", score: 88 },
      { metric: "Health", score: 82 },
      { metric: "Style Suitability", score: 86 },
      { metric: "Color Match", score: 80 },
    ]},
    beard: { score: 79, details: [
      { metric: "Coverage", score: 85 },
      { metric: "Shape Definition", score: 76 },
      { metric: "Grooming", score: 82 },
      { metric: "Color Uniformity", score: 74 },
    ]},
  };

  const handleUpload = () => {
    setUploadState('scanning');
    setTimeout(() => setUploadState('results'), 3000);
  };

  const renderScoreCard = (tabId: string) => {
    const currentScore = scores[tabId as keyof typeof scores];
    return (
      <div className="space-y-4">
        {/* Main Score */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{tabs.find(tab => tab.id === tabId)?.label} Score</h3>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#000000"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="351.86"
                  strokeDashoffset={351.86 - (351.86 * currentScore.score) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{currentScore.score}</div>
                  <div className="text-xs text-gray-500">/ 100</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {currentScore.score >= 80 ? 'Excellent' : 
               currentScore.score >= 70 ? 'Good' : 
               currentScore.score >= 60 ? 'Average' : 'Needs Improvement'}
            </p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Detailed Analysis</h3>
          <div className="space-y-3">
            {currentScore.details.map((detail, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{detail.metric}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-black h-2 rounded-full" 
                      style={{ width: `${detail.score}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{detail.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Enhancement Protocol</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            {tabId === 'face' && (
              <>
                <li>• Consider jaw exercises to improve definition</li>
                <li>• Skincare routine for improved texture</li>
                <li>• Eyebrow shaping for better symmetry</li>
                <li>• Posture adjustment for better angles</li>
              </>
            )}
            {tabId === 'skin' && (
              <>
                <li>• Daily moisturizing routine with hyaluronic acid</li>
                <li>• Weekly exfoliation for improved texture</li>
                <li>• SPF protection for UV damage prevention</li>
                <li>• Vitamin C serum for tone evenness</li>
              </>
            )}
            {tabId === 'hair' && (
              <>
                <li>• Scalp massage to improve circulation</li>
                <li>• Protein treatment for strength</li>
                <li>• Regular trimming schedule</li>
                <li>• Style consultation for face shape</li>
              </>
            )}
            {tabId === 'beard' && (
              <>
                <li>• Daily beard oil application</li>
                <li>• Weekly deep conditioning treatment</li>
                <li>• Professional shaping every 3-4 weeks</li>
                <li>• Consistent trimming routine</li>
              </>
            )}
          </ul>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    if (uploadState === 'upload') {
      return (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {tabs.find(tab => tab.id === activeTab)?.label} Analysis
            </h3>
            <p className="text-gray-600">Upload a clear photo for comprehensive analysis</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-gray-400 transition-all duration-300">
            <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Scan className="w-10 h-10 text-white" />
            </div>
            <p className="text-gray-600 mb-6">Drop your photo here or click to browse</p>
            <div className="space-y-3">
              <button
                onClick={handleUpload}
                className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200"
              >
                <Upload className="w-4 h-4 inline mr-2" />
                Upload Photo
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-medium transition-colors">
                <Camera className="w-4 h-4 inline mr-2" />
                Use Camera
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (uploadState === 'scanning') {
      return (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">
              Analyzing {tabs.find(tab => tab.id === activeTab)?.label}
            </h3>
            <p className="text-gray-600">Processing features and characteristics...</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-12 text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-black rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Scan className="w-8 h-8 text-black" />
              </div>
            </div>
            <p className="text-gray-600">Analyzing multiple parameters...</p>
          </div>
        </div>
      );
    }

    // Results view with scores for each tab
    return renderScoreCard(activeTab);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Body Analysis</h2>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-2 shadow-lg">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-black text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100/50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {renderTabContent()}
      </div>
    </div>
  );
};
