import { IData } from '../../../../types/dats'
import { BookElement } from '../bookElement/BookElement'
import './booksBox.scss'

const BooksBox: React.FC<IData> = ({ data, setData }) => {

    return (
        <div className="booksBox">
            {data && data.items.map(el =>
                <BookElement
                    key={el.etag}
                    title={el.volumeInfo.title}
                    image={el.volumeInfo.imageLinks?.thumbnail}
                    authors={el.volumeInfo.authors}
                    categories ={el.volumeInfo.categories}
                />)}
        </div>
    )
}

export {BooksBox}