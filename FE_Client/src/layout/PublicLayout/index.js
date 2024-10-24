import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "flex flex-col h-screen", style: { backgroundColor: `${color.bgColor}` }, children: [_jsx("div", { className: "flex justify-center items-center", children: _jsx(AppBar, {}) }), _jsx("div", { style: { backgroundColor: `${color.bgColor}` }, children: _jsxs("div", { className: "flex-grow mx-10", children: [" ", _jsx(Suspense, { children: _jsx(Outlet, {}) })] }) }), " ", _jsx(Footer, {})] }));
};
