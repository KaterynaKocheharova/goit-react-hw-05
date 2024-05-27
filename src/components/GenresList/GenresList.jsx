import css from "./GenresList.module.css";

const GenresList = ({ ids, genres }) => {
  const genresArray = [];
  ids.forEach((genreId) => {
    const filteredGenres = genres.filter(({ id }) => id === genreId);
    genresArray.push(...filteredGenres);
  });
  return (
    <ul className={css["genres-container"]}>
      {genresArray.map((genre) => (
        <li className={css["genres-item"]} key={genre.id}>
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
