import CardMovie from "../components/CardMovie"
import axios from "axios"
import { useState, useEffect } from "react"
import { useGlobal } from "../GlobalContext";

const endpoint = "http://localhost:3000/api/movies";

function HomePage() {

    //impost variabile di stato 
    const [movies, setMovies] = useState([]);

     // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
    const { setIsLoading } = useGlobal();

    //chiamata AJAX alla rotta INDEX del BACKEND piu UseEffect al montaggio della pagina 
    useEffect(() => {
        setIsLoading(true);
        axios.get(endpoint)
            .then(res => {
                console.log(res.data)
                setMovies(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(setIsLoading(false)); 
    }, []);

    //funzione di rendering della lista dei film 
    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <div className="col" key={movie.id}>
                    <CardMovie movie={movie} />
                </div>
            )
        })
    }

    return (
        <>
            <h1 className="text-primary">Movies</h1>
            <h2><i>The community of Movies</i></h2>

            <div>
                <div className="row row-cols-3 mt-4">
                    {renderMovies()}

                </div>
            </div>
        </>
    )
}

export default HomePage