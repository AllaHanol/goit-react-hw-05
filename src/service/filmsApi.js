import axios from "axios";
axios.defaults.baseURL =
  "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWM3ZjJiYjM1YjU1YzQzMTYyOGVmMWU3NDM3YWFjYyIsIm5iZiI6MTcyMzkyODQzNC4zNjQ5NjksInN1YiI6IjY2YmY2ODc2MDZmZjQ2YWNmNjQ5ZTFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-aVf11gOcnxK4t6tCphcGyHAms1BCg0SXg_n0JFuIlQ",
  },
};

export const fetchTrendingMovies =
  async () => {
    const response = await axios.get(
      "trending/movie/day",
      options,
    );
    return response.data;
  };

export const fetchMovieByQuery = async (
  query,
) => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options,
  );
  return response.data;
};

export const fetchMovieDetails = async (
  id,
) => {
  const response = await axios.get(
    `movie/${id}`,
    options,
  );
  return response.data;
};

export const fetchMovieCast = async (
  id,
) => {
  const response = await axios.get(
    `movie/${id}/credits`,
    options,
  );
  return response.data.cast;
};

export const fetchMovieReview = async (
  id,
) => {
  const response = await axios.get(
    `movie/${id}/reviews`,
    options,
  );
  return response.data.results;
};

// const BASE_URL =
//   "https://api.themoviedb.org/3";
// const API_KEY =
//   "51c7f2bb35b55c431628ef1e7437aacc";

// export async function fetchPopularMovies() {
//   const response = await fetch(
//     `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
//   );
//   if (!response.ok) {
//     throw new Error(
//       "Failed to fetch popular movies",
//     );
//   }
//   const data = await response.json();
//   return data.results;
// }

// export async function searchMovies(
//   query,
// ) {
//   const response = await fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
//   );
//   if (!response.ok) {
//     throw new Error(
//       "Failed to search movies",
//     );
//   }
//   const data = await response.json();
//   return data.results;
// }

// export async function fetchMovieDetails(
//   movieId,
// ) {
//   const response = await fetch(
//     `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
//   );
//   if (!response.ok) {
//     throw new Error(
//       "Failed to fetch movie details",
//     );
//   }
//   const data = await response.json();
//   return data;
// }

// export async function fetchMovieCast(
//   movieId,
// ) {
//   const response = await fetch(
//     `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
//   );
//   if (!response.ok) {
//     throw new Error(
//       "Failed to fetch movie cast",
//     );
//   }
//   const data = await response.json();
//   return data.cast;
// }

// export async function fetchMovieReviews(
//   movieId,
// ) {
//   const response = await fetch(
//     `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
//   );
//   if (!response.ok) {
//     throw new Error(
//       "Failed to fetch movie reviews",
//     );
//   }
//   const data = await response.json();
//   return data.results;
// }
