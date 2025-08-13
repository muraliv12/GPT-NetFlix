import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null, // ✅ For background video on the homepage
        watchPageTrailer: null, // ✅ Separate trailer for Watch Page
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trendingMovies: null,
        tvShows: null,
        todayTVShows: null,
        popularTVShows: null,
        topRatedTVShows: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload; // ✅ For background video
        },
        addWatchPageTrailer: (state, action) => {
            state.watchPageTrailer = action.payload; // ✅ For Watch Page
        },
        clearWatchPageTrailer: (state) => {
            state.watchPageTrailer = null;  // ✅ Only reset Watch Page trailer
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTVShows: (state, action) => {
            state.tvShows = action.payload;
        },
        addTodayTVShows: (state, action) => {
            state.todayTVShows = action.payload;
        },
        addPopularTVShows: (state, action) => {
            state.popularTVShows = action.payload;
        },
        addTopRatedTVShows: (state, action) => {
            state.topRatedTVShows = action.payload;
        },
    }
});

export const { 
    addNowPlayingMovies, 
    addTrailerVideo, 
    addWatchPageTrailer, // ✅ New action
    clearWatchPageTrailer, // ✅ New action
    addPopularMovies, 
    addTopRatedMovies, 
    addUpComingMovies, 
    addTrendingMovies,
    addTVShows,
    addTodayTVShows,
    addPopularTVShows,
    addTopRatedTVShows 
} = movieSlice.actions;

export default movieSlice.reducer;
