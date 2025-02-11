import React, { useState, useEffect } from "react";
import SpotlightCard from '../../components/reactbits/SpotlightCard';
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FaLink } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";




interface RssItem {
  title: string;
  link: string;
  contentSnippet: string;
  pubDate: string;
  content:string;
  'content:encoded': string;
  channelDescription: string;
}

interface RssFeedData {
  title: string;
  description: string;
  items: RssItem[];
}

const RssFeed: React.FC = () => {
    const navigate = useNavigate();
  const [feed, setFeed] = useState<RssFeedData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRss = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/rss");
        const data = await response.json();
        setFeed(data); // Enregistre les données du flux RSS
        console.log(data)
      } catch (error) {
        console.error("Erreur lors de la récupération du flux RSS:", error);
      } finally {
        setLoading(false); // Une fois la récupération terminée
      }
    };

    fetchRss(); // Appel de la fonction pour récupérer le flux RSS
  }, []);

  if (loading) {
    return <div>Chargement du flux RSS...</div>;
  }

  return (
    <div className="overflow-hidden max-h-lvh">
      <ScrollArea className="h-[780px] w-[50%] rounded-md border p-2 border-transparent">
      <h2>{feed?.title}</h2>
      <a href="">{feed?.description}</a>

      <ul>
        {feed?.items.map((item, index) => (
            <li key={index}>
            <SpotlightCard className="custom-spotlight-card ml-6 mr-6 max-w-[100%] min-h-[280px] mt-6" spotlightColor="rgba(134, 220, 229, 0.2)">

            <Badge className="text-xl">{item.contentSnippet}</Badge>
            <h2 className="mb-2 text-lg font-semibold">{item.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: item["content:encoded"] }} />
            <div className="block text-right flex mt-2 justify-end">
            <small className="">{item.pubDate}</small>
            <FaLink className="ml-2 cursor-pointer" onClick={() => window.open(item.link, "_blank")}  />
            </div>
            </SpotlightCard>
          </li>
        ))}
      </ul>
        </ScrollArea>
    </div>
  );
};

export default RssFeed;
