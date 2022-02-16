import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";




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
    <article className="Snacks">
      <aside className="">
                {<HeartHealth snackHealth={snack.is_healthy} />}
            </aside>
        <div><img src={snack.image} alt={snack.name}/></div>
            <div>Protein: {snack.protein}</div>
            <div>Fiber: {snack.fiber}</div>
            <div>Added Sugar: {snack.added_sugar}</div>
            <div></div>
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
      
    </article>
  );
}
export default SnackDetails;
