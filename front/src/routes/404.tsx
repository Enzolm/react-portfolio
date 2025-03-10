import FallingText from "../components/reactbits/FallingText";
import Aurora from "../components/ui/Aurora";
import { useNavigate } from "react-router";
import CountUp from "../components/reactbits/CountUp";
import { useEffect } from "react";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
      console.log(timer);
    }, 6000);

    return () => clearTimeout(timer); // Nettoie le timer si le composant est démonté
  }, [navigate]);

  return (
    <div className="relative w-full h-screen z-1 overflow-hidden">
      <div className="absolute z-1 w-full h-screen">
        <div className="flex justify-center">
          <h1>Redirection</h1>
          <CountUp from={6} to={0} separator="," direction="up" duration={8} className="count-up-text ml-1" />
        </div>
        <FallingText text={`404 Page non trouvé 404  404 ???? /49é**ù$  Destination introuvable 404 Error 404 404 404`} highlightWords={["React", "Bits", "animated", "components", "simplify"]} trigger="hover" backgroundColor="transparent" wireframes={false} gravity={0.56} fontSize="2rem" mouseConstraintStiffness={0.9} />
      </div>
      <Aurora colorStops={["#495a6e", "#78a8e3", "#495a6e"]} speed={1.5} />
    </div>
  );
}

export default NotFound;
