import './searchBook.scss'
import serchGlass from '../../../assets/searchGlass.svg'
import { ISetLoader } from '../../../types/dats'
import { useRef, KeyboardEvent, useState } from 'react'
import { BooksApi } from '../../../API/BooksApi'
import { useDispatch } from 'react-redux'
import { loadTotal, newBooks } from '../../../Redux/mainReducer'

const SearchBook: React.FC<ISetLoader> = ({ setLoader }) => {

    const searchRef = useRef<(HTMLInputElement)>(null)
    const [category, setCategory] = useState<string>('all')
    const [sort, setSort] = useState<string>('relevance')
    const dispatch = useDispatch()

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>):void => {
        if (event.key === 'Enter') { 
            handleSearch()
        }
    }
    
    const handleSearch = async() => {
        if (searchRef.current && searchRef.current.value.length > 0) {
            setLoader(true)
            const response = await BooksApi.getBooks(searchRef.current.value, category, sort)
            localStorage.setItem('serchParams', JSON.stringify([searchRef.current.value, category, sort]))
            dispatch(newBooks(response.items))
            dispatch(loadTotal(response.totalItems))
            setLoader(false)
        } 
    }

    const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>):void => {
        setCategory(event.target.value)
    }

    const handleSort = (event: React.ChangeEvent<HTMLSelectElement>):void => {
        setSort(event.target.value)
    }

    return (
        <div className="searchBox">
            <div className="search">
                <input type="text" placeholder='book title' ref={searchRef} onKeyDown={handleKeyDown} />
                <img src={serchGlass} alt="shearch" onClick={handleSearch}/>
            </div>
            
            
            <div className="sortBox">
                
                <span>Categories</span>
                <select onChange={handleCategory}>
                    <option defaultValue="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </select>

                <span>Sorting by</span>
                <select onChange={handleSort}>
                    <option defaultValue="relevance">relevance</option>
                    <option value="newest">newest</option>
                </select>

            </div>
        
        </div>
    )
}

export {SearchBook}