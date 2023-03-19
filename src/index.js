import { param } from 'jquery';
import { fetchWithTimeout } from './services.js';

const movie = require('./src/data/movies.json');

export function fetchMovies() {
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction);
};

const resolveCallback = (param) => {
    console.log('success')
}

const moviePromise = fetchMovies();

moviePromise.then(resolveCallback);