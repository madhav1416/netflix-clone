const Api_Key = "";
const request = {
  Trending: `/trending/all/week?api_key=${Api_Key}`,
  NetflixOriginal: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
  TopRated: `/movie/top_rated?api_key=${Api_Key}&language=en-US`,
  ActionMovie: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
  ComedyMovie: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
  HorrorMovie: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
  RomanceMovie: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
  Documentaries: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
};
export default request;
