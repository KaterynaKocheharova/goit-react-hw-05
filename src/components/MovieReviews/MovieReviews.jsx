import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviewsData, setMovieReviewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmptyAfterFetch, setIsEmptyAfterFetch] = useState(true);

  useEffect(() => {
    const getReviewsData = async () => {
      setLoading(true);
      if (!movieId) return;
      try {
        const reviewsData = await getMovieReviews(movieId);
        const results = reviewsData.data.results;
        setMovieReviewsData(results);
        setIsEmptyAfterFetch(results.length === 0);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getReviewsData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {isEmptyAfterFetch && !loading && <p>No reviews found</p>}
      {movieReviewsData.length > 0 && (
        <MovieReviewsList reviewsData={movieReviewsData} />
      )}
    </>
  );
};

export default MovieReviews;
