import { Route, Routes } from "react-router-dom";
import { getFilm } from "./service/api";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Genres from "./pages/Genres";
import GenreDetails from "./pages/GenreDetails";
import FilmDetails from "./pages/FilmDetails";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="genres" element={<Genres />} />
          <Route path="genres/:id" element={<GenreDetails />} />
          <Route path="films/:id" element={<FilmDetails />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
