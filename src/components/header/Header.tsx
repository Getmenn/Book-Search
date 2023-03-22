import { IDataSetLoad } from '../../types/dats';
import { SearchBook } from './components/SearchBook'
import './header.scss'


const Header: React.FC<IDataSetLoad> = ({data, setData, setLoader}) => {

    return (
        <div className='header'>
            <h1>Serch for books</h1>
            <SearchBook data={data} setData={setData} setLoader={setLoader} />
        </div>
    )
}

export {Header}