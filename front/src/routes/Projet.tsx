import React from "react";
import { Link } from "react-router-dom";
import IconRameDiff from "../assets/ramediff/home.png";
import IconRameDiff2 from "../assets/crud/home.png";
import NavDockBar from "../Composant/NavBar/Dock";
import { useNavigate } from "react-router";

export default function CatalogPage() {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center">
        <h1>Projet d'entreprise</h1>
      </div>
      <div className="flex justify-center gap-4">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={IconRameDiff2} alt="CrudProject" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">CRUD</h2>
            <p>Site web réalisé sur PowerApps</p>
            <div className="card-actions justify-end">
              <button onClick={() => navigate("crud")} className="btn btn-primary">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-6 flex justify-center">
        <h1>Projet de cours</h1>
      </div>
      <div className="flex justify-center gap-4">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={IconRameDiff} alt="RameDiffProject" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rame Différée</h2>
            <p>Site web réalisé sur PowerApps</p>
            <div className="card-actions justify-end">
              <button onClick={() => navigate("ramediff")} className="btn btn-primary">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={IconRameDiff2} alt="CrudProject" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rame Différée</h2>
            <p>Site web réalisé sur PowerApps</p>
            <div className="card-actions justify-end">
              <button onClick={() => navigate("crud")} className="btn btn-primary">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavDockBar />
    </div>
  );
}
