

// export const Cards = (list) => {
//     return <>
//     {list.map((elem)=>{
//         const {id, overview, title, poster_path} = elem;
//         return <Card id={id} overview={overview} title={title} imgPath={poster_path}/>
//     })}
//     </>
// }

import { Link, NavLink } from "react-router-dom"
import { Img, Item } from "./GenreCards.style"

export const Card = ({id, releaseDate, title, imgPath, leng, rate})=>{
return <>
<Item key={id} >
    <div>
        <Img src={`https://image.tmdb.org/t/p/w500${imgPath}`} alt={title} />
    </div>
    <div>
        <NavLink to={`/films/${id}`}>{title}</NavLink>
        <p>{releaseDate}</p>
        <p>rate:{rate}</p>
        <p>original language:{leng}</p>
    </div>
</Item>
</>
}