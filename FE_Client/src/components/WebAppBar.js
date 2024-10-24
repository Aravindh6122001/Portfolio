import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Box, Toolbar, Button, IconButton, Divider, Slide, } from "@mui/material";
import { Email, GitHub, LinkedIn, DarkMode, LightMode, } from "@mui/icons-material";
import DiscordIcon from "../assets/svg/DiscordIcon";
import { useColor } from "../contexts/ColorContext";
import { navItems, email, linkedin, github, discord } from "../constants";
function useHideOnScroll() {
    const [visible, setVisible] = React.useState(true);
    React.useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setVisible(false); // Scroll down
            }
            else {
                setVisible(true); // Scroll up
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return visible;
}
const WebAppBar = ({ darkMode, onThemeToggle, scrollToSection, }) => {
    const { color } = useColor();
    const iconStyles = { color: `${color.textColor}`, marginRight: 1 };
    const visible = useHideOnScroll();
    return (_jsx(Slide, { direction: "down", in: visible, children: _jsx(Box, { sx: {
                backgroundColor: `${color.bgColor}`,
                maxWidth: "750px",
                margin: "0 auto",
                borderRadius: "50px",
                position: "fixed",
                top: 20,
                left: 0,
                right: 0,
                borderWidth: 1,
                borderColor: `${color.textColor}`,
                zIndex: 10,
            }, children: _jsxs(Toolbar, { sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center" }, children: [navItems.map((item) => (_jsx(Button, { onClick: () => scrollToSection(item.toLowerCase()), sx: { color: `${color.textColor}`, marginRight: 2 }, children: item }, item))), _jsx(Divider, { orientation: "vertical", sx: { borderColor: `${color.textColor}`, height: 24, marginX: 3 } }), _jsx(IconButton, { href: email, target: "_blank", sx: iconStyles, children: _jsx(Email, {}) }), _jsx(IconButton, { href: linkedin, target: "_blank", sx: iconStyles, children: _jsx(LinkedIn, {}) }), _jsx(IconButton, { href: github, target: "_blank", sx: iconStyles, children: _jsx(GitHub, {}) }), _jsx(IconButton, { href: discord, target: "_blank", children: _jsx(DiscordIcon, { color: color.textColor }) })] }), _jsx(IconButton, { onClick: onThemeToggle, sx: { color: `${color.textColor}` }, children: darkMode ? _jsx(LightMode, {}) : _jsx(DarkMode, {}) })] }) }) }));
};
export default WebAppBar;
