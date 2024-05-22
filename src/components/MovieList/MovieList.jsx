import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={location}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
