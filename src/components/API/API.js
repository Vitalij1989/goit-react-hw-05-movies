import axios from 'axios';

const API_KEY = '9dbaa33b83ea322b9fd1645c6b3df7d6';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovie = () =>
  axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);

export const fetchSearchMovie = query =>
  axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

export const fetchMovieDetails = movieId =>
  axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);

export const fetchMovieCredits = ID =>
  axios.get(
    `${BASE_URL}/movie/${ID}/credits?api_key=${API_KEY}&language=en-US`
  );

export const fetchMovieReviews = ID =>
  axios.get(
    `${BASE_URL}/movie/${ID}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
