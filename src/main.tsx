import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Home } from "./pages/Home/Home.tsx";
import { Projects } from "./pages/Projects/Projects.tsx";
import { About } from "./pages/About/About.tsx";
import { Detail } from "./pages/Detail/Detail.tsx";
import { DetailNotFound } from "./pages/Detail/DetailNotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/o-mne",
        element: <About />,
      },
      {
        path: "/projekty",
        element: <Projects />,
      },
      {
        path: "/:project/info",
        element: <Detail />,
      },
    ],
    errorElement: <DetailNotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
