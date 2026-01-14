import React, { useRef, useState } from "react";

const PlayIcon = () => (
  <div className="bg-white rounded-full z-10 p-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-black opacity-80 hover:opacity-100 transition-opacity"
    >
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const SimpleVideo = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused || video.ended) {
        video.currentTime = 0; //0s
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop={false}
        muted={false}
        playsInline
        onEnded={handleVideoEnded}
      />
      {/* Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayIcon />
        </div>
      )}
    </div>
  );
};

export default SimpleVideo;
