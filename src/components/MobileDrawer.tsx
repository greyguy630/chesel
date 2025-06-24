
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
  X,
  Folder,
  Calendar,
  Clock
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
      {/* Backdrop - Flat */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen 
            ? 'opacity-100 bg-black bg-opacity-50' 
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
        {/* Header - Clean and Flat */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-normal text-black">
              Menu
            </h2>
            <p className="text-base text-gray-600 mt-1">
              Navigate your app
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Project Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="bg-black rounded-2xl p-4 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Folder className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Chesel Project</h3>
                <p className="text-white/70 text-sm">Personal Development</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">Progress</span>
                <span className="text-white font-medium">68%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/20">
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Last updated</span>
              </div>
              <div className="flex items-center space-x-1 text-white/80 text-sm">
                <Clock className="w-4 h-4" />
                <span>Today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items - Flat List */}
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

        {/* Footer - Simple Profile Section */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-normal text-black">
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
