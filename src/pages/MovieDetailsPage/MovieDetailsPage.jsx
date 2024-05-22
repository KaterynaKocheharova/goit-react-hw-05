import { useState, useEffect } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../movies-api";
import BackLink from "../../components/BackLink/BackLink";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state ?? "/";

  useEffect(() => {
    const getMovieById = async () => {
      setLoading(true);
      setError(false);
      try {
        const movieData = await getMovieDetails(id);
        setMovieData(movieData);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieById();
  }, [id]);

  const { title, release_date, popularity, overview, genres, poster_path } =
    movieData || {};

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {movieData && (
        <div>
          <BackLink to={backLinkHref}>Back to home</BackLink>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div>
            <h2>{`${title} (${release_date})`}</h2>
            <p>{`User score - ${parseInt(popularity)}%`}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="movie-cast">Cast</Link>
            </li>
            <li>
              <Link to="movie-reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
