import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();
  const popularMovies = useSelector(store => store.movies.popularMovies)

  const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const json = await data.json();
    disPatch(addPopularMovies(json.results))
  }

  useEffect(() => {
    !popularMovies && getPopularMovies();
  })
}

export default usePopularMovies;