import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../movies-api";

const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMovieById = async () => {
      const movieData = await getMovieDetails(id);
      setMovieData(movieData);
    };
    getMovieById();
  }, [id]);

  const { title, release_date, popularity, overview, genres } = movieData;

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2>{`${title} (${release_date})`}</h2>
        <p>{`User score - ${parseInt(popularity)}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {Array.isArray(genres) &&
            genres.map(({ name, id }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
