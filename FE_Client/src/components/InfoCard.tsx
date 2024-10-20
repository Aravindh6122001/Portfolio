import { Typography } from "@mui/material";
import React from "react";
import { useColor } from "../contexts/ColorContext";

interface InfoTypes {
  title?: string;
  description: string;
}

const InfoCard: React.FC<InfoTypes> = ({ title, description }) => {
  const { color } = useColor();

  return (
    <div className="flex flex-col gap-5 py-10">
      <Typography
        variant="h3"
        component="h2"
        className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        sx={{
          color: `${color.textColor}`,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        sx={{
          color: `${color.textColor}`,
        }}
      >
        {description}
      </Typography>
    </div>
  );
};

export default InfoCard;
