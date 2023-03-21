import './searchBook.scss'
import serchGlass from '../../../assets/searchGlass.svg'
import { IData } from '../../../types/dats'
import { useEffect, useRef, KeyboardEvent } from 'react'
import { BooksApi } from '../../../API/BooksApi'

const SearchBook: React.FC<IData> = ({ data, setData }) => {

    const searchRef = useRef<(HTMLInputElement)>(null)
    
    useEffect(() => {
        //BooksApi.getBooks('js')
    }, [])

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>):void => {
        if (event.key === 'Enter') { 
            handleSearch()
        }
    }
    
    const handleSearch = async() => {
        if (searchRef.current) {
            const response = await BooksApi.getBooks(searchRef.current.value)
            setData(response)
        } 
    }

    return (
        <div className="searchBox">
            <div className="search">
                <input type="text" placeholder='book title' ref={searchRef} onKeyDown={handleKeyDown} />
                <img src={serchGlass} alt="shearch" onClick={handleSearch}/>
            </div>
            
            
            <div className="sortBox">
                
                <span>Categories</span>
                <select>
                    <option value="value1">Значение 1</option>
                    <option value="value2" >Значение 2</option>
                    <option value="value3">Значение 3</option>
                </select>

                <span>Sorting by</span>
                <select>
                    <option value="value1">Значение 1</option>
                    <option value="value2" >Значение 2</option>
                    <option value="value3">Значение 3</option>
                </select>

            </div>
        
        </div>
    )
}

export {SearchBook}