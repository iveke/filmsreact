import { useEffect,  useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmId } from "../service/api";
import { Img } from "../components/GenreCards/GenreCards.style";

function FilmDetails() {
  const { id } = useParams();
  const [filmId, setFilm] = useState({});

  useEffect(() => {
    const wrapFn = async () => {
      const filmId = await getFilmId(id);
    setFilm(filmId)
    };
    wrapFn()
  }, []);

  return (
    <>
      <p>hello</p>
      {filmId.title && <Card  film={filmId}/> }
       
      
    </>
  );
}

const Card = (film) => {

const {id, poster_path, release_data, title, vote_average, original_language} = film.film;
    return <>
    <div>
        <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
    </div>
    <div id={id}>
        <h3>{title}</h3>
        <p>release: {release_data}</p>
        <p>rate: {vote_average}</p>
        <p>original language: {original_language}</p>
    </div>
    </>
};

export default FilmDetails;
