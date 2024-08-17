import MovieList from '../components/MovieList/MovieList';
import { useState } from 'react';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=51c7f2bb35b55c431628ef1e7437aacc&query=${query}`);
    
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
