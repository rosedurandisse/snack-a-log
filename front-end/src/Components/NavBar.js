import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h1 className="logo">
                <Link to="/"></Link>
            </h1>
            <div className="menu">
            <button className="button">
                <Link to="/snacks">Snacks</Link>
            </button>
            <button className="button">
                <Link to="/snacks">New Snack</Link>
            </button>
            </div>
        </nav>
        )
    
    }
    
    export default NavBar;