import React from "react";
import { Link } from "react-router-dom";
import IconRameDiff from "../assets/ramediff/home.png";
import IconOrdo from "@/assets/ordonnancement/Capture d'écran 2025-04-28 080902.png"
import IconRameDiff2 from "../assets/crud/home.png";
import IconEia from "../../src/assets/eia/eia-logo.png";
import NavDockBar from "../Composant/NavBar/Dock";
import { useNavigate } from "react-router";

export default function CatalogPage() {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden w-screen h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      <div className="flex justify-center">
        <h1>Projet d'entreprise</h1>
      </div>
      <div className="flex justify-center gap-4">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={IconRameDiff} alt="CrudProject" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rame différée</h2>
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
            <img src={IconOrdo} alt="CrudProject" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ordonnancement</h2>
            <p>Application Web réalisé avec React</p>
            <div className="card-actions justify-end">
              <button onClick={() => navigate("ordo")} className="btn btn-primary">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-6 flex justify-center">
        <h1>Projet en formation</h1>
      </div>
      <div className="flex justify-center gap-4">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={IconEia} alt="RameDiffProject" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">EIA</h2>
            <p>Création d'une entreprise</p>
            <div className="card-actions justify-end">
              <button onClick={() => navigate("eia")} className="btn btn-primary">
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
            <h2 className="card-title">CRUD</h2>
            <p>Site web réalisé avec React JSX</p>
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
