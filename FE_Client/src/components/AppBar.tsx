import * as React from "react";
import { Box, Toolbar, IconButton, useMediaQuery } from "@mui/material";
import { useColor } from "../contexts/ColorContext";
import MobileAppBar from "./MobileAppBar";
import WebAppBar from "./WebAppBar";
import ResumeFile from "../assets/resume/AravindhKrishna_Resume.pdf";

interface Props {
  window?: () => Window;
}

const AppBar = (props: Props) => {
  const { toggleColor } = useColor();
  const [darkMode, setDarkMode] = React.useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    toggleColor();
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "resume") {
      const link = document.createElement("a");
      link.href = ResumeFile;
      link.download = "AravindhKrishna Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = window.innerWidth < 768 ? -50 : -10;
        const yPosition =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <React.Fragment>
      {isMobile ? (
        <MobileAppBar
          darkMode={darkMode}
          onThemeToggle={handleThemeToggle}
          scrollToSection={scrollToSection}
        />
      ) : (
        <WebAppBar
          darkMode={darkMode}
          onThemeToggle={handleThemeToggle}
          scrollToSection={scrollToSection}
        />
      )}
      <Toolbar />
    </React.Fragment>
  );
};

export default AppBar;
