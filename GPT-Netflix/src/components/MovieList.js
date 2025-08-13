import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className='px-6 relative'>
      <h1 className='text-lg md:text-1xl pt-20 pb-4 text-white font-semibold'>{title}</h1>

      <div className='relative group'>
        {/* Left Navigation Button */}
        <button
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-10'
          onClick={scrollLeft}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Movie List Scrollable */}
        <div ref={scrollRef} className='flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory'>
          <div className='flex gap-4'>
            {movies.map((movie) => (
              <MovieCard key={movie.id} id={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-10'
          onClick={scrollRight}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
