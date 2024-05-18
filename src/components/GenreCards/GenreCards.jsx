

// export const Cards = (list) => {
//     return <>
//     {list.map((elem)=>{
//         const {id, overview, title, poster_path} = elem;
//         return <Card id={id} overview={overview} title={title} imgPath={poster_path}/>
//     })}
//     </>
// }

import { Img, Item } from "./GenreCards.style"

export const Card = ({id, releaseDate, title, imgPath, leng, popularity})=>{
return <>
<Item key={id}>
    <div>
        <Img src={`https://image.tmdb.org/t/p/w500${imgPath}`} alt={title} />
    </div>
    <div>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
        <p>popularity:{popularity}</p>
        <p>original language:{leng}</p>
    </div>
</Item>
</>
}