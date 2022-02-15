import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
let { id } = useParams();
let navigate = useNavigate();

const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: true,
    image: ""
});

const updateSnack = (updatedSnack) => {
    axios.put(`${API}/snacks/${id}`, updatedSnack)
    .then(() => {
        navigate(`/snacks/${id}`);
        },
        (error) => console.error(error))
    .catch((err) => console.warn("catch", err));
};


const handleTextChange = (event) => {
    event.target.id === "fiber" ||event.target.id === "protein" ||event.target.id === "added_sugar"
    ? setSnack({ ...snack, [event.target.id]: Number(event.target.value) })
    : setSnack({ ...snack, [event.target.id]: event.target.value });
    };

const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
};

useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
    (response) => setSnack(response.data.payload),
    () => navigate(`/not-found/`)
    );
    }, [id, navigate]);


const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
};
return (
    <div className="Edit">
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
        <input
        id="name"
        value={snack.name}
        type="text"
        onChange={handleTextChange}
        placeholder="Name of Snack"
        required
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
        id="fiber"
        type="number"
        value={snack.fiber}
        onChange={handleTextChange}
        placeholder="enter amount"
        />
        <label htmlFor="protein">Protein:</label>
        <input
        id="protein"
        value={snack.protein}
        type="number"
        onChange={handleTextChange}
        placeholder="enter amount"
        required
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
        id="added_sugar"
        value={snack.added_sugar}
        type="number"
        onChange={handleTextChange}
        placeholder="enter amount"
        required
        />
        <label htmlFor="is_healthy">is_healthy:</label>
        <input
        id="is_healthy"
        value={snack.is_healthy}
        type="checkbox"
        onChange={handleCheckboxChange}
        required
        />
        <br/>
        <input type="submit" />
    </form>
    <Link to={`/snacks/${snack.id}`}>
        <button>Nevermind!</button>
    </Link>
    </div>
    );
}

export default SnackEditForm;