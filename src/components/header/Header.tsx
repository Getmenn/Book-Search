import { IData } from '../../types/dats';
import { SearchBook } from './components/SearchBook'
import './header.scss'


const Header: React.FC<IData> = ({data, setData}) => {

    return (
        <div className='header'>
            <h1>Serch for books</h1>
            <SearchBook data={data} setData={setData}/>
        </div>
    )
}

export {Header}