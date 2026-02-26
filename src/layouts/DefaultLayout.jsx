import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

import Loader from "../components/Loader";

//variabile di settaggio caricamento
const isLoading = true ; 

function DefaultLayout() {
    
    return(
        <>
        <MainHeader/>
        <main className="container">
            <Outlet/>
        </main>
        {isLoading && <Loader/>}
        </>
    )
}

export default DefaultLayout