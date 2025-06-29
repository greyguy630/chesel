
import { useState } from "react";
import { X, Search } from "lucide-react";

interface CategorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCategorySelect: (category: string, module: string) => void;
}

export const CategorySidebar = ({ isOpen, onClose, onCategorySelect }: CategorySidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Lips", module: "body", tab: "face", icon: "💋" },
    { name: "Hair", module: "body", tab: "hair", icon: "💇" },
    { name: "Skin", module: "body", tab: "skin", icon: "✨" },
    { name: "Teeth", module: "body", tab: "oral", icon: "🦷" },
    { name: "Eyes", module: "body", tab: "face", icon: "👁️" },
    { name: "Beard", module: "body", tab: "beard", icon: "🧔" },
    { name: "Outfit", module: "fashion", tab: "review", icon: "👔" },
    { name: "Fragrance", module: "fashion", tab: "fragrance", icon: "🌸" },
    { name: "Style", module: "fashion", tab: "review", icon: "✨" },
    { name: "Workout", module: "fitness", tab: "plan", icon: "💪" },
    { name: "Diet", module: "fitness", tab: "results", icon: "🥗" },
    { name: "Presence", module: "presence", tab: "main", icon: "👑" },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (category: any) => {
    onCategorySelect(category.tab, category.module);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-white w-80 max-w-sm shadow-2xl">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="space-y-2">
            {filteredCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <div className="font-medium text-gray-900">{category.name}</div>
                  <div className="text-sm text-gray-500 capitalize">{category.module}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
