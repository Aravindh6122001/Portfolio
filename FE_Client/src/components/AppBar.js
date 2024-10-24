import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Toolbar, useMediaQuery } from "@mui/material";
import { useColor } from "../contexts/ColorContext";
import MobileAppBar from "./MobileAppBar";
import WebAppBar from "./WebAppBar";
import ResumeFile from "../assets/resume/resume.pdf";
const AppBar = (props) => {
    const { toggleColor } = useColor();
    const [darkMode, setDarkMode] = React.useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");
    const handleThemeToggle = () => {
        setDarkMode((prev) => !prev);
        toggleColor();
    };
    const scrollToSection = (sectionId) => {
        if (sectionId === "resume") {
            const link = document.createElement("a");
            link.href = ResumeFile;
            link.download = "Resume_AravindhKrishna.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        else {
            const section = document.getElementById(sectionId);
            if (section) {
                const yOffset = window.innerWidth < 768 ? -50 : -10;
                const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: yPosition, behavior: "smooth" });
            }
        }
    };
    return (_jsxs(React.Fragment, { children: [isMobile ? (_jsx(MobileAppBar, { darkMode: darkMode, onThemeToggle: handleThemeToggle, scrollToSection: scrollToSection })) : (_jsx(WebAppBar, { darkMode: darkMode, onThemeToggle: handleThemeToggle, scrollToSection: scrollToSection })), _jsx(Toolbar, {})] }));
};
export default AppBar;
