
import { useState } from "react";
import { Send, BarChart3, MessageCircle, Upload, Scan } from "lucide-react";

export const PresenceModule = () => {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'ai' }>>([]);
  const [inputText, setInputText] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [situationMode, setSituationMode] = useState(false);
  const [showScanner, setShowScanner] = useState(true);

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "I understand your situation. Here's how to handle it with confidence and authority...", 
          sender: 'ai' 
        }]);
      }, 1000);
      setInputText('');
    }
  };

  const handleAnalyze = () => {
    setShowAnalysis(true);
    setShowScanner(false);
  };

  const handleSituationUpload = () => {
    setSituationMode(true);
    setShowScanner(false);
  };

  if (showAnalysis) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Presence Analysis</h2>
          {!showScanner && (
            <button
              onClick={() => {
                setShowAnalysis(false);
                setShowScanner(true);
                setMessages([]);
              }}
              className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Scan className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Presence Score</h3>
          <div className="text-4xl font-bold text-black mb-2">72</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-black h-2 rounded-full" style={{ width: '72%' }}></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Situation Strategy</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Based on your uploaded situation, here's how to dominate: Use confident body language, 
            maintain eye contact, and speak with decisive authority. Your approach should be direct but respectful.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Confidence</span>
              <span className="text-sm font-medium text-gray-900">78%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Authority</span>
              <span className="text-sm font-medium text-gray-900">65%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Persuasion</span>
              <span className="text-sm font-medium text-gray-900">82%</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Winning Tactics</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Enter the room with purpose and strong posture</li>
            <li>• Use strategic pauses to command attention</li>
            <li>• Mirror the other person's energy, then lead</li>
            <li>• End conversations on your terms</li>
          </ul>
        </div>

        <button
          onClick={() => {
            setShowAnalysis(false);
            setSituationMode(false);
            setMessages([]);
          }}
          className="w-full bg-black text-white py-3 rounded-2xl font-medium"
        >
          Analyze New Situation
        </button>
      </div>
    );
  }

  if (situationMode) {
    return (
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Upload Situation</h2>
          <p className="text-gray-600">Describe or upload details about the situation you want to win</p>
        </div>

        <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">Upload image or document</p>
          <button
            onClick={handleAnalyze}
            className="bg-black text-white px-6 py-3 rounded-xl font-medium"
          >
            Upload Situation
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Describe the Situation</h3>
          <textarea
            placeholder="e.g., Job interview, difficult negotiation, social gathering..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent h-32 resize-none"
          />
          <button
            onClick={handleAnalyze}
            className="w-full mt-4 bg-black text-white py-3 rounded-xl font-medium"
          >
            Get Winning Strategy
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Presence Coach</h2>
          {showScanner && (
            <button
              onClick={handleSituationUpload}
              className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Scan className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-12">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Describe a situation you want to dominate</p>
            <button
              onClick={handleSituationUpload}
              className="mt-4 bg-black text-white px-6 py-3 rounded-xl font-medium"
            >
              Upload Situation
            </button>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-200 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Chat Input */}
      <div className="p-6 border-t border-gray-200 space-y-4">
        {messages.length >= 2 && (
          <button
            onClick={handleAnalyze}
            className="w-full bg-black text-white py-3 rounded-2xl font-medium flex items-center justify-center space-x-2"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Get Winning Strategy</span>
          </button>
        )}
        
        <div className="flex space-x-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Describe your situation..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="bg-black text-white p-3 rounded-2xl hover:bg-gray-800 transition-all duration-200 disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
