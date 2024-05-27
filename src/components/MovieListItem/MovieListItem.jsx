import { Link, useLocation } from "react-router-dom";
import GenresList from "../GenresList/GenresList";
import css from "./MovieListItem.module.css";

const MovieListItem = ({
  movie: { id, original_title, backdrop_path, genre_ids },
  genres,
}) => {
  const location = useLocation();
  return (
    <>
      <img
        className={css["movie-image"]}
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt="film poster"
      />
      <div className={css["bottom-container"]}>
        <Link
          className={css["movie-link"]}
          to={`/movies/${id}`}
          state={location}
        >
          {original_title}
        </Link>
        <GenresList ids={genre_ids} genres={genres} />
      </div>
    </>
  );
};

export default MovieListItem;
