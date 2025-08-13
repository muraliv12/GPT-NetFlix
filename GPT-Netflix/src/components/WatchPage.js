import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useWatchPageTrailer from "../hooks/useWatchPageTrailer"; // ✅ Fetch separate trailer
import { clearWatchPageTrailer } from "../utils/movieSlice"; // ✅ Clear watch page trailer

const WatchPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useWatchPageTrailer(id); // ✅ Fetch Watch Page Trailer
  const trailer = useSelector((store) => store.movies?.watchPageTrailer); // ✅ Separate state

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="max-w-4xl w-full bg-[#1C1F26] p-6 rounded-lg shadow-xl text-center">
        {/* Movie Title & Overview */}
        <h1 className="text-3xl font-bold text-red-500 mb-2">Movie Title</h1>
        <p className="text-gray-400">
          Full overview and movie details go here. This section can include a brief summary of the movie.
        </p>

        {/* Embedded YouTube Trailer or Fallback Message */}
        <div className="relative w-full aspect-video mt-6">
          {trailer && trailer.key ? (
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1&modestbranding=1&loop=1&playlist=${trailer.key}`}
              title="Movie Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-lg">
              <p className="text-red-500 text-lg font-semibold">Trailer not available</p>
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            dispatch(clearWatchPageTrailer()); // ✅ Clears only watch page trailer
            navigate(-1);
          }}
          className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WatchPage;
