import { useEffect, useState } from "react";
import { getGenres, getGenresId } from "../service/api";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: black;
`;

function Genres() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const wrapFnGenres = async () => {
      const genresList = await getGenres();
      setGenres(genresList);
    };
    wrapFnGenres()
  }, []);

  return (
    <>
      <List>
        {genres.map((elem) => 
          {
            return <Link key={elem.id} to={`${elem.id}`}>
            {elem.name} hell {elem.id}
          </Link>}
        )}
      </List>
    </>
  );
}

export default Genres;
