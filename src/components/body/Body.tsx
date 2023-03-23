import { useEffect, useState } from 'react'
import './body.scss'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import { IBody, IBookInfo } from '../../types/dats'
import { Preloader } from '../preloader/Preloader'
import { BooksBox } from './components/booksBox/BooksBox'
import { SingleBookPage } from './components/singleBookPage/SingleBookPage'

const Body: React.FC<IBody> = ({ loader }) => {

    const { books, total } = useTypedSelector(state => state.main)
    const [bookInfo, setBookInfo] = useState<IBookInfo | ''>('')

    const handleOpenPage = (etag: string): void => {
        const bookInfo = books.find(el => el.etag === etag)   
        setBookInfo(bookInfo?.volumeInfo || '')
    }

    useEffect(() => {
        setBookInfo('')
    },[books])

    return (
        <div className="body">
            {loader ? <Preloader /> : null}
             {bookInfo
                ? <SingleBookPage
                    title={bookInfo.title}
                    image={bookInfo.imageLinks?.thumbnail}
                    authors={bookInfo.authors}
                    categories={bookInfo.categories}
                    description={bookInfo.description}
                    setBookInfo={setBookInfo}
                />
                : <>
                    {loader ? null : <h3>{total ? `Found ${total} results` : 'Enter book title'}</h3>}
                    {loader ? null : <BooksBox data={books} handleOpenPage={handleOpenPage} />}
                </> 
            } 

        </div>
    )
}

export {Body}