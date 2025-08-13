import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularTVShows } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularTVShows = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();
  const popularTVShows = useSelector(store => store.movies.popularTVShows)

  const getPopularTVShows = async () => {
    const data = await fetch("https://api.themoviedb.org/3/tv/popular?&page=1", API_OPTIONS);
    const json = await data.json();
    disPatch(addPopularTVShows(json.results))
  }

  useEffect(() => {
    !popularTVShows && getPopularTVShows();
  })
}

export default usePopularTVShows;