
import { Button } from "../components/ui/button";

const CreatorSpotlight = () => {
  return (
    <div className="bg-[#111827] rounded-lg p-6 shadow-lg border border-gray-800 h-full">
      <div className="flex items-center mb-4">
        <div className="text-red-500 text-lg">
          <span className="inline-flex items-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          Creator Spotlight
        </div>
      </div>
      
      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-600 to-pink-500 mb-3 overflow-hidden flex items-center justify-center">
          <img 
            src="https://i.pravatar.cc/200" 
            alt="Creator" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold text-xl">Prajyan Borah</h3>
        <div className="text-gray-400">1930 Subscribers</div>
      </div>
      
      <p className="text-gray-300 text-sm mb-6">
        Welcome to my channel everyone. I'm a 21-year-old CSE student passionate about powerlifting and tech.
      </p>
      
      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
        View Channel
      </Button>
    </div>
  );
};

export default CreatorSpotlight;
