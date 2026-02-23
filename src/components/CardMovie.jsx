import { Link } from "react-router-dom";

function CardMovie() {

    return (
        <div className="card mb-4" >
            <img src="https://www.movietele.it/wp-content/uploads/2021/08/281912-be0.jpg"
                className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">Harry Potter e la pietra filosofale</h3>
                <h5 className="card-subtitle mb-2 text-body-secondary">Director</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Genre</h6>
                <p className ="card-text"><i>Year</i></p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <address><i>Created at</i></address>
                <address><i>Updated at</i></address>
                <Link to={`movies/1`} className="btn btn-primary">Read More</Link>
            </div>
        </div>

    )
}

export default CardMovie

