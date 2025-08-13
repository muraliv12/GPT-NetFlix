import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodayTVShows, } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTodayTVShows = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();
  const todayTVShows = useSelector(store => store.movies.todayTVShows)

  const getTodayTVShows = async () => {
    const data = await fetch("https://api.themoviedb.org/3/tv/airing_today?&page=1", API_OPTIONS);
    const json = await data.json();
    disPatch(addTodayTVShows(json.results))
  }

  useEffect(() => {
    !todayTVShows && getTodayTVShows();
  })
}

export default useTodayTVShows;