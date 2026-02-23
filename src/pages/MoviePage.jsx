import { Link } from "react-router-dom"



function MoviePage() {
    return (
        <>
            <header id="movie " className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3 ">
                    <img src="https://www.movietele.it/wp-content/uploads/2021/08/281912-be0.jpg" alt="titolo del film"  
                    className="img-fluid movie-poster"/>
                </div>
                <h1>Titolo film</h1>
                <h3 className="text-muted"><i>Director</i></h3>
                <p>lorem ipsm dolor sit amet</p>
            </header>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MoviePage