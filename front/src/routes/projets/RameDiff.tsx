import { useState } from "react";
import IMG_home from "../../assets/ramediff/home.png";
import IMG_compteur from "../../assets/ramediff/compteur.png";
import IMG_fichem from "../../assets/ramediff/ficheMPDF_page-0001.jpg";
import IMG_form from "../../assets/ramediff/forms.png";
import IMG_habilitation from "../../assets/ramediff/habilitation.png";
import IMG_fichep from "../../assets/ramediff/inforapide.png";
import NavBar from "@/Composant/NavBar/NavBar";

export default function RameDiff() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <NavBar />
      <div className="mt-6 container mx-auto p-6 bg-base-100 shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Rame Différée
        </h1>

        <div className="rounded-2xl bg-neutral-content p-8 shadow-lg">
          <div className="flex justify-center">
            <img
              src={IMG_home}
              className="h-44 rounded-lg shadow-lg"
              alt="Logo"
            />
          </div>
          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            La rame différée est un projet qui consiste à créer une application
            web permettant de voir les dossiers Rame Différée en cours.
          </p>

          <h2 className="text-2xl font-semibold mt-8 text-secondary">
            Objectif :
          </h2>
          <p className="text-neutral-600 mt-2">
            - Digitaliser un processus manuel <br />
            - Améliorer la traçabilité <br />
            - Faciliter la collaboration entre équipes <br />
            - Automatiser des tâches répétitives <br />
          </p>

          <h2 className="text-2xl font-semibold mt-8 text-secondary">
            Outils :
          </h2>
          <p className="text-neutral-600 mt-2">
            - Power Apps <br />
            - SharePoint <br />
            - Power Automate <br />- Forms
          </p>

          <h2 className="text-2xl font-semibold mt-8 text-secondary">
            Images :
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
            {[
              IMG_compteur,
              IMG_fichem,
              IMG_form,
              IMG_habilitation,
              IMG_fichep,
            ].map((image, index) => (
              <img
                key={index}
                src={image}
                className="h-44 rounded-lg shadow-md hover:shadow-xl cursor-pointer"
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>

        {/* Modal pour afficher l'image en grand */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative">
              <button
                className="absolute top-4 right-4 bg-white rounded-full shadow-lg p-2 text-black"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={selectedImage}
                className="max-w-full max-h-screen rounded-lg"
                alt="Agrandie"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
