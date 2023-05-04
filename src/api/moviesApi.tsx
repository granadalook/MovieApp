import {environment} from '../environments/environments';
import axios from 'axios';
import {Data} from '../interface/Data';
import {Detail} from '../interface/MovieDetail';
/* export async function getMovies() {
  try {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=01fc5353c112c2eab8c038bdd70026ef&language=en-US&page=1`,
      )
      .then(responseData => {
        console.log('response', responseData);
        return responseData;
      });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
} */
/* export async function getMovies() {
  try {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=01fc5353c112c2eab8c038bdd70026ef&language=en-US&page=1`,
      )
      .then(responseData => console.log('response', responseData));
    //const result = await response.json(); <-- Eliminar esta línea
    return response; // <-- Devolver la propiedad "data" de la respuesta
  } catch (error) {
    throw error;
  }
} */
export async function getALLPopularMovies(page: number) {
  console.log('page', page);
  try {
    const response = await axios.get<Data>(
      `${environment.URL_BASE}${environment.POPULAR}?${
        environment.API_KEY
      }&language=en-US&page=${page.toString()}`,
    );
    return {
      data: response.data.results,
    };
  } catch (error) {
    throw error;
  }
}
export async function getMovieDetailById(idMovie: string) {
  try {
    const response = await axios.get<Detail>(
      `${environment.URL_BASE}${idMovie}?${environment.API_KEY}&language=en-US`,
    );
    return {
      data: response.data,
    };
  } catch (error) {
    throw error;
  }
}
