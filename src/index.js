import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import ExibirAvaliacao from "./pages/exibir-avaliacao";
import RealizarAvaliacao from "./pages/realizar-avaliacao";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExibirAvaliacao />
  },
  {
    path: "/avaliar",
    element: <RealizarAvaliacao />
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
