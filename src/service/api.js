import axios from "axios";

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

export async function getFilm(setMostPopularFilm) {
  fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
    .then((response) => response.json())
    .then((res) => setMostPopularFilm(res.results));
}

export async function getGenres(setGenresList) {
  fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
    .then((response) => response.json())
    .then((res) => setGenresList(res.genres))
    .catch((err) => console.error(err));
}

export async function getGenresId(id,setFilmsGenreList){
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=${id}`, options)
    .then(response => response.json())
    .then(res => setFilmsGenreList(res.results))
    .catch(err => console.error(err));
}


