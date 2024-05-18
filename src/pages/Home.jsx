import { useEffect } from "react";
import { Slider } from "../components/Swiper/Slide";
import { getFilm } from "../service/api";

function Home() {
  useEffect(() => {
    getFilm();
  }, []);

  return (
    <>
      <div>Hello{/* <Slider slides={}/> */}</div>
    </>
  );
}

export default Home;
