import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getALLPopularMovies, getMovieDetailById} from '../api/moviesApi';
import {Result} from '../interface/Result';
import MovieList from '../components/movieList';
import {environment} from '../environments/environments';
import {useAppDispatch, useAppSelector} from '../redux/hooks/hooks';
import {increment, reset} from '../redux/slices/countPageSlice';
export default function Movies() {
  const counter = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const [movies, setMovies] = useState<Array<Result>>([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    (async () => {
      await loadMovies();
    })();
  }, []);

  const loadMovies = async () => {
    try {
      const response = await getALLPopularMovies(counter);
      const moviesList: React.SetStateAction<any[]> = [];
      for await (const movie of response.data) {
        const movieDetail = await getMovieDetailById(movie.id.toString());
        moviesList.push({
          title: movieDetail.data.title,
          id: movieDetail.data.id,
          homepage: movieDetail.data.homepage,
          overview: movieDetail.data.overview,
          poster_path: `${environment.URL_IMAGE_BASE}${movieDetail.data.poster_path}`,
        });
      }

      setMovies([...movies, ...moviesList]);
      setPage(page + 1);
      dispatch(increment());
    } catch (error) {
      console.error(error);
      dispatch(reset());
    }
  };
  return (
    <SafeAreaView>
      <MovieList movies={movies} loadMovies={loadMovies} />
    </SafeAreaView>
  );
}
