import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import VideoTitle from "./VideoTitle";

const VideoBackground = ({ movieId, title, overview }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Fullscreen Background Video */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${trailer?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      {/* Video Title Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent flex items-center px-10">
        <VideoTitle title={title} overview={overview} />
      </div>
    </div>
  );
};

export default VideoBackground;
