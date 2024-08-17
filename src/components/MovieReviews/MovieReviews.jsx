// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchMovieReview } from "../../api/films-api";
// import Loader from "../Loader/Loader";
// import Heading from "../Heading/Heading";

// const MovieReviews = () => {
//   const [movieReviews, setMovieReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { movieId } = useParams();

//   useEffect(() => {
//     const movieReviewsRes = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const reviews = await fetchMovieReview(movieId);
//         setMovieReviews(reviews);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     movieReviewsRes();
//   }, [movieId]);
//   console.log(movieReviews);
//   if (movieReviews.length === 0) {
//     return <p>There are no reviews yet</p>;
//   } else {
//     return (
//       <>
//         {isLoading && <Loader />}
//         <ul>
//           {movieReviews.map(({ content, author, id }) => {
//             return (
//               <li key={id}>
//                 <p>{content}</p>
//                 <p>{author}</p>
//               </li>
//             );
//           })}
//         </ul>
//         {error && <Heading title="Something went wrong ..." bottom />}
//       </>
//     );
//   }
// };

// export default MovieReviews;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=51c7f2bb35b55c431628ef1e7437aacc`)
      .then(response => response.json())
      .then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieReviews;
