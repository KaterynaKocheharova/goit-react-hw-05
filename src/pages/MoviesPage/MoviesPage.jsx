// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { getFilteredTrendingMoviesToday } from "../../movies-api";
// import MoviesSearchBar from "../../components/MoviesSearchBar/MoviesSearchBar";
// import MovieList from "../../components/MovieList/MovieList";
// import Error from "../../components/Error/Error";
// import Loader from "../../components/Loader/Loader";
// import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

// const MoviesPage = () => {
//   const [filteredMovies, setFilteredMovies] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [currentPage, setCurrentPage] = useState(1);
//   const query = searchParams.get("query") ?? "";

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     const getFilteredMovies = async () => {
//       try {
//         if (!query) return;
//         const filteredMoviesData = await getFilteredTrendingMoviesToday(
//           query,
//           currentPage
//         );
//         if (currentPage === 1) {
//           setFilteredMovies(filteredMoviesData.data.results);
//         } else if (currentPage > 1) {
//           setFilteredMovies((prev) => [
//             ...prev,
//             ...filteredMoviesData.data.results,
//           ]);
//         }
//       } catch (error) {
//         setError(error);
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getFilteredMovies();
//   }, [searchParams, query, currentPage]);

//   const handleSubmit = (value) => {
//     setCurrentPage(1);
//     setFilteredMovies(null);
//     setSearchParams({ query: value });
//   };

//   const handleLoadMore = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   return (
//     <>
//       <MoviesSearchBar onSubmit={handleSubmit} />
//       {loading && <Loader />}
//       {error && <Error />}
//       {filteredMovies && filteredMovies.length > 0 && (
//         <MovieList movies={filteredMovies} />
//       )}
//       {filteredMovies && !filteredMovies.length && !loading && query !== "" && (
//         <p>No movies found matching your query.</p>
//       )}
//       <LoadMoreBtn onClick={handleLoadMore} />
//     </>
//   );
// };

// export default MoviesPage;

import { useEffect, useState } from "react";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
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
  const [currentPage, setCurrentPage] = useState(1);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    setLoading(true);
    setError(null);
    const getFilteredMovies = async () => {
      try {
        if (!query) return;
        const filteredMoviesData = await getFilteredTrendingMoviesToday(
          query,
          currentPage
        );
        setFilteredMovies(filteredMoviesData.data.results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getFilteredMovies();
  }, [searchParams, query, currentPage]);

  const handleSubmit = (value) => {
    setCurrentPage(1);
    setFilteredMovies(null);
    setSearchParams({ query: value });
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
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
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        // pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default MoviesPage;
