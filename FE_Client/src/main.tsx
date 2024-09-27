import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import { AppRoutes } from "./routes/index.tsx";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <>
    <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>
  </>
);
