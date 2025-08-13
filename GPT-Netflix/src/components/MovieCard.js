import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import { FaPlay } from "react-icons/fa";

const MovieCard = ({ poster_path, id, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  console.log("MovieCard Props:", { id, poster_path, title }); // Debugging log

  if (!poster_path || !id) return null; // Ensure valid data

  return (
    <div
      className={`relative w-36 md:w-48 pr-4 cursor-pointer transition-transform duration-300 ${
        isHovered ? "scale-125 z-10" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/watch/${id}`)}
    >
      <img
        src={IMG_CDN_URL + poster_path}
        alt={title}
        className="rounded-xl shadow-md transition-transform duration-300"
      />

      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
          <FaPlay className="text-white text-5xl opacity-80 transition-opacity duration-300" />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
