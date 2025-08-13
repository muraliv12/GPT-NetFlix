import React from "react";
import GPTSearchEngine from "./GPTSearchEngine";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_LOGO } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img className="w-full h-full object-cover" src={BG_LOGO} alt="logo" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative">
        <GPTSearchEngine />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
