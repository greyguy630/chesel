
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
      {/* Header - Flat Design */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={toggleDrawer}
            className="p-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          
          <h1 className="text-xl font-normal text-black">
            Mobile App
          </h1>
          
          <div className="w-11" />
        </div>
      </header>

      {/* Main Content - Centered and Flat */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-normal text-black">
              Welcome Back
            </h2>
            <p className="text-lg text-gray-600">
              Tap the menu icon to open the slide drawer
            </p>
          </div>

          {/* Sample Cards - Flat Design */}
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-6 text-left hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-normal">{i}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-normal text-black">
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

          {/* Primary Action Button - Flat Design 2.0 */}
          <button className="w-full bg-black text-white py-4 px-6 rounded-lg text-lg font-normal shadow-sm hover:shadow-md transition-shadow">
            Continue
          </button>
        </div>
      </main>

      {/* Bottom Navigation - Flat Design */}
      <nav className="bg-white border-t border-gray-200">
        <div className="flex items-center justify-around px-4 py-3">
          {bottomNavItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center space-y-2 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-gray-700" />
              </div>
              <span className="text-sm font-normal text-gray-700">
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
