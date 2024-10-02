import React from "react";
import { Typography } from "@mui/material";

interface InfoTypes {
  title?: string;
  description: string;
}

const InfoCard: React.FC<InfoTypes> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-5 p-10">
      <Typography variant="h3" component="h2">
        {title}
      </Typography>
      <Typography variant="h6" component="h2">
        {description}
      </Typography>
    </div>
  );
};

export default InfoCard;
