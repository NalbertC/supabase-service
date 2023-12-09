import axios from 'axios';

export const themovie = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});