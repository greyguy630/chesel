import { useEffect } from "react";
import { 
  Home, 
  User, 
  Settings, 
  Bell, 
  Heart, 
  Search, 
  Mail, 
  Star,
  X 
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Search, label: "Search", href: "#" },
  { icon: Bell, label: "Notifications", href: "#" },
  { icon: Mail, label: "Messages", href: "#" },
  { icon: Heart, label: "Favorites", href: "#" },
  { icon: Star, label: "Bookmarks", href: "#" },
  { icon: User, label: "Profile", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
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

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen 
            ? 'opacity-100 bg-black bg-opacity-40' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer - Flat Design */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 max-w-[85vw] bg-white border-r border-gray-200 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-medium text-gray-900">
              Menu
            </h2>
            <p className="text-base text-gray-600 mt-1">
              Navigate your app
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Menu Items - Flat Design */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center space-x-4 px-4 py-4 hover:bg-gray-50 transition-colors duration-200 group"
                  onClick={onClose}
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-200">
                    <item.icon className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">
                John Doe
              </p>
              <p className="text-base text-gray-600">
                john@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
