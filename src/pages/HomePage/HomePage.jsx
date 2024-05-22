import { useState, useEffect } from "react";
import { getTrendingMoviesToday } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import MoviesList from "../../components/MovieList/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <>
      <h2>Trending Today</h2>
      {loading && <Loader />}
      {error && <Error />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
