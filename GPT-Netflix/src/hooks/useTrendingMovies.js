import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();
  const trendingMovies = useSelector(store => store.movies.trendingMovies)

  const getTrendingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/trending/movie/day", API_OPTIONS);
    const json = await data.json();
    disPatch(addTrendingMovies(json.results))
  }

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  })
}

export default useTrendingMovies;