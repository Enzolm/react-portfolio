import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cv from "./routes/Cv.tsx";
import CatalogPage from "./routes/Projet.tsx";
import RameDiff from "./routes/projets/RameDiff.tsx";
import NotFound from "./routes/404.tsx";
import NavDockBar from "./Composant/NavBar/Dock.tsx";
import Ordonnancement from "@/routes/projets/ordonancement.tsx";
import Blog from "./routes/Blog.tsx";

import "./index.css";
import App from "./routes/Home.tsx";
import Crud from "./routes/projets/Crud.tsx";
import Project_EIA from "./routes/projets/EIA_Project.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cv",
    element: <Cv />,
  },
  {
    path: "/projet",
    element: <CatalogPage />,
  },
  {
    path: "/projet/ramediff",
    element: <RameDiff />,
  },
  {
    path: "/projet/crud",
    element: <Crud />,
  },
  {
    path: "/projet/eia",
    element: <Project_EIA />,
  },
    {
    path: "/projet/ordo",
    element: <Ordonnancement />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
