import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

import "./index.css";
import { ColorProvider } from "./contexts/ColorContext";

createRoot(document.getElementById("root")!).render(
  <>
    <StrictMode>
      <ColorProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <AppRoutes />
          </ThemeProvider>
        </BrowserRouter>
      </ColorProvider>
    </StrictMode>
  </>
);
