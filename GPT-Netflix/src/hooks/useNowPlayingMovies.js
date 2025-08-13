import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const json = await data.json();
    disPatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  })
}

export default useNowPlayingMovies;