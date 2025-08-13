import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies)

    if(!movies) return;   // this is called as early return

    const mainMovie = movies[0];

    const { original_title, overview, id, release_date, vote_average } = mainMovie;

    return (
      <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview} releaseDate={release_date} rating={vote_average} />
        <VideoBackground movieId={id} />
      </div>
    );
    
}

export default MainContainer