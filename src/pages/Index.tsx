
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={toggleDrawer}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </button>
          
          <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
            Mobile App
          </h1>
          
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content - with padding bottom for fixed navigation */}
      <main className="flex-1 px-4 py-8 pb-24">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
              Welcome Back
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Tap the menu icon to open the slide drawer
            </p>
          </div>

          {/* Sample Cards */}
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-semibold">{i}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 dark:text-slate-200">
                      Card Item {i}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Sample content for card {i}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation Module */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center justify-around px-4 py-3">
          {bottomNavItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 group animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-colors duration-200">
                <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-200">
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
