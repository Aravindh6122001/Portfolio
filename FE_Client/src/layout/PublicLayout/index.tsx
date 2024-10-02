import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "../../provider/Suspense";
import AppBar from "../../components/AppBar";
import Footer from "../../screens/Footer";

export const PublicLayout = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleToggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="flex flex-col h-screen">
      {" "}
      {/* Flex container to structure layout */}
      {/* AppBar Section */}
      <div className="flex justify-center items-center">
        <AppBar />
      </div>
      {/* Main Content */}
      <div className="flex-grow mx-10">
        {" "}
        {/* This will grow to fill available space */}
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      {/* Footer Section */} {/* Footer will sit at the bottom */}
      <Footer />
    </div>
  );
};
