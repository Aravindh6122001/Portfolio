import { createContext, useState, useContext, ReactNode } from "react";

interface ColorState {
  textColor: string;
  bgColor: string;
}

interface ColorContextType {
  color: ColorState;
  toggleColor: () => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState<ColorState>({
    textColor: "#FEF2F2",
    bgColor: "#242424",
  });

  const toggleColor = () => {
    setColor((prev) => ({
      textColor: prev.textColor === "#FEF2F2" ? "#242424" : "#FEF2F2",
      bgColor: prev.bgColor === "#242424" ? "#F4D9D0" : "#242424",
    }));
  };

  return (
    <ColorContext.Provider value={{ color, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};
