import React from "react";
import { useSelector } from "react-redux";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-6 mt-6">
      <h2 className="text-2xl text-white font-bold mb-4">Recommended Movies 🎬</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movieNames.map((movieName, index) => (
          <div key={movieName} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieResults[index]?.[0]?.poster_path}`}
              alt={movieName}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold">{movieName}</h3>
              <p className="text-sm text-gray-400">
                {movieResults[index]?.[0]?.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
