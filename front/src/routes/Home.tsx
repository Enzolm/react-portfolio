import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import Aurora from "../components/ui/Aurora";
import { useNavigate } from "react-router";
import NavDockBar from "../Composant/NavBar/Dock";
import { Button } from "@/components/ui/button";

function App() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden w-screen h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      {/* Section 1 - Accueil */}
      <div className="w-screen h-screen flex items-center justify-center snap-start bg-transparent">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Enzo Lemaire</h1>
          <p className="py-6">Étudiant en BTS SIO, option SLAM, je me spécialise dans le développement web et logiciel. Découvrez ici mes projets, compétences et mon parcours.</p>
          <button className="btn btn-primary" onClick={() => navigate("#")}>
            Mon parcours
          </button>
        </div>
      </div>

      {/* Section 2 - Test */}
      <div className="w-full min-h-[1000px] flex items-center justify-center bg-gray-900 text-white snap-start">
        <ul className="w-[70%] min-h-[1000px] timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Septembre 2020</time>
              <div className="text-lg font-black">Seconde Bac Professionnelle SN (Systèmes Numériques)</div>
              Cette année m’a introduit à l'univers de l'informatique, en abordant les bases des systèmes numériques, l’électronique, les réseaux et la gestion des infrastructures. <br />
              <br />
              <span className="font-bold underline">- Stage de 6 semaines :</span>
              J'ai effectué mon stage dans le service informatique d'Alcatel Submarine Networks, où j'ai découvert les réseaux sous-marins. J’ai contribué au support technique et à la résolution de problèmes, ce qui m’a permis d’améliorer mes compétences pratiques et de mieux comprendre les enjeux du secteur professionnel.
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end mb-10 md:text-start">
              <time className="font-mono italic">Septembre 2021</time>
              <div className="text-lg font-black">Première Bac Professionnelle SN (Systèmes Numériques)</div>
              Cette année a approfondi mes connaissances en systèmes numériques, réseaux et sécurité informatique. J’ai commencé à travailler sur des projets concrets et à développer mes compétences en gestion d’infrastructures. <br />
              <br />
              <span className="font-bold underline">- Stage de 4 semaines :</span>
              Lors de mon stage dans le service informatique d'Alcatel Submarine Networks, j’ai participé à la maintenance des réseaux sous-marins et à la gestion des incidents. Ce fut une expérience pratique enrichissante qui a renforcé mes compétences techniques et ma compréhension du secteur professionnel.
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Septembre 2022</time>
              <div className="text-lg font-black">Terminale Bac Professionnelle SN (Systèmes Numériques)</div>
              En terminale, j’ai consolidé mes compétences en réseaux, sécurité et gestion d’infrastructures. J’ai travaillé sur des projets complexes, simulant des situations réelles de gestion des systèmes numériques. <br />
              <br />
              <span className="font-bold underline">- Stage de 4 semaines :</span>
              Mon stage a été une opportunité d’approfondir mes connaissances pratiques, notamment en gestion des réseaux sous-marins. J’ai renforcé mes compétences en support technique, en résolution de problèmes et en maintenance des infrastructures complexes.
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end mb-10 md:text-start">
              <time className="font-mono italic">Septembre 2023</time>
              <div className="text-lg font-black">BTS SIO (Services Informatiques aux Organisations)</div>
              Dans le cadre de mon BTS, je réalise une alternance de deux ans à la SNCF, dans un service de gestion d'un technicentre. Mes missions principales sont la digitalisation des processus, où je travaille à l'optimisation des flux et à l'intégration de solutions numériques pour améliorer l'efficacité des opérations. Cette expérience me permet de mettre en pratique mes compétences acquises en développement informatique et gestion des systèmes.
              <Button onClick={() => navigate("/projet")}>Mes projets</Button>
            </div>

            <hr />
          </li>
        </ul>
      </div>
      <NavDockBar />
    </div>
  );
}

export default App;
