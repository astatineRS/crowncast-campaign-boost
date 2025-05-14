
interface CampaignDetailsProps {
  status: string;
  duration: string;
  remainingTime: string;
}

const CampaignDetails = ({ status, duration, remainingTime }: CampaignDetailsProps) => {
  return (
    <div className="bg-[#111827] rounded-lg p-6 shadow-lg border border-gray-800 mb-6">
      <div className="flex items-center mb-2">
        <div className="text-red-500 text-lg">
          <span className="inline-flex items-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Campaign Details
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="text-gray-400 text-sm">Status</div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            <span className="text-green-400 font-medium">{status}</span>
          </div>
        </div>
        
        <div>
          <div className="text-gray-400 text-sm">Duration</div>
          <div className="text-white font-medium">{duration}</div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="text-gray-400 text-sm mb-1">Time Remaining</div>
        <div className="bg-[#0c1524] p-4 rounded-md border border-gray-700">
          <div className="text-2xl font-bold text-center text-white">{remainingTime}</div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
