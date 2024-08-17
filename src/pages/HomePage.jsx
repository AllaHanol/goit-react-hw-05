// import { useEffect, useState } from "react";
// import MovieList from "../../components/MovieList/MovieList";
// import { fetchTrendingMovies } from "../service/filmsApi";
// import Loader from "../../components/Loader/Loader";
// import Heading from "../../components/Heading/Heading";
// const HomePage = () => {
//   const [trendingFilms, setTrendingFilms] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const getTrendingMovies = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await fetchTrendingMovies();
//         setTrendingFilms(response.results);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getTrendingMovies();
//   }, []);
//   //   console.log(trendingFilms);
//   return (
//     <div>
//       {trendingFilms.length > 0 && <MovieList movies={trendingFilms} />}
//       {isLoading && <Loader />}
//       {error && <Heading title="Something went wrong ..." bottom />}
//     </div>
//   );
// };

// export default HomePage;
import MovieList from '../components/MovieList/MovieList';
import { useState, useEffect } from 'react';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=51c7f2bb35b55c431628ef1e7437aacc`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;