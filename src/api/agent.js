import axios from 'axios';
import { authenticationKey } from './config.js';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers['Authorization'] = `Bearer ${authenticationKey}`;

const list = {
    searchByGenre : (genreId, page=1) => axios.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&with_genres=${genreId}`).then(res => res.data).catch(err => console.log(err)),
    searchByTitle : (title, page=1) => axios.get(`/search/movie?query=${title}&include_adult=false&page=${page}`).then(res => res.data).catch(err => console.log(err)),
    getTopRated : (page =1) => axios.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`).then(res => res.data).catch(err => console.log(err)),
    getTrending : (page = 1) => axios.get(`/trending/movie/week?include_adult=false&page=${page}`).then(res => res.data).catch(err => console.log(err)),
	getPopular: (page = 1) => axios.get(`/movie/popular?include_adult=false&page=${page}`).then(res => res.data).catch(err => console.log(err)),
	getGenres: () => axios.get(`/genre/movie/list?include_adult=false`).then(res => res.data.genres).catch(err => console.log(err)),
	getRecommendations: (id, page=1) => axios.get(`/movie/${id}/recommendations?include_adult=false&page=${page}`).then(res => res.data).catch(err => console.log(err)),
	getUpcoming: (page = 1) => axios.get(`/movie/upcoming?include_adult=false&page=${page}`).then(res => res.data).catch(err => console.log(err)),
}

const movie = {
    getDetails: (id) => axios.get(`/movie/${id}&include_adult=false`).then(res => res.data).catch(err => console.log(err)),
    getTrailer: (id) => axios.get(`/movie/${id}/videos`).then(res => {
        const result = res.data.results.filter(trailer => trailer.site === 'YouTube' && trailer.official && trailer.type === 'Trailer').sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
        if(result.length <1){
			return null;
		}
        return `https://www.youtube.com/watch?v=${result[0].key}`;}).catch(err => console.log(err)),
}

const agent = {
    list,
    movie
}

export default agent;