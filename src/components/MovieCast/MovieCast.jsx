// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchMovieCast } from "../../service/filmsApi";
// import Loader from "../Loader/Loader";
// import Heading from "../Heading/Heading";

// const MovieCast = () => {
//   const { movieId } = useParams();
//   const [movieCast, setMovieCast] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const movieCastRes = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const cast = await fetchMovieCast(movieId);
//         setMovieCast(cast);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     movieCastRes();
//   }, [movieId]);

//   const baseUrl = "https://image.tmdb.org/t/p/w500/";
//   return (
//     <>
//       <ul>
//         {movieCast.map(({ character, id, name, profile_path }) => {
//           return (
//             <li key={id}>
//               <p>Character: {character}</p>
//               <p>Actor name: {name}</p>
//               <img src={baseUrl + profile_path} alt={name} width={100} />
//             </li>
//           );
//         })}
//       </ul>
//       {isLoading && <Loader />}
//       {error && <Heading title="Something went wrong ..." bottom />}
//     </>
//   );
// };

// export default MovieCast;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=51c7f2bb35b55c431628ef1e7437aacc`)
      .then(response => response.json())
      .then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
