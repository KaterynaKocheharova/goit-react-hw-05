import MovieCastCard from "../MovieCastCard/MovieCastCard";
import Grid from "../Grid/Grid";

const MovieCastList = ({ castData }) => {
  return (
    <Grid isMovieCast>
      {castData.map((castItem) => (
        <li key={castItem.id}>
          <MovieCastCard castItemData={castItem} />
        </li>
      ))}
    </Grid>
  );
};

export default MovieCastList;
