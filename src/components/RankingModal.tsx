import { useState } from "react";
import { X, Trophy, Medal, Award } from "lucide-react";

interface RankingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RankingModal = ({ isOpen, onClose }: RankingModalProps) => {
  const [activeTab, setActiveTab] = useState<'global' | 'friends'>('global');

  // Mock ranking data
  const globalRankings = [
    { rank: 1, name: "Alex Chen", score: 94, avatar: "AC", badge: "🏆" },
    { rank: 2, name: "Sarah Johnson", score: 92, avatar: "SJ", badge: "🥈" },
    { rank: 3, name: "Mike Rodriguez", score: 90, avatar: "MR", badge: "🥉" },
    { rank: 4, name: "Emma Wilson", score: 88, avatar: "EW", badge: "🏅" },
    { rank: 5, name: "David Kim", score: 86, avatar: "DK", badge: "🏅" },
    { rank: 6, name: "Lisa Zhang", score: 84, avatar: "LZ", badge: "🏅" },
    { rank: 7, name: "James Brown", score: 82, avatar: "JB", badge: "🏅" },
    { rank: 8, name: "Anna Taylor", score: 80, avatar: "AT", badge: "🏅" },
    { rank: 9, name: "Chris Lee", score: 78, avatar: "CL", badge: "🏅" },
    { rank: 10, name: "Maya Patel", score: 76, avatar: "MP", badge: "🏅" },
  ];

  const userRank = {
    rank: 247,
    name: "You",
    score: 74,
    avatar: "JD",
    totalUsers: 15420
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Award className="w-5 h-5 text-amber-600" />;
    return <div className="w-5 h-5 flex items-center justify-center text-gray-600 font-bold text-sm">#{rank}</div>;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-500";
    if (rank === 3) return "bg-gradient-to-r from-amber-400 to-amber-600";
    return "bg-gray-100";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-md rounded-t-3xl shadow-2xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Rankings</h2>
            <p className="text-gray-600">Top performers this month</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex p-2 mx-6 mt-4 bg-gray-100 rounded-xl">
          <button
            onClick={() => setActiveTab('global')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'global'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Global
          </button>
          <button
            onClick={() => setActiveTab('friends')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'friends'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Friends
          </button>
        </div>

        {/* Rankings List */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'global' ? (
            <div className="space-y-3">
              {globalRankings.map((user, index) => (
                <div
                  key={user.rank}
                  className={`flex items-center space-x-4 p-4 rounded-2xl ${getRankColor(user.rank)} ${
                    user.rank <= 3 ? 'text-white' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-center w-8 h-8">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                    user.rank <= 3 ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {user.avatar}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`font-semibold ${user.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                      {user.name}
                    </div>
                    <div className={`text-sm ${user.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                      Score: {user.score}
                    </div>
                  </div>
                  
                  <div className="text-2xl">
                    {user.badge}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Friends Yet</h3>
              <p className="text-gray-600 text-center">
                Connect with friends to see how you compare!
              </p>
              <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl font-medium">
                Invite Friends
              </button>
            </div>
          )}
        </div>

        {/* Your Rank */}
        <div className="border-t border-gray-200 p-6">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-8 h-8">
                <div className="w-5 h-5 flex items-center justify-center text-blue-600 font-bold text-sm">
                  #{userRank.rank}
                </div>
              </div>
              
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-sm text-blue-700">
                {userRank.avatar}
              </div>
              
              <div className="flex-1">
                <div className="font-semibold text-blue-900">
                  {userRank.name}
                </div>
                <div className="text-sm text-blue-700">
                  Score: {userRank.score}
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm text-blue-600">
                  {userRank.rank} of {userRank.totalUsers.toLocaleString()}
                </div>
                <div className="text-xs text-blue-500">
                  Top {Math.round((userRank.rank / userRank.totalUsers) * 100)}%
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-600">
              Keep improving to climb the rankings! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};