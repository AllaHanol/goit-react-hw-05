// import { useEffect, useRef, useState } from "react";
// import {
//   Link,
//   NavLink,
//   Outlet,
//   useLocation,
//   useParams,
// } from "react-router-dom";
// import { fetchMovieDetails } from "../service/filmsApi";
// import Loader from "../../components/Loader/Loader";
// import Heading from "../../components/Heading/Heading";

// const MovieDetailsPage = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const backLink = useRef(location.state?.from ?? "/movies");

//   useEffect(() => {
//     const getMovieDetailsRequest = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const data = await fetchMovieDetails(movieId);
//         setMovieDetails(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getMovieDetailsRequest();
//   }, [movieId]);

//   const baseUrl = "https://image.tmdb.org/t/p/w500/";
//   return (
//     <div>
//       <Link to={backLink.current}>Go back</Link>
//       {movieDetails !== null && (
//         <div>
//           <img
//             src={baseUrl + movieDetails.backdrop_path}
//             alt={movieDetails.title}
//           />
//           <h2>{movieDetails.title}</h2>{" "}
//           <p>User score : {movieDetails.vote_average}</p>
//           <h3>Overview</h3>
//           <p>{movieDetails.overview}</p>
//           <h3>Genres</h3>
//           <ul>
//             {movieDetails.genres.map(({ id, name }) => {
//               return <li key={id}>{name}</li>;
//             })}
//           </ul>
//         </div>
//       )}
//       <NavLink to="cast">Cast</NavLink>
//       <NavLink to="reviews">Reviews</NavLink>
//       <Outlet />
//       {isLoading && <Loader />}
//       {error && <Heading title="Something went wrong ..." bottom />}
//     </div>
//   );
// };

// export default MovieDetailsPage;

import { useEffect, useState } from 'react';
import { useParams, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=51c7f2bb35b55c431628ef1e7437aacc`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from || '/movies');
  };

  return (
    <div>
      {movie && (
        <>
          <button onClick={handleGoBack}>Go back</button>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          <ul>
            <li><Link to="cast" state={{ from: location.state?.from }}>Cast</Link></li>
            <li><Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link></li>
          </ul>

          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
