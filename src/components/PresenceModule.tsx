
import { useState } from "react";
import { Send, BarChart3, MessageCircle } from "lucide-react";

export const PresenceModule = () => {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'ai' }>>([]);
  const [inputText, setInputText] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I understand your concern. Let me help you develop a more commanding presence.", sender: 'ai' }]);
      }, 1000);
      setInputText('');
    }
  };

  const handleAnalyze = () => {
    setShowAnalysis(true);
  };

  if (showAnalysis) {
    return (
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Presence Analysis</h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Presence Score</h3>
          <div className="text-4xl font-bold text-purple-600 mb-2">72</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full" style={{ width: '72%' }}></div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Summary</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Your communication style shows confidence but could benefit from more assertive language patterns. 
            Consider using more definitive statements and reducing hedging language.
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
              <span className="text-sm text-gray-600">Clarity</span>
              <span className="text-sm font-medium text-gray-900">82%</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowAnalysis(false)}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-2xl font-medium"
        >
          Back to Chat
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-gray-200/50">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">Presence Coach</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-12">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Start a conversation to analyze your presence</p>
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
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Chat Input */}
      <div className="p-6 border-t border-gray-200/50 space-y-4">
        {messages.length >= 2 && (
          <button
            onClick={handleAnalyze}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-2xl font-medium flex items-center justify-center space-x-2"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Analyze My Presence</span>
          </button>
        )}
        
        <div className="flex space-x-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask your question..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-2xl hover:shadow-lg transition-all duration-200 disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
