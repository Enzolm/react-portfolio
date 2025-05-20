import { useState } from "react";
import NavDockBar from "../../Composant/NavBar/Dock";

import img_1 from "@/assets/ordonnancement/Capture d'écran 2025-04-28 080902.png";
import img_2 from "@/assets/ordonnancement/Capture d'écran 2025-04-28 081019.png";
// import img_4 from "@/assets/ordonnancement/image.png";
import img_5 from "@/assets/ordonnancement/localhost_5173_ (2).png";
import img_6 from "@/assets/ordonnancement/note_cn_image.png";
import img_7 from "@/assets/ordonnancement/ordonnancement_mail_reu.png";
import img_8 from "@/assets/ordonnancement/placer_une_rame.png";
import img_9 from "@/assets/ordonnancement/v1_localhost_5173_.png";
import img_10 from "@/assets/ordonnancement/20250218_163804.png";
import img_11 from "@/assets/ordonnancement/20250327_1245100.webp";
import IMG_react from "@/assets/icon/React-icon.svg.png";
import IMG_API from "@/assets/icon/nodejs.svg";
import IMG_sql from "@/assets/icon/png-transparent-postgresql-plain-wordmark-logo-icon.png";
import ancien_lpanning from "@/assets/ordonnancement/ancien_planning.png";


export default function Ordonnancement() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="overflow-hidden w-screen h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      <div className="w-[80%] mx-auto mt-6 bg-slate-500 p-6 rounded-xl shadow-lg">
        <h1 className="text-xl font-bold mb-5">Ordonnancement</h1>
        <div className="flex w-full flex-col lg:flex-row">
          <div className="card bg-base-300 rounded-box grid grow place-items-center p-4">
            <span className="text-xl font-bold">Objectif</span>L’outil servira de version numérisée d’un tableau physique afin d’améliorer la disponibilité des informations entre les différents services qui gèrent la planification du site, et donc l’ensemble des trains circulant sur le technicentre.{" "}
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="card bg-base-300 rounded-box grid grow place-items-center p-4">
            <span className=" text-xl font-bold">Fonctionnalités</span>L'application permet de consulter la planification des rames prévu et ou en cours avec les opération associé.{" "}
          </div>
        </div>

        <div className=" mt-3 stats bg-base-100 border border-base-300">
          <div className="stat">
            <div className="stat-title">Front</div>
            <img className="h-16" src={IMG_react} alt="Powerapps logo" />
          </div>

          <div className="stat">
            <div className="stat-title">Donnée</div>
            <img className="h-16" src={IMG_API} alt="Sharepoint logo" />
          </div>
          <div className="stat">
            <div className="stat-title">Formulaire</div>
            <img className="h-16" src={IMG_sql} alt="Forms logo" />
          </div>
        </div>
        <h1 className="text-xl font-bold mb-5 mt-5">Image :</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
          {[img_1, img_2,img_5,img_6,img_7,img_8,img_9,img_10,img_11, ancien_lpanning].map((image, index) => (
            <img key={index} src={image} className="h-44 rounded-lg shadow-md hover:shadow-xl cursor-pointer" alt={`Image ${index + 1}`} onClick={() => handleImageClick(image)} />
          ))}
        </div>
        <div className="stats stats-vertical shadow mt-4">
          <div className="stat">
            <div className="stat-desc">1. Gérer le patrimoine informatique</div>
            <div className="stat-title">- Exploiter des référentiels, normes et standards adoptés par le prestataire informatique</div>
            <div className="stat-title">- Gérer les sauvegardes</div>
          </div>

          <div className="stat">
            <div className="stat-desc">4. Travailler en mode projet</div>
            <div className="stat-title">- Planifier les activités</div>
          </div>

          <div className="stat">
            <div className="stat-desc">5. Mettre à disposition des utilisateurs un service informatique</div>
            <div className="stat-title">- Réaliser les tests d’intégration et d’acceptation d’un service</div>
            <div className="stat-title">- Accompagner les utilisateurs dans la mise en place d’un service</div>
          </div>
        </div>
      </div>
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
      <NavDockBar />
    </div>
  );
}
