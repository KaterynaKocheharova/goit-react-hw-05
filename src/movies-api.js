import axios from "axios";

const accesToken =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2QzZjIwNDc4MmJlYjIwYWNhNWFlMWY4ZWQ5ZDE4MCIsInN1YiI6IjY2NGNkYWIzODJlMGM3NzIyNjMwMmM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._zegq7Bgu0fAUvx_KszmeWSc89dexkihTpP_jiOkyXw";
axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie/day";
axios.defaults.headers.common["Authorization"] = accesToken;
axios.defaults.headers.common["accept"] = "application/json";

export const getTrendingMoviesToday = async () => {
  const res = await axios.get("", {
    params: {
      language: "en-US",
    },
  });
  console.log(res.data);
  return res.data;
};
