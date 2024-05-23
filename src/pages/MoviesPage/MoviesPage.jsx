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
  const [isEmptyAfterFetch, setIsEmptyAfterFetch] = useState(false);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getFilteredMovies = async () => {
      setError(false);
      setLoading(true);
      setIsEmptyAfterFetch(false);
      try {
        if (!query) return;
        const filteredMoviesData = await getFilteredTrendingMoviesToday(query);
        setFilteredMovies(filteredMoviesData.data.results);
        setIsEmptyAfterFetch(!filteredMoviesData.data.results.length);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
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
      {filteredMovies.length > 0 && !loading && (
        <MoviesList movies={filteredMovies} />
      )}
      {isEmptyAfterFetch && !loading && (
        <p>No movies found matching your query.</p>
      )}
    </>
  );
};

export default MoviesPage;

// revise homework criteria
// check mentor's remarks
// proofread my code
