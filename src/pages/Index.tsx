
import { useState } from "react";
import { MobileDrawer } from "@/components/MobileDrawer";
import { Menu, Dumbbell, Scan, Users, Home as HomeIcon } from "lucide-react";

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const bottomNavItems = [
    { icon: Dumbbell, label: "Fitness", href: "#" },
    { icon: Scan, label: "Facial", href: "#" },
    { icon: Users, label: "Presence", href: "#" },
    { icon: HomeIcon, label: "My Space", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={toggleDrawer}
            className="p-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          
          <h1 className="text-xl font-medium text-gray-900">
            Mobile App
          </h1>
          
          <div className="w-12" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 pb-28">
        <div className="max-w-sm mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-medium text-gray-900">
              Welcome Back
            </h2>
            <p className="text-lg text-gray-600">
              Tap the menu icon to open the slide drawer
            </p>
          </div>

          {/* Sample Cards - Flat Design */}
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-6 border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{i}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      Card Item {i}
                    </h3>
                    <p className="text-base text-gray-600">
                      Sample content for card {i}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation - Flat Design */}
      <nav className="bg-white border-t border-gray-200">
        <div className="flex items-center justify-around px-6 py-4">
          {bottomNavItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center space-y-2 p-3 hover:bg-gray-50 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-200">
                <item.icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </div>
  );
};

export default Index;
