import { useState } from "react";
import NavBar from "@/Composant/NavBar/NavBar";
import IMG_crud_home from "@/assets/crud/home.png";
import IMG_crud_create from "@/assets/crud/add.png";
import IMG_crud_edit from "@/assets/crud/edit.png";
import IMG_crud_delete from "@/assets/crud/delete.png";
import IMG_crud_api from "@/assets/crud/apicode.png";
import IMG_sql from "@/assets/crud/sql.png";

export default function Crud() {
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
              src={IMG_crud_home}
              className="h-44 rounded-lg shadow-lg"
              alt="Logo"
            />
          </div>
          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            La rame différée est un projet qui consiste à créer une application
            web permettant de voir les dossiers Rame Différée en cours.
          </p>

          <h2 className="text-2xl font-semibold mt-8 text-secondary">
            Objectif
          </h2>
          <p className="text-neutral-600 mt-2">
            L'objectif est de numériser un processus papier.
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
              IMG_crud_create,
              IMG_crud_edit,
              IMG_crud_delete,
              IMG_crud_api,
              IMG_sql,
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
