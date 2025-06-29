
import { useEffect, useState } from "react";
import { 
  User, 
  Settings, 
  Bell, 
  Heart, 
  Mail, 
  Star,
  X,
  LogOut,
  Grid3X3,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCategorySelect?: (tab: string, module: string) => void;
}

const menuItems = [
  { icon: Bell, label: "Notifications", href: "#" },
  { icon: Mail, label: "Messages", href: "#" },
  { icon: Heart, label: "Favorites", href: "#" },
  { icon: Star, label: "Bookmarks", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
  { icon: LogOut, label: "Logout", href: "#" },
];

const categories = [
  { id: 'lips', label: 'Lips', module: 'body', tab: 'face' },
  { id: 'hair', label: 'Hair', module: 'body', tab: 'hair' },
  { id: 'skin', label: 'Skin', module: 'body', tab: 'face' },
  { id: 'oral', label: 'Oral', module: 'body', tab: 'oral' },
  { id: 'beard', label: 'Beard', module: 'body', tab: 'beard' },
  { id: 'outfit', label: 'Outfit', module: 'fashion', tab: 'outfit' },
  { id: 'style', label: 'Style', module: 'fashion', tab: 'style' },
  { id: 'fragrance', label: 'Fragrance', module: 'fashion', tab: 'fragrance' },
  { id: 'fitness', label: 'Fitness', module: 'fitness', tab: 'workout' },
  { id: 'presence', label: 'Presence', module: 'presence', tab: 'analysis' },
];

export const MobileDrawer = ({ isOpen, onClose, onCategorySelect }: MobileDrawerProps) => {
  const [showCategories, setShowCategories] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Reset categories view when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setShowCategories(false);
    }
  }, [isOpen]);

  const handleCategoryClick = (category: typeof categories[0]) => {
    if (onCategorySelect) {
      onCategorySelect(category.tab, category.module);
    }
    onClose();
  };

  const handleCategoriesClick = () => {
    setShowCategories(true);
  };

  const handleBackFromCategories = () => {
    setShowCategories(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen 
            ? 'opacity-100 bg-black bg-opacity-50' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 max-w-[85vw] bg-white border-r border-gray-200 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            {showCategories && (
              <button
                onClick={handleBackFromCategories}
                className="p-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
            )}
            <div>
              <h2 className="text-2xl font-normal text-black">
                {showCategories ? 'Categories' : 'Menu'}
              </h2>
              <p className="text-base text-gray-600 mt-1">
                {showCategories ? 'Select a category' : 'Navigate your app'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {!showCategories ? (
          <>
            {/* Profile Section */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black">John Doe</h3>
                  <p className="text-gray-600 text-sm">john@example.com</p>
                  <div className="flex items-center mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-500">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories Button */}
            <div className="px-6 py-4 border-b border-gray-200">
              <button
                onClick={handleCategoriesClick}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Grid3X3 className="w-5 h-5 text-gray-700" />
                  <span className="text-lg font-medium text-black">Categories</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 py-6">
              <ul className="space-y-1 px-6">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center space-x-4 px-4 py-4 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={onClose}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <span className="text-lg font-normal text-black">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        ) : (
          /* Categories View */
          <div className="flex-1 py-6">
            <div className="px-6">
              <div className="grid grid-cols-1 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-700">{category.label}</span>
                    <span className="text-sm text-gray-500 capitalize">({category.module})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
