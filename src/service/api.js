import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmQ0ZTY3MmM4NTVlYTk3YzZjNWViNDBhM2Y4ZTA2ZiIsInN1YiI6IjY2NDgzZDcyNzNjZGI0NGJiZjJmNzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VfEDiEq-jgjRHwQ9AEP107byaw3OvfK6VmUOSqyiWXg";
const keyApi = "96d4e672c855ea97c6c5eb40a3f8e06f";
const url = `https://api.themoviedb.org/3/discover/movie?api_key=96d4e672c855ea97c6c5eb40a3f8e06f`;

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/discover/movie",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmQ0ZTY3MmM4NTVlYTk3YzZjNWViNDBhM2Y4ZTA2ZiIsInN1YiI6IjY2NDgzZDcyNzNjZGI0NGJiZjJmNzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VfEDiEq-jgjRHwQ9AEP107byaw3OvfK6VmUOSqyiWXg",
  },
};

export async function getFilm() {
  const res = await axios.get("movie/popular?language=en-US&page=1", options);
  console.log(res.data);
  return res.data.results;
}

export async function getGenres(setGenresList) {
  const res = await axios.get("genre/movie/list?language=en", options);
  return res.data.genres;
}

export async function getGenresId(id) {
  const res = await axios.get(
    `discover/movie?sort_by=popularity.desc&with_genres=${id}`,
    options
  );
  console.log(res.data.results);
  return res.data.results;
}

// https://api.themoviedb.org/3/discover/movie?

export async function getFilmId(id) {
  const res = await axios.get(`movie/${id}`, options);
  return res.data;
}
