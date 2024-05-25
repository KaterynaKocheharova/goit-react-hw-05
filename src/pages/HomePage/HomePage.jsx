import { useState, useEffect } from "react";
import { getTrendingMoviesToday } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMoviesData = async () => {
      setError(null);
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
      <h2 className={css.title}>Trending Today</h2>
      {loading && <Loader />}
      {error && <Error />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
