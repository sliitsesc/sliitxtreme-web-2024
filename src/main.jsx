import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import RootLayout from "./layouts/rootLayout";
import Home from "./routes/home";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Navigate to="/404.html" replace />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
