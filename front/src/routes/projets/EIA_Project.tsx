import { useState } from "react";
import devis_1 from "../../assets/eia/DevisEIA_page-0001.jpg";
import devis_2 from "../../assets/eia/DevisEIA_page-0002.jpg";
import IMG_1 from "../../assets/eia/EIA.png";
import offre_1 from "../../assets/eia/Offre d'emploie EIA_pages-to-jpg-0001.jpg";
import offre_2 from "../../assets/eia/Offre d'emploie EIA_pages-to-jpg-0002.jpg";
import IMG_2 from "../../assets/eia/Organigramme EIA_page-0001.jpg";
import IMG_3 from "../../assets/eia/bon_de_commande.png";
import IMG_4 from "../../assets/eia/eia-logo.png";
import NavDockBar from "../../Composant/NavBar/Dock";

export default function Project_EIA() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="overflow-hidden w-screen h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      <NavDockBar />
      <div className="w-[80%] mx-auto mt-6 bg-slate-500 p-6 rounded-xl shadow-lg">
        <h1 className="text-xl font-bold mb-5">Création d'une entreprise</h1>
        <div className="flex w-full flex-col lg:flex-row">
          <div className="card bg-base-300 rounded-box grid grow place-items-center p-4">
            <span className="text-xl font-bold">Objectif</span>L'objectif de ce projet était de créer une entreprise fictive dans un cadre scolaire afin de comprendre les différentes démarches nécessaires à la création d'une entreprise. Il s'agissait d'identifier une idée innovante, d'analyser le marché, de définir un modèle économique viable, et de réaliser un business plan complet. Le projet a permis d'explorer les étapes essentielles telles que l'étude de marché, la définition de la stratégie commerciale, le choix de la structure juridique, ainsi que la planification financière. Cette approche avait pour but de simuler le processus entrepreneurial et de développer des compétences clés en gestion de projet, stratégie et organisation.
          </div>
          <div className="divider lg:divider-horizontal"></div>
        </div>

        <h1 className="text-xl font-bold mb-5 mt-5">Image :</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
          {[offre_1, offre_2, IMG_1, IMG_2, IMG_3, IMG_4, devis_1, devis_2].map((image, index) => (
            <img key={index} src={image} className="h-44 rounded-lg shadow-md hover:shadow-xl cursor-pointer" alt={`Image ${index + 1}`} onClick={() => handleImageClick(image)} />
          ))}
        </div>
        <div className="stats stats-vertical shadow mt-4">
          <div className="stat">
            <div className="stat-desc">1. Gérer le patrimoine informatique</div>
            <div className="stat-title">- Recenser et identifier les ressources numériques</div>
          </div>

          <div className="stat">
            <div className="stat-desc">3. Développer la présence en ligne de l’organisation</div>
            <div className="stat-title">- Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques</div>
          </div>

          <div className="stat">
            <div className="stat-desc">4. Travailler en mode projet</div>
            <div className="stat-title">- Planifier les activités</div>
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
    </div>
  );
}
