import React from "react";
import { Link } from "react-router-dom";
import IconRameDiff from "../assets/ramediff/home.png";
import IconRameDiff2 from "../assets/crud/home.png";
import NavDockBar from "../Composant/NavBar/Dock"


export default function CatalogPage() {
  return (
    <div className="flex justify-center">
      <h1>Catalogue</h1>
      <ul>
        <div className=" bg-slate-800 w-72 rounded-2xlh-96">
          <img src={IconRameDiff} className="h-44  p-4" alt="Logo" />
          <Link to="/projet/ramediff" className="btn btn-ghost text-xl">
            Rame Différée
          </Link>
        </div>
        <div className=" bg-slate-800 w-72 rounded-2xlh-96">
          <img src={IconRameDiff2} className="h-44  p-4" alt="Logo" />
          <Link to="/projet/crud" className="btn btn-ghost text-xl">
            CRUD
          </Link>
        </div>
      </ul>
      <NavDockBar/>
    </div>
  );
}
