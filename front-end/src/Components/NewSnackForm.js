import axios from "axios";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    // is_healthy: false,
    image: "",
  });

  const newSnack = (addedSnack) => {
    axios
      .post(`${API}/snacks/`, addedSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((err) => console.warn("catch", err));
  };

  const handleTextChange = (event) => {
    event.target.id === "amount" || "protein" || "added_sugar"
      ? setSnack({ ...snack, [event.target.id]: Number(event.target.value) })
      : setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleNameChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newSnack(snack);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleNameChange}
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
        />

        <label htmlFor="image" for="image">
          Image:
        </label>
        <input
          id="image"
          value={snack.image}
          type="text"
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
      <Link to={`/snacks/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default NewForm;
