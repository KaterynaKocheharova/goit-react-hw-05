import MovieCastCard from "../MovieCastCard/MovieCastCard";

const MovieCastList = ({ castData: { cast } }) =>
  cast.map((castItem) => (
    <li key={castItem.id}>
      <MovieCastCard castItemData={castItem} />
    </li>
  ));

export default MovieCastList;
