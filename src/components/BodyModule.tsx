import { useState } from "react";
import { Upload, Camera, Scan, Eye, Droplets, Scissors, User } from "lucide-react";

interface BodyModuleProps {
  selectedGender: string | null;
}

export const BodyModule = ({ selectedGender }: BodyModuleProps) => {
  const [activeTab, setActiveTab] = useState('face');
  const [uploadState, setUploadState] = useState<'upload' | 'scanning' | 'results'>('upload');

  const tabs = [
    { id: 'face', label: 'Face', icon: Eye },
    { id: 'skin', label: 'Skin', icon: Droplets },
    { id: 'hair', label: 'Hair', icon: Scissors },
    ...(selectedGender === 'male' ? [{ id: 'beard', label: 'Beard', icon: User }] : []),
  ];

  const handleUpload = () => {
    setUploadState('scanning');
    setTimeout(() => setUploadState('results'), 3000);
  };

  const renderTabContent = () => {
    if (activeTab === 'face') {
      if (uploadState === 'upload') {
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">Facial Analysis</h3>
              <p className="text-gray-600">Upload a clear, front-facing photo for comprehensive facial analysis</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-indigo-400 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Scan className="w-10 h-10 text-white" />
              </div>
              <p className="text-gray-600 mb-6">Drop your photo here or click to browse</p>
              <div className="space-y-3">
                <button
                  onClick={handleUpload}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200"
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
              <h3 className="text-xl font-semibold text-gray-900">Analyzing Face</h3>
              <p className="text-gray-600">Processing facial features and proportions...</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-12 text-center">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 border-4 border-indigo-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Scan className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
              <p className="text-gray-600">Analyzing 47 facial parameters...</p>
            </div>
          </div>
        );
      }

      // Results view
      return (
        <div className="space-y-4">
          {/* Score Meter */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
            {/* Background Graphics */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-200/20 to-transparent rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Face Score</h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                {/* Circular Progress */}
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
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="351.86"
                    strokeDashoffset="126.67"
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">76</div>
                    <div className="text-xs text-gray-500">/ 100</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Above Average</p>
            </div>
          </div>

          {/* Analysis Cards */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Facial Analysis</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Facial Symmetry</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">82</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Golden Ratio</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{ width: '74%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">74</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Jawline Definition</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">68</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Enhancement Protocol</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Consider jaw exercises to improve definition</li>
              <li>• Skincare routine for improved texture</li>
              <li>• Eyebrow shaping for better symmetry</li>
              <li>• Posture adjustment for better angles</li>
            </ul>
          </div>
        </div>
      );
    }

    // Other tabs content (simplified for now)
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {tabs.find(tab => tab.id === activeTab)?.label} Analysis
        </h3>
        <p className="text-gray-600">Coming soon...</p>
      </div>
    );
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
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
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
