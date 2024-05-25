import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllGenres } from "../../movies-api";
import GenresList from "../GenresList/GenresList";

const MovieList = ({ movies }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const genres = await getAllGenres();
      setGenres(genres.data.genres);
    };

    getGenres();
  }, []);

  const location = useLocation();

  return (
    <ul>
      {genres.length > 0 &&
        movies.map(({ id, original_title, backdrop_path, genre_ids }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                alt=""
              />
              <Link to={`/movies/${id}`} state={location}>
                {original_title}
              </Link>
              <GenresList ids={genre_ids} genres={genres} />
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
