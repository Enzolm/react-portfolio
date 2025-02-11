import NavDockBar from "../Composant/NavBar/Dock"
import RssFeed from "../Composant/RSS/RssFeed"

export default function Blog() {
  return (
    <div className="overflow-hiden max-h-100">
      <RssFeed/>
      <NavDockBar/>
    </div>
  );
}
