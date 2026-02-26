import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

import Loader from "../components/Loader";
import { useGlobal } from "../GlobalContext";


function DefaultLayout() {
    ////utilizzo dei valori messi a disposizione dal contesto globale 
const {isLoading} = useGlobal();  

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