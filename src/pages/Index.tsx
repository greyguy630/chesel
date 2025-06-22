
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
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Header - Minimalist */}
      <header className="bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-8 py-6">
          <button
            onClick={toggleDrawer}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-neutral-600" />
          </button>
          
          <h1 className="text-lg font-light text-neutral-800 tracking-wide">
            Mobile App
          </h1>
          
          <div className="w-9" />
        </div>
      </header>

      {/* Main Content - More Whitespace */}
      <main className="flex-1 px-8 py-16 pb-32">
        <div className="max-w-md mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-light text-neutral-800 tracking-wide">
              Welcome Back
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed">
              Tap the menu icon to open the slide drawer
            </p>
          </div>

          {/* Sample Cards - Minimalist */}
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-light">{i}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-light text-neutral-800">
                      Card Item {i}
                    </h3>
                    <p className="text-sm text-neutral-500 font-light">
                      Sample content for card {i}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation - Minimalist */}
      <nav className="bg-white/90 backdrop-blur-sm border-t border-neutral-100">
        <div className="flex items-center justify-around px-8 py-6">
          {bottomNavItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center space-y-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors duration-200 group"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-neutral-600 group-hover:text-neutral-800 transition-colors duration-200" />
              </div>
              <span className="text-xs font-light text-neutral-600 group-hover:text-neutral-800 transition-colors duration-200">
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
