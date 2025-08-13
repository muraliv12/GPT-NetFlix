import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => { 
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    const getMovieVideos = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                API_OPTIONS
            );
            const json = await response.json();

            if (!json.results || json.results.length === 0) {
                console.error("No trailer found for movie ID:", movieId);
                return;
            }

            const filteredTrailer = json.results.find(video => video.type === "Trailer") || json.results[0];

            dispatch(addTrailerVideo(filteredTrailer)); // Update Redux store
        } catch (error) {
            console.error("Error fetching trailer:", error);
        }
    };

    useEffect(() => {
        if (!movieId) return; // Prevent unnecessary API calls
        getMovieVideos();
    }, [movieId, dispatch]);
};

export default useMovieTrailer;
