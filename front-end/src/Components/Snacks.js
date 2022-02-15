import axios from "axios";
const { useState, useEffect } = require("react");

function Snacks() {
  const [snacks, allSnacks] = useState([]);
  const API = process.env.REACT_API;
  console.log(API.success === true);

  useEffect(
    axios
      .get(`${API}/snacks`)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error);
      }),
    [API]
  );

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
            {/* {snacks.map((anime) => {
              return <Snacks key={snacks.id} snacks={snack} />;
            })} */}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Snacks;
