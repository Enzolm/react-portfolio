import Favicon from "../../assets/favicon2.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 sticky">
      <div className="navbar-start">
        <img src={Favicon} className="w-10 h-10 ml-4" alt="Logo" />
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          Home
        </Link>
        <Link to="/projet" className="btn btn-ghost text-xl">
          Projet
        </Link>
        <Link to="/cv" className="btn btn-ghost text-xl">
          CV
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
