import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "../../provider/Suspense";
import AppBar from "../../components/AppBar";
import Footer from "../../screens/Footer";
import { useColor } from "../../contexts/ColorContext";

export const PublicLayout = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleToggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const { color } = useColor();

  return (
    <div
      className="flex flex-col h-screen"
      style={{ backgroundColor: `${color.bgColor}` }}
    >
      {/* AppBar Section */}
      <div className="flex justify-center items-center">
        <AppBar />
      </div>
      {/* Main Content */}
      <div style={{ backgroundColor: `${color.bgColor}` }}>
        <div className="flex-grow mx-10">
          {" "}
          {/* This will grow to fill available space */}
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
      {/* Footer Section */} {/* Footer will sit at the bottom */}
      <Footer />
    </div>
  );
};
