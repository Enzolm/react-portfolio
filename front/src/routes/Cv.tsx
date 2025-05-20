import NavDockBar from "../Composant/NavBar/Dock"
import PdfCv from "../assets/cv_enzo.jpg";

export default function Cv() {
  return (
    <>
      <div className="sticky">
      <img src={PdfCv} alt="CV" />
      </div>
      <NavDockBar/>
    </>
  );
}
