const API_KEY = "c66d3d36a1ab33af191a31634a1b5a81";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMOvies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchAnimations: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchSciFi: `discover/movie?api_key=${API_KEY}&with_genres=878`,
};

export default requests;
