import { Button } from "@/components/ui/button";
import NavBar from "@/Composant/NavBar/NavBar";
import { useState, useEffect } from "react";
import NavBarMobile from "@/Composant/NavBar/NavBarMobile";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Fonction pour vérifier la largeur de l'écran
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 500);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className=" sticky">{isSmallScreen ? <NavBar /> : <NavBarMobile />}</div>
      <div className=" justify-center items-center">
        <div className="relative w-screen h-screen bg-gray-900 flex items-center justify-center">
          <div className=" rounded-lg transform -rotate-3 skew-x-6">
            <div className="mockup-window bg-base-300 border shadow-2xl">
              <div className="bg-base-200 justify-center px-4 py-16">
                <div className="mt-6 chat chat-start">
                  <div className="chat-bubble mb-4">
                    Salut moi c'est <span className=" text-xl font-bold">Enzo !!</span>
                  </div>
                  <div className="chat-bubble mb-4">Je prépare un BTS SIO</div>
                </div>
                <div className="chat chat-end">
                  <div className="chat-bubble">Oh ! Géniale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
