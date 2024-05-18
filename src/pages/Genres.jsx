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
    getGenres(setGenres);
  }, []);

  getGenresId();

  return (
    <>
      <List>
        {genres.map((elem) => (
          <Link to={elem.id}>{elem.name}{elem.id}</Link>
        ))}
      </List>
    </>
  );
}

export default Genres;
