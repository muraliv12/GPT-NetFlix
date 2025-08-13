import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const HoverPlayIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <FaPlay className="text-white text-3xl transition-opacity duration-300 opacity-100" />}
    </div>
  );
};

export default HoverPlayIcon;
