const API='566f7b3c1cd2187add2283112c6a6ace';

const request={
    fetchTrending:`/trending/all/week?api_key=${API}&language=en-US`,
    fetchNetflix:`/discover/tv?api_key=${API}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API}&language=en-Us`,
    fetchActionMovies:`/discover/movie?api_key=${API}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API}&with_genres=99`
}

export default request;