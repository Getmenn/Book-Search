import './bookElement.scss'
import bookImg from '../../../../assets/book.jpg'
import { IBookElement } from '../../../../types/dats'



const BookElement: React.FC<IBookElement> = ({title, image, authors, categories}) => {
    
    return (
        <div className="booksElement">
            <div className="imageBox">
                <img src={image} alt="book" />
            </div>
            <span className='underline'>{(categories && categories[0]) || undefined}</span>
            <h4>{title}</h4>
            <span>{authors?.join(', ') || undefined}</span>
            
        </div>
    )
}

export {BookElement}