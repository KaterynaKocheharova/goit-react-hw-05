import { getTrendingMoviesToday } from "../../movies-api";

const Home = () => {
  getTrendingMoviesToday();
  return (
    <>
      <h2>Trending Today</h2>
      <ul></ul>
    </>
  );
};

export default Home;
