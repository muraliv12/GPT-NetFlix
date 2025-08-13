import React, { useState } from "react";
import MovieModal from "./MovieModal"; // Import the modal

const VideoTitle = ({ title, overview, releaseDate, rating}) => {
  const [showModal, setShowModal] = useState(false);
  
  if (!title) return null; // Prevent rendering empty UI

  const handlePlayClick = () => {
    window.open(`https://www.youtube.com/results?search_query=${title}+trailer`, "_blank");
  };

  return (
    <div className="absolute top-1/3 left-1/4 max-w-xl z-10 text-white transform -translate-x-1/4">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-extrabold drop-shadow-md">
        {title}
      </h1>

      {/* Description */}
      <p className="hidden md:block mt-4 text-sm text-gray-300 leading-relaxed drop-shadow">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        {/* Play Button */}
        <button
          onClick={handlePlayClick}
          className="flex items-center gap-2 bg-white text-black px-6 py-2 md:px-6 md:py-2 text-lg md:text-lg md:font-bold font-semibold rounded-lg hover:bg-opacity-60 transition"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3.75v16.5a1 1 0 0 0 1.54.84l13.5-8.25a1 1 0 0 0 0-1.68l-13.5-8.25A1 1 0 0 0 5 3.75z" />
          </svg>
          Play
        </button>

        {/* More Info Button */}
        <button
          onClick={() => setShowModal(true)}
          className="hidden md:flex items-center gap-2 bg-gray-500 bg-opacity-50 text-white px-6 py-2 md:px-4 md:py-3 text-lg md:text-lg font-semibold rounded-lg hover:bg-opacity-80 transition"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25Zm0 17.5a7.75 7.75 0 1 1 7.75-7.75 7.76 7.76 0 0 1-7.75 7.75Zm-.375-10.375a.875.875 0 1 1 1.75 0v6.25a.875.875 0 1 1-1.75 0Zm.375-2.5a1.125 1.125 0 1 1 1.125-1.125A1.125 1.125 0 0 1 12 6.875Z"
              clipRule="evenodd"
            />
          </svg>
          More Info
        </button>
      </div>

      {/* Movie Modal */}
      {showModal && <MovieModal
          title={title}
          overview={overview}
          releaseDate={releaseDate}
          rating={rating}
          onClose={() => setShowModal(false)}
        />}
    </div>
  );
};

export default VideoTitle;
