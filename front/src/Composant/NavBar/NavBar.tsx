import Favicon from "../../assets/favicon2.png";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 sticky">
      <div className="navbar-start">
        <img src={Favicon} className="w-10 h-10 ml-4" alt="Logo" />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Home</a>
        <a className="btn btn-ghost text-xl">Projet</a>
        <a className="btn btn-ghost text-xl">CV</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
