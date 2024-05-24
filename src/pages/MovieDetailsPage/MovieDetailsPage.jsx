import { Suspense, useRef } from "react";
import { useState, useEffect } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../movies-api";
import { defaultMovieImg } from "../../default-props";
import BackLink from "../../components/BackLink/BackLink";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getMovieById = async () => {
      setLoading(true);
      setError(null);
      try {
        const movieData = await getMovieDetails(movieId);
        setMovieData(movieData);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);

  const { title, release_date, popularity, overview, genres, poster_path } =
    movieData || {};

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {movieData && (
        <div>
          <BackLink to={backLinkHref.current}>Back</BackLink>
          <div>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultMovieImg
              }
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
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading subpage</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
