import { getTrendingMoviesToday } from "../../movies-api";
import MoviesList from "../../components/MovieList/MovieList";

const Home = () => {
  getTrendingMoviesToday();
  return (
    <>
      <h2>Trending Today</h2>
      <MoviesList />
    </>
  );
};

export default Home;
