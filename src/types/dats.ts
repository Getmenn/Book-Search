export interface IBookInfo {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount?: number;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language?: string;
}
  
export interface IBook {
    id: string;
    etag: string;
    volumeInfo: IBookInfo;
}

export interface IBooksResponse {
    items: IBook[];
    totalItems: number;
}

export interface IBooksApi {
    getBooks: (searchTerm: string, category: string, sort: string,  startIndex?: number) => Promise<IBooksResponse>;
}

export interface IData{
    data: IBook[];
    handleOpenPage: (etag: string) => void;
}

export interface ISetLoader{
    setLoader: (loader: boolean) => void;
}

export interface IBody {
    loader: boolean;
}

export interface IBookElement{
    title: string;
    etag: string;
    handleOpenPage: (etag: string) => void;
    image?: string;
    authors?: string[];
    categories?: string[];
}

export interface ISingleBookPage{
    title: string;
    image?: string;
    authors?: string[];
    categories?: string[];
    description?: string;
    setBookInfo: (bookInfo: IBookInfo | '') => void;
}

export interface IStateBooks{
    books: IBook[],
    total: number
}

export enum loadTypes{
    NEW_BOOKS = 'NEW_BOOKS',
    LOAD_TOTAL = 'LOAD_TOTAL',
    ADD_BOOKS = 'ADD_BOOKS'
}

interface newBooks{
    type: loadTypes.NEW_BOOKS;
    payload: IBook[]
}

interface addBooks{
    type: loadTypes.ADD_BOOKS;
    payload: IBook[]
}

interface addTotal{
    type: loadTypes.LOAD_TOTAL;
    payload: number
}

export type onTablePackAction = newBooks | addTotal | addBooks
