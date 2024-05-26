import { useState, useEffect } from "react";
import { getAllGenres } from "../../movies-api";
import Grid from "../Grid/Grid";
import MovieListItem from "../MovieListItem/MovieListItem";

const MovieList = ({ movies }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const genres = await getAllGenres();
      setGenres(genres.data.genres);
    };

    getGenres();
  }, []);

  return (
    <Grid>
      {genres.length > 0 &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieListItem movie={movie} genres={genres} />
            </li>
          );
        })}
    </Grid>
  );
};

export default MovieList;
