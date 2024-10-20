// src/contexts/ColorContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the structure for color state
interface ColorState {
  textColor: string; // This will hold the actual color code, e.g., '#ffffff'
  bgColor: string; // This will hold the actual color code, e.g., '#007bff'
}

// Define the context type
interface ColorContextType {
  color: ColorState;
  toggleColor: () => void;
}

// Create the ColorContext with default value
const ColorContext = createContext<ColorContextType | undefined>(undefined);

// Custom hook to use the ColorContext
export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};

// Define the props for the ColorProvider
interface ColorProviderProps {
  children: ReactNode;
}

// ColorProvider component to manage color state and provide it to the context
export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState<ColorState>({
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

  return (
    <ColorContext.Provider value={{ color, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};
