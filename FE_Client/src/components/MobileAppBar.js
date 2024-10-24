import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Box, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Divider, } from "@mui/material";
import { Email, GitHub, LinkedIn, Menu as MenuIcon, Close as CloseIcon, LightMode, DarkMode, } from "@mui/icons-material";
import { useColor } from "../contexts/ColorContext";
import { discord, email, github, linkedin, navItems } from "../constants";
import DiscordIcon from "../assets/svg/DiscordIcon";
const MobileAppBar = ({ darkMode, onThemeToggle, scrollToSection, }) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const { color } = useColor();
    const toggleDrawer = (open) => {
        setIsDrawerOpen(open);
    };
    const handleNavClick = (sectionId) => {
        toggleDrawer(false);
        scrollToSection(sectionId);
    };
    return (_jsxs(Box, { sx: {
            backgroundColor: "#242424",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 10,
        }, children: [_jsxs(Toolbar, { sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }, children: [_jsx(IconButton, { onClick: () => toggleDrawer(true), sx: { color: "#fff", marginLeft: 2 }, children: _jsx(MenuIcon, {}) }), _jsx(IconButton, { onClick: onThemeToggle, sx: { color: "#fff" }, children: darkMode ? _jsx(LightMode, {}) : _jsx(DarkMode, {}) })] }), _jsx(Drawer, { anchor: "left", open: isDrawerOpen, onClose: () => toggleDrawer(false), children: _jsxs(Box, { sx: { width: 250, backgroundColor: `${color.textColor}` }, className: "flex flex-col h-full gap-10", children: [_jsx(Box, { className: "flex justify-between items-center", children: _jsx(IconButton, { onClick: () => toggleDrawer(false), sx: { color: `${color.bgColor}` }, children: _jsx(CloseIcon, {}) }) }), _jsxs(List, { children: [navItems.map((item) => (_jsx(ListItem, { component: "button", onClick: () => handleNavClick(item.toLowerCase()), children: _jsx(ListItemText, { primary: item }) }, item))), _jsx(Divider, { sx: { borderColor: `${color.bgColor}`, my: 2 } }), _jsxs(Box, { className: "flex space-x-4", children: [_jsx(IconButton, { href: email, sx: { color: `${color.bgColor}` }, children: _jsx(Email, {}) }), _jsx(IconButton, { href: linkedin, sx: { color: `${color.bgColor}` }, children: _jsx(LinkedIn, {}) }), _jsx(IconButton, { href: github, sx: { color: `${color.bgColor}` }, children: _jsx(GitHub, {}) }), _jsxs(IconButton, { href: discord, target: "_blank", children: [_jsx(DiscordIcon, { color: color.textColor }), " "] })] })] })] }) })] }));
};
export default MobileAppBar;
