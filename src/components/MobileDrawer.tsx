
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
      {/* Backdrop - Softer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen 
            ? 'opacity-100 bg-neutral-900/20 backdrop-blur-sm' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer - Modern Minimalist */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header - Cleaner */}
        <div className="flex items-center justify-between p-8 border-b border-neutral-100">
          <div>
            <h2 className="text-xl font-light text-neutral-800 tracking-wide">
              Menu
            </h2>
            <p className="text-sm text-neutral-500 font-light mt-1">
              Navigate your app
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-4 h-4 text-neutral-600" />
          </button>
        </div>

        {/* Menu Items - Minimalist */}
        <nav className="flex-1 py-8">
          <ul className="space-y-2 px-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center space-x-4 px-4 py-4 rounded-lg hover:bg-neutral-50 transition-colors duration-200 group"
                  onClick={onClose}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-neutral-600 group-hover:text-neutral-800 transition-colors duration-200" />
                  </div>
                  <span className="text-base font-light text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer - Simplified */}
        <div className="p-8 border-t border-neutral-100">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-base font-light text-neutral-800">
                John Doe
              </p>
              <p className="text-sm text-neutral-500 font-light">
                john@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
