import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7c22496ae2c6d62400422cfda2333a3a';

export const getPopularMovies = async () => {
    const res = await axios(
        `${BASE_URL}trending/movie/week?api_key=${API_KEY}`
    );
    return res.data.results;
};

export const getMovieDetails = async id => {
    const res = await axios(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
    return res.data;
};

export const getMovieCredits = async id => {
    const res = await axios(
        `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
    );
    return res.data;
};

export const getMovieReviews = async id => {
    const res = await axios(
        `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
    );
    return res.data.results;
};

export const searchMovie = async query => {
    const res = await axios(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
    );
    return res.data.results;
};
