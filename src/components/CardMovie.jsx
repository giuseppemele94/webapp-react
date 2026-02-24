import { Link } from "react-router-dom";

const  CardMovie = (props) =>  {

    const {id,title,director,genre,release_year,abstract,image} = props.movie;

    return (
        <div className="card mb-4" >
            <img src={image}
                className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <h5 className="card-subtitle mb-2 text-body-secondary">{director}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{genre}</h6>
                <p className ="card-text"><i>{release_year}</i></p>
                <p className="card-text">{abstract}</p>
                <Link to={`movies/${id}`} className="btn btn-primary">Read More</Link>
            </div>
        </div>

    )
}

export default CardMovie

