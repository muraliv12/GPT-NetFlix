import React from "react";

const MovieModal = ({ title, overview, releaseDate, rating, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50">
      <div className="relative w-[90%] md:w-[600px] p-6 bg-gray-900 bg-opacity-90 rounded-2xl shadow-2xl border border-gray-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-gray-700 bg-opacity-50 p-2 rounded-full hover:bg-red-600 transition"
        >
          ✕
        </button>

        {/* Movie Title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">{title}</h2>

        {/* Rating & Release Date */}
        <div className="mt-2 text-gray-400 text-sm md:text-base">
          <p><strong>Release Date:</strong> {releaseDate || "N/A"}</p>
          <p><strong>Rating:</strong> ⭐ {rating || "N/A"}</p>
        </div>

        {/* Overview */}
        <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
          {overview}
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center md:justify-end gap-4">
        {/* Watch Trailer Button */}
        <button
            className="flex items-center gap-2 px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
            onClick={() =>
            window.open(`https://www.youtube.com/results?search_query=${title}+trailer`, "_blank")
            }
        >
            <svg
            className="w-6 h-6 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M5 3.75v16.5a1 1 0 0 0 1.54.84l13.5-8.25a1 1 0 0 0 0-1.68l-13.5-8.25A1 1 0 0 0 5 3.75z" />
            </svg>
            <span className="hidden md:inline">Watch Trailer</span>
        </button>

        {/* Close Button */}
        <button
            className="flex items-center gap-2 px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            onClick={onClose}
        >
            ❌ <span className="hidden md:inline">Close</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
