import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../movies-api";
import MovieCastList from "../MovieCastList/MovieCastList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCastData, setMovieCastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCastData = async () => {
      setLoading(true);
      setError(false);
      if (!movieId) return;
      try {
        const castData = await getMovieCast(movieId);
        setMovieCastData(castData.data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getCastData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {movieCastData && !movieCastData && !loading && (
        <p>No infomation about the cast</p>
      )}
      {movieCastData && movieCastData.length > 0 && (
        <MovieCastList castData={movieCastData} />
      )}
    </>
  );
};

export default MovieCast;
