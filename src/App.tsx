import { useState } from "react"
import { Body } from "./components/body/Body"
import { Header } from "./components/header/Header"
import './index.scss'
import { IBooksResponse } from "./types/dats"

const App: React.FC = () => {

    const [data, setData] = useState<IBooksResponse | null>(null)

    return (
        <>
            <Header data={data} setData={setData} />
            <Body data={data} setData={setData}/>
        </>
    )
}

export {App}