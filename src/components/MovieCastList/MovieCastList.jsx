import MovieCastCard from "../MovieCastCard/MovieCastCard";
import Grid from "../Grid/Grid";
import Card from "../Card/Card";

const MovieCastList = ({ castData }) => {
  return (
    <Grid isMovieCast>
      {castData.map((castItem) => (
        <Card key={castItem.id} type="cast">
          <MovieCastCard castItemData={castItem} />
        </Card>
      ))}
    </Grid>
  );
};

export default MovieCastList;
