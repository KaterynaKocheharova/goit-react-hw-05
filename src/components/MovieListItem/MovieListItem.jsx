import { Link, useLocation } from "react-router-dom";
import GenresList from "../GenresList/GenresList";

const MovieListItem = ({
  movie: { id, original_title, backdrop_path, genre_ids },
  genres,
}) => {
  const location = useLocation();
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt="film poster"
      />
      <Link to={`/movies/${id}`} state={location}>
        {original_title}
      </Link>
      <GenresList ids={genre_ids} genres={genres} />
    </div>
  );
};

export default MovieListItem;
