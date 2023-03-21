interface IBookInfo {
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
  
interface IBook {
    id: string;
    volumeInfo: IBookInfo;
}

export interface IBooksResponse {
    items: IBook[];
    totalItems: number;
}

export interface IBooksApi {
    getBooks: (searchTerm: string) => Promise<IBooksResponse>;
}

export interface IData{
    data: IBooksResponse | null;
    setData: (data: IBooksResponse) => void;
}

export interface IBookElement{
    title: string;
    image?: string;
    authors?: string[];
    categories?: string[];
}