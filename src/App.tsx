import { useState } from "react"
import { Body } from "./components/body/Body"
import { Header } from "./components/header/Header"
import './index.scss'
import { IBooksResponse } from "./types/dats"

const App: React.FC = () => {

    const [loader, setLoader ] = useState<boolean>(false)

    return (
        <>
            <Header setLoader={setLoader} />
            <Body loader={loader} />
        </>
    )
}

export {App}