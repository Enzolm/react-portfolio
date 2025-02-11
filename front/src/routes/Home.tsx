// import { Button } from "@/components/ui/button";
// import NavBar from "@/Composant/NavBar/NavBar";
// import { useState, useEffect } from "react";
// import NavBarMobile from "@/Composant/NavBar/NavBarMobile";
import { VscHome, VscArchive, VscAccount,VscSettingsGear} from "react-icons/vsc";
import Aurora from '../components/ui/Aurora';
import { useNavigate } from "react-router";
import NavDockBar from "../Composant/NavBar/Dock"


function App() {

  const navigate = useNavigate();
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   // Fonction pour vérifier la largeur de l'écran
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth > 500);
  //   };
  //   handleResize();

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const items = [
  //   { icon: <VscHome size={20} />, label: 'Acceuil', onClick: () => {
  //     navigate("/");} },
  //   { icon: <VscArchive size={20} />, label: 'Archive', onClick: () => {
  //     navigate("/projet");
  //   } },
  //   { icon: <VscAccount size={20} />, label: 'CV', onClick: () => {
  //     navigate("/cv");
  //   } },
  //   { icon: <VscSettingsGear size={20} />, label: 'Settings', onClick: () => {
  //     navigate("/blog");
  //   } },
  // ];

  return (
    <div className="relative w-full h-screen z-1 overflow-hidden">
      <div className='absolute'>

      <h1 className='z-10 text-white'>test</h1>
      </div>
      <Aurora
  colorStops={["#495a6e", "#78a8e3", "#495a6e"]}
  speed={1.5}
/>
<NavDockBar/>
{/* <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  /> */}
  </div>
  );
}

export default App;
