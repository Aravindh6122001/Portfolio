import { jsx as _jsx } from "react/jsx-runtime";
// src/contexts/ColorContext.tsx
import { createContext, useState, useContext } from "react";
// Create the ColorContext with default value
const ColorContext = createContext(undefined);
// Custom hook to use the ColorContext
export const useColor = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error("useColor must be used within a ColorProvider");
    }
    return context;
};
// ColorProvider component to manage color state and provide it to the context
export const ColorProvider = ({ children }) => {
    const [color, setColor] = useState({
        textColor: "#FEF2F2", // Set your default color codes here
        bgColor: "#242424", // Set your default color codes here
    });
    // Function to toggle colors
    const toggleColor = () => {
        setColor((prev) => ({
            textColor: prev.textColor === "#FEF2F2" ? "#242424" : "#FEF2F2",
            bgColor: prev.bgColor === "#242424" ? "#FEF2F2" : "#242424",
        }));
    };
    return (_jsx(ColorContext.Provider, { value: { color, toggleColor }, children: children }));
};
