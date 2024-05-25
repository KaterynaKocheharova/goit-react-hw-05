import MovieCastCard from "../MovieCastCard/MovieCastCard";

const MovieCastList = ({ castData }) =>
  castData.map((castItem) => (
    <li key={castItem.id}>
      <MovieCastCard castItemData={castItem} />
    </li>
  ));

export default MovieCastList;
