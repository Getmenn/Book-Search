import { ISingleBookPage } from "../../../../types/dats";
import arrowLeft from '../../../../assets/arrowLeft.svg'
import "./singleBookPage.scss"

const SingleBookPage: React.FC<ISingleBookPage> = ({title, image, authors, categories, description, setBookInfo}) => {
    
    return (  
        <div className='singleBookPage'>
            <img src={arrowLeft} alt="arrow" className="exit" onClick={() => setBookInfo('')}/>
            <div className="imageContainer">
                {image ? <img src={image} alt="book" /> : <h1>No image</h1>}
            </div>
            <div className="textContainer">
                <span>{categories}</span>
                <h1>{title}</h1>
                <span className="underline">{authors?.join(', ')}</span>
                <div className="bookAnnotation">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
};

export {SingleBookPage};