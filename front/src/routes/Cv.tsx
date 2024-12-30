import NavBar from "@/Composant/NavBar/NavBar";
import PdfCv from "../assets/cv_enzo.jpg";

export default function Cv() {
  return (
    <>
      <div className="sticky">
        <NavBar />
      </div>
      <img src={PdfCv} alt="CV" />
    </>
  );
}
