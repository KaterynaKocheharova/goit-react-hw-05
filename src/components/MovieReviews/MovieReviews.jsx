import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviewsData, setMovieReviewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviewsData = async () => {
      setLoading(true);
      setError(null);
      if (!movieId) return;
      try {
        const reviewsData = await getMovieReviews(movieId);
        setMovieReviewsData(reviewsData.data.results);
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
      {movieReviewsData && !movieReviewsData.length && !loading && (
        <p>No reviews found</p>
      )}
      {movieReviewsData && movieReviewsData.length > 0 && (
        <MovieReviewsList reviewsData={movieReviewsData} />
      )}
    </>
  );
};

export default MovieReviews;
