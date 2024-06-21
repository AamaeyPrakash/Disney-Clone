import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='c3bec84cc60f162efbd11136dde4ddfe'

const movieByGenreBaseURL='https:api.themoviedb.org/3/discover/movie?api_key='

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+api_key+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}
