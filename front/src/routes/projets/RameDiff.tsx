import { useState } from "react";
import IMG_home from "../../assets/ramediff/home.png";
import IMG_compteur from "../../assets/ramediff/compteur.png";
import IMG_fichem from "../../assets/ramediff/ficheMPDF_page-0001.jpg";
import IMG_form from "../../assets/ramediff/forms.png";
import IMG_habilitation from "../../assets/ramediff/habilitation.png";
import IMG_fichep from "../../assets/ramediff/inforapide.png";
import IMG_new_home from "../../assets/ramediff/new-home.png";
import IMG_new_compteur from "../../assets/ramediff/new_compteur.png";
import IMG_new_fichem from "../../assets/ramediff/new_ficheM.png";
import IMG_new_form from "../../assets/ramediff/new_form.png";
import IMG_new_class from "../../assets/ramediff/new_dossier_classé.png";
import IMG_new_popup from "../../assets/ramediff/new_popup_home.png";
import NavDockBar from "../../Composant/NavBar/Dock";
import PowerAppsLogo from "../../assets/icon/powerapps.png";
import SharePointLogo from "../../assets/icon/sharepoint.png";
import PowerAutomateLogo from "../../assets/icon/Microsoft_Power_Automate.png";
import FormsLogo from "../../assets/icon/Forms-Logo.png";

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
      <NavDockBar />
      <div className="w-[80%] h-[80%] mx-auto mt-6 bg-slate-500 p-6 rounded-xl shadow-lg">
        <h1 className="text-xl font-bold mb-5">Rame différée</h1>
        <div className="flex w-full flex-col lg:flex-row">
          <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center p-4">
            <span className="text-xl font-bold">Objectif</span>Cet outil a pour but principal de centraliser les échanges interservices et d'obtenir un meilleur suivi entre l'équipe d'intervention et la POP (Pôle Opérations & Production) afin d'assurer une meilleure organisation des rames différées, et donc une meilleure réactivité et rapidité d'intervention.{" "}
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center p-4">
            <span className=" text-xl font-bold">Fonctionnalités</span>L'application permet de consulter les dossiers rame différée en cours, de les éditer, de les valider, de les refuser, de les archiver et de les supprimer.{" "}
          </div>
        </div>

        <div className=" mt-3 stats bg-base-100 border border-base-300">
          <div className="stat">
            <div className="stat-title">Front</div>
            <img className="h-16" src={PowerAppsLogo} alt="Powerapps logo" />
          </div>

          <div className="stat">
            <div className="stat-title">Donnée</div>
            <img className="h-16" src={SharePointLogo} alt="Sharepoint logo" />
          </div>
          <div className="stat">
            <div className="stat-title">Formulaire</div>
            <img className="h-16" src={FormsLogo} alt="Forms logo" />
          </div>
          <div className="stat">
            <div className="stat-title">Power Automate</div>
            <img className="h-16" src={PowerAutomateLogo} alt="Forms logo" />
          </div>
        </div>
        <h1 className="text-xl font-bold mb-5 mt-5">Image :</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
          {[IMG_compteur, IMG_fichem, IMG_form, IMG_habilitation, IMG_fichep, IMG_home].map((image, index) => (
            <img key={index} src={image} className="h-44 rounded-lg shadow-md hover:shadow-xl cursor-pointer" alt={`Image ${index + 1}`} onClick={() => handleImageClick(image)} />
          ))}
        </div>
        <h1 className="text-xl font-bold mb-5 mt-5">V2 :</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
          {[IMG_new_home, IMG_new_popup, IMG_new_class, IMG_new_compteur, IMG_new_fichem].map((image, index) => (
            <img key={index} src={image} className="h-44 rounded-lg shadow-md hover:shadow-xl cursor-pointer" alt={`Image ${index + 1}`} onClick={() => handleImageClick(image)} />
          ))}
        </div>
      </div>
    </>
  );
}
