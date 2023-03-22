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
    etag: string;
    volumeInfo: IBookInfo;
}

export interface IBooksResponse {
    items: IBook[];
    totalItems: number;
}

export interface IBooksApi {
    getBooks: (searchTerm: string, category: string, sort: string) => Promise<IBooksResponse>;
}

export interface IData{
    data: IBooksResponse | null;
    setData: (data: IBooksResponse) => void;
}

export interface IDataSetLoad extends IData{
    data: IBooksResponse | null;
    setData: (data: IBooksResponse) => void;
    setLoader: (loader: boolean) => void;
}

export interface IDataLoad extends IData{
    data: IBooksResponse | null;
    setData: (data: IBooksResponse) => void;
    loader: boolean;
}

export interface IBookElement{
    title: string;
    image?: string;
    authors?: string[];
    categories?: string[];
}