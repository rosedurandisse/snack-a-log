import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
import { Link } from "react-router-dom";

function Snack({ snack }) {
  const healthy = snack.is_healthy;

  return (
    <tr>
      <div className="Snack">
        <img src={snack.image} alt="snacks"></img>

        {/* <h4 className="Snack"> */}
        <Link to={`/snacks/${snack.id}`}></Link>
        <h4>
          {" "}
          {snack.name}
          {healthy ? (
            <h4>
              {" "}
              <img src={heartSolid} alt="healthy food" />{" "}
            </h4>
          ) : (
            <h4>
              {" "}
              <img src={heartOutline} alt="unhealthy food" />{" "}
            </h4>
          )}{" "}
        </h4>
        {/* </h4> */}

        {/* <h4>
          {snack.is_healthy} ?{" "}
          <img src={heartSolid} alt="healthy food">
            /
          </img>{" "}
          :
          <img src={heartOutline} alt="UNhealthy food">
            /
          </img>
        </h4> */}
      </div>
      <td>{/* <img src={snack.image} alt="healthy food"></img> */}</td>
    </tr>
  );
}

export default Snack;
