
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const CampaignTabs = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://share.crowncast.club/416fdec36")
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      });
  };

  return (
    <Tabs defaultValue="tasks" className="w-full">
      <TabsList className="grid grid-cols-4 bg-[#111827] rounded-md">
        <TabsTrigger value="tasks">Tasks</TabsTrigger>
        <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        <TabsTrigger value="games">Games</TabsTrigger>
        <TabsTrigger value="rewards">Rewards</TabsTrigger>
      </TabsList>
      
      <TabsContent value="tasks" className="space-y-6 mt-6">
        <div className="bg-[#111827] rounded-lg p-6 shadow-lg border border-gray-800">
          <h3 className="text-xl font-bold mb-4">Watch YouTube Video</h3>
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Campaign Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#111827] rounded-lg p-6 shadow-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-2">Phone Number Submission</h3>
            <div className="text-green-400 font-semibold text-sm mb-3">1000 Points</div>
            <p className="text-sm text-gray-300 mb-4">
              Submit your phone number to earn 1000 bonus points! This is a one-time opportunity.
            </p>
            
            <div className="flex space-x-2">
              <div className="flex-shrink-0 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md flex items-center">
                +91
              </div>
              <Input 
                type="tel" 
                placeholder="Phone number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-[#0c1524] border-gray-700"
              />
            </div>
            
            <div className="text-xs text-gray-400 mt-2">* One-time submission only</div>
            
            <Button className="w-full mt-4">Submit</Button>
          </div>
          
          <div className="bg-[#111827] rounded-lg p-6 shadow-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-2">Instagram Username</h3>
            <div className="text-green-400 font-semibold text-sm mb-3">5000 Points</div>
            <p className="text-sm text-gray-300 mb-4">
              Submit your Instagram username to help us verify your activity. Points will be awarded upon verification.
            </p>
            
            <div className="flex space-x-2">
              <div className="flex-shrink-0 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md flex items-center">
                @
              </div>
              <Input 
                type="text" 
                placeholder="username" 
                value={instagramUsername}
                onChange={(e) => setInstagramUsername(e.target.value)}
                className="bg-[#0c1524] border-gray-700"
              />
            </div>
            
            <Button className="w-full mt-4">Submit</Button>
          </div>
        </div>
        
        <div className="bg-red-600 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <h3 className="font-bold">Campaign Share Link</h3>
          </div>
          
          <div className="flex">
            <Input 
              readOnly 
              value="https://share.crowncast.club/416fdec36" 
              className="bg-white text-gray-900 border-none" 
            />
            <Button 
              onClick={handleCopyLink}
              className={`shrink-0 ${copySuccess ? "bg-green-600" : "bg-white text-red-600"}`}
            >
              {copySuccess ? "Copied!" : "Copy Link"}
            </Button>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="leaderboard" className="mt-6">
        <div className="bg-[#111827] rounded-lg p-6 shadow-lg border border-gray-800">
          <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
          <p className="text-gray-400">Join the campaign to view the leaderboard.</p>
        </div>
      </TabsContent>
      
      <TabsContent value="games" className="mt-6">
        <div className="bg-[#111827] rounded-lg p-6 shadow-lg border border-gray-800">
          <h3 className="text-xl font-bold mb-4">Games</h3>
          <p className="text-gray-400">Play games to earn additional points! Coming soon.</p>
        </div>
      </TabsContent>
      
      <TabsContent value="rewards" className="mt-6">
        <div className="bg-[#111827] rounded-lg p-6 shadow-lg border border-gray-800">
          <h3 className="text-xl font-bold mb-4">Rewards</h3>
          <div className="border border-gray-700 rounded-lg p-4 bg-[#0c1524]">
            <h4 className="font-bold text-xl text-center mb-2">iPhone 16 Pro Max</h4>
            <p className="text-center text-gray-400">Join the campaign and complete tasks for a chance to win!</p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default CampaignTabs;
