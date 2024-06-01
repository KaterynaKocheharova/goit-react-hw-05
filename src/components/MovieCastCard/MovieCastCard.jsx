import css from "./MovieCastCard.module.css";

const MovieCastCard = ({ castItemData: { character, name, profile_path } }) => (
  <div>
    <h3>{name}</h3>
    <div className={css["image-container"]}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : "https://loremflickr.com/g/320/240/person"
        }
        alt={`${name}`}
      />
    </div>
    <p>Character: {character}</p>
  </div>
);

export default MovieCastCard;
