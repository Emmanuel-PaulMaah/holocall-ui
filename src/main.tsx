import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";

import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Home from "./pages/Home";
import Call from "./pages/Call";

const router = createHashRouter(
  [
    {
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/call", element: <Call /> },
      ],
    },
  ],
  {
    // keeps hashes readable (/#/call) and works on GitHub Pages
    // no basename needed
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
