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
      try {
        const castData = await getMovieCast(movieId);
        setMovieCastData(castData.data);
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
      {movieCastData && movieCastData.cast.length > 0 && (
        <MovieCastList castData={movieCastData} />
      )}
      {movieCastData && !movieCastData.cast.length && (
        <p>No infomation about the cast</p>
      )}
    </>
  );
};

export default MovieCast;
