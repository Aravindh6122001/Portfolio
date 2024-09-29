import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "../../provider/Suspense";
import AppBar from "../../components/AppBar";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Greeting from "../../components/Greeting";

export const PublicLayout = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleToggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="h-full w-full">
      {/* AppBar Section */}
      <div className="relative mb-2">
        <div className="flex justify-center items-center">
          <AppBar />
        </div>

        <IconButton
          color="inherit"
          sx={{
            position: "absolute",
            top: 7,
            right: 0,
          }}
          onClick={handleToggleTheme}
        >
          {isLightMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </div>

      {/* Main Content */}
      <div className="h-screen mx-10">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
