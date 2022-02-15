const { default: axios } = require("axios");
const { useState, useEffect } = require("react");
const { useNavigate, useParams, Link } = require("react-router-dom");


function SnackDetails () {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { id }  = useParams();
    const [snack, setSnack] = useState({});


useEffect(() => {
    axios.get(`${API}/snacks/${id}`)
    .then((response) => setSnack(response.data))
    .catch((err) => console.warn(err))
},[API, id])


const handleDelete = () => {
    axios.delete(`${API}/snacks/${id}`).then(() => {
        console.log("You go Girl");
        navigate("/snacks");
    }, (err) => console.error(err)).catch((err) => console.warn(err));
};



return (
    <article className="snack-detail">
      <h4>Snack Name: {snack.name}</h4>
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
