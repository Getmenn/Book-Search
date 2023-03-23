import { books } from "./Api";
import { AxiosResponse } from 'axios';
import { IBooksApi, IBooksResponse } from "../types/dats";

const apiKey: string = 'AIzaSyAqNeWBOwegsUlf_Ka0lG4VySeHF0EXmtU';

export const BooksApi: IBooksApi  = {
    getBooks: async (searchTerm: string, category: string, sort: string, startIndex: number = 0) => { 
        try {
            const params = {
                key: apiKey,
                orderBy: sort,
                startIndex: startIndex,
                maxResults: 28,
            };
            
            const response: AxiosResponse<IBooksResponse> = await books.get(
                `?q=${searchTerm}${category !== "all" ? `+subject:${category}` : ""}`, {params} 
            );
            
            return response.data; 
        }
        catch (error) {
            console.error(error);
            throw new Error('Error fetching books');
            
        }
    },    
}