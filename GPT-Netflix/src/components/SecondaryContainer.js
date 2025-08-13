import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-axis space-y-10">
          <MovieList title="🔥 Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="🚀 Trending Now" movies={movies.trendingMovies} />
          <MovieList title="⭐ Top Rated" movies={movies.topRatedMovies} />
          <MovieList title="🎬 Popular Picks" movies={movies.popularMovies} />
          <MovieList title="📅 Coming Soon" movies={movies.upComingMovies} />
          <MovieList title="📺 Must-Watch TV Shows" movies={movies.tvShows} />
          <MovieList title="🌟 Today’s Best TV" movies={movies.todayTVShows} />
          <MovieList title="🏆 Top Rated TV Shows" movies={movies.topRatedTVShows} />
          <MovieList title="🔥 Popular TV Shows" movies={movies.popularTVShows} />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;
