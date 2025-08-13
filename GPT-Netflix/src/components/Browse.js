import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTVShows from '../hooks/useTVShows';
import useTodayTVShows from '../hooks/useTodayTVShows';
import usePopularTVShows from '../hooks/usePopularTVShows';
import useTopRatedTVShows from '../hooks/useTopRatedTVShows';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useTrendingMovies();
  useTVShows();
  useTodayTVShows();
  usePopularTVShows();
  useTopRatedTVShows();

  return (
    <div>
      <Header/>
      {showGptSearch ? 
      <GPTSearch/> :
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </>}
    </div>
  )
}

export default Browse