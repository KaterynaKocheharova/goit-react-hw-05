import { defaultPersonImg } from "../../default-props";

const MovieCastCard = ({ castItemData: { character, name, profile_path } }) => (
  <div>
    <h3>{name}</h3>
    <img
      src={
        profile_path
          ? `https://image.tmdb.org/t/p/w500/${profile_path}`
          : defaultPersonImg
      }
      alt={`${name}`}
    />
    <p>Character: {character}</p>
  </div>
);

export default MovieCastCard;
