
import { useState } from "react";
import { MobileDrawer } from "@/components/MobileDrawer";
import { GenderSelection } from "@/components/GenderSelection";
import { DailyProtocol } from "@/components/DailyProtocol";
import { FitnessModule } from "@/components/FitnessModule";
import { FashionModule } from "@/components/FashionModule";
import { BodyModule } from "@/components/BodyModule";
import { PresenceModule } from "@/components/PresenceModule";
import { Menu, Home as HomeIcon, Dumbbell, Shirt, Scan, Brain } from "lucide-react";

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [activeModule, setActiveModule] = useState("home");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const bottomNavItems = [
    { id: "home", icon: HomeIcon, label: "Home" },
    { id: "fitness", icon: Dumbbell, label: "Fitness" },
    { id: "fashion", icon: Shirt, label: "Fashion" },
    { id: "body", icon: Scan, label: "Body" },
    { id: "presence", icon: Brain, label: "Presence" },
  ];

  const renderActiveModule = () => {
    switch (activeModule) {
      case "home":
        return <DailyProtocol />;
      case "fitness":
        return <FitnessModule />;
      case "fashion":
        return <FashionModule />;
      case "body":
        return <BodyModule selectedGender={selectedGender} />;
      case "presence":
        return <PresenceModule />;
      default:
        return <DailyProtocol />;
    }
  };

  // Show gender selection if no gender is selected
  if (!selectedGender) {
    return <GenderSelection onGenderSelect={setSelectedGender} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 relative z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={toggleDrawer}
            className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          
          <h1 className="text-xl font-medium text-gray-900 tracking-tight">
            Chesel
          </h1>
          
          <div className="w-11" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {renderActiveModule()}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-t border-gray-200/50 relative z-10">
        <div className="flex items-center justify-around px-2 py-2">
          {bottomNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`flex flex-col items-center space-y-1 py-3 px-4 rounded-xl transition-all duration-200 ${
                activeModule === item.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-gray-600 hover:bg-gray-100/50'
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">
                {item.label}
              </span>
            </button>
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
