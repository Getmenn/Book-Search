import { useEffect } from 'react'
import { IData } from '../../types/dats'
import { Preloader } from '../preloader/Preloader'
import './body.scss'
import { BooksBox } from './components/booksBox/BooksBox'

const Body: React.FC<IData> = ({ data, setData }) => {

    return (
        <div className="body">
            <Preloader />
            <h3>{data ? `Found ${data.totalItems} results` : 'Enter book title'}</h3>
            <BooksBox data={data} setData={setData}/>
        </div>
    )
}

export {Body}