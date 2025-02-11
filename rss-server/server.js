const express = require("express");
const cors = require("cors");
const RSSParser = require("rss-parser");

const app = express();
const port = 5000;

// Middleware pour autoriser les requêtes CORS
app.use(cors());

// Endpoint pour récupérer le flux RSS
app.get("/api/rss", async (req, res) => {
  const url = "https://idx.dev/blog/rss.xml"; // URL du flux RSS

  const parser = new RSSParser();
  try {
    const feed = await parser.parseURL(url);
    res.json(feed); // Renvoie les données du flux RSS au client
  } catch (error) {
    console.error("Erreur de récupération du flux RSS:", error);
    res.status(500).json({ message: "Erreur de récupération du flux RSS." });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré à http://localhost:${port}`);
});
