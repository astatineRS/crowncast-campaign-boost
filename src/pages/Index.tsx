
import { useState, useEffect } from "react";
import CampaignHeader from "../components/CampaignHeader";
import CampaignVideo from "../components/CampaignVideo";
import CampaignDetails from "../components/CampaignDetails";
import CreatorSpotlight from "../components/CreatorSpotlight";
import CampaignActions from "../components/CampaignActions";
import CampaignTabs from "../components/CampaignTabs";
import { useToast } from "../components/ui/use-toast";
import { Toaster } from "../components/ui/toaster";

const Index = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [remainingTime, setRemainingTime] = useState("23:59:59");
  const { toast } = useToast();

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      // Just for demo purposes - would be replaced with actual time calculation
      const time = remainingTime.split(":");
      let hours = parseInt(time[0]);
      let minutes = parseInt(time[1]);
      let seconds = parseInt(time[2]);
      
      seconds -= 1;
      if (seconds < 0) {
        seconds = 59;
        minutes -= 1;
      }
      if (minutes < 0) {
        minutes = 59;
        hours -= 1;
      }
      if (hours < 0) {
        hours = 23;
      }
      
      setRemainingTime(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    toast({
      title: "Thanks for subscribing!",
      description: "You're one step closer to joining this campaign",
    });
  };

  const handleJoinCampaign = () => {
    if (!hasJoined) {
      setHasJoined(true);
      toast({
        title: "Campaign Joined Successfully!",
        description: "You are now part of this exclusive giveaway",
        variant: "default",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <CampaignHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-red-500 mb-6">iPhone 16 Pro Max Giveaway</h1>
        
        <CampaignVideo />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CampaignDetails 
              status="Active" 
              duration="24:00:00" 
              remainingTime={remainingTime}
            />
            <CampaignActions 
              isSubscribed={isSubscribed} 
              hasJoined={hasJoined}
              onSubscribe={handleSubscribe}
              onJoinCampaign={handleJoinCampaign}
            />
          </div>
          
          <div>
            <CreatorSpotlight />
          </div>
        </div>
        
        <CampaignTabs />
      </div>
    </div>
  );
};

export default Index;
