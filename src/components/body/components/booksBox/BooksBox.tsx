import { useState } from 'react'
import { BooksApi } from '../../../../API/BooksApi'
import { IData } from '../../../../types/dats'
import { BookElement } from '../bookElement/BookElement'
import { useDispatch } from 'react-redux'
import './booksBox.scss'
import { addBooks } from '../../../../Redux/mainReducer'
import { Preloader } from '../../../preloader/Preloader'

const BooksBox: React.FC<IData> = ({ data, handleOpenPage }) => {

    const dispatch = useDispatch();
    const [loader, setLoader ] = useState<boolean>(false)
    
    const handleLoadBooks = async() => {
        
        const serchParams = localStorage.getItem('serchParams')
        if (serchParams) {
            setLoader(true)
            const [searchTerm, category, sort] = JSON.parse(serchParams)
            const books = await BooksApi.getBooks(searchTerm, category, sort, data.length + 1)
            dispatch(addBooks(books.items))
            setLoader(false)
        } 
    }

    return (
        <div className="booksBox">
            {data.length !== 0 ? data.map(el =>
                <BookElement
                    key={el.etag}
                    title={el.volumeInfo.title}
                    image={el.volumeInfo.imageLinks?.thumbnail}
                    authors={el.volumeInfo.authors}
                    categories={el.volumeInfo.categories}
                    etag={el.etag}
                    handleOpenPage = {handleOpenPage}
                />)
                : null
            }
            {loader ? <Preloader /> : null}
            {data.length !== 0
                ? <div className="loadMore">
                    <h3 onClick={handleLoadBooks}>Load more</h3>
                </div>
                : null}
        </div>
    )
}

export {BooksBox}