import Dock from './NavBar';
import { useNavigate } from "react-router";
import { VscHome, VscArchive, VscAccount,VscSettingsGear} from "react-icons/vsc";

function NavDockBar() {

  const navigate = useNavigate();


  const items = [
    { icon: <VscHome size={20} />, label: 'Acceuil', onClick: () => {
      navigate("/");} },
    { icon: <VscArchive size={20} />, label: 'Archive', onClick: () => {
      navigate("/projet");
    } },
    { icon: <VscAccount size={20} />, label: 'CV', onClick: () => {
      navigate("/cv");
    } },
    { icon: <VscSettingsGear size={20} />, label: 'Settings', onClick: () => {
      navigate("/blog");
    } },
  ];

  return (
    <>
<Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
  </>
  );
}

export default NavDockBar;