import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getFilteredTrendingMoviesToday } from "../../movies-api";
import MoviesSearchBar from "../../components/MoviesSearchBar/MoviesSearchBar";
import MoviesList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getFilteredMovies = async () => {
      setError(false);
      setLoading(true);
      try {
        if (!query) return;
        const filteredMoviesData = await getFilteredTrendingMoviesToday(query);
        setFilteredMovies(filteredMoviesData.data.results);
      } catch (error) {
        // setError(error);
        console.error(error);
      } finally {
        // setLoading(false);
      }
    };
    getFilteredMovies();
  }, [searchParams, query]);

  const handleQuery = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <MoviesSearchBar onSubmit={handleQuery} />
      {loading && <Loader />}
      {error && <Error />}
      {filteredMovies.length > 0 && <MoviesList movies={filteredMovies} />}
    </>
  );
};

export default MoviesPage;

// якщо не буде пустий масив, показувати що не знайдено фільмів за запитом
