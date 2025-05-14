
const CampaignVideo = () => {
  return (
    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl border border-gray-800">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Campaign Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default CampaignVideo;
