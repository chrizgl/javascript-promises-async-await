import { param } from 'jquery';
import { fetchWithTimeout } from './services';

const movies = require('./src/data/movies.json');

export function fetchMovies() {
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction);
};

moviePromise.then(results => {
    console.log(results);
});

const resolveCallback = (param) => {
    console.log(param)
}