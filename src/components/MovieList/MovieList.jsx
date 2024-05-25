import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, original_title, backdrop_path }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt=""
            />
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
