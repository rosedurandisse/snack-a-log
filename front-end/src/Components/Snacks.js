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
      <section>
        <table>
          <thead>
            <tr>
              <th>Snacks</th>
              <th>Deets</th>
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Snacks;
