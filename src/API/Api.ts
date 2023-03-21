import axios from 'axios';
 
export const books = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/'
});

