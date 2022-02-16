import axios from "axios";
import Snack from "./EachSnack";
const { useState, useEffect } = require("react");

function Snacks() {
  const API = process.env.REACT_APP_API_URL;
  const [snacks, allSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => allSnacks(response.data.payload))
      .catch((error) => console.log(error));
  }, [API]);
  return (
    <div>
      <section className="Snacks">
        <article>
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
        </article>
      </section>
    </div>
  );
}

export default Snacks;
