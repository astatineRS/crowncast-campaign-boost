
import { useState } from "react";
import { Button } from "../components/ui/button";

const CampaignHeader = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <header className="bg-gradient-to-r from-red-900 to-red-600 text-white py-3 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">CrownCast</div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-red-200 transition">Dashboard</a>
          <a href="#" className="hover:text-red-200 transition">How it works</a>
          <a href="#" className="hover:text-red-200 transition">Contact us</a>
          <a href="#" className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-400 transition">
            Marketplace <span className="bg-white text-red-500 text-xs px-1 rounded">New</span>
          </a>
        </nav>
        
        <div className="flex items-center space-x-2">
          {loggedIn ? (
            <Button variant="ghost" className="text-white hover:text-red-200">
              User Account
            </Button>
          ) : (
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-red-700">
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default CampaignHeader;
