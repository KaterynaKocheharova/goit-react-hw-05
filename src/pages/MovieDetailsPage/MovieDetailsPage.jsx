import { Suspense, useRef } from "react";
import { useState, useEffect } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../movies-api";
import { defaultMovieImg } from "../../default-props";
import BackLink from "../../components/BackLink/BackLink";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import FlexItem from "../../components/FlexItem/FlexItem";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getMovieById = async () => {
      setError(null);
      setLoading(true);
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

  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieData || {};

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {movieData && (
        <>
          <BackLink to={backLinkHref.current}>Back</BackLink>
          <div className={css["card-and-image-container"]}>
            {/* <div className={css["image-container"]}> */}
            <img
              className={css["movie-image"]}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultMovieImg
              }
              alt="Movie Poster"
            />
            {/* </div> */}
            <div className={css["card-container"]}>
              <h2
                className={css["main-title"]}
              >{`${title} (${release_date})`}</h2>
              <p className={css["user-score-text"]}>{`User score - ${parseInt(
                vote_average * 10
              ).toFixed(0)}%`}</p>
              <h3 className={css["subtitle"]}>Overview</h3>
              <p>{overview}</p>
              <h3 className={css["subtitle"]}>Genres</h3>
              <ul className={css["genre-list"]}>
                {genres.map(({ name, id }) => (
                  <li className={css["genre-item"]} key={id}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
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
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
