const GenresList = ({ ids, genres }) => {
  const genresArray = [];
  ids.forEach((genreId) => {
    const filteredGenres = genres.filter(({ id }) => id === genreId);
    genresArray.push(...filteredGenres);
  });
  return (
    <ul>
      {genresArray.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
