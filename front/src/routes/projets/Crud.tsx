import { useState } from "react";
import NavDockBar from "../../Composant/NavBar/Dock";
import IMG_crud_create from "@/assets/crud/add.png";
import IMG_crud_edit from "@/assets/crud/edit.png";
import IMG_crud_delete from "@/assets/crud/delete.png";
import IMG_crud_api from "@/assets/crud/apicode.png";
import IMG_sql from "@/assets/crud/sql.png";
import IMG_API from "@/assets/icon/nodejs.svg";
import GithubIMG from "@/assets/crud/github.png"
import IMG_react from "@/assets/icon/React-icon.svg.png";
import IMG_SQL from "@/assets/icon/mysql.png";

export default function Crud() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="overflow-hidden w-screen h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative">
            <button className="absolute top-4 right-4 bg-white rounded-full shadow-lg p-2 text-black" onClick={closeModal}>
              ✕
            </button>
            <img src={selectedImage} className="max-w-full max-h-screen rounded-lg" alt="Agrandie" />
          </div>
        </div>
      )}

      <div className="w-[80%] mx-auto mt-6 bg-slate-500 p-6 rounded-xl shadow-lg">
        <h1 className="text-xl font-bold mb-5">CRUD</h1>
        <div className="flex w-full flex-col lg:flex-row">
          <div className="card bg-base-300 rounded-box grid grow place-items-center p-4">
            <span className="text-xl font-bold">Objectif</span>Ce projet a été notre première expérience en utilisant le framework React, combinée à la manipulation de données via une API REST. Il nous a permis de découvrir les fondamentaux du développement web moderne, tout en renforçant nos compétences en gestion de données et en intégration d'API.{" "}
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="card bg-base-300 rounded-box grid grow place-items-center p-4">
            <span className="text-xl font-bold">Fonctionnalités</span>Les fonctionnalités de l'application reposent sur les principes fondamentaux du CRUD (Create, Read, Update, Delete). Elle permet de créer des instruments, de les afficher, de les modifier et de les supprimer.{" "}
          </div>
        </div>

        <div className=" mt-3 stats bg-base-100 border border-base-300">
          <div className="stat">
            <div className="stat-title">Front</div>
            <img className="h-16" src={IMG_react} alt="Powerapps logo" />
          </div>

          <div className="stat">
            <div className="stat-title">Donnée</div>
            <img className="h-16" src={IMG_SQL} alt="Sharepoint logo" />
          </div>
          <div className="stat">
            <div className="stat-title">API</div>
            <img className="h-16" src={IMG_API} alt="Forms logo" />
          </div>
        </div>
        <h1 className="text-xl font-bold mb-5 mt-5">Image :</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
          {[IMG_crud_create, IMG_crud_edit, IMG_crud_delete, IMG_crud_api, IMG_sql, GithubIMG].map((image, index) => (
            <img key={index} src={image} className="h-44 rounded-lg shadow-md hover:shadow-xl cursor-pointer" alt={`Image ${index + 1}`} onClick={() => handleImageClick(image)} />
          ))}
        </div>
        <div className="stats stats-vertical shadow mt-4">
          <div className="stat">
            <div className="stat-desc">1. Gérer le patrimoine informatique</div>
            <div className="stat-title">- Recenser et identifier les ressources numériques</div>
          </div>

          <div className="stat">
            <div className="stat-desc">2. Répondre aux incidents et aux demandes d’assistance et d’évolution</div>
            <div className="stat-title">- Collecter, suivre et orienter des demandes</div>
          </div>

          <div className="stat">
            <div className="stat-desc">4. Travailler en mode projet</div>
            <div className="stat-title">- Analyser les objectifs et les modalités d’organisation d’un projet</div>
          </div>

          <div className="stat">
            <div className="stat-desc">5. Mettre à disposition des utilisateurs un service informatique</div>
            <div className="stat-title">- Réaliser les tests d’intégration et d’acceptation d’un service</div>
          </div>

          <div className="stat">
            <div className="stat-desc">6. Organiser son développement professionnel</div>
            <div className="stat-title">- Mettre en place son environnement d’apprentissage personnel</div>
          </div>
        </div>
      </div>

      <NavDockBar />
    </div>
  );
}
