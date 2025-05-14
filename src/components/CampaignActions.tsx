
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Youtube, Check } from "lucide-react";
import { cn } from "../lib/utils";

interface CampaignActionsProps {
  isSubscribed: boolean;
  hasJoined: boolean;
  onSubscribe: () => void;
  onJoinCampaign: () => void;
}

const CampaignActions = ({ 
  isSubscribed, 
  hasJoined, 
  onSubscribe, 
  onJoinCampaign 
}: CampaignActionsProps) => {
  const [showBenefit, setShowBenefit] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);

  // Show benefit message after a delay when the component loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBenefit(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Add pulse effect when user subscribes
  useEffect(() => {
    if (isSubscribed && !hasJoined) {
      setPulseEffect(true);
      const timer = setInterval(() => {
        setPulseEffect(prev => !prev);
      }, 1500);
      
      return () => clearInterval(timer);
    }
  }, [isSubscribed, hasJoined]);

  return (
    <div className="bg-[#111827] rounded-lg p-6 shadow-lg border border-gray-800">
      <h3 className="text-xl font-bold mb-4">Campaign Actions</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="p-4 bg-[#0c1524] rounded-lg border border-gray-700">
            <h4 className="font-medium mb-3 flex items-center">
              <Youtube className="w-5 h-5 mr-2 text-red-500" />
              Step 1: Subscribe to Creator
            </h4>
            
            <Button 
              className={cn(
                "w-full flex items-center justify-center space-x-2",
                isSubscribed 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "bg-red-600 hover:bg-red-700"
              )}
              onClick={onSubscribe}
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <Youtube className="w-5 h-5" />
                  <span>Subscribe to Channel</span>
                </>
              )}
            </Button>
            
            {showBenefit && !isSubscribed && (
              <p className="text-sm text-gray-400 mt-2">
                Subscribers get early access to future giveaways!
              </p>
            )}
          </div>
        </div>
        
        <div className="space-y-4">
          <div className={cn(
            "p-4 bg-[#0c1524] rounded-lg border transition-all",
            isSubscribed 
              ? "border-yellow-500" 
              : "border-gray-700",
            pulseEffect && "shadow-[0_0_15px_rgba(234,179,8,0.5)]"
          )}>
            <h4 className="font-medium mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 118 0v7m-8 0h8" />
              </svg>
              Step 2: Join Campaign
            </h4>
            
            <Button 
              className={cn(
                "w-full",
                hasJoined 
                  ? "bg-green-600 hover:bg-green-700" 
                  : isSubscribed 
                    ? "bg-yellow-600 hover:bg-yellow-700" 
                    : "bg-gray-700 hover:bg-gray-600"
              )}
              onClick={onJoinCampaign}
              disabled={hasJoined}
            >
              {hasJoined ? "Campaign Joined" : "Join Campaign"}
            </Button>
            
            {isSubscribed && !hasJoined && (
              <p className="text-sm text-yellow-500 mt-2 animate-pulse">
                You're eligible to join this exclusive giveaway!
              </p>
            )}
            
            {!isSubscribed && (
              <p className="text-sm text-gray-400 mt-2">
                Supporting creators improves your chances of winning!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignActions;
