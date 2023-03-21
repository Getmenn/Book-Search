import { books } from "./Api";
import { AxiosResponse } from 'axios';
import { IBooksApi, IBooksResponse } from "../types/dats";



const apiKey: string = 'AIzaSyAqNeWBOwegsUlf_Ka0lG4VySeHF0EXmtU';

export const BooksApi: IBooksApi  = {
    getBooks: async (searchTerm: string) => { 
        const response: AxiosResponse<IBooksResponse> = await books.get(`volumes?q=${searchTerm}&maxResults=30&key=${apiKey}`);
        console.log(response.data);
        
        return response.data;  
    },
     
}