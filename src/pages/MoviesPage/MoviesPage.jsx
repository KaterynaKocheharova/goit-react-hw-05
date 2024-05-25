import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getFilteredTrendingMoviesToday } from "../../movies-api";
import MoviesSearchBar from "../../components/MoviesSearchBar/MoviesSearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    setFilteredMovies(null);
    setLoading(true);
    setError(false);
    const getFilteredMovies = async () => {
      try {
        if (!query) return;
        const filteredMoviesData = await getFilteredTrendingMoviesToday(query);
        setFilteredMovies(filteredMoviesData.data.results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getFilteredMovies();
  }, [searchParams, query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <MoviesSearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <Error />}
      {filteredMovies && filteredMovies.length > 0 && (
        <MovieList movies={filteredMovies} />
      )}
      {filteredMovies && !filteredMovies.length && !loading && query !== "" && (
        <p>No movies found matching your query.</p>
      )}
    </>
  );
};

export default MoviesPage;
