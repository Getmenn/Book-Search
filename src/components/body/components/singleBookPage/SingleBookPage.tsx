import { ISingleBookPage } from "../../../../types/dats";
import arrowLeft from '../../../../assets/arrowLeft.svg'
import "./singleBookPage.scss"
import { useState } from "react";

const SingleBookPage: React.FC<ISingleBookPage> = ({ title, image, authors, categories, description, setBookInfo }) => {
    
    const [textStatus, setTextStatus] = useState<boolean>(false)
    
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
                    {description
                        ? <p>
                            {description?.length > 1000 && !textStatus ? `${description?.slice(0, 1000)}` : description}
                            {description?.length > 1000 && !textStatus ? <span onClick={() => setTextStatus(true)}> Show full text...</span> : null}
                        </p>
                        : <h3>No description</h3>
                    }
                </div>
            </div>
        </div>
    )
};

export {SingleBookPage};