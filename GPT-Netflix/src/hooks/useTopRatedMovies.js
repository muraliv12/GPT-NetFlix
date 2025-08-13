import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

  const getTopRatedMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
    const json = await data.json();
    disPatch(addTopRatedMovies(json.results))
  }

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  })
}

export default useTopRatedMovies;