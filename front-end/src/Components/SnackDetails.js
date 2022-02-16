import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";



function SnackDetails () {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { id }  = useParams();
    const [snack, setSnack] = useState({});


useEffect(() => {
    axios.get(`${API}/snacks/${id}`)
    .then((response) => setSnack(response.data.payload))
    .catch((err) => console.warn(err))
},[API, id])


const handleDelete = () => {
    axios.delete(`${API}/snacks/${id}`).then(() => {
        navigate("/snacks");
    }, (err) => console.error(err)).catch((err) => console.warn(err));
};


return (
    <article className="snack-detail">
      <h4>Snack Name: {snack.name}</h4>
      <p>Fiber: {snack.fiber}</p>
      <p>Protein: {snack.protein}</p>
      <p>Added Sugar: {snack.added_sugar}</p>
      <p>is_healthy: {snack.is_healthy ? "👍🏻" : "👎🏼"}</p>
      <div className="showNavigation">
        <div>
          <Link to="/snacks">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/${snack.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}
export default SnackDetails;
