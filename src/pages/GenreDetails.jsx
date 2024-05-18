import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGenresId } from "../service/api";
import { Card, Cards } from "../components/GenreCards/GenreCards";
import { List } from "../components/GenreCards/GenreCards.style";



function GenreDetails() {
  const [genreFilmsList, setgenreFilmsList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getGenresId(id, setgenreFilmsList);
  }, [id]);
  return (
    <>
      <List>
          {genreFilmsList.map((elem)=>{
        const {id, overview, title, poster_path,release_date, popularity, original_language} = elem;
        return <Card id={id} releaseDate={release_date} title={title} popularity={popularity} leng={original_language} imgPath={poster_path}/>
    })}
      </List>
    </>
  );
}

export default GenreDetails;
