import './bookElement.scss'
import { IBookElement } from '../../../../types/dats'

const BookElement: React.FC<IBookElement> = ({title, image, authors, categories, etag, handleOpenPage}) => {
    
    return (
        <div className="booksElement">
            <div className="imageBox" onClick={() => handleOpenPage(etag)}>
                {image ? <img src={image} alt="book" /> : <h3>No image</h3>}
            </div>
            <span className='underline'>{(categories && categories[0]) || undefined}</span>
            <h4
                onClick={() => handleOpenPage(etag)}
                style={{fontSize: title.length > 100 ? '14px' : '16px'}}
            >
                {title}
            </h4>
            <span>{authors?.join(', ') || undefined}</span>
        </div>
    )
}

export {BookElement}