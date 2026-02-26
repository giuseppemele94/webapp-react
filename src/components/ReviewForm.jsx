import { useState } from "react";
import axios from "axios";


const ReviewForm = (props) => {

    //ricaviamo in prop id del film 
    const { movie_id , reloadReviews} = props;

    //stringa endpoind del BE 
    const endpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    // creo oggetto per valori di default del form 
    const initialFormData ={
        name: "",
        text: "",
        vote: 0
    };

//var di stato per gestire i valori dell'input form (inizialmente saranno quindi vuoti )
const [formData, setFormData] = useState(initialFormData);

    // funzione di gestione dei dati del form 
    function setFieldValue(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    }

    //funzione per la chiamata al click onsubmit del form 
    const handleSubmit = e => {
        //evitiamo comportamento di base del form 
        e.preventDefault();

        //chiamata axios in post per creazione nuova review
        axios.post(endpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                setFormData(initialFormData); 
                //tramite prop passata da moviepage rifà la chiamata alle review dei film quindi si aggiorna la 
                //parte delle review automaticamente una volta che ne inseriamo una nuova
                //senza dover ricaricarfe la pagina 
                reloadReviews(); 
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input type="number" name="vote" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default ReviewForm