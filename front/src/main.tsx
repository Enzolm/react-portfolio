import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cv from "./routes/Cv.tsx";
import CatalogPage from "./routes/Projet.tsx";
import RameDiff from "./routes/projets/RameDiff.tsx";

import "./index.css";
import App from "./routes/Home.tsx";

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
    element: <RameDiff />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
