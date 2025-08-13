import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchEngine = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie recommendation system & suggest some movies for the query. Example Result: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated. Like the example result given ahead. Example Result: Shiddat, Sanam Teri Kasam, Arjun Reddy, Dhadak, Malang";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Add proper error handling
      return;
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="flex justify-center items-center h-[40vh]">
      <form
        className="w-full md:w-3/5 bg-black/80 backdrop-blur-lg rounded-lg shadow-lg p-6 flex gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="w-full p-4 rounded-md bg-gray-900 text-white outline-none placeholder-gray-400"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-md shadow-lg transition"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchEngine;
