import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrendingMoviesToday } from "../../movies-api";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();

  useEffect(() => {
    const getMoviesData = async () => {
      setMovies([]);
      setError(false);
      setLoading(true);
      try {
        const moviesData = await getTrendingMoviesToday();
        setMovies(moviesData.results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMoviesData();
  }, []);

  return (
    <ul>
      {loading && <Loader />}
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`${id}`} state={location}>
            {original_title}
          </Link>
        </li>
      ))}
      {error && <Error />}
    </ul>
  );
};

export default MoviesList;
