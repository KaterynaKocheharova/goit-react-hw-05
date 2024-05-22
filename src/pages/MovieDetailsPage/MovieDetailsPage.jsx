import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../movies-api";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const getMovieById = async () => {
    const movieData = await getMovieDetails(id);
    console.log(movieData);
  };
  getMovieById();

  return <div>Details</div>;
};

export default MovieDetailsPage;
