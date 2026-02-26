import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

//import componente cardReview
import CardReview from "../components/CardReview"
import NotFoundPage from "./NotFoundPage";
import ReviewForm from "../components/ReviewForm";

import { useGlobal } from "../GlobalContext";
const endpoint = "http://localhost:3000/api/movies/";


function MoviePage() {

    // creiamo istanza del navigate per poterlo utilizzare
    const redirect = useNavigate();

    // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
    const { setIsLoading } = useGlobal();

    //recupero l'id dall'url della rotta e lo aggiungo successivamente nella chiamta axios
    const { id } = useParams();

    //var di stato 
    const [movie, setMovie] = useState({});

    //funzione che gestisce la chiamata alla rotta SHOW 
    const fetchMovie = () => {

        // parte la chimata cambio var stato context di conseguenza
        setIsLoading(true);

        axios.get(endpoint + id)
            .then(res => {
                console.log(res.data)
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
                if (err.status = 404) redirect('/404')
            })
        .finally(setIsLoading(false))
    }
    //richiamo funzione di fetch al montaggio della pagina MoviePage
    useEffect(fetchMovie, []);



    //funzione di rendering del listato delle review 
    const renderReview = () => {
        return movie.reviews?.map(review => {
            return (
                <CardReview review={review} key={review.id} />
            )
        })
    }



    return (
        <>
            <header id="movie " className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3 ">
                    <img src={movie.image} alt="titolo del film"
                        className="img-fluid movie-poster" />
                </div>
                <h1>{movie.title}</h1>
                <h3 className="text-muted"><i>{movie.director}</i></h3>
                <p>{movie.abstract}</p>
            </header>

            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {renderReview()}
            </section>

            <section>
                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />
            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MoviePage