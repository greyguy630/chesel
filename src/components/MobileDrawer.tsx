
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
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 backdrop-blur-sm bg-black/40' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">
              Menu
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Navigate your app
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 group animate-fade-in`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={onClose}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-colors duration-200">
                    <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-200">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-medium text-slate-800 dark:text-slate-200">
                John Doe
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                john@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
