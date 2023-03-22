import { useState } from "react"
import { Body } from "./components/body/Body"
import { Header } from "./components/header/Header"
import './index.scss'
import { IBooksResponse } from "./types/dats"

const App: React.FC = () => {

    const [data, setData] = useState<IBooksResponse | null>(null)
    const [loader, setLoader ] = useState<boolean>(false)

    return (
        <>
            <Header data={data} setData={setData} setLoader={setLoader} />
            <Body data={data} setData={setData} loader={loader} />
        </>
    )
}

export {App}