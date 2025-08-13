import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTVShows } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTVShows = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();
  const tvShows = useSelector(store => store.movies.tvShows)

  const getTVShows = async () => {
    const data = await fetch("https://api.themoviedb.org/3/trending/tv/day?", API_OPTIONS);
    const json = await data.json();
    disPatch(addTVShows(json.results))
  }

  useEffect(() => {
    !tvShows && getTVShows();
  })
}

export default useTVShows;