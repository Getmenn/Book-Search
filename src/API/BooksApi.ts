import { books } from "./Api";
import { AxiosResponse } from 'axios';
import { IBooksApi, IBooksResponse } from "../types/dats";



const apiKey: string = 'AIzaSyAqNeWBOwegsUlf_Ka0lG4VySeHF0EXmtU';

export const BooksApi: IBooksApi  = {
    getBooks: async (searchTerm: string, category: string, sort: string) => { 

        const params = {
            key: apiKey,
            orderBy: sort,
            startIndex: 0,
            maxResults: 30,
            //subject: category
        };
        
        const response: AxiosResponse<IBooksResponse> = await books.get(
            `?q=${searchTerm}${category !== "all" ? `+subject:${category}` : ""}`, {params} ///+subject=${category}+orderBy=${sort}
        );
        console.log(response.data, category);
        
        return response.data;  
    },
     
}