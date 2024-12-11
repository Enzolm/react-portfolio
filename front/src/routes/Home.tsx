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
      <div className=" sticky">
        {isSmallScreen ? <NavBar /> : <NavBarMobile />}
      </div>
      <div className=" justify-center items-center">
        <div className="relative w-screen h-screen bg-gray-900 flex items-center justify-center">
          <div className="w-[600px] h-[400px] bg-gray-800 rounded-lg transform -rotate-3 skew-x-6 shadow-2xl">
            <div className="mockup-window bg-base-300 border w-[30vw]">
              <div className="bg-base-200 justify-center px-4 py-16">
                <h1 className=" text-3xl">Enzo Lemaire</h1>
                <hr />
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://cdn.discordapp.com/avatars/405710549150728212/5c5746fa786f5d82c3b0ed5a7facaaf3.webp?size=32"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">
                    Je suis en BTS SIO option SLAM
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://cdn.discordapp.com/avatars/405710549150728212/5c5746fa786f5d82c3b0ed5a7facaaf3.webp?size=32"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">Entrez dans le jeux</div>
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
