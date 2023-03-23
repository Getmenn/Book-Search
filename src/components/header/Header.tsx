import { ISetLoader } from '../../types/dats';
import { SearchBook } from './components/SearchBook'
import './header.scss'

const Header: React.FC<ISetLoader> = ({ setLoader }) => {

    return (
        <div className='header'>
            <h1>Serch for books</h1>
            <SearchBook setLoader={setLoader} />
        </div>
    )
}

export {Header}