import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedTVShows } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedTVShows = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();
  const topRatedTVShows = useSelector(store => store.movies.topRatedTVShows)

  const getTopRatedTVShows = async () => {
    const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?&page=1", API_OPTIONS);
    const json = await data.json();
    disPatch(addTopRatedTVShows(json.results))
  }

  useEffect(() => {
    !topRatedTVShows && getTopRatedTVShows();
  })
}

export default useTopRatedTVShows;