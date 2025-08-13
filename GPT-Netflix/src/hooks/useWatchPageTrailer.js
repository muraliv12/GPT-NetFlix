import { useDispatch, useSelector } from "react-redux";
import { addWatchPageTrailer } from "../utils/movieSlice"; // ✅ Using separate state
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useWatchPageTrailer = (movieId) => { 
    const dispatch = useDispatch();
    const watchPageTrailer = useSelector(store => store.movies.watchPageTrailer);

    // Fetch trailer video & update the store
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addWatchPageTrailer(trailer)); // ✅ Update Watch Page trailer
    };

    useEffect(() => {
        if (!watchPageTrailer) {
            getMovieVideos();
        }
    }, [movieId]);

    return watchPageTrailer;
};

export default useWatchPageTrailer;
