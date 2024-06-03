import { useEffect, useState } from "react";
import { Slider } from "../components/Swiper/Slide";
import { getFilm } from "../service/api";
import { Img } from "../components/GenreCards/GenreCards.style";
import { MostPopulrFilm } from "../components/Home/Home.style";

function Home() {
  const [mostPopularFilm, setMostPopularFilm] = useState([]);

  useEffect(() => {
getFilm(setMostPopularFilm)
  }, []);
  console.log(mostPopularFilm);
  const { title, poster_path, release_data, vote_count, id, overview } =
    mostPopularFilm;

  return (
    <>
      <div>Here should be Swiper or Slider :|{/* <Slider slides={}/> */}</div>
      <h2>The most popular Film</h2>
      <MostPopulrFilm id={id}>
        <div>
          <Img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <div>
          <p>release: {release_data}</p>
          <p>rate: {vote_count}</p>
          <p>{overview}</p>
        </div>
      </MostPopulrFilm>
    </>
  );
}

export default Home;
