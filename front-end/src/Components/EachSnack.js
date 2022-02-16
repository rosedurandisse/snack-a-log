import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

function Snack({ snack }) {

  return (
      <h4 className="Snack">
        {snack.name}
        <div></div>
        <Link to={`/snacks/${snack.id}`}><img src={snack.image} alt="snacks"></img></Link>
        <h4>{<HeartHealth snackHealth={snack.is_healthy} />}</h4>
      </h4>
  );
}

export default Snack;
