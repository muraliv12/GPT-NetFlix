import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();
  const upComingMovies = useSelector(store => store.movies.upComingMovies)

  const getUpComingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
    const json = await data.json();
    disPatch(addUpComingMovies(json.results))
  }

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  })
}

export default useUpComingMovies;